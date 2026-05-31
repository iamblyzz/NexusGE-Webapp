"use client";

import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  builders: string[];
  hasGithub: string;
  hasVercel: string;
  hasSupabase: string;
  problem: string;
  deadline: string;
  discovery: string;
};

const BUILDERS = ["Lovable", "Bolt", "Framer", "Webflow", "Bubble", "V0", "Other"];

export default function IntakeForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    builders: [],
    hasGithub: "",
    hasVercel: "",
    hasSupabase: "",
    problem: "",
    deadline: "",
    discovery: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const toggleBuilder = (b: string) => {
    setForm((prev) => ({
      ...prev,
      builders: prev.builders.includes(b)
        ? prev.builders.filter((x) => x !== b)
        : [...prev.builders, b],
    }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email is required.";
    if (form.builders.length === 0) e.builders = "Select at least one builder.";
    if (!form.problem.trim()) e.problem = "Please describe your issue.";
    if (!form.deadline) e.deadline = "Please select a deadline.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.fullName,
          email: form.email,
          builders: form.builders,
          has_github: form.hasGithub || null,
          has_vercel: form.hasVercel || null,
          has_supabase: form.hasSupabase || null,
          problem: form.problem,
          deadline: form.deadline,
          discovery: form.discovery || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
      return;
    } finally {
      setLoading(false);
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="intake-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-green-500/30 bg-green-500/5 px-8 py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">Request Received</h3>
            <p className="text-slate-300 text-base leading-relaxed max-w-md mx-auto">
              Got it. I&apos;ll review your request and reach out within a few hours to confirm scope and next steps.
            </p>
            <p className="mt-4 text-slate-500 text-sm">
              No payment will be requested until you approve the scope.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="intake-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Submit Your App for Review
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Fill this out and I&apos;ll respond within a few hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Full Name <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 text-sm transition-colors"
            />
            {errors.fullName && <p className="mt-1.5 text-red-400 text-xs">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address <span className="text-blue-500">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="jane@example.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 text-sm transition-colors"
            />
            {errors.email && <p className="mt-1.5 text-red-400 text-xs">{errors.email}</p>}
          </div>

          {/* Builder Checklist */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              What did you build it with? <span className="text-blue-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2.5">
              {BUILDERS.map((b) => (
                <button
                  type="button"
                  key={b}
                  onClick={() => toggleBuilder(b)}
                  className={`px-4 py-2 rounded-md text-sm font-medium border transition-all duration-150 ${
                    form.builders.includes(b)
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
            {errors.builders && <p className="mt-1.5 text-red-400 text-xs">{errors.builders}</p>}
          </div>

          {/* Radio groups */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(
              [
                { key: "hasGithub", label: "GitHub repo?" },
                { key: "hasVercel", label: "Vercel account?" },
                { key: "hasSupabase", label: "Supabase project?" },
              ] as { key: keyof FormData; label: string }[]
            ).map(({ key, label }) => (
              <div key={key}>
                <p className="text-sm font-medium text-slate-300 mb-2">{label}</p>
                <div className="flex gap-3">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name={key}
                        value={opt}
                        checked={form[key] === opt}
                        onChange={() => setForm({ ...form, [key]: opt })}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span className="text-slate-400 text-sm group-hover:text-white transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Problem */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              What&apos;s broken or not working? <span className="text-blue-500">*</span>
            </label>
            <textarea
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
              rows={5}
              placeholder="Describe the issue in as much detail as you can. What were you trying to do? What happens instead? Any error messages?"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 text-sm resize-none transition-colors"
            />
            {errors.problem && <p className="mt-1.5 text-red-400 text-xs">{errors.problem}</p>}
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              When do you need this done? <span className="text-blue-500">*</span>
            </label>
            <select
              value={form.deadline}
              onChange={(e) => setForm({ ...form, deadline: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-600 text-sm transition-colors appearance-none"
            >
              <option value="" disabled>Select a timeline...</option>
              <option value="asap">ASAP — as fast as possible</option>
              <option value="24h">Within 24 hours</option>
              <option value="72h">Within 72 hours</option>
              <option value="1w">Within 1 week</option>
              <option value="flexible">Flexible</option>
            </select>
            {errors.deadline && <p className="mt-1.5 text-red-400 text-xs">{errors.deadline}</p>}
          </div>

          {/* Discovery */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              How did you find us?
            </label>
            <select
              value={form.discovery}
              onChange={(e) => setForm({ ...form, discovery: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-600 text-sm transition-colors appearance-none"
            >
              <option value="">Select an option...</option>
              <option value="google">Google Search</option>
              <option value="twitter">Twitter / X</option>
              <option value="reddit">Reddit</option>
              <option value="linkedin">LinkedIn</option>
              <option value="referral">Referral / Word of Mouth</option>
              <option value="ai-builder">AI Builder Community</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Server error */}
          {submitError && (
            <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {submitError}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 mt-2 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting…
              </>
            ) : (
              "Submit for Review"
            )}
          </button>

          <p className="text-center text-slate-500 text-xs">
            No payment until scope is confirmed. I&apos;ll reach out within a few hours.
          </p>
        </form>
      </div>
    </section>
  );
}
