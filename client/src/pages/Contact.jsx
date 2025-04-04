import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsappIcon";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify CSS


function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to track submission

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // If already submitting, prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true); // Set submission to true

    // Google Form Action URL (Replace with your actual URL)
    const formActionUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdhUdy4SoUoBTN0I0C5hEUIJlZCITYrs-0V9nBJUHNgDeH4Bw/formResponse";

    // Get the field entry IDs (e.g., for first name, last name, email, etc.)
    const formFields = {
      "entry.881805409": formData.firstName, // Replace with the actual entry ID for first name
      "entry.1044864652": formData.lastName, // Replace with the actual entry ID for last name
      "entry.2128226380": formData.email, // Replace with the actual entry ID for email
      "entry.205489659": formData.phone, // Replace with the actual entry ID for phone number
      "entry.1953281475": formData.message // Replace with the actual entry ID for message
    };

    // Send data to Google Form
    try {
      const response = await fetch(formActionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formFields).toString()
      });

      if (response.ok) {
        // Display success message from Toastify
        toast.success("Form submitted successfully!", {
          autoClose: 3000, // Optional: automatically close after 3 seconds
        });

        // Clear the form data state after a successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (error) {
      toast.error("Error submitting the form. Please try again.", {
        position: toast.POSITION.TOP_CENTER
      });
    } finally {
      setTimeout(() => {
        setIsSubmitting(false); // Reset the isSubmitting state
      }, 3000); // Delay for toast to close before allowing resubmission
    }
  };

  return (
    <>
      {/* Toast Container outside other elements to ensure visibility */}
      <ToastContainer />

      <Header />
      <section className=" mt-10 md:mt-1 relative bg-gray-50 text-gray-900 py-10 px-6 md:px-12 mb-0 playfair-400"> {/* Removed excessive padding and margin-bottom */}
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url("https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw65.png")'
          }}
        ></div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="text-center md:text-left flex flex-col md:flex-row items-start justify-between gap-12">
            {/* Left Side: Contact Heading and Image */}
            <div className="mt-4 flex flex-col md:w-1/2 space-y-6">
              <div id="1">
                <h1 className="mt-8 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 transform transition duration-500 ease-in-out hover:scale-105">
                  Get in <span className="text-blue-600">Touch</span>
                </h1>
                <p className="text-lg md:text-xl font-light max-w-3xl mx-auto md:mx-0 text-gray-600">
                  We’re here to help! Drop us a message, and we’ll get back to you shortly. We’re excited to hear from you.
                </p>
              </div>

              <div id="2">
  <img 
    src="https://res.cloudinary.com/dvlh2e6d0/image/upload/v1743748791/ddpq07gmdizffcn94ixz.png" 
    alt="Factory" 
  />
</div>
            </div>

            {/* Right Side: Contact Form */}
            <div id="3" className="mt-16 relative md:w-1/2 w-full">
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 md:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full h-12 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full h-12 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full h-12 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full h-12 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="w-full h-36 border-2 border-gray-300 rounded-md px-4 py-2 bg-gray-50 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  disabled={isSubmitting} // Disable the button while submitting
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Icon: Position it absolutely */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 100 }}>
        <WhatsAppIcon />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
