import React from 'react';

type Props = {};

const ProjectList = (props: Props) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      technologies: ["Next.js", "React", "Stripe API", "PostgreSQL", "Tailwind CSS", "AWS S3"],
      description: "A full-stack e-commerce application featuring user authentication, product listings, a shopping cart, and secure payment processing. Designed for scalability and a seamless user experience.",
      features: [
        "Implemented robust user authentication and authorization using NextAuth.js.",
        "Integrated Stripe API for secure and efficient payment processing, handling multiple payment methods.",
        "Developed dynamic product management with CRUD operations, allowing administrators to add, update, and remove products.",
        "Utilized AWS S3 for efficient image storage and delivery, optimizing load times.",
        "Designed a responsive and intuitive user interface with Tailwind CSS, ensuring cross-device compatibility."
      ],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveDemoLink: "https://ecommerce-demo.vercel.app",
      image: "https://via.placeholder.com/600x350?text=E-commerce+Platform" // Replace with your project screenshot
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      technologies: ["Node.js", "Express", "Socket.IO", "React", "MongoDB", "Redux"],
      description: "A real-time, scalable chat application with private messaging, group chats, and online user presence, enabling instant communication.",
      features: [
        "Developed real-time communication using Socket.IO for instant message delivery and notifications.",
        "Implemented user authentication and secure token-based authorization.",
        "Designed a flexible MongoDB schema for efficient storage and retrieval of chat messages and user data.",
        "Created a responsive React frontend with Redux for state management, providing a smooth user experience."
      ],
      githubLink: "https://github.com/yourusername/chat-app",
      liveDemoLink: null, // No live demo for this example
      image: "https://via.placeholder.com/600x350?text=Chat+Application" // Replace with your project screenshot
    },
    {
      id: 3,
      title: "Task Management API",
      technologies: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
      description: "A robust RESTful API for managing tasks, users, and projects, built with Django REST Framework. Designed for integration with various frontend applications.",
      features: [
        "Developed a comprehensive set of API endpoints for task creation, retrieval, updating, and deletion.",
        "Implemented user authentication and permissions to ensure secure access to resources.",
        "Utilized PostgreSQL for database management, ensuring data integrity and scalability.",
        "Containerized the application using Docker for consistent development and deployment environments.",
        "Wrote extensive unit and integration tests to ensure API reliability and maintainability."
      ],
      githubLink: "https://github.com/yourusername/task-manager-api",
      liveDemoLink: null,
      image: "https://via.placeholder.com/600x350?text=Task+API" // Replace with your project screenshot
    }
    // Add more projects here
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">My Projects</h1>

        <div className="space-y-10">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {project.image && (
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-auto object-cover border-b border-gray-200"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-sm text-gray-600 mb-3">
                  <strong className="font-medium">Technologies:</strong> {project.technologies.join(", ")}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>

                <h3 className="text-lg font-medium text-gray-800 mb-2">Key Features & Contributions:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {/* GitHub Icon */}
                      <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.043-1.612-4.043-1.612-.547-1.387-1.334-1.758-1.334-1.758-1.087-.74.083-.725.083-.725 1.205.085 1.838 1.238 1.838 1.238 1.07 1.833 2.808 1.305 3.49.998.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.005-.322 3.3 1.23.955-.265 1.98-.4 3-.405 1.02.005 2.045.14 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.65 1.66.24 2.88.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.802 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .318.22.69.825.575C20.565 21.802 24 17.302 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
                    </svg>
                    GitHub Repo
                  </a>
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        {/* External Link Icon */}
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V3a1 1 0 00-1-1h-6z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;