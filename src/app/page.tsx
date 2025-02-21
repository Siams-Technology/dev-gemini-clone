import type { Metadata } from "next";
import Image from "next/image";
import { FaBrain, FaRocket, FaChartLine, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "QuBa AI: Experience the Future of AI-Powered Marketing",
  description:
    "QuBa AI is a revolutionary AI-powered solution for streamlining marketing workflows, offering intelligent content generation and automated optimization.",
};

const features = [
  {
    icon: FaBrain,
    title: "Intelligent Content Generation",
    description: "Create high-quality, engaging content with AI-powered assistance.",
  },
  {
    icon: FaRocket,
    title: "Automated Workflow Optimization",
    description: "Streamline your marketing processes for maximum efficiency.",
  },
  {
    icon: FaChartLine,
    title: "Real-time Data Analysis",
    description: "Gain actionable insights from your marketing data in real-time.",
  },
  {
    icon: FaCogs,
    title: "Seamless Integration",
    description: "Easily integrate with your existing marketing tools and platforms.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-black/30 shadow-lg fixed w-full top-0 z-50">
        <h1 className="text-2xl font-bold">QuBa AI</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">Documentation</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">Try Now</button>
        </div>
      </nav>

      {/* Dashboard Snippet */}
      <section className="flex justify-center items-center mt-24 px-4">
        <Image src="/dashboard-snippet.png" alt="Dashboard Preview" width={800} height={450} className="rounded-lg shadow-xl" />
      </section>

      {/* Features Section */}
      <section className="mt-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-black/40 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/10 text-center hover:scale-105 transition transform"
          >
            <feature.icon className="text-4xl mx-auto text-green-400" />
            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
