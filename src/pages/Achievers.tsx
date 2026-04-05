import { motion } from "motion/react";
import { Trophy, Star, Award, Medal } from "lucide-react";

const achievers = [
  { name: "Ms Chinki Khatik", rank: "Top Ranker", img: "https://picsum.photos/seed/student1/400/400" },
  { name: "Mr Bhuvanesh Jarwal", rank: "Top Ranker", img: "https://picsum.photos/seed/student2/400/400" },
  { name: "Mr Shivam Lohar", rank: "Top Ranker", img: "https://picsum.photos/seed/student3/400/400" },
  { name: "Mr Vijay Dhaker", rank: "Top Ranker", img: "https://picsum.photos/seed/student4/400/400" },
  { name: "Ms Priya Sahu", rank: "Top Ranker", img: "https://picsum.photos/seed/student5/400/400" },
  { name: "Mr Bhupendra Patidar", rank: "Top Ranker", img: "https://picsum.photos/seed/student6/400/400" },
  { name: "Mr Shiddharth Goswami", rank: "Top Ranker", img: "https://picsum.photos/seed/student7/400/400" },
  { name: "Ms Anuj Dhakar", rank: "Top Ranker", img: "https://picsum.photos/seed/student8/400/400" },
  { name: "Ms Anita Jat", rank: "Top Ranker", img: "https://picsum.photos/seed/student9/400/400" },
  { name: "Mr Tanishka Gaur", rank: "Top Ranker", img: "https://picsum.photos/seed/student10/400/400" },
  { name: "Mr Tanmay Shukla", rank: "Top Ranker", img: "https://picsum.photos/seed/student11/400/400" },
];

export default function Achievers() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold tracking-wide uppercase">
            <Trophy className="w-4 h-4 fill-current" />
            <span>Hall of Fame</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-blue-600">Achievers</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Celebrating the hard work, dedication, and success of our top rankers who have made us proud.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {achievers.map((achiever, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={achiever.img}
                  alt={achiever.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-white font-medium text-lg leading-tight">
                    "Success is the result of preparation, hard work, and learning from failure."
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{achiever.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Medal className="w-4 h-4 text-blue-600" />
                  <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">{achiever.rank}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Quote Section */}
        <div className="mt-32 p-16 bg-gray-900 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <Award className="w-16 h-16 text-blue-500 mx-auto" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight italic">
              "The future belongs to those who believe in the beauty of their dreams."
            </h2>
            <p className="text-xl text-gray-400">— Eleanor Roosevelt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
