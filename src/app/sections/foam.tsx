"use client";
import React, { useState } from "react";
import { Send } from "lucide-react"; // Importing Send icon

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Send a POST request to your Formspree endpoint
      const response = await fetch("https://formspree.io/f/xldglrwb", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      // If the request was successful, reset form and show success
      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setStatus("Thanks for your message! We will be in touch soon.");
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    // Outer container: flex-col on small screens, flex-row on md and up.
    <div id="foam" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#F5F5F5] px-4 space-y-6 md:space-y-0 md:space-x-6">
      {/* Header Section */}
      <div className="w-full max-w-lg text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Get early access 🚀
        </h2>
        <p className="text-gray-600">
          We're welcoming new members. Join us now!
          <br />
          We'll bring you onboard soon!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div >
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-600 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#B7512C] text-white px-4 py-2 rounded-full shadow hover:bg-[#9c3e21] cursor-pointer"
          >
            <Send size={18} /> Send
          </button>
        </form>

        {/* Success/Error Message */}
        {status && (
          <p className="mt-4 text-center text-sm text-green-600">{status}</p>
        )}
      </div>
    </div>
  );
}
