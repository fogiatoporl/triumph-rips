"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

export default function Hero() {
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          'https://api.pokemontcg.io/v2/cards?q=supertype:Pokémon rarity:"Illustration Rare" OR rarity:"Special Illustration Rare"&pageSize=6&orderBy=-set.releaseDate'
        );
        const data = await response.json();
        setCards(data.data || []);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-slate-300">
            Now live — Start collecting today
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="text-white">Collect </span>
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            legendary
          </span>
          <br />
          <span className="text-white">cards </span>
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            instantly
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Open digital packs featuring authentic cards. Build your collection,
          trade at market value, or get them shipped directly to you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="https://app.crownscards.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-500/30"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Open Your First Pack
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </span>
          </motion.a>
          <motion.a
            href="/about"
            className="px-8 py-4 rounded-2xl font-semibold text-lg border border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Card Display */}
        <motion.div variants={itemVariants} className="relative">
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {loading
              ? // Loading skeleton
                [...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative ${
                      i === 2 ? "z-20 scale-110" : "z-10 opacity-70"
                    }`}
                  >
                    <div className="w-32 md:w-44 aspect-[2.5/3.5] bg-slate-800/50 rounded-xl animate-pulse" />
                  </motion.div>
                ))
              : cards.slice(0, 5).map((card, i) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 50, rotateY: -30 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    whileHover={{
                      scale: 1.15,
                      zIndex: 30,
                      rotateY: 10,
                      transition: { duration: 0.3 },
                    }}
                    className={`relative cursor-pointer ${
                      i === 2
                        ? "z-20 scale-105 md:scale-110"
                        : i === 1 || i === 3
                        ? "z-10 opacity-90 scale-95"
                        : "z-0 opacity-60 scale-90 hidden sm:block"
                    }`}
                    style={{ perspective: "1000px" }}
                  >
                    <div className="relative group">
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />

                      {/* Card */}
                      <div className="relative w-32 md:w-44 aspect-[2.5/3.5] rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src={card.images.large}
                          alt={card.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 128px, 176px"
                          priority={i === 2}
                        />

                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </motion.div>
                ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/20 blur-3xl" />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "50K+", label: "Cards Available" },
            { value: "100%", label: "Guaranteed Buyback" },
            { value: "24hr", label: "Fast Shipping" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
