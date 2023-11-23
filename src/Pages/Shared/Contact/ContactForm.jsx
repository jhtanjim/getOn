import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className="w-full max-w-lg mx-auto lg:w-2/3" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-3 mt-10">Get in touch</h1>
      <p className="text-gray-600 mb-6 font-semibold">
        How can I help you? Please write down your query.
      </p>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="email"
            placeholder="example@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="message"
            placeholder="Your message here..."
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-[#911e2b] hover:bg-red-400 text-white font-bold py-3 px-10 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
