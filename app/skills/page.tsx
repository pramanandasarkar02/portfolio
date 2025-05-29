"use client"
import React, { useState } from 'react';
import { 
  FaPython, 
  FaJs, 
  FaJava, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaDocker, 
  FaLinux,
  FaMoon,
  FaSun,
  FaTerminal
} from 'react-icons/fa';
import { 
  SiGo, 
  SiCplusplus, 
  SiTypescript, 
  SiTensorflow, 
  SiPytorch, 
  SiMarkdown, 
  SiLatex,
  SiArchlinux,
  SiFlask,
  SiExpress
} from 'react-icons/si';

const SkillsShowcase = () => {
  const [theme, setTheme] = useState('dark');

  const languages = [
    { name: "Python", level: 90, icon: FaPython, color: "text-yellow-400" },
    { name: "Go", level: 85, icon: SiGo, color: "text-blue-400" },
    { name: "Java", level: 80, icon: FaJava, color: "text-red-400" },
    { name: "JavaScript", level: 60, icon: FaJs, color: "text-yellow-300" },
    { name: "TypeScript", level: 60, icon: SiTypescript, color: "text-blue-500" },
    { name: "C/C++", level: 40, icon: SiCplusplus, color: "text-blue-600" }
  ];

  const frameworks = {
    webBased: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" },
      { name: "Flask", icon: SiFlask, color: "text-white" }
    ],
    mlBased: [
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
      { name: "PyTorch", icon: SiPytorch, color: "text-red-500" }
    ]
  };

  const tools = [
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { name: "Markdown", icon: SiMarkdown, color: "text-white" },
    { name: "LaTeX", icon: SiLatex, color: "text-green-400" },
    { name: "Arch Linux", icon: SiArchlinux, color: "text-blue-400" }
  ];

  const themeClasses = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    hacker: 'bg-black text-green-500'
  };

  const cardClasses = {
    light: 'bg-gray-50 border-gray-200',
    dark: 'bg-gray-800 border-gray-700',
    hacker: 'bg-gray-900 border-green-900'
  };

  const progressClasses = {
    light: 'bg-gray-200',
    dark: 'bg-gray-700',
    hacker: 'bg-gray-800'
  };

  const ProgressBar = ({ level, theme }) => (
    <div className={`w-full h-2 rounded-full ${progressClasses[theme]} overflow-hidden`}>
      <div 
        className={`h-full transition-all duration-1000 ease-out ${
          theme === 'hacker' ? 'bg-green-500' : 
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
        }`}
        style={{ width: `${level}%` }}
      />
    </div>
  );

  const ThemeButton = ({ currentTheme, targetTheme, icon: Icon, label }) => (
    <button
      onClick={() => setTheme(targetTheme)}
      className={`p-2 rounded-lg transition-all duration-300 ${
        currentTheme === targetTheme 
          ? theme === 'hacker' 
            ? 'bg-green-900 text-green-400' 
            : theme === 'dark'
            ? 'bg-blue-600 text-white'
            : 'bg-blue-100 text-blue-600'
          : theme === 'hacker'
          ? 'hover:bg-green-900 text-green-600'
          : theme === 'dark'
          ? 'hover:bg-gray-700 text-gray-400'
          : 'hover:bg-gray-100 text-gray-600'
      }`}
      title={label}
    >
      <Icon size={20} />
    </button>
  );

  return (
    <div className={`min-h-screen p-6 transition-all duration-500 ${themeClasses[theme]}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header with Theme Switcher */}
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl font-bold ${
            theme === 'hacker' ? 'text-green-400 font-mono' : ''
          }`}>
            {theme === 'hacker' ? '> Skills_Portfolio.exe' : 'Skills Portfolio'}
          </h1>
          
          <div className="flex gap-2">
            <ThemeButton 
              currentTheme={theme} 
              targetTheme="light" 
              icon={FaSun} 
              label="Light Theme" 
            />
            <ThemeButton 
              currentTheme={theme} 
              targetTheme="dark" 
              icon={FaMoon} 
              label="Dark Theme" 
            />
            <ThemeButton 
              currentTheme={theme} 
              targetTheme="hacker" 
              icon={FaTerminal} 
              label="Hacker Theme" 
            />
          </div>
        </div>

        {/* Languages Section */}
        <div className={`mb-8 p-6 rounded-xl border-2 ${cardClasses[theme]} transition-all duration-300`}>
          <h2 className={`text-2xl font-semibold mb-6 ${
            theme === 'hacker' ? 'text-green-400 font-mono' : ''
          }`}>
            {theme === 'hacker' ? '# Programming Languages' : 'Programming Languages'}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {languages.map((lang, index) => {
              const IconComponent = lang.icon;
              return (
                <div 
                  key={lang.name}
                  className={`p-4 rounded-lg ${
                    theme === 'hacker' ? 'bg-black border border-green-800' :
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-100'
                  } transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <IconComponent className={`text-2xl ${lang.color}`} />
                      <span className={`font-medium ${theme === 'hacker' ? 'font-mono' : ''}`}>
                        {lang.name}
                      </span>
                    </div>
                    <span className={`text-sm font-bold ${
                      theme === 'hacker' ? 'text-green-400' : 'text-gray-600'
                    }`}>
                      {lang.level}%
                    </span>
                  </div>
                  <ProgressBar level={lang.level} theme={theme} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Frameworks Section */}
        <div className={`mb-8 p-6 rounded-xl border-2 ${cardClasses[theme]} transition-all duration-300`}>
          <h2 className={`text-2xl font-semibold mb-6 ${
            theme === 'hacker' ? 'text-green-400 font-mono' : ''
          }`}>
            {theme === 'hacker' ? '# Frameworks & Libraries' : 'Frameworks & Libraries'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`text-lg font-medium mb-4 ${
                theme === 'hacker' ? 'text-green-300 font-mono' : 'text-gray-700 dark:text-gray-300'
              }`}>
                {theme === 'hacker' ? '## Web Development' : 'Web Development'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {frameworks.webBased.map((framework, index) => {
                  const IconComponent = framework.icon;
                  return (
                    <div 
                      key={framework.name}
                      className={`p-3 rounded-lg text-center ${
                        theme === 'hacker' ? 'bg-black border border-green-800 hover:border-green-600' :
                        theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 
                        'bg-white border border-gray-100 hover:border-gray-200'
                      } transition-all duration-300 hover:scale-105`}
                    >
                      <IconComponent className={`text-3xl ${framework.color} mx-auto mb-2`} />
                      <span className={`text-sm font-medium ${theme === 'hacker' ? 'font-mono' : ''}`}>
                        {framework.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h3 className={`text-lg font-medium mb-4 ${
                theme === 'hacker' ? 'text-green-300 font-mono' : 'text-gray-700 dark:text-gray-300'
              }`}>
                {theme === 'hacker' ? '## Machine Learning' : 'Machine Learning'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {frameworks.mlBased.map((framework, index) => {
                  const IconComponent = framework.icon;
                  return (
                    <div 
                      key={framework.name}
                      className={`p-3 rounded-lg text-center ${
                        theme === 'hacker' ? 'bg-black border border-green-800 hover:border-green-600' :
                        theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 
                        'bg-white border border-gray-100 hover:border-gray-200'
                      } transition-all duration-300 hover:scale-105`}
                    >
                      <IconComponent className={`text-3xl ${framework.color} mx-auto mb-2`} />
                      <span className={`text-sm font-medium ${theme === 'hacker' ? 'font-mono' : ''}`}>
                        {framework.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className={`p-6 rounded-xl border-2 ${cardClasses[theme]} transition-all duration-300`}>
          <h2 className={`text-2xl font-semibold mb-6 ${
            theme === 'hacker' ? 'text-green-400 font-mono' : ''
          }`}>
            {theme === 'hacker' ? '# Development Tools' : 'Development Tools'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div 
                  key={tool.name}
                  className={`p-4 rounded-lg text-center ${
                    theme === 'hacker' ? 'bg-black border border-green-800 hover:border-green-600' :
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 
                    'bg-white border border-gray-100 hover:border-gray-200'
                  } transition-all duration-300 hover:scale-110`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <IconComponent className={`text-3xl ${tool.color} mx-auto mb-2`} />
                  <span className={`text-xs font-medium ${theme === 'hacker' ? 'font-mono' : ''}`}>
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-8 text-center text-sm ${
          theme === 'hacker' ? 'text-green-600 font-mono' : 'text-gray-500'
        }`}>
          {theme === 'hacker' ? 
            '> System.out.println("Ready to hack the world!");' : 
            'Ready to build amazing things together!'
          }
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;