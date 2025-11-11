"use client"
import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaBrain, FaGraduationCap, FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'
import { SiRust, SiGo, SiPython, SiJavascript, SiTypescript, SiDocker, SiKubernetes, SiTensorflow, SiPytorch } from 'react-icons/si'
import { Education, Experience, Project, Research, SkillCategory } from './types'
import Navbar from './Navbar'



const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'research', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

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
      icon: <FaCode className="text-green-400" size={24} />,
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
      icon: <FaServer className="text-blue-400" size={24} />,
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
      icon: <FaBrain className="text-purple-400" size={24} />,
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
      icon: <FaDatabase className="text-orange-400" size={24} />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 88 },
        { name: "Cassandra", level: 80 },
        { name: "Elasticsearch", level: 82 }
      ]
    }
  ]

  const github_url = "https://github.com/pramanandasarkar02"
  const linkedin_url = "https://www.linkedin.com/in/pramanandasarkar02/"
  const gmail = "pramanandasarkar02@gmail.com"

  

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section - Compact */}
      <section id="hero" className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="text-green-400 text-sm font-semibold">👋 Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I'm{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Pramananda Sarkar
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                A passionate <span className="text-green-400 font-semibold">Software Engineer</span> specializing in scalable systems, ML/AI research, and building innovative solutions at the intersection of technology and intelligence.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 border border-gray-700 hover:border-green-400 hover:bg-gray-700 transition-all duration-300"
                >
                  <FaGithub size={24} className="text-gray-300 hover:text-green-400" />
                </a>
                <a
                  href={linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 border border-gray-700 hover:border-green-400 hover:bg-gray-700 transition-all duration-300"
                >
                  <FaLinkedin size={24} className="text-gray-300 hover:text-green-400" />
                </a>
                <a
                  href={`mailto:${gmail}`}
                  className="p-3 bg-gray-800 border border-gray-700 hover:border-green-400 hover:bg-gray-700 transition-all duration-300"
                >
                  <FaEnvelope size={24} className="text-gray-300 hover:text-green-400" />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                >
                  View My Work
                </button>
                <a
                  href="/Resume.pdf"
                  download
                  className="px-8 py-3 border-2 border-green-500 text-green-400 font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl">
                  <img
                    src="profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-30" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-sm font-semibold">ABOUT ME</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Who I Am
            </h2>
          </div>

          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-700 p-8 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <FaGraduationCap className="text-green-400 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-green-400 text-lg font-semibold">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                    <span className="font-mono">{edu.period}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>
              
              <div className="grid md:grid-cols-2 gap-3">
                {edu.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <span className="text-blue-400 text-sm font-semibold">CAREER</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border-l-4 border-green-500 p-6 hover:bg-gray-800 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-green-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 font-mono text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900 border border-gray-700 text-green-400 text-xs font-mono rounded"
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
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full">
              <span className="text-purple-400 text-sm font-semibold">EXPERTISE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-gray-900/50 border border-gray-700 p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {skill.icon && <span className="text-lg">{skill.icon}</span>}
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-green-400 text-sm font-mono">{skill.level}%</span>
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full">
              <span className="text-orange-400 text-sm font-semibold">PORTFOLIO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <h3 className="text-xl font-bold text-white mb-3 hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">
                    {project.impact}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-900 border border-gray-600 text-orange-400 text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    <FaGithub size={16} />
                    <span>Source</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <span className="text-cyan-400 text-sm font-semibold">PUBLICATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Research & Publications
            </h2>
          </div>

          <div className="space-y-6">
            {research.map((paper, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border-l-4 border-cyan-500 p-6 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between mb-3">
                  <h3 className="text-lg font-bold text-white mb-2 md:mb-0 hover:text-cyan-400 transition-colors">
                    {paper.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full self-start ${
                    paper.status === 'Published' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {paper.status}
                  </span>
                </div>
                
                <p className="text-blue-400 font-semibold mb-3 text-sm">{paper.venue}</p>
                <p className="text-gray-300 leading-relaxed mb-3 text-sm">{paper.description}</p>
                
                {paper.link && (
                  <a
                    href={paper.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm"
                  >
                    <span>Read Paper</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-sm font-semibold">LET'S CONNECT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Open to collaboration, research opportunities, and interesting conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href={`mailto:${gmail}`}
              className="group bg-gray-800/50 border border-gray-700 hover:border-green-500/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-full mb-4 group-hover:bg-green-500/20 transition-all">
                  <FaEnvelope className="text-green-400 text-2xl" />
                </div>
                <h3 className="text-white font-bold mb-2">Email</h3>
                <p className="text-gray-400 text-sm break-all">{gmail}</p>
              </div>
            </a>

            <a
              href="tel:+1234567890"
              className="group bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4 group-hover:bg-blue-500/20 transition-all">
                  <FaPhone className="text-blue-400 text-2xl" />
                </div>
                <h3 className="text-white font-bold mb-2">Phone</h3>
                <p className="text-gray-400 text-sm">+1 (234) 567-890</p>
              </div>
            </a>

            <div className="group bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4 group-hover:bg-purple-500/20 transition-all">
                  <FaMapMarkerAlt className="text-purple-400 text-2xl" />
                </div>
                <h3 className="text-white font-bold mb-2">Location</h3>
                <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={`mailto:${gmail}`}
              className="group relative px-8 py-3 bg-green-500 text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaEnvelope size={18} />
                Contact Me
              </span>
            </a>
            
            <a
              href="/Resume.pdf"
              download
              className="group relative px-8 py-3 border-2 border-green-500 text-green-400 font-bold overflow-hidden transition-all duration-300 hover:bg-green-500 hover:text-white w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaDownload size={16} />
                Download Resume
              </span>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-green-500/50 transition-all duration-300"
            >
              <FaGithub size={24} className="text-gray-300 hover:text-green-400" />
            </a>
            <a
              href={linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <FaLinkedin size={24} className="text-gray-300 hover:text-blue-400" />
            </a>
            <a
              href={`mailto:${gmail}`}
              className="p-4 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <FaEnvelope size={24} className="text-gray-300 hover:text-purple-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2">
            © 2025 Pramananda Sarkar. Built with React and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500">
            Designed with passion for creating impactful solutions.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio