import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QueryModal = ({ onClose, product }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const formActionUrl =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdhUdy4SoUoBTN0I0C5hEUIJlZCITYrs-0V9nBJUHNgDeH4Bw/formResponse";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams();
    formBody.append("entry.1044864652", formData.name);
    formBody.append("entry.2128226380", formData.email);
    formBody.append("entry.205489659", formData.phone);
    formBody.append("entry.1953281475", `${product.name} - ${product.image}`);

    try {
      await fetch(formActionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody.toString()
      });

      toast.success("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "" });
      onClose(); // Optional: Close modal after submission
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 relative w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl hover:text-red-500 transition"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Product Query
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="hidden"
            name="product"
            value={`${product.name} - ${product.image}`}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Query
          </button>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default QueryModal;
