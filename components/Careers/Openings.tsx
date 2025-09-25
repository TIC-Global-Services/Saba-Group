"use client";
import { X, Upload, Mail, Phone, User, Circle, Briefcase } from "lucide-react";
import React, { useState } from "react";

const Openings = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null as File | null,
    coverLetter: "",
  });

  const currentOpenings = [
    {
      role: "Sales & Marketing",
      location: "Chennai",
      experience: "2+ Years",
      applyLink: "#",
      jobDesc:
        "We are looking for a dynamic Sales & Marketing professional to drive business growth and expand our market presence. The ideal candidate will have experience in B2B sales, digital marketing strategies, and client relationship management.",
      responsibilities: [
        "Develop and execute comprehensive sales and marketing strategies",
        "Build and maintain relationships with key clients and stakeholders",
        "Identify new business opportunities and market segments",
        "Create compelling marketing campaigns and promotional materials",
        "Analyze market trends and competitor activities",
        "Collaborate with cross-functional teams to achieve targets",
      ],
      requirements: [
        "Bachelor's degree in Marketing, Business, or related field",
        "2+ years of experience in sales and marketing",
        "Strong communication and presentation skills",
        "Proficiency in CRM software and digital marketing tools",
        "Results-driven with a track record of meeting targets",
      ],
    },
    {
      role: "Supply Chain & Logistics",
      location: "Chennai",
      experience: "2+ Years",
      applyLink: "#",
      jobDesc:
        "Join our logistics team to optimize supply chain operations and ensure efficient product delivery. This role requires expertise in inventory management, vendor relations, and process optimization.",
      responsibilities: [
        "Manage end-to-end supply chain operations",
        "Coordinate with suppliers, vendors, and distribution partners",
        "Optimize inventory levels and reduce operational costs",
        "Implement logistics strategies to improve delivery efficiency",
        "Monitor and analyze supply chain performance metrics",
        "Ensure compliance with safety and quality standards",
      ],
      requirements: [
        "Bachelor's degree in Supply Chain, Logistics, or related field",
        "2+ years of experience in supply chain management",
        "Knowledge of ERP systems and logistics software",
        "Strong analytical and problem-solving skills",
        "Experience in vendor management and negotiations",
      ],
    },
    {
      role: "Finance & Administration",
      location: "Chennai",
      experience: "2+ Years",
      applyLink: "#",
      jobDesc:
        "We're seeking a detail-oriented Finance & Administration professional to manage financial operations, budgeting, and administrative functions while ensuring regulatory compliance.",
      responsibilities: [
        "Manage financial planning, budgeting, and forecasting",
        "Prepare financial reports and analysis for management",
        "Oversee accounts payable, receivable, and general ledger",
        "Ensure compliance with financial regulations and policies",
        "Coordinate administrative functions and office operations",
        "Support audit processes and tax preparation",
      ],
      requirements: [
        "Bachelor's degree in Finance, Accounting, or related field",
        "2+ years of experience in finance and administration",
        "Proficiency in financial software and MS Excel",
        "Knowledge of accounting principles and regulations",
        "Strong attention to detail and organizational skills",
      ],
    },
    {
      role: "Production & Quality Control",
      location: "Chennai",
      experience: "2+ Years",
      applyLink: "#",
      jobDesc:
        "Lead our production and quality control initiatives to maintain the highest standards of product quality while optimizing manufacturing processes and ensuring safety compliance.",
      responsibilities: [
        "Oversee production planning and scheduling",
        "Implement and maintain quality control procedures",
        "Monitor production metrics and identify improvements",
        "Ensure compliance with safety and environmental standards",
        "Train production staff on quality procedures",
        "Collaborate with R&D on process optimization",
      ],
      requirements: [
        "Bachelor's degree in Engineering, Chemistry, or related field",
        "2+ years of experience in production and quality control",
        "Knowledge of quality management systems (ISO 9001)",
        "Experience with production planning software",
        "Strong understanding of safety protocols",
      ],
    },
    {
      role: "Human Resources",
      location: "Chennai",
      experience: "2+ Years",
      applyLink: "#",
      jobDesc:
        "Join our HR team to drive talent acquisition, employee engagement, and organizational development initiatives while fostering a positive work culture aligned with company values.",
      responsibilities: [
        "Manage recruitment and talent acquisition processes",
        "Develop and implement HR policies and procedures",
        "Handle employee relations and performance management",
        "Coordinate training and development programs",
        "Administer compensation and benefits programs",
        "Ensure compliance with labor laws and regulations",
      ],
      requirements: [
        "Bachelor's degree in Human Resources, Psychology, or related field",
        "2+ years of experience in human resources",
        "Knowledge of HR software and applicant tracking systems",
        "Strong interpersonal and communication skills",
        "Understanding of labor laws and HR best practices",
      ],
    },
  ];

  const handleViewMore = (job: any) => {
    setSelectedJob(job);
    setShowJobDetails(true);
  };

  const handleApplyNow = (job: any) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setApplicationData((prev) => ({
        ...prev,
        resume: e.target.files![0],
      }));
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", applicationData);
    // TODO: API call here

    setShowApplicationForm(false);
    setApplicationData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      resume: null,
      coverLetter: "",
    });
    alert("Application submitted successfully!");
  };

  const closeModal = () => {
    setShowJobDetails(false);
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  return (
    <div className="px-6 md:px-14 py-10 md:py-20">
      {/* Heading */}
      <div className="flex flex-col items-center mx-auto space-y-3">
        <p className="bg-[#F8F8F8] pl-4 pr-6 py-2 rounded-xl flex items-center gap-2">
          <Circle fill="black" size={10} />
          Careers
        </p>
        <h1 className="text-secondary text-3xl md:text-4xl font-medium text-center">
          Start Your Career Journey Here
        </h1>
      </div>

      {/* Job List */}

      {currentOpenings.length === 0 ? (
        <div className="text-center text-gray-600 py-20">
          <p className="text-lg md:text-xl font-medium">
            Currently, there are no available openings.
          </p>
          <p className="text-gray-500 mt-2">
            Please check back later or follow us for updates.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 py-10 md:py-16">
          {currentOpenings.map((opening, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:justify-between border-b border-gray-300 space-y-4 md:space-y-0 py-4 md:py-6"
            >
              <div className="space-y-3 md:space-y-4 flex-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary font-medium leading-tight">
                  {opening.role}
                </h1>
                <div className="space-y-2">
                  <p className="text-base md:text-lg flex items-center gap-2">
                    📍 Location: {opening.location}
                  </p>
                  <p className="text-base md:text-lg flex items-center gap-2">
                    👜 Experience: {opening.experience}
                  </p>
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-between gap-4 md:gap-2 md:min-w-[140px]">
                <button
                  onClick={() => handleApplyNow(opening)}
                  className="bg-secondary hover:bg-secondary/90 text-white font-medium px-4 md:px-6 py-2 rounded-full transition-colors duration-200 text-sm md:text-base"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => handleViewMore(opening)}
                  className="text-secondary hover:text-secondary/90 underline font-medium transition-colors duration-200 text-sm md:text-base"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Job Details Modal */}
      {showJobDetails && selectedJob && (
        <div data-lenis-prevent className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                  {selectedJob.role}
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                  <span className="flex items-center gap-2">
                    📍
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-2">
                    👜
                    {selectedJob.experience}
                  </span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Job Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedJob.jobDesc}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map(
                    (resp: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map(
                    (req: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setShowJobDetails(false);
                    setShowApplicationForm(true);
                  }}
                  className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex-1 sm:flex-none"
                >
                  Apply for this Position
                </button>
                <button
                  onClick={closeModal}
                  className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div data-lenis-prevent className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <form onSubmit={handleSubmitApplication} className="flex flex-col">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-secondary mb-1">
                    Apply Now
                  </h2>
                  <p className="text-gray-600">
                    {selectedJob.role} - {selectedJob.location}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User size={16} className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={applicationData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone size={16} className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Briefcase size={16} className="inline mr-2" />
                      Years of Experience *
                    </label>
                    <select
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 outline-none transition-colors"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Upload size={16} className="inline mr-2" />
                    Resume/CV * (PDF, DOC, DOCX)
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-green-50 file:text-secondary/90 hover:file:bg-green-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 outline-none transition-colors resize-none"
                    placeholder="Tell us why you're interested in this position..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex-1 sm:flex-none"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Openings;
