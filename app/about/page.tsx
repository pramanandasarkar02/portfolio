import React from 'react';

type Props = {};

const AboutMePage = (props: Props) => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hello, I'm Pramananda Sarkar</h1>
          <p className="text-lg text-blue-600">
            Passionate Software Engineer | Full-Stack Developer | Problem Solver
          </p>
        </header>

        <section className="mb-8 text-gray-700 leading-relaxed">
          <p className="mb-4">
            I'm a dedicated and innovative **Software Engineer** with a strong foundation in building robust, scalable, and user-friendly applications. My journey into software development began with a fascination for how technology can transform ideas into tangible solutions, and that curiosity continues to drive my learning and growth every day.
          </p>
          <p className="mb-4">
            My expertise spans across the **full stack**, with a particular focus on modern web technologies. I enjoy crafting dynamic frontends with **React** and **Next.js**, ensuring intuitive user experiences. On the backend, I'm proficient with **Node.js (Express)** and **Python (Django/Flask)**, designing efficient APIs and managing databases like **PostgreSQL** and **MongoDB**. I'm also well-versed in cloud platforms such as **AWS**, where I've worked with services like EC2, S3, and Lambda to deploy and scale applications.
          </p>
          <p className="mb-4">
            I thrive in collaborative environments, where I can contribute to all phases of the software development lifecycle, from conceptualization and design to deployment and maintenance. I'm a strong advocate for **clean code**, **test-driven development**, and **agile methodologies**, believing that well-structured and maintainable code is key to long-term success.
          </p>
          <p>
            Beyond coding, I'm passionate about continuous learning, exploring new technologies, and contributing to open-source projects. I'm always looking for opportunities to tackle challenging problems and build impactful software that makes a difference. Let's connect and build something amazing!
          </p>
        </section>

        {/* Optional: Add a call to action or links to other sections */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Explore my work or get in touch!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/projects" // Link to your ProjectList page
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              View My Projects
            </a>
            <a
              href="/contact" // Link to a contact page or your email (e.g., mailto:your@email.com)
              className="inline-block bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;