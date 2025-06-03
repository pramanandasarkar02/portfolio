"use client"

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // IMPORTANT: Replace "/api/send-email" with your actual backend endpoint.
      // This endpoint should handle sending the email securely.
      // DO NOT send emails directly from client-side code in production.
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "pramanandasarkar02@gmail.com", // Your actual recipient email
          from: formData.email, // Sender's email from the form
          subject: "New message from your portfolio",
          text: `From: ${formData.email}\n\nMessage:\n${formData.message}`
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", message: "" }); // Clear form on success
      } else {
        setSubmitStatus("error");
        console.error("Failed to send message:", await response.text());
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400 border-b-2 border-blue-600 pb-2 inline-block mx-auto">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b pb-2 border-blue-500 text-gray-200">
              Get In Touch
            </h2>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <span className="font-medium w-24">Email:</span>
                <a
                  href="mailto:pramanandasarkar02@gmail.com"
                  className="text-blue-400 hover:underline transition-colors duration-200"
                >
                  pramanandasarkar02@gmail.com
                </a>
              </div>

              <div className="flex items-start">
                <span className="font-medium w-24">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/pramanandasarkar02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline transition-colors duration-200"
                >
                  linkedin.com/in/pramanandasarkar02
                </a>
              </div>

              <div className="flex items-start">
                <span className="font-medium w-24">Phone:</span>
                <a
                  href="tel:+8801814160814"
                  className="text-blue-400 hover:underline transition-colors duration-200"
                >
                  +880 1814 160814
                </a>
              </div>

              <div className="flex items-start">
                <span className="font-medium w-24">Address:</span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Optional: Simple descriptive text */}
            <div className="mt-8 p-4 border border-gray-700 rounded-lg bg-gray-900 text-gray-400 text-sm">
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels above or use the form!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-6 border-blue-500 text-gray-200">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                ></textarea>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <span className="text-green-500 text-sm font-medium">Message sent successfully!</span>
                )}
                {submitStatus === "error" && (
                  <span className="text-red-500 text-sm font-medium">Failed to send message. Please try again.</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;