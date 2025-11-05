import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import axios from "axios";

export default function TimelinePicker() {
  const navigate = useNavigate();

  const handleCreateTimeline = async (eventType) => {
    try {
      const token = localStorage.getItem("token"); // authConsumer ke liye agar token stored hai
      const res = await axios.post(
        "https://tendr-backend-75ag.onrender.com/api/timelines",
        {
          title: `My ${eventType} Timeline`,
          description: `Auto-created ${eventType} timeline`,
          eventType,
          items: [],
        },
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      console.log("Timeline created:", res.data);

      // timeline create hone ke baad uski details par redirect kar do
      navigate(`/timeline/${res.data._id}`);
    } catch (err) {
      console.error("Error creating timeline:", err.response?.data || err.message);
      alert("Failed to create timeline!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="flex flex-col items-center w-full max-w-5xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              Choose Timeline Type
            </span>
          </h1>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Two simple paths. Same promise:{" "}
            <span className="font-semibold">We curate, you celebrate.</span>
          </p>
          <div className="mt-6 w-16 h-1 bg-amber-600 mx-auto rounded-full" />
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Timeline Type A */}
          <div className="rounded-xl border bg-white p-8 shadow-md hover:shadow-lg transition flex flex-col">
            <div className="flex items-center gap-3">
              <span className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                <CalendarDays className="h-8 w-8 text-amber-700" />
              </span>
              <h2 className="text-xl font-semibold text-gray-800">
                Timeline Type A
              </h2>
            </div>
            <p className="mt-4 text-base text-gray-600 flex-grow">
              Prebuilt Timelines for common events. Pick one and tweak as needed.
            </p>

            {/* mini steps */}
            <ol className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-700" /> Choose event
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-700" /> Get timeline
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-700" /> Make changes
              </li>
            </ol>

            <button
              onClick={() => handleCreateTimeline("wedding")}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-amber-600 text-white text-base font-medium hover:bg-amber-700 transition w-full"
            >
              Continue <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Timeline Type B */}
          <div className="rounded-xl border bg-white p-8 shadow-md hover:shadow-lg transition flex flex-col">
            <div className="flex items-center gap-3">
              <span className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                <Briefcase className="h-8 w-8 text-amber-700" />
              </span>
              <h2 className="text-xl font-semibold text-gray-800">
                Timeline Type B
              </h2>
            </div>
            <p className="mt-4 text-base text-gray-600 flex-grow">
              Create a custom timeline from scratch. Perfect for corporates,
              offsites, or quick turnarounds.
            </p>

            {/* mini steps */}
            <ol className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-700" /> Choose custom
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-700" /> Add events
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-700" /> Get instant
                timeline
              </li>
            </ol>

            <button
              onClick={() => handleCreateTimeline("custom")}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-amber-600 text-white text-base font-medium hover:bg-amber-700 transition w-full"
            >
              Continue <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
