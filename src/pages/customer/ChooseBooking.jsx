import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  CalendarDays,
  Briefcase,
  Clock,
  Sparkles,
  Users,
  Wallet,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MessageCircleQuestion,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";

export default function ChooseBooking() {
  const navigate = useNavigate();

  const faqs = [
    {
      q: "Can I switch between booking types later?",
      a: "Yes. You can start with Type A or Type B and switch at any time—your details remain saved.",
    },
    {
      q: "Is there any extra fee for Type B?",
      a: "No extra platform fee by default. If you configure corporate pricing later, it will be shown clearly.",
    },
    {
      q: "How long does each flow take?",
      a: "Type A is a guided flow (5–7 minutes). Type B is a quick flow (2–3 minutes) aimed at instant or corporate needs.",
    },
    {
      q: "Will a planner assist me?",
      a: "Absolutely. Our team can step in on chat or call if you need help finalising your plan.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      <header className="h-16" />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl overflow-hidden relative">
          {/* optional decorative texture if you add public/hero-texture.png */}
          <div className="bg-[url('/hero-texture.png')] bg-cover bg-center">
            <div className="bg-black/35">
              <div className="py-14 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow">
                  Choose Your Booking Type
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto">
                  Two simple paths. Same promise: <span className="font-semibold">We curate, you celebrate.</span>
                </p>
                <div className="mt-5 text-white/80 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" /> Secure •
                    <Clock className="h-4 w-4" /> Fast •
                    <Users className="h-4 w-4" /> Expert‑led
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two primary options */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 mt-10">
          {/* Type A */}
          <div className="group rounded-3xl border border-amber-200/70 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
            <div className="p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex p-3 rounded-2xl bg-amber-50 border border-amber-200">
                  <CalendarDays className="h-6 w-6 text-amber-700" />
                </span>
                <h2 className="text-2xl font-bold text-[#6B3A1E]">Booking Type A</h2>
              </div>
              <p className="mt-3 text-[#6B3A1E]/80">
                Follow the current guided flow with requirements, budget, and curated vendor suggestions.
              </p>

              {/* mini-steps */}
              <ol className="mt-5 space-y-2 text-sm text-[#6B3A1E]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Fill event details (date, guests, budget)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Get matched vendor shortlists
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Chat & confirm bookings
                </li>
              </ol>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate("/plan-event/form")}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-amber-600 text-white font-medium group-hover:bg-amber-700 transition"
                >
                  Continue to Current Flow <ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-xs text-[#6B3A1E]/60">
                  Ideal for <strong>weddings, parties, multi‑vendor</strong> events.
                </span>
              </div>
            </div>
          </div>

          {/* Type B */}
          <div className="group rounded-3xl border border-amber-200/70 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
            <div className="p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex p-3 rounded-2xl bg-amber-50 border border-amber-200">
                  <Briefcase className="h-6 w-6 text-amber-700" />
                </span>
                <h2 className="text-2xl font-bold text-[#6B3A1E]">Booking Type B</h2>
              </div>
              <p className="mt-3 text-[#6B3A1E]/80">
                Alternate, quicker booking (great for corporate or instant needs). Configure this route as required.
              </p>

              {/* mini-steps */}
              <ol className="mt-5 space-y-2 text-sm text-[#6B3A1E]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Choose package / service bundle
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Confirm slots & add PO/reference
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Instant confirmation & single invoice
                </li>
              </ol>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate("/booking/alt")}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-amber-600 text-white font-medium group-hover:bg-amber-700 transition"
                >
                  Try Alternate Flow <ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-xs text-[#6B3A1E]/60">
                  Ideal for <strong>corporates, offsites, quick turnarounds</strong>.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Who should choose what */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={<Users className="h-6 w-6 text-amber-700" />}
            title="Multi‑Vendor Events"
            text="If you need decorators, caterers, DJs and more—Type A guides you end‑to‑end."
          />
          <Card
            icon={<Clock className="h-6 w-6 text-amber-700" />}
            title="Tight Timeline"
            text="Need something locked in quickly? Type B helps you confirm faster."
          />
          <Card
            icon={<Wallet className="h-6 w-6 text-amber-700" />}
            title="Budget‑First"
            text="Both flows respect budgets; Type A shows progressive vendor matches with quotes."
          />
        </div>

        {/* Comparison */}
        <div className="mt-12 rounded-3xl bg-white border border-amber-200/70 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-[#6B3A1E] flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-700" /> Quick Comparison
          </h3>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-amber-100 p-5">
              <h4 className="font-semibold text-[#6B3A1E]">Type A — Guided</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#6B3A1E]/85">
                <li>• Requirement form with fine‑grained details</li>
                <li>• Smart vendor recommendations & shortlists</li>
                <li>• Best for weddings / social events</li>
                <li>• 5–7 mins to complete</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-100 p-5">
              <h4 className="font-semibold text-[#6B3A1E]">Type B — Quick / Corporate</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#6B3A1E]/85">
                <li>• Pick packages or pre‑negotiated bundles</li>
                <li>• Faster confirmation & single invoice</li>
                <li>• Suited to offsites, launches, meetups</li>
                <li>• 2–3 mins to complete</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/plan-event/form"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-amber-600 text-white font-medium hover:bg-amber-700 transition"
            >
              Start Type A <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/booking/alt"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-white border border-amber-300 text-[#6B3A1E] font-medium hover:bg-amber-50 transition"
            >
              Start Type B <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-[#6B3A1E] flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-amber-700" /> Frequently Asked Questions
          </h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-white border border-amber-200/70 p-5">
                <p className="font-semibold text-[#6B3A1E]">{f.q}</p>
                <p className="mt-2 text-sm text-[#6B3A1E]/85">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support footer */}
        <div className="mt-14 mb-20 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white border border-amber-200/70 px-5 py-3 text-[#6B3A1E]">
            <MessageCircleQuestion className="h-5 w-5 text-amber-700" />
            Not sure what to pick?
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 font-semibold text-amber-700 hover:underline"
            >
              Talk to us <PhoneCall className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------ Small presentational card ------------ */
function Card({ icon, title, text }) {
  return (
    <div className="rounded-3xl bg-white border border-amber-200/70 p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex p-3 rounded-2xl bg-amber-50 border border-amber-200">
          {icon}
        </span>
        <h4 className="text-lg font-bold text-[#6B3A1E]">{title}</h4>
      </div>
      <p className="mt-3 text-[#6B3A1E]/80">{text}</p>
    </div>
  );
}
