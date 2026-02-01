"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  cardmarket?: {
    prices?: {
      averageSellPrice?: number;
    };
  };
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [featuredCard, setFeaturedCard] = useState<PokemonCard | null>(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch(
          'https://api.pokemontcg.io/v2/cards?q=name:charizard rarity:"Special Illustration Rare"&pageSize=1'
        );
        const data = await response.json();
        if (data.data?.[0]) {
          setFeaturedCard(data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching card:", error);
      }
    };
    fetchCard();
  }, []);

  const features = [
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Verified Authenticity",
      description:
        "Every single card is professionally authenticated and stored in secure, climate-controlled facilities.",
      gradient: "from-emerald-500 to-teal-500",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Instant Buyback",
      description:
        "Changed your mind? Sell any card back at fair market value within 7 days, guaranteed.",
      gradient: "from-blue-500 to-cyan-500",
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
      title: "Secure Vault Storage",
      description:
        "Your collection stays protected in our insured vault until you are ready to ship or sell.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
            Why Choose Crowns Cards
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            The smarter way to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              collect
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Experience the thrill of opening packs with the security of knowing
            every card is real, valued fairly, and ready to be yours.
          </p>
        </motion.div>

        {/* Main Feature - Card Opening */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative glass rounded-3xl p-8 md:p-12 mb-16 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Rip packs, reveal treasures
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Every pack contains authenticated cards with real market value.
                Open packs featuring the latest sets and chase those rare pulls
                — each card you reveal is already yours to keep, sell, or ship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://app.crownscards.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Start Opening
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
                </a>
              </div>
            </div>

            {/* Interactive Card Display */}
            <div className="flex-1 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="relative"
                style={{ perspective: "1000px" }}
              >
                {/* Glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl" />

                {/* Card */}
                <div className="relative w-56 md:w-72 aspect-[2.5/3.5] rounded-2xl overflow-hidden shadow-2xl">
                  {featuredCard ? (
                    <Image
                      src={featuredCard.images.large}
                      alt={featuredCard.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 224px, 288px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                  )}

                  {/* Price tag */}
                  {featuredCard && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3"
                    >
                      <div className="text-xs text-slate-400">Market Value</div>
                      <div className="text-xl font-bold text-white">
                        $
                        {(
                          featuredCard.cardmarket?.prices?.averageSellPrice ||
                          89.99
                        ).toFixed(2)}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 group"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How it{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              works
            </span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Pack",
                description:
                  "Browse our selection of sealed packs from the latest TCG sets.",
              },
              {
                step: "02",
                title: "Rip & Reveal",
                description:
                  "Open your pack digitally and discover which cards you have pulled.",
              },
              {
                step: "03",
                title: "Collect or Cash Out",
                description:
                  "Add cards to your vault or instantly sell them at fair market value.",
              },
              {
                step: "04",
                title: "Ship Anytime",
                description:
                  "Request delivery whenever you want — your cards arrive safely to your door.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center relative"
              >
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent" />
                )}

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20 mb-6">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 text-center glass rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start your collection?
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of collectors opening packs and building their
              dream collections.
            </p>
            <motion.a
              href="https://app.crownscards.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Free
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
