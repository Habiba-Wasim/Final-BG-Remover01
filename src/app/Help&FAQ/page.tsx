// pages/help.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is Remove.bg?",
    answer:
      "Remove.bg is an AI-powered tool that removes backgrounds from images automatically, with stunning precision."
  },
  {
    question: "How can I use this service?",
    answer:
      "Simply upload your image, and our AI will process it instantly. You can then download the result with the background removed."
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All images are deleted from our servers after 24 hours to protect your privacy and data."
  },
  {
    question: "Can I remove backgrounds in bulk?",
    answer:
      "Yes, we offer bulk upload functionality for premium users to process multiple images simultaneously."
  },
  {
    question: "What file formats are supported?",
    answer:
      "You can upload JPG, PNG, or WEBP images. Output is typically in PNG with transparent background."
  }
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen py-20 px-4 md:px-16 lg:px-36">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Help & FAQ</h1>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center p-5 text-left text-gray-800 font-medium focus:outline-none"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
