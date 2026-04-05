import { motion } from "motion/react";
import { BookOpen, GraduationCap, Trophy, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Science & Math",
    desc: "A comprehensive program focusing on the fundamental principles of physics, chemistry, biology, and mathematics.",
    features: ["Expert Faculty", "In-depth Study Material", "Regular Assessments"],
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-blue-600",
  },
  {
    title: "Foundation Courses",
    desc: "Designed for students in classes 8th to 10th to build a strong foundation for future competitive examinations.",
    features: ["Conceptual Clarity", "Problem Solving Skills", "Weekly Tests"],
    icon: <GraduationCap className="w-8 h-8" />,
    color: "bg-indigo-600",
  },
  {
    title: "Competitive Exams",
    desc: "Specialized coaching for JEE (Main & Advanced), NEET, and other national-level entrance exams.",
    features: ["Mock Tests", "Doubt Clearing Sessions", "Rank Improvement Program"],
    icon: <Trophy className="w-8 h-8" />,
    color: "bg-purple-600",
  },
  {
    title: "Skill Development",
    desc: "Programs aimed at enhancing analytical thinking, logical reasoning, and effective communication skills.",
    features: ["Interactive Workshops", "Soft Skills Training", "Personality Development"],
    icon: <Users className="w-8 h-8" />,
    color: "bg-pink-600",
  },
];

export default function Courses() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-blue-600">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Choose from our wide range of programs designed to help you achieve academic excellence and prepare for a successful future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col"
            >
              <div className={`p-12 ${course.color} text-white space-y-6`}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  {course.icon}
                </div>
                <h2 className="text-3xl font-bold">{course.title}</h2>
                <p className="text-lg text-white/80 leading-relaxed">{course.desc}</p>
              </div>
              <div className="p-12 flex-grow space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Key Features:</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {course.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Course Section */}
        <div className="mt-32 p-12 bg-blue-50 rounded-[3rem] border-2 border-blue-100 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-gray-900">Need a Customized Learning Plan?</h2>
            <p className="text-lg text-gray-600">
              We understand that every student is unique. Contact our academic advisors to create a personalized learning path tailored to your goals.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
