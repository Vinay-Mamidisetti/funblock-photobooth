"use client";

import { useEffect, useState } from "react";
import { site } from "@/constants/site";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";

type Errors = {
  name?: string;
  phone?: string;
  eventDate?: string;
  eventLocation?: string;
  boothType?: string;
  hours?: string;
  budget?: string;
};

const MIN_BUDGET = 180;

function parseBudgetAmount(value: string): number | null {
  const numbers = value.match(/\d+(?:\.\d+)?/g);
  if (!numbers?.length) return null;
  return Math.min(...numbers.map((n) => Number(n)));
}

function formatDateLocal(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function todayLocalString() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return formatDateLocal(today);
}

function RequiredMark() {
  return (
    <span className="text-[var(--accent)]" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [minEventDate, setMinEventDate] = useState<string | undefined>();

  useEffect(() => {
    setMinEventDate(todayLocalString());
  }, []);

  const clearError = (field: keyof Errors) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validate = (formData: FormData) => {
    const newErrors: Errors = {};

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const eventDate =
      formData.get("eventDate")?.toString().trim() || "";
    const eventLocation =
      formData.get("eventLocation")?.toString().trim() || "";
    const boothType =
      formData.get("boothType")?.toString().trim() || "";
    const hours = formData.get("hours")?.toString().trim() || "";
    const budget = formData.get("budget")?.toString().trim() || "";

    // Name
    if (!name) {
      newErrors.name = "Please enter your name";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Phone
    if (!phone) {
      newErrors.phone = "Please enter phone number";
    } else if (!/^[0-9]{10,15}$/.test(phone)) {
      newErrors.phone = "Enter valid phone number";
    }

    // Event Date
    if (!eventDate) {
      newErrors.eventDate = "Please select event date";
    } else if (eventDate < todayLocalString()) {
      newErrors.eventDate = "Past dates are not allowed";
    }

    // Event Location
    if (!eventLocation) {
      newErrors.eventLocation = "Please enter location";
    }

    // Booth Type
    if (!boothType) {
      newErrors.boothType = "Please select booth type";
    }

    // Hours
    if (!hours) {
      newErrors.hours = "Please enter hours needed";
    } else if (Number(hours) < 2) {
      newErrors.hours = "Minimum 2 hours required";
    }

    // Budget
    if (!budget) {
      newErrors.budget = "Please enter your budget";
    } else {
      const amount = parseBudgetAmount(budget);
      if (amount === null || Number.isNaN(amount)) {
        newErrors.budget = "Please enter a valid budget amount";
      } else if (amount < MIN_BUDGET) {
        newErrors.budget = "Minimum budget is $180";
      }
    }

    return newErrors;
  };

  const handleQuickContact = (
    type: "whatsapp" | "sms"
  ) => {
    const form = document.querySelector("form");

    if (!form) return;

    const formData = new FormData(form);

    const validationErrors = validate(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const message = `
Hi Funblock Photobooth 👋

I am interested in your services.

Name: ${formData.get("name")}
Phone: ${formData.get("phone")}
Event Date: ${formData.get("eventDate")}
Event Location: ${formData.get("eventLocation")}
Booth Type: ${formData.get("boothType")}
Hours Needed: ${formData.get("hours")}
Budget: ${formData.get("budget")}

Additional Details:
${formData.get("message")}
`;

    if (type === "whatsapp") {
      window.open(
        `${site.whatsappUrl}?text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    }

    if (type === "sms") {
      window.location.href = `sms:${
        site.phoneRaw
      }?body=${encodeURIComponent(message)}`;
    }
  };

  return (
    <form
      noValidate
      className="space-y-4"
    >
      {/* Name & Phone */}
      <div className="grid gap-3 sm:grid-cols-2">

        {/* Name */}
        <label className="block">
          <span className="text-sm font-medium text-[var(--muted)]">
            Your Name
            <RequiredMark />
          </span>

          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={() => clearError("name")}
            className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
            ${
              errors.name
                ? "border-red-500"
                : "border-[var(--border)] focus:border-[var(--accent)]"
            }`}
          />

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </label>

        {/* Phone */}
        <label className="block">
          <span className="text-sm font-medium text-[var(--muted)]">
            Phone Number
            <RequiredMark />
          </span>

          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            placeholder="Enter your phone number"
            onChange={() => clearError("phone")}
            className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
            ${
              errors.phone
                ? "border-red-500"
                : "border-[var(--border)] focus:border-[var(--accent)]"
            }`}
          />

          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.phone}
            </p>
          )}
        </label>
      </div>

      {/* Event Date & Location */}
      <div className="grid gap-3 sm:grid-cols-2">

        {/* Event Date */}
        <label className="block">
          <span className="text-sm font-medium text-[var(--muted)]">
            Event Date
            <RequiredMark />
          </span>

          <input
            name="eventDate"
            type="date"
            min={minEventDate}
            onChange={() => clearError("eventDate")}
            className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
            ${
              errors.eventDate
                ? "border-red-500"
                : "border-[var(--border)] focus:border-[var(--accent)]"
            }`}
          />

          {errors.eventDate && (
            <p className="mt-1 text-xs text-red-500">
              {errors.eventDate}
            </p>
          )}
        </label>

        {/* Event Location */}
        <label className="block">
          <span className="text-sm font-medium text-[var(--muted)]">
            Event Location
            <RequiredMark />
          </span>

          <input
            name="eventLocation"
            type="text"
            placeholder="City / Venue"
            onChange={() => clearError("eventLocation")}
            className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
            ${
              errors.eventLocation
                ? "border-red-500"
                : "border-[var(--border)] focus:border-[var(--accent)]"
            }`}
          />

          {errors.eventLocation && (
            <p className="mt-1 text-xs text-red-500">
              {errors.eventLocation}
            </p>
          )}
        </label>
      </div>

      {/* Booth Type & Hours */}
      <div className="grid gap-3 sm:grid-cols-2">

        {/* Booth Type */}
        <label className="block">
          <span className="text-sm font-medium text-[var(--muted)]">
            Booth Type
            <RequiredMark />
          </span>

          <select
            name="boothType"
            onChange={() => clearError("boothType")}
            className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
            ${
              errors.boothType
                ? "border-red-500"
                : "border-[var(--border)] focus:border-[var(--accent)]"
            }`}
          >
            <option value="">Select Booth Type</option>
            <option value="Photo Booth">
              Photo Booth
            </option>
            <option value="Bubble Booth">
              Bubble Booth
            </option>
            <option value="360 Booth">
              360 Booth
            </option>
            <option value="Glam Booth">
              Glam Booth
            </option>
            <option value="DSLR Booth">
              DSLR Booth
            </option>
          </select>

          {errors.boothType && (
            <p className="mt-1 text-xs text-red-500">
              {errors.boothType}
            </p>
          )}
        </label>

        {/* Hours */}
        <label className="block">
          <span className="text-sm font-medium text-[var(--muted)]">
            Hours Needed
            <RequiredMark />
          </span>

          <input
            name="hours"
            type="number"
            min="2"
            placeholder="Minimum 2hrs"
            onChange={() => clearError("hours")}
            className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
            ${
              errors.hours
                ? "border-red-500"
                : "border-[var(--border)] focus:border-[var(--accent)]"
            }`}
          />

          {errors.hours && (
            <p className="mt-1 text-xs text-red-500">
              {errors.hours}
            </p>
          )}
        </label>
      </div>

      {/* Budget */}
      <label className="block">
        <span className="text-sm font-medium text-[var(--muted)]">
          What is your budget?
          <RequiredMark />
        </span>

        <input
          name="budget"
          type="text"
          placeholder="Ex: $300-$500 (min $180)"
          onChange={() => clearError("budget")}
          className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
          ${
            errors.budget
              ? "border-red-500"
              : "border-[var(--border)] focus:border-[var(--accent)]"
          }`}
        />

        {errors.budget && (
          <p className="mt-1 text-xs text-red-500">
            {errors.budget}
          </p>
        )}
      </label>

      {/* Additional Details */}
      <label className="block">
        <span className="text-sm font-medium text-[var(--muted)]">
          Additional Details
        </span>

        <textarea
          name="message"
          rows={3}
          placeholder="Tell us more about your event..."
          className="
            mt-1 w-full rounded-[1.5rem]
            border border-[var(--border)]
            bg-[var(--surface)]
            px-5 py-4
            text-[var(--text)]
            outline-none transition
            focus:border-[var(--accent)]
          "
        />
      </label>

      {/* Actions Heading */}
      <div>
        <p className="text-sm font-medium text-[var(--muted)]">
          Send your event details instantly
        </p>

        <p className="mt-1 text-xs text-[var(--muted)]">
          Fill the form and contact us via WhatsApp
          <span className="md:hidden"> or Message</span>. Need an immediate
          response? Call us directly.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">

  {/* WhatsApp */}
  <button
    type="button"
    onClick={() => handleQuickContact("whatsapp")}
    className="
      flex-1 inline-flex items-center justify-center gap-2
      rounded-full
      bg-[#25D366]
      px-6 py-4
      text-sm font-semibold
      text-white
      shadow-[0_14px_40px_-20px_rgba(37,211,102,0.30)]
      transition-all duration-300
      hover:bg-[#1db954]
    "
  >
    <FaWhatsapp className="h-5 w-5 text-white" />
    WhatsApp
  </button>

  <button
    type="button"
    onClick={() => handleQuickContact("sms")}
    className="
      flex-1 inline-flex items-center justify-center gap-2
      rounded-full
      bg-[#007aff]
      px-6 py-4
      text-sm font-semibold
      text-white
      shadow-[0_14px_40px_-20px_rgba(0,122,255,0.30)]
      transition-all duration-300
      hover:bg-[#0066e6]
      md:hidden
    "
  >
    <HiOutlineChatBubbleLeftRight className="h-5 w-5 text-white" />
    Message
  </button>

  {/* Call */}
  <a
    href={`tel:${site.phoneRaw}`}
    className="
      flex-1 inline-flex items-center justify-center gap-2
      !text-white
      rounded-full
      bg-[var(--accent)]
      px-6 py-4
      text-sm font-semibold
      text-white
      shadow-[0_14px_40px_-20px_rgba(139,94,52,0.28)]
      transition-all duration-300
      hover:bg-[rgba(123,77,40,0.95)]
    "
  >
    <FiPhoneCall className="h-5 w-5 !text-white" />
    Call Now
  </a>

</div>
    </form>
  );
}