import { motion } from "motion/react";
import { CheckCircle2, Target, Eye, Heart, ShieldCheck, Zap } from "lucide-react";

const values = [
  { title: "Excellence", desc: "Striving for the highest standards in education and student support.", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Innovation", desc: "Adopting modern teaching methodologies and technology for better learning.", icon: <Zap className="w-6 h-6" /> },
  { title: "Integrity", desc: "Fostering an environment of honesty, respect, and ethical conduct.", icon: <Heart className="w-6 h-6" /> },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              About <span className="text-blue-600">Shekhawati</span> Science Academy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded with a vision to revolutionize science education in the Shekhawati region, our academy has become a beacon of knowledge and excellence. We believe that every student has the potential to achieve greatness when provided with the right guidance and environment.
            </p>
            <div className="space-y-4">
              {["Expert Faculty", "Modern Infrastructure", "Result-Oriented Approach", "Personalized Attention"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/about/800/1000"
                alt="About Us"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-50 max-w-xs">
              <p className="text-4xl font-extrabold text-blue-600 mb-2">10+</p>
              <p className="text-gray-600 font-medium">Years of educational excellence in the region.</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-12 bg-blue-600 rounded-[3rem] text-white space-y-6 shadow-2xl shadow-blue-200"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              To empower students with deep scientific knowledge and analytical skills, enabling them to excel in their academic pursuits and contribute meaningfully to society.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-12 bg-white rounded-[3rem] text-gray-900 space-y-6 shadow-xl border border-gray-100"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be a world-class center of excellence in science education, recognized for nurturing innovative thinkers and future leaders who shape the world through knowledge.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="p-10 bg-gray-50 rounded-[2.5rem] space-y-6 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
