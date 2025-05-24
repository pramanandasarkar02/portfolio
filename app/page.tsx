"use client"
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  const skills = [
    "Python", "Java", "Golang", "TypeScript", "JavaScript",
    "PyTorch", "TensorFlow", "NestJS", "Express", "SpringBoot", 
    "React", "Microservices", "Docker", "Kubernetes"
  ];

  const projects = [
    { name: "TechLib", description: "Digital library management system" },
    { name: "Game Server", description: "Multiplayer game server architecture" },
    { name: "InfoPulse", description: "Real-time data analytics platform" },
    { name: "Drone Image Detection", description: "AI-powered object recognition" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : theme === 'hacker' ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section id="hero" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 
            ${theme === 'dark' ? 'border-gray-700' : theme === 'hacker' ? 'border-green-500' : 'border-gray-200'}">
            <Image 
              src="/profile.jpg" // Replace with your image path
              alt="Pramananda Sarkar"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : theme === 'hacker' ? 'text-green-400' : 'text-gray-900'}`}>
              Hi, I'm <span className="underline decoration-blue-500">Pramananda Sarkar</span>
            </h1>
            <h2 className={`text-xl md:text-2xl mb-6 ${theme === 'dark' ? 'text-gray-300' : theme === 'hacker' ? 'text-green-300' : 'text-gray-600'}`}>
              Software Engineer at Google
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : theme === 'hacker' ? 'text-green-200' : 'text-gray-700'}`}>
              I build scalable systems and delightful user experiences. Currently focused on cloud architecture 
              and machine learning infrastructure. Passionate about open source and mentoring new developers.
            </p>
            <div className="flex gap-4">
              <Link href="#about" className={`px-6 py-3 rounded-lg font-medium transition-all
                ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                  theme === 'hacker' ? 'bg-green-600 hover:bg-green-700 text-black' : 
                  'bg-blue-500 hover:bg-blue-600 text-white'}`}>
                About Me
              </Link>
              <Link href="#contact" className={`px-6 py-3 rounded-lg font-medium transition-all border-2
                ${theme === 'dark' ? 'border-gray-600 hover:bg-gray-800 text-white' : 
                  theme === 'hacker' ? 'border-green-500 hover:bg-green-900/30 text-green-400' : 
                  'border-gray-300 hover:bg-gray-100 text-gray-700'}`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${theme === 'dark' ? 'bg-gray-800' : theme === 'hacker' ? 'bg-gray-900' : 'bg-gray-100'} rounded-xl`}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : theme === 'hacker' ? 'text-green-400' : 'text-gray-900'}`}>
            My Skills
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : theme === 'hacker' ? 'text-green-300' : 'text-gray-600'}`}>
            Technologies I've worked with across full-stack development, machine learning, and cloud infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <span key={skill} className={`px-4 py-2 rounded-full text-sm font-medium
              ${theme === 'dark' ? 'bg-gray-700 text-white' : 
                theme === 'hacker' ? 'bg-green-900/30 text-green-400' : 
                'bg-white text-gray-800 shadow-sm'}`}>
              {skill}
            </span>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="#skills" className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all
            ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 
              theme === 'hacker' ? 'bg-green-800 hover:bg-green-700 text-green-300' : 
              'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>
            View All Skills
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : theme === 'hacker' ? 'text-green-400' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : theme === 'hacker' ? 'text-green-300' : 'text-gray-600'}`}>
            Some of my recent work across different domains and technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]
              ${theme === 'dark' ? 'bg-gray-800' : theme === 'hacker' ? 'bg-gray-900 border border-green-900' : 'bg-white'}`}>
              <div className="h-48 bg-blue-500 relative overflow-hidden">
                <Image 
                  src={`/project-${index+1}.jpg`} // Replace with your project images
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : theme === 'hacker' ? 'text-green-400' : 'text-gray-900'}`}>
                  {project.name}
                </h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : theme === 'hacker' ? 'text-green-200' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <Link href="#projects" className={`text-sm font-medium inline-flex items-center
                  ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 
                    theme === 'hacker' ? 'text-green-400 hover:text-green-300' : 
                    'text-blue-600 hover:text-blue-500'}`}>
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="#projects" className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all
            ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 
              theme === 'hacker' ? 'bg-green-900/30 hover:bg-green-800/30 text-green-400' : 
              'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
            View All Projects
          </Link>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={`py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${theme === 'dark' ? 'bg-gray-800' : theme === 'hacker' ? 'bg-gray-900' : 'bg-gray-100'} rounded-xl`}>
        <div className="text-center">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : theme === 'hacker' ? 'text-green-400' : 'text-gray-900'}`}>
            My Resume
          </h2>
          <p className={`max-w-2xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-400' : theme === 'hacker' ? 'text-green-300' : 'text-gray-600'}`}>
            Download my resume to learn more about my professional experience and education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/resume.pdf" download className={`px-6 py-3 rounded-lg font-medium transition-all text-center
              ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                theme === 'hacker' ? 'bg-green-600 hover:bg-green-700 text-black' : 
                'bg-blue-500 hover:bg-blue-600 text-white'}`}>
              Download Resume
            </a>
            <Link href="#resume" className={`px-6 py-3 rounded-lg font-medium transition-all border-2 text-center
              ${theme === 'dark' ? 'border-gray-600 hover:bg-gray-700 text-white' : 
                theme === 'hacker' ? 'border-green-500 hover:bg-green-900/30 text-green-400' : 
                'border-gray-300 hover:bg-gray-200 text-gray-700'}`}>
              View Full Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : theme === 'hacker' ? 'text-green-400' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : theme === 'hacker' ? 'text-green-300' : 'text-gray-600'}`}>
            Feel free to reach out for collaborations or just to say hello!
          </p>
        </div>
        <div className={`max-w-md mx-auto p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : theme === 'hacker' ? 'bg-gray-900' : 'bg-white shadow-md'}`}>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className={`w-6 h-6 mr-4 ${theme === 'dark' ? 'text-blue-400' : theme === 'hacker' ? 'text-green-400' : 'text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className={theme === 'dark' ? 'text-gray-300' : theme === 'hacker' ? 'text-green-300' : 'text-gray-700'}>
                pramanandasarkar02@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <svg className={`w-6 h-6 mr-4 ${theme === 'dark' ? 'text-blue-400' : theme === 'hacker' ? 'text-green-400' : 'text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className={theme === 'dark' ? 'text-gray-300' : theme === 'hacker' ? 'text-green-300' : 'text-gray-700'}>
                +880 1814 160814
              </span>
            </div>
            <div className="flex items-center">
              <svg className={`w-6 h-6 mr-4 ${theme === 'dark' ? 'text-blue-400' : theme === 'hacker' ? 'text-green-400' : 'text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className={theme === 'dark' ? 'text-gray-300' : theme === 'hacker' ? 'text-green-300' : 'text-gray-700'}>
                Dhaka, Bangladesh
              </span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="#contact" className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all
              ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                theme === 'hacker' ? 'bg-green-600 hover:bg-green-700 text-black' : 
                'bg-blue-500 hover:bg-blue-600 text-white'}`}>
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}