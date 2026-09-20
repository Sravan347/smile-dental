"use client";

import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  preferredDate: "",
  preferredTime: "",
  treatment: "",
  message: "",
};

export function AppointmentForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof initialState, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validate = () => {
    const nextErrors: Partial<Record<keyof typeof initialState, string>> = {};

    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone))
      nextErrors.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      nextErrors.email = "Enter a valid email address.";
    if (!formData.preferredDate)
      nextErrors.preferredDate = "Please choose a preferred date.";
    if (!formData.treatment.trim())
      nextErrors.treatment =
        "Please tell us the treatment or reason for your visit.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof typeof initialState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
    setFormData(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[2rem] border border-(--border) bg-(--white) p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-(--muted)">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
            Name
          </span>
          <input
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full rounded-full border border-(--border) bg-background px-4 py-3 text-foreground outline-none focus:border-(--forest)"
            placeholder="Your name"
          />
          {errors.name && (
            <span className="mt-2 block text-xs text-red-700">
              {errors.name}
            </span>
          )}
        </label>
        <label className="block text-sm text-(--muted)">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
            Phone
          </span>
          <input
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full rounded-full border border-(--border) bg-background px-4 py-3 text-foreground outline-none focus:border-(--forest)"
            placeholder="+91 00000 00000"
          />
          {errors.phone && (
            <span className="mt-2 block text-xs text-red-700">
              {errors.phone}
            </span>
          )}
        </label>
        <label className="block text-sm text-(--muted)">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
            Email
          </span>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-full border border-(--border) bg-background px-4 py-3 text-foreground outline-none focus:border-(--forest)"
            placeholder="your@email.com"
          />
          {errors.email && (
            <span className="mt-2 block text-xs text-red-700">
              {errors.email}
            </span>
          )}
        </label>
        <label className="block text-sm text-(--muted)">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
            Preferred date
          </span>
          <input
            type="date"
            value={formData.preferredDate}
            onChange={(e) => handleChange("preferredDate", e.target.value)}
            className="w-full rounded-full border border-(--border) bg-background px-4 py-3 text-foreground outline-none focus:border-(--forest)"
          />
          {errors.preferredDate && (
            <span className="mt-2 block text-xs text-red-700">
              {errors.preferredDate}
            </span>
          )}
        </label>
        <label className="block text-sm text-(--muted) md:col-span-2">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
            Preferred time
          </span>
          <input
            value={formData.preferredTime}
            onChange={(e) => handleChange("preferredTime", e.target.value)}
            className="w-full rounded-full border border-(--border) bg-background px-4 py-3 text-foreground outline-none focus:border-(--forest)"
            placeholder="e.g. Morning / Afternoon / Evening"
          />
        </label>
        <label className="block text-sm text-(--muted) md:col-span-2">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
            Treatment / reason for visit
          </span>
          <input
            value={formData.treatment}
            onChange={(e) => handleChange("treatment", e.target.value)}
            className="w-full rounded-full border border-(--border) bg-background px-4 py-3 text-foreground outline-none focus:border-(--forest)"
            placeholder="General check-up, root canal consultation, implants..."
          />
          {errors.treatment && (
            <span className="mt-2 block text-xs text-red-700">
              {errors.treatment}
            </span>
          )}
        </label>
        <label className="block text-sm text-(--muted) md:col-span-2">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
            Message
          </span>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={4}
            className="w-full rounded-[1.5rem] border border-(--border) bg-background px-4 py-3 text-foreground outline-none focus:border-(--forest)"
            placeholder="Add any details you'd like the clinic to know before the appointment."
          />
        </label>
      </div>

      {status === "success" && (
        <p className="rounded-full border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          Your appointment request has been prepared successfully. This is a
          front-end placeholder until a real backend is connected.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-full border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Please review the highlighted fields and try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-(--forest) px-6 py-3.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Request Appointment"}
      </button>
    </form>
  );
}
