"use client"

import React, { useState } from "react";

type Props = {};

const ContactPage = (props: Props) => {
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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "pramanandasarkar02@gmail.com",
          from: formData.email,
          subject: "New message from your portfolio",
          text: formData.message
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center border-b-2 border-primary pb-2 inline-block">
          Contact Me
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b pb-2 border-primary/30">
              Get In Touch
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="font-medium w-24">Email:</span>
                <a 
                  href="mailto:pramanandasarkar02@gmail.com" 
                  className="hover:text-primary transition-colors border-b border-dashed border-foreground/50 hover:border-primary"
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
                  className="hover:text-primary transition-colors border-b border-dashed border-foreground/50 hover:border-primary"
                >
                  linkedin.com/in/pramanandasarkar02
                </a>
              </div>
              
              <div className="flex items-start">
                <span className="font-medium w-24">Phone:</span>
                <a 
                  href="tel:+8801814160814" 
                  className="hover:text-primary transition-colors border-b border-dashed border-foreground/50 hover:border-primary"
                >
                  +880 1814 160814
                </a>
              </div>
              
              <div className="flex items-start">
                <span className="font-medium w-24">Address:</span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Theme-specific border example */}
            <div className="mt-8 p-4 border-2 rounded-lg transition-all duration-300
              border-light-border dark:border-dark-border hacker:border-hacker-border
              bg-light-bg dark:bg-dark-bg hacker:bg-hacker-bg">
              <h3 className="text-lg font-medium mb-2">Theme Preview</h3>
              <p className="text-sm">
                This border changes color based on your active theme. 
                In hacker theme, it will glow green!
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold border-b pb-2 border-primary/30 mb-6">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
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
                  className="w-full px-4 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
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
                  className="w-full px-4 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <span className="text-green-500">Message sent successfully!</span>
                )}
                {submitStatus === "error" && (
                  <span className="text-red-500">Failed to send message. Please try again.</span>
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