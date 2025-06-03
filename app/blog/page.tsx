import React from 'react';

type Props = {};

const BlogList = (props: Props) => {
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing React Performance with Hooks",
      date: "May 28, 2024",
      readTime: "7 min read",
      description: "Dive into practical techniques for boosting your React application's performance using useCallback, useMemo, and React.memo. Learn how to identify and eliminate re-renders.",
      tags: ["React", "Performance", "Frontend", "Hooks"],
      link: "/blog/optimizing-react-performance",
      image: "https://via.placeholder.com/400x250?text=React+Performance" // Placeholder image
    },
    {
      id: 2,
      title: "Demystifying Microservices: A Beginner's Guide",
      date: "April 15, 2024",
      readTime: "10 min read",
      description: "Explore the core concepts of microservices architecture, its benefits, challenges, and when to consider adopting this distributed system approach for your projects.",
      tags: ["Architecture", "Backend", "Microservices", "Cloud"],
      link: "/blog/demystifying-microservices",
      image: "https://via.placeholder.com/400x250?text=Microservices" // Placeholder image
    },
    {
      id: 3,
      title: "Getting Started with GraphQL and Node.js",
      date: "March 1, 2024",
      readTime: "8 min read",
      description: "A comprehensive tutorial on setting up a GraphQL API with Node.js and Apollo Server. Learn schema definition, resolvers, and basic queries.",
      tags: ["GraphQL", "Node.js", "API", "Backend"],
      link: "/blog/graphql-nodejs-tutorial",
      image: "https://via.placeholder.com/400x250?text=GraphQL+Node.js" // Placeholder image
    },
    {
      id: 4,
      title: "My Journey into Open Source: First Contributions",
      date: "February 10, 2024",
      readTime: "5 min read",
      description: "Sharing my experience and tips on making your first contributions to open-source projects. A guide for aspiring open-source developers.",
      tags: ["Open Source", "Career", "Community", "Git"],
      link: "/blog/open-source-journey",
      image: "https://via.placeholder.com/400x250?text=Open+Source" // Placeholder image
    }
    // Add more blog posts here
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">My Blog Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={`Thumbnail for ${post.title}`}
                  className="w-full h-48 object-cover border-b border-gray-200 group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  {post.readTime && <span className="mx-2">•</span>}
                  {post.readTime && <span>{post.readTime}</span>}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;