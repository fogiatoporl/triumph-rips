"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Transparency",
      description:
        "Every card, every price, every transaction — completely transparent and verifiable.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Security",
      description:
        "Your cards are stored in insured, climate-controlled vaults with 24/7 monitoring.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Community",
      description:
        "Built by collectors, for collectors. We understand the passion behind every pull.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "Pioneering new ways to collect, trade, and enjoy the hobby we all love.",
    },
  ];

  const stats = [
    { value: "50,000+", label: "Cards Available" },
    { value: "10,000+", label: "Happy Collectors" },
    { value: "99.9%", label: "Satisfaction Rate" },
    { value: "$2M+", label: "Cards Shipped" },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Hero */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
              About Crown Cards
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Reimagining how you{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                collect
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Crown Cards was founded with a simple mission: make collecting
              cards more accessible, transparent, and exciting for everyone.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-3xl p-8 md:p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    We started as collectors ourselves — waiting in lines,
                    hunting through stores, and always wondering if we would
                    ever pull that chase card.
                  </p>
                  <p>
                    Crown Cards was born from the idea that opening packs should
                    be thrilling without the uncertainty. What if every card was
                    authenticated? What if you could always sell at fair value?
                    What if your collection was always secure?
                  </p>
                  <p>
                    Today, we have built exactly that — a platform where
                    collectors can experience the joy of the hunt with the
                    confidence that every card is real, every price is fair, and
                    every transaction is seamless.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-2xl" />
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="grid grid-cols-2 gap-4 p-8 rotate-6">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="w-24 h-32 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-lg border border-blue-500/20"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-12">
              What drives{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                us
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-8 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to join our community?
            </h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Start building your collection with confidence today.
            </p>
            <motion.a
              href="https://app.crowncards.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Collecting
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
