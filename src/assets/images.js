import logoB64 from './b64/logo.txt?raw'
import heroWomanB64 from './b64/hero-woman.txt?raw'
import buildingB64 from './b64/building.txt?raw'
import worldMapB64 from './b64/world-map.txt?raw'
import leadershipB64 from './b64/leadership.txt?raw'
import insightFlasksB64 from './b64/insight-flasks.txt?raw'
import insightAIB64 from './b64/insight-ai.txt?raw'
import insightMicroscopeB64 from './b64/insight-microscope.txt?raw'

const clean = (s) => s.trim()

export const logo = `data:image/webp;base64,${clean(logoB64)}`
export const heroWoman = `data:image/jpeg;base64,${clean(heroWomanB64)}`
export const building = `data:image/jpeg;base64,${clean(buildingB64)}`
export const worldMap = `data:image/jpeg;base64,${clean(worldMapB64)}`
export const leadership = `data:image/jpeg;base64,${clean(leadershipB64)}`
export const insightFlasks = `data:image/jpeg;base64,${clean(insightFlasksB64)}`
export const insightAI = `data:image/jpeg;base64,${clean(insightAIB64)}`
export const insightMicroscope = `data:image/jpeg;base64,${clean(insightMicroscopeB64)}`
