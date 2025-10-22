"use client"
import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaBrain, FaGraduationCap, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { SiRust, SiGo, SiPython, SiJavascript, SiTypescript, SiDocker, SiKubernetes, SiTensorflow, SiPytorch } from 'react-icons/si'

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  live: string | null
  impact: string
}

interface Research {
  title: string
  venue: string
  description: string
  status: string
  link: string | null
}

interface Skill {
  name: string
  icon?: React.ReactElement
  level: number
}

interface SkillCategory {
  category: string
  icon: React.ReactElement
  skills: Skill[]
}

interface Education {
  degree: string
  institution: string
  period: string
  location: string
  description: string
  achievements: string[]
}

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const education: Education[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2016 - 2020",
      location: "City, Country",
      description: "Comprehensive study of computer science fundamentals, algorithms, data structures, and software engineering principles.",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List - All Semesters",
        "Published research paper on Machine Learning",
        "Led university coding club"
      ]
    }
  ]

  const experiences: Experience[] = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of distributed systems and microservices architecture. Implemented scalable solutions handling 10M+ daily transactions.",
      technologies: ["Rust", "Kubernetes", "PostgreSQL", "gRPC"]
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Research Labs",
      period: "2020 - 2022",
      description: "Developed and deployed ML models for natural language processing and computer vision tasks. Optimized model inference to reduce latency by 60%.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2018 - 2020",
      description: "Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software products.",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"]
    }
  ]

  const projects: Project[] = [
    {
      title: "Distributed Task Scheduler",
      description: "High-performance task scheduling system built with Rust, capable of handling millions of concurrent tasks with fault tolerance and automatic recovery.",
      technologies: ["Rust", "Redis", "gRPC"],
      github: "https://github.com/",
      live: null,
      impact: "Reduced scheduling overhead by 75%"
    },
    {
      title: "Real-time Analytics Platform",
      description: "Scalable data processing pipeline for real-time analytics using stream processing and distributed computing frameworks.",
      technologies: ["Golang", "Kafka", "Cassandra", "React"],
      github: "https://github.com/",
      live: "https://demo.example.com",
      impact: "Processing 1M events/second"
    },
    {
      title: "Neural Network Optimization Library",
      description: "Custom library for optimizing deep learning models with novel pruning techniques and quantization strategies.",
      technologies: ["Python", "PyTorch", "CUDA"],
      github: "https://github.com/",
      live: null,
      impact: "40% reduction in model size"
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "Infrastructure-as-code tool for automated cloud resource provisioning and management across multiple cloud providers.",
      technologies: ["Golang", "Terraform", "AWS", "GCP"],
      github: "https://github.com/",
      live: null,
      impact: "Automated 200+ deployments"
    }
  ]

  const research: Research[] = [
    {
      title: "Efficient Attention Mechanisms for Large Language Models",
      venue: "NeurIPS 2024",
      description: "Proposed novel sparse attention patterns that reduce computational complexity while maintaining model performance.",
      status: "Published",
      link: "#"
    },
    {
      title: "Federated Learning in Edge Computing Environments",
      venue: "ICML 2024",
      description: "Developed privacy-preserving ML training protocols optimized for resource-constrained edge devices.",
      status: "Published",
      link: "#"
    },
    {
      title: "Adaptive Resource Allocation in Distributed Systems",
      venue: "Under Review",
      description: "Machine learning-based approach for dynamic resource allocation in microservices architectures.",
      status: "Under Review",
      link: null
    }
  ]

  const skillCategories: SkillCategory[] = [
    {
      category: "Programming Languages",
      icon: <FaCode className="text-green-400" size={28} />,
      skills: [
        { name: "Rust", icon: <SiRust />, level: 95 },
        { name: "Golang", icon: <SiGo />, level: 90 },
        { name: "Python", icon: <SiPython />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript />, level: 90 }
      ]
    },
    {
      category: "Systems & Infrastructure",
      icon: <FaServer className="text-blue-400" size={28} />,
      skills: [
        { name: "Docker", icon: <SiDocker />, level: 90 },
        { name: "Kubernetes", icon: <SiKubernetes />, level: 85 },
        { name: "Microservices", level: 90 },
        { name: "gRPC", level: 85 },
        { name: "Message Queues", level: 88 }
      ]
    },
    {
      category: "Machine Learning & AI",
      icon: <FaBrain className="text-purple-400" size={28} />,
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, level: 88 },
        { name: "PyTorch", icon: <SiPytorch />, level: 92 },
        { name: "NLP", level: 85 },
        { name: "Computer Vision", level: 82 },
        { name: "Deep Learning", level: 90 }
      ]
    },
    {
      category: "Databases & Storage",
      icon: <FaDatabase className="text-orange-400" size={28} />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 88 },
        { name: "Cassandra", level: 80 },
        { name: "Elasticsearch", level: 82 }
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section id="hero" className="relative flex flex-col md:flex-row min-h-screen bg-black text-white overflow-hidden">
        {/* Cursor following light - hidden on mobile */}
        <div
          className="pointer-events-none fixed z-50 w-64 h-64 md:w-96 md:h-96 bg-green-500 rounded-full blur-3xl opacity-20 transition-opacity duration-300 hidden md:block"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Left Side - Image */}
        <div className="relative w-full md:w-2/5 lg:w-1/3 h-64 md:h-screen">
          <div className={`relative w-full h-full transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1600&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent opacity-60" />
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 via-green-500 to-transparent opacity-60" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="relative flex-1 flex items-center justify-center p-6 md:p-16 lg:p-24">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <div className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Hello, I'm{' '}
                <span className="text-green-400 inline-block hover:scale-105 transition-transform duration-300">
                  Pramananda Sarkar
                </span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-gray-300">
                A passionate{' '}
                <span className="font-semibold text-white border-b-2 border-green-500">Software Engineer</span>,{' '}
                <span className="font-semibold text-white border-b-2 border-green-500">Scalable Systems Designer</span>,{' '}
                <span className="font-semibold text-white border-b-2 border-green-500">ML/AI Researcher</span>, 
                and lifelong learner exploring the intersection of math, science, and intelligent systems.
              </p>
            </div>

            <div className={`flex gap-4 md:gap-6 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="group relative p-3 md:p-4 border-2 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-110 bg-black/50">
                <FaGithub size={24} className="md:w-8 md:h-8 text-white group-hover:text-green-400 transition-colors" />
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="group relative p-3 md:p-4 border-2 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-110 bg-black/50">
                <FaLinkedin size={24} className="md:w-8 md:h-8 text-white group-hover:text-green-400 transition-colors" />
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>
              <a href="mailto:example@email.com" className="group relative p-3 md:p-4 border-2 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-110 bg-black/50">
                <FaEnvelope size={24} className="md:w-8 md:h-8 text-white group-hover:text-green-400 transition-colors" />
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>
            </div>

            <div className={`transition-all duration-1000 delay-900 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <button className="group relative px-6 md:px-10 py-3 md:py-4 border-2 border-green-500 text-green-400 font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:text-black hover:shadow-lg hover:shadow-green-500/50">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-green-400 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-16 md:py-24 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-sm font-semibold">EDUCATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Academic Background
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Building a strong foundation in computer science and continuous learning.
            </p>
          </div>

          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 border border-gray-700 hover:border-green-500/50 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-green-500 group-hover:h-full transition-all duration-500" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <FaGraduationCap className="text-green-400 text-2xl md:text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-green-400 text-base md:text-lg font-semibold">{edu.institution}</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 text-sm md:text-base text-gray-400">
                    <span className="font-mono">{edu.period}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className="relative py-16 md:py-24 px-6 md:px-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <span className="text-blue-400 text-sm font-semibold">CAREER</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Building scalable systems and pushing the boundaries of technology.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 border border-gray-700 hover:border-green-500/50 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-green-500 group-hover:h-full transition-all duration-500" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-green-400 text-base md:text-lg font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0 font-mono text-sm md:text-base">{exp.period}</span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 text-green-400 text-xs md:text-sm font-mono rounded hover:border-green-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-16 md:py-24 px-6 md:px-20 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl opacity-5" />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full">
              <span className="text-purple-400 text-sm font-semibold">EXPERTISE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Proficient in modern technologies spanning multiple domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-gray-800/50 border border-gray-700 p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h3 className="text-xl md:text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {skill.icon && <span className="text-lg md:text-xl">{skill.icon}</span>}
                          <span className="text-gray-300 font-semibold text-sm md:text-base">{skill.name}</span>
                        </div>
                        <span className="text-green-400 text-xs md:text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-16 md:py-24 px-6 md:px-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full">
              <span className="text-orange-400 text-sm font-semibold">PORTFOLIO</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Impactful projects showcasing scalable architecture and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 md:p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-orange-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
                
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                    <span className="text-green-400 text-xs md:text-sm font-semibold">{project.impact}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900 border border-gray-600 text-orange-400 text-xs md:text-sm font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <FaGithub size={18} />
                    <span className="text-xs md:text-sm font-semibold">Source</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span className="text-xs md:text-sm font-semibold">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="relative py-16 md:py-24 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <span className="text-cyan-400 text-sm font-semibold">PUBLICATIONS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Research & Publications
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Contributing to cutting-edge research in ML and distributed systems.
            </p>
          </div>

          <div className="space-y-6">
            {research.map((paper, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 border-l-4 border-cyan-500 p-6 md:p-8 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-0 group-hover:text-cyan-400 transition-colors">
                    {paper.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 text-xs md:text-sm font-semibold rounded-full flex-shrink-0 ${
                    paper.status === 'Published' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {paper.status}
                  </span>
                </div>
                
                <p className="text-blue-400 font-semibold mb-4 text-sm md:text-base">{paper.venue}</p>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">{paper.description}</p>
                
                {paper.link && (
                  <a
                    href={paper.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm md:text-base"
                  >
                    <span>Read Paper</span>
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="relative py-16 md:py-24 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="absolute top-10 left-10 w-48 h-48 md:w-96 md:h-96 bg-green-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-sm font-semibold">LET'S CONNECT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you want to collaborate on a project, discuss research opportunities, or just say hello, I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <a
              href="mailto:example@email.com"
              className="group bg-gray-800/50 border border-gray-700 hover:border-green-500/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-full mb-4 group-hover:bg-green-500/20 transition-all">
                  <FaEnvelope className="text-green-400 text-2xl md:text-3xl" />
                </div>
                <h3 className="text-white font-bold mb-2 text-base md:text-lg">Email</h3>
                <p className="text-gray-400 text-xs md:text-sm break-all">example@email.com</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+1234567890"
              className="group bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4 group-hover:bg-blue-500/20 transition-all">
                  <FaPhone className="text-blue-400 text-2xl md:text-3xl" />
                </div>
                <h3 className="text-white font-bold mb-2 text-base md:text-lg">Phone</h3>
                <p className="text-gray-400 text-xs md:text-sm">+1 (234) 567-890</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="group bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4 group-hover:bg-purple-500/20 transition-all">
                  <FaMapMarkerAlt className="text-purple-400 text-2xl md:text-3xl" />
                </div>
                <h3 className="text-white font-bold mb-2 text-base md:text-lg">Location</h3>
                <p className="text-gray-400 text-xs md:text-sm">City, Country</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12">
            <a
              href="mailto:example@email.com"
              className="group relative px-8 md:px-10 py-3 md:py-4 bg-green-500 text-white font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaEnvelope size={20} />
                Contact Me
              </span>
              <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            
            <a
              href="/Resume.pdf"
              download
              className="group relative px-8 md:px-10 py-3 md:py-4 border-2 border-green-500 text-green-400 font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:text-black hover:shadow-lg hover:shadow-green-500/50 w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaDownload size={18} />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 md:gap-8 justify-center flex-wrap">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={28} className="text-gray-300 group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={28} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:example@email.com"
              className="group p-4 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope size={28} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-6 bg-black text-center text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2 text-sm md:text-base">
            © 2025 Pramananda Sarkar. Built with React and Tailwind CSS.
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Designed with passion for creating impactful solutions.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio