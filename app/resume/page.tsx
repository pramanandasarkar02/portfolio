import React from 'react';

type Props = {};

const ResumePage = (props: Props) => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
        {/* Header Section */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{/* Your Name */}Your Name</h1>
          <p className="text-lg text-gray-700">{/* Desired Role */}Software Engineer</p>
          <div className="mt-2 space-x-4">
            <span className="text-gray-600">{/* Email */}youremail@example.com</span>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Portfolio</a>
          </div>
        </header>

        {/* Summary Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            {/* Your concise summary */}Highly motivated and results-oriented Software Engineer with X years of experience in designing, developing, and deploying robust and scalable applications. Proficient in [mention 2-3 key technologies, e.g., React, Node.js, AWS] with a strong passion for solving complex problems and building efficient solutions.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Programming Languages:</h3>
              <p className="text-gray-600">{/* Programming Languages */}JavaScript, Python, Java, TypeScript, C++</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Frameworks/Libraries:</h3>
              <p className="text-gray-600">{/* Frameworks/Libraries */}React, Node.js, Express.js, Django, Spring Boot, Next.js</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Databases:</h3>
              <p className="text-gray-600">{/* Databases */}PostgreSQL, MongoDB, MySQL, Redis</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">Tools/Platforms:</h3>
              <p className="text-gray-600">{/* Tools/Platforms */}Git, Docker, Kubernetes, AWS, Azure, CI/CD, JIRA</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800">{/* Job Title */}Senior Software Engineer</h3>
              <p className="text-gray-600 mb-1">{/* Company Name */}Tech Solutions Inc. | {/* Dates */}Jan 2022 – Present</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>{/* Responsibility/Achievement 1 */}Engineered and maintained full-stack applications using React and Node.js, resulting in a 15% improvement in load times.</li>
                <li>{/* Responsibility/Achievement 2 */}Led the development of a critical microservice, increasing system reliability by 20% and reducing downtime.</li>
                <li>{/* Responsibility/Achievement 3 */}Collaborated with cross-functional teams to define project requirements and deliver features on schedule.</li>
                <li>{/* Responsibility/Achievement 4 */}Mentored junior developers and conducted code reviews, contributing to team growth and code quality.</li>
              </ul>
            </div>
            {/* Add more job entries */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800">{/* Job Title */}Software Developer</h3>
              <p className="text-gray-600 mb-1">{/* Company Name */}Innovate Corp. | {/* Dates */}Jul 2019 – Dec 2021</p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>{/* Responsibility/Achievement 1 */}Developed front-end components with React, improving user experience across key product features.</li>
                <li>{/* Responsibility/Achievement 2 */}Contributed to backend API development using Python/Django, handling large datasets.</li>
                <li>{/* Responsibility/Achievement 3 */}Participated in agile ceremonies, including sprint planning, daily stand-ups, and retrospectives.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Projects</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800">{/* Project Title */}E-commerce Platform (Personal Project)</h3>
              <p className="text-gray-600 mb-1">Technologies: Next.js, Stripe API, PostgreSQL, Tailwind CSS</p>
              <p className="text-gray-700 leading-relaxed">{/* Project Description */}Developed a full-stack e-commerce platform with user authentication, product listings, shopping cart functionality, and secure payment processing.</p>
              <div className="mt-2 space-x-2">
                <a href="https://github.com/yourusername/ecommerce-project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a>
                <span className="text-gray-400">|</span>
                <a href="https://ecommerce-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
              </div>
            </div>
            {/* Add more project entries */}
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800">{/* Project Title */}Real-time Chat Application</h3>
              <p className="text-gray-600 mb-1">Technologies: Node.js, Socket.IO, React, MongoDB</p>
              <p className="text-gray-700 leading-relaxed">{/* Project Description */}Built a real-time chat application with features like user authentication, private messaging, and group chats.</p>
              <div className="mt-2">
                <a href="https://github.com/yourusername/chat-app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800">{/* Degree */}Master of Science in Computer Science</h3>
              <p className="text-gray-600">{/* University */}University Name | {/* Graduation Date */}Graduated: May 202X</p>
              <p className="text-gray-700">{/* Relevant Coursework */}Relevant Coursework: Algorithms, Data Structures, Distributed Systems, Machine Learning</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-800">{/* Degree */}Bachelor of Science in Software Engineering</h3>
              <p className="text-gray-600">{/* University */}Another University | {/* Graduation Date */}Graduated: May 20XX</p>
            </div>
          </div>
        </section>

        {/* Download Resume Call to Action */}
        <div className="text-center mt-8">
          <a
            href="/resume.pdf"
            download="YourName-Resume.pdf"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;