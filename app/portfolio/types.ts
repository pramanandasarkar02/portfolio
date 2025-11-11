export interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  live: string | null
  impact: string
}

export interface Research {
  title: string
  venue: string
  description: string
  status: string
  link: string | null
}

export interface Skill {
  name: string
  icon?: React.ReactElement
  level: number
}

export interface SkillCategory {
  category: string
  icon: React.ReactElement
  skills: Skill[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  location: string
  description: string
  achievements: string[]
}