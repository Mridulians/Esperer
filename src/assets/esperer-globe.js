/*!
 * Esperer interactive globe — standalone, no dependencies.
 *
 * USAGE
 *   <div id="globe" style="width:900px;height:740px"></div>
 *   <script src="esperer-globe.js"></script>
 *   <script>EspererGlobe('#globe');</script>
 *
 * OPTIONS (all optional)
 *   EspererGlobe('#globe', {
 *     nodes: 340,          // number of points on the sphere
 *     dot:   '#0b2e34',    // front-facing node color
 *     line:  '22,58,64',   // connection line color, as "r,g,b"
 *     halo:  '20,182,176', // outer glow color, as "r,g,b"
 *     blobs: true,         // soft drifting background cells
 *     spin:  0.00013,      // auto-rotation speed
 *     parallax: true       // follow the mouse
 *   });
 *
 * Returns { destroy() } so you can tear it down.
 * The element is sized by YOUR CSS — the canvas fills it and follows resizes.
 */
(function (root) {
  function EspererGlobe(target, opts) {
    var host = typeof target === 'string' ? document.querySelector(target) : target;
    if (!host) throw new Error('EspererGlobe: container not found');

    var o = opts || {};
    var N = o.nodes || 340;
    var DOT = o.dot || '#0b2e34';
    var LINE = o.line || '22,58,64';
    var HALO = o.halo || '20,182,176';
    var SPIN = o.spin == null ? 0.00013 : o.spin;
    var BLOBS = o.blobs !== false;
    var PARALLAX = o.parallax !== false;

    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
    var cv = document.createElement('canvas');
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none';
    host.appendChild(cv);

    // Fibonacci sphere — evenly distributed points, no clustering at the poles.
    var pts = [];
    for (var i = 0; i < N; i++) {
      var phi = Math.acos(1 - 2 * (i + 0.5) / N);
      var theta = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi)
      });
    }

    var cells = [];
    for (var c = 0; c < 9; c++) {
      cells.push({
        x: Math.random(), y: Math.random(), r: 26 + Math.random() * 70,
        vx: (Math.random() - 0.5) * 0.00016, vy: (Math.random() - 0.5) * 0.00016,
        a: 0.1 + Math.random() * 0.22
      });
    }

    var mx = 0, my = 0, tx = 0, ty = 0, frame = 0, dead = false;

    function onMove(e) {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    }
    if (PARALLAX) window.addEventListener('mousemove', onMove, { passive: true });

    function fit() {
      var dpr = Math.min(2, window.devicePixelRatio || 1);
      var r = host.getBoundingClientRect();
      var W = Math.round(r.width * dpr), H = Math.round(r.height * dpr);
      if (W > 1 && H > 1 && (cv.width !== W || cv.height !== H)) { cv.width = W; cv.height = H; }
      var ctx = cv.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { ctx: ctx, w: r.width, h: r.height, ready: r.width > 2 && r.height > 2 };
    }

    function draw(t) {
      if (dead) return;
      var g = fit();
      if (!g.ready) { frame = requestAnimationFrame(draw); return; }
      var ctx = g.ctx, w = g.w, h = g.h;
      ctx.clearRect(0, 0, w, h);

      mx += (tx - mx) * 0.05;
      my += (ty - my) * 0.05;

      if (BLOBS) {
        for (var b = 0; b < cells.length; b++) {
          var q = cells[b];
          q.x += q.vx; q.y += q.vy;
          if (q.x < -0.1 || q.x > 1.1) q.vx *= -1;
          if (q.y < -0.1 || q.y > 1.1) q.vy *= -1;
          var px = q.x * w, py = q.y * h;
          var gr = ctx.createRadialGradient(px, py, 0, px, py, q.r);
          gr.addColorStop(0, 'rgba(18,66,72,' + q.a + ')');
          gr.addColorStop(0.55, 'rgba(40,90,96,' + (q.a * 0.5) + ')');
          gr.addColorStop(1, 'rgba(200,210,210,0)');
          ctx.fillStyle = gr;
          ctx.beginPath(); ctx.arc(px, py, q.r, 0, 7); ctx.fill();
        }
      }

      var cx = w * 0.54, cy = h * 0.46, R = Math.min(w, h) * 0.34;
      var ry = t * SPIN + mx * 0.5, rx = -0.28 + my * 0.35;

      var proj = [];
      for (var p = 0; p < pts.length; p++) {
        var s0 = pts[p];
        var x = s0.x * Math.cos(ry) - s0.z * Math.sin(ry);
        var z = s0.x * Math.sin(ry) + s0.z * Math.cos(ry);
        var y = s0.y * Math.cos(rx) - z * Math.sin(rx);
        z = s0.y * Math.sin(rx) + z * Math.cos(rx);
        var sc = 1 / (1.9 - z * 0.55);
        proj.push({ X: cx + x * R * sc * 1.9, Y: cy + y * R * sc * 1.9, z: z, s: sc });
      }

      var maxD = R * 0.30;
      for (var a = 0; a < proj.length; a++) {
        var A = proj[a];
        for (var bb = a + 1; bb < proj.length; bb++) {
          var B = proj[bb];
          var d = Math.hypot(A.X - B.X, A.Y - B.Y);
          if (d < maxD) {
            var dep = (A.z + B.z) / 2;
            ctx.strokeStyle = 'rgba(' + LINE + ',' + Math.max(0, (1 - d / maxD) * (dep > 0 ? 0.34 : 0.12)) + ')';
            ctx.lineWidth = dep > 0 ? 0.8 : 0.5;
            ctx.beginPath(); ctx.moveTo(A.X, A.Y); ctx.lineTo(B.X, B.Y); ctx.stroke();
          }
        }
      }

      for (var k = 0; k < proj.length; k++) {
        var P = proj[k], front = P.z > 0;
        ctx.fillStyle = front ? DOT : 'rgba(90,120,126,.35)';
        ctx.beginPath(); ctx.arc(P.X, P.Y, (front ? 1.8 : 1.1) * P.s * 1.6, 0, 7); ctx.fill();
      }

      var halo = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.7);
      halo.addColorStop(0, 'rgba(' + HALO + ',.07)');
      halo.addColorStop(1, 'rgba(' + HALO + ',0)');
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      frame = requestAnimationFrame(draw);
    }

    frame = requestAnimationFrame(draw);

    return {
      destroy: function () {
        dead = true;
        cancelAnimationFrame(frame);
        if (PARALLAX) window.removeEventListener('mousemove', onMove);
        if (cv.parentNode) cv.parentNode.removeChild(cv);
      }
    };
  }

  root.EspererGlobe = EspererGlobe;
  if (typeof module !== 'undefined' && module.exports) module.exports = EspererGlobe;
})(typeof window !== 'undefined' ? window : this);
