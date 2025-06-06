import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/diljot8383@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Your message has been sent!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("❌ Oops! Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("❌ Failed to send. Please check your internet.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-20 bg-[#F3E8FF] rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-3 rounded-xl transition transform duration-300 hover:scale-105 shadow-lg"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-6 text-center font-semibold text-green-700">{status}</p>
      )}

      <div className="mt-12 text-center space-x-6">
        <a href="mailto:diljot8383@gmail.com" className="hover:underline">Email</a>
        <a href="https://www.linkedin.com/in/diljotsingh0083" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href="https://github.com/diljot0083" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      </div>
    </div>
  );
};

export default Contact;
