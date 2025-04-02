export interface UnitScripts {
  templates: ScriptTemplate[]
  devices: { name: string; ip: string; status: boolean; model: string }[]
}

export interface ScriptTemplate {
  id: string
  name: string
  description: string
  content: string
  createdAt: string
  lastRun: string | null
}
