import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Briefcase,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function TimelinePicker() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      <header className="h-16" />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl overflow-hidden relative">
          <div className="bg-[url('/hero-texture.png')] bg-cover bg-center">
            <div className="bg-black/35">
              <div className="py-14 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow">
                  Choose Timeline Type
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto">
                  Two simple paths. Same promise:{" "}
                  <span className="font-semibold">We curate, you celebrate.</span>
                </p>
                <div className="mt-5 text-white/80 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" /> Secure •
                    <Clock className="h-4 w-4" /> Fast •
                    <Users className="h-4 w-4" /> Expert-led
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
                <h2 className="text-2xl font-bold text-[#6B3A1E]">
                  Timeline Type A
                </h2>
              </div>
              <p className="mt-3 text-[#6B3A1E]/80">
                Prebuilt Timelines for common event types. Just pick one, tweak as
                needed.
              </p>

              {/* mini-steps */}
              <ol className="mt-5 space-y-2 text-sm text-[#6B3A1E]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Choose event
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Get the timeline
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Make changes
                </li>
              </ol>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate("/prebuilt-timeline")}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-amber-600 text-white font-medium group-hover:bg-amber-700 transition"
                >
                  Continue to Current Flow <ArrowRight className="h-4 w-4" />
                </button>
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
                <h2 className="text-2xl font-bold text-[#6B3A1E]">
                  Timeline Type B
                </h2>
              </div>
              <p className="mt-3 text-[#6B3A1E]/80">
                Alternate, create a timeline from scratch as per your needs.
                Perfect for corporates, offsites, quick turnarounds.
              </p>

              {/* mini-steps */}
              <ol className="mt-5 space-y-2 text-sm text-[#6B3A1E]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Choose custom.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Add events
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-700" /> Instantly get
                  timeline
                </li>
              </ol>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate("/timeline")}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-amber-600 text-white font-medium group-hover:bg-amber-700 transition"
                >
                  Try Alternate Flow <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
