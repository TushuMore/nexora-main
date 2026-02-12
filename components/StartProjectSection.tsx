"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectTypes = [
  "Business Website",
  "Web Application",
  "eCommerce Store",
  "Portfolio Website",
  "Custom Solution",
];

const budgets = ["₹10k–25k", "₹25k–50k", "₹50k–1L", "₹1L+"];
const timelines = ["ASAP", "1 Month", "2-3 Months", "Flexible"];

export default function StartProjectChat() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const nextStep = () => setStep((prev) => prev + 1);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/start-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          projectType,
          budget,
          timeline,
          description,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error("Submission failed");
      }

      nextStep();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-15rem)] w-full flex items-center justify-center relative overflow-hidden px-6 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 blur-[150px] rounded-full" />
      </div>

      <div className="w-full max-w-2xl text-center">
        <AnimatePresence mode="wait">

          {step === 0 && (
            <MotionWrapper stepKey="step1">
              <h1 className="text-4xl font-bold mb-8">
                👋 Hey! What's your name?
              </h1>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full px-6 py-5 text-lg rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button
                disabled={!name}
                onClick={nextStep}
                className="mt-6 w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition disabled:opacity-40"
              >
                Continue →
              </button>
            </MotionWrapper>
          )}

          {step === 1 && (
            <MotionWrapper stepKey="step2">
              <h1 className="text-4xl font-bold mb-8">
                Nice to meet you, {name}! What are you building?
              </h1>

              <div className="grid grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setProjectType(type);
                      nextStep();
                    }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500 hover:bg-indigo-600/10 transition"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </MotionWrapper>
          )}

          {step === 2 && (
            <MotionWrapper stepKey="step3">
              <h1 className="text-4xl font-bold mb-8">
                What's your budget range?
              </h1>

              <div className="flex flex-wrap justify-center gap-4">
                {budgets.map((b) => (
                  <button
                    key={b}
                    onClick={() => {
                      setBudget(b);
                      nextStep();
                    }}
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-indigo-600/20 hover:border-indigo-500 transition"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </MotionWrapper>
          )}

          {step === 3 && (
            <MotionWrapper stepKey="step4">
              <h1 className="text-4xl font-bold mb-8">
                When do you want to launch?
              </h1>

              <div className="flex flex-wrap justify-center gap-4">
                {timelines.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTimeline(t);
                      nextStep();
                    }}
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-indigo-600/20 hover:border-indigo-500 transition"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </MotionWrapper>
          )}

          {step === 4 && (
            <MotionWrapper stepKey="step5">
              <h1 className="text-4xl font-bold mb-8">
                Tell us more about your idea
              </h1>

              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Describe your project..."
              />

              {error && (
                <p className="text-red-400 mt-3 text-sm">{error}</p>
              )}

              <button
                disabled={loading}
                onClick={handleSubmit}
                className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "🚀 Submit Project"}
              </button>
            </MotionWrapper>
          )}

          {step === 5 && (
            <MotionWrapper stepKey="final">
              <h1 className="text-5xl font-bold mb-6">
                🎉 You're All Set, {name}!
              </h1>

              <p className="text-white/70 text-lg">
                We’ll review your project and contact you within 24 hours.
              </p>

              <div className="mt-10 w-40 h-40 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 blur-3xl opacity-40 rounded-full animate-pulse" />
            </MotionWrapper>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

/* Motion Wrapper (Fixed Key Issue) */
function MotionWrapper({
  children,
  stepKey,
}: {
  children: React.ReactNode;
  stepKey: string;
}) {
  return (
    <motion.div
      key={stepKey}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
