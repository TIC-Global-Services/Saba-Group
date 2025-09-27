import React, { useState } from "react";
import { MapPin, Twitter, Instagram } from "lucide-react";
import { ContactFromBg } from "@/assets/Index";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "Doe",
    email: "",
    phone: "+1 012 3456 789",
    subject: "General Inquiry",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#ECEFF3] py-16 px-4 h-auto">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Main Contact Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Dark Section */}
            <div
              className="lg:w-2/5 bg-black text-white p-8 lg:p-12 relative overflow-hidden"
              style={{
                backgroundImage: `
                        url(${ContactFromBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">
                  Get to know More about us!
                </h2>
                <p className="text-gray-300 mb-8">
                  Say something to start a live chat!
                </p>

                {/* Contact Information */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 mt-1 text-white flex-shrink-0" />
                    <div>
                      <p className="text-sm leading-relaxed">
                        No 1701 & 1702 Phase II
                        <br />
                        46th Street ,Sathuvachari
                        <br />
                        Vellore 632 009
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 mt-1 text-white flex-shrink-0" />
                    <div>
                      <p className="text-sm leading-relaxed">
                        AJ-122, 9th Main Road, Anna Nagar,
                        <br />
                        Chennai, Tamil Nadu – 600040, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-12">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-200 focus:border-green-600 outline-none py-2 transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-200 focus:border-green-600 outline-none py-2 transition-colors bg-transparent"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-200 focus:border-green-600 outline-none py-2 transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-200 focus:border-green-600 outline-none py-2 transition-colors bg-transparent"
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Select Subject?
                  </label>
                  <div className="flex space-x-8">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="subject"
                        value="General Inquiry"
                        checked={formData.subject === "General Inquiry"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        General Inquiry
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="subject"
                        value="Career"
                        checked={formData.subject === "Career"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">Career</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message.."
                    rows={4}
                    className="w-full border-b-2 border-gray-200 focus:border-green-600 outline-none py-2 resize-none transition-colors bg-transparent"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-6">
                  <button
                    onClick={handleSubmit}
                    className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
