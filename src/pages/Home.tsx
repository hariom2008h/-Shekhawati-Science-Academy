import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Users, BookOpen, Trophy, CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";

const achievers = [
  { name: "Chinki Khatik", rank: "Top Ranker", img: "https://picsum.photos/seed/student1/300/300" },
  { name: "Bhuvanesh Jarwal", rank: "Top Ranker", img: "https://picsum.photos/seed/student2/300/300" },
  { name: "Shivam Lohar", rank: "Top Ranker", img: "https://picsum.photos/seed/student3/300/300" },
  { name: "Vijay Dhaker", rank: "Top Ranker", img: "https://picsum.photos/seed/student4/300/300" },
];

const courses = [
  { title: "Science & Math", desc: "Comprehensive foundation in core science subjects.", icon: <BookOpen className="w-6 h-6" /> },
  { title: "Foundation Courses", desc: "Building strong basics for future competitive exams.", icon: <GraduationCap className="w-6 h-6" /> },
  { title: "Competitive Exams", desc: "Specialized coaching for JEE, NEET, and more.", icon: <Trophy className="w-6 h-6" /> },
  { title: "Skill Development", desc: "Enhancing analytical and problem-solving skills.", icon: <Users className="w-6 h-6" /> },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase">
                <Star className="w-4 h-4 fill-current" />
                <span>Excellence in Education</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                Read, Dream, <br />
                <span className="text-blue-600">Achieve</span> Together
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Shekhawati Science Academy is dedicated to building brighter futures through quality education and expert guidance. Join us on a journey of knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/face${i}/100/100`}
                      className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                      alt="Student"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">500+ Students</p>
                  <p className="text-gray-500">Already joined our academy</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://picsum.photos/seed/academy/800/1000"
                  alt="Academy Life"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 flex items-center gap-4"
              >
                <div className="bg-green-100 p-3 rounded-2xl">
                  <Trophy className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-500">Success Rate</p>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 flex items-center gap-4"
              >
                <div className="bg-orange-100 p-3 rounded-2xl">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Expert</p>
                  <p className="text-sm text-gray-500">Faculty Team</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Overview</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Building Brighter Futures Together
            </p>
            <p className="text-lg text-gray-600">
              Our expertise to deliver exceptional quality education is what sets us apart. We focus on holistic development and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievers Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Achievers</h2>
              <p className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Top Rankers of the Year
              </p>
            </div>
            <Link
              to="/achievers"
              className="px-6 py-3 bg-white text-blue-600 border border-blue-100 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2"
            >
              View All Achievers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievers.map((achiever, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-square rounded-3xl overflow-hidden mb-6">
                  <img
                    src={achiever.img}
                    alt={achiever.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center pb-4">
                  <h3 className="text-xl font-bold text-gray-900">{achiever.name}</h3>
                  <p className="text-blue-600 font-medium">{achiever.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Ready to Shape Your Future?
              </h2>
              <p className="text-xl text-blue-100">
                Join Shekhawati Science Academy today and experience a world-class learning environment designed for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/courses"
                  className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all border border-blue-500"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
