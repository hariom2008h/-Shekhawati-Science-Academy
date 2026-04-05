import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! Our team will contact you shortly.");
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions? We're here to help. Reach out to us for any inquiries about our courses, admissions, or anything else.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 group hover:bg-blue-600 transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-blue-50 transition-colors">
                    123 Academy Road, Shekhawati Region, Rajasthan, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 group hover:bg-indigo-600 transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">Call Us</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-indigo-50 transition-colors">
                    +91 98765 43210 <br />
                    +91 98765 43211
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 bg-purple-50 rounded-[2.5rem] border border-purple-100 group hover:bg-purple-600 transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-purple-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">Email Us</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-purple-50 transition-colors">
                    info@shekhawatiscience.com <br />
                    admissions@shekhawatiscience.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-gray-900 rounded-[3rem] text-white space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold">Office Hours</h3>
              </div>
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-400 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-50"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-0 transition-all text-gray-900 font-medium"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-0 transition-all text-gray-900 font-medium"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-0 transition-all text-gray-900 font-medium"
                    placeholder="+91 98765 43210"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Interested Course</label>
                  <select
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-0 transition-all text-gray-900 font-medium appearance-none"
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  >
                    <option value="">Select a course</option>
                    <option value="science">Science & Math</option>
                    <option value="foundation">Foundation Courses</option>
                    <option value="competitive">Competitive Exams</option>
                    <option value="skill">Skill Development</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-0 transition-all text-gray-900 font-medium resize-none"
                  placeholder="How can we help you?"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
