import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹12,999",
    tag: "Best for Individuals",
    description: "Perfect for personal brands & small businesses.",
    features: [
      "1–3 Pages Website",
      "Modern UI Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "7 Days Delivery",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹24,999",
    tag: "Most Popular",
    description: "Ideal for startups & growing brands.",
    features: [
      "Up to 6 Pages",
      "Premium UI/UX Design",
      "Mobile + Tablet Responsive",
      "SEO Optimized Structure",
      "Speed Optimization",
      "Animations & Interactions",
      "Contact + CTA Sections",
      "10–14 Days Delivery",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tag: "For Serious Scale",
    description: "Custom solutions for high-growth businesses.",
    features: [
      "Unlimited Pages",
      "Custom UI/UX System",
      "Advanced Animations",
      "CMS / Admin Panel",
      "API Integrations",
      "Performance Optimization",
      "SEO + Analytics",
      "Priority Support",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className=" py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 mt-4">
            Choose a plan that fits your business goals. No hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border backdrop-blur transition
                ${
                  plan.highlight
                    ? "bg-gradient-to-b from-white/10 to-white/5 border-white/30 scale-[1.03]"
                    : "bg-white/5 border-white/10"
                }
              `}
            >
              {/* Tag */}
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full mb-6
                  ${
                    plan.highlight
                      ? "bg-white text-black"
                      : "bg-white/10 text-gray-300"
                  }
                `}
              >
                {plan.tag}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white">
                {plan.name}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 mb-8">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-400 text-sm"> / project</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl text-sm font-medium transition
                  ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
