"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L18.5 8 12 11.5 5.5 8 12 4.5zM4 9.5l7 3.5v6.5l-7-3.5V9.5zm16 6.5l-7 3.5V13l7-3.5v6.5z" />
                  </svg>
                </div>
              </div>
              <span className="text-lg font-bold">Crowns Cards</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Open digital packs, collect authentic cards, and build your dream
              collection.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://app.crownscards.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Open App
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://app.crownscards.org/legal/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://app.crownscards.org/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://app.crownscards.org/legal/responsible-purchasing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Responsible Purchasing
                </a>
              </li>
              <li>
                <a
                  href="https://app.crownscards.org/legal/regulatory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  FAQ &amp; Regulatory
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">
                <a
                  href="mailto:support@crownscards.org"
                  className="hover:text-blue-400 transition-colors"
                >
                  support@crownscards.org
                </a>
              </li>
              <li className="text-slate-400 text-sm">
                2106 House Ave Ste 456
                <br />
                Cheyenne, WY 82001
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Crowns Cards, LLC. All Rights
              Reserved.
            </p>
            <p className="text-slate-600 text-xs text-center md:text-right max-w-xl">
              Crowns Cards is for users aged 18+. The platform may be restricted
              in certain jurisdictions. Please review our terms and your local
              laws before using our services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
