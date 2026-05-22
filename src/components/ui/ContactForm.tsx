"use client";
import { useState } from "react";
import { site } from "@/constants/site";
type Errors = {
    name?: string;
    phone?: string;
    eventDate?: string;
    eventLocation?: string;
    boothType?: string;
    hours?: string;
    budget?: string;
};
export default function ContactForm() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Errors>({});
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
        if (!name) {
            newErrors.name = "Please enter your name";
        } else if (name.length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        }
        if (!phone) {
            newErrors.phone = "Please enter phone number";
        } else if (!/^[0-9]{10,15}$/.test(phone)) {
            newErrors.phone = "Enter valid phone number";
        }
        if (!eventDate) {
            newErrors.eventDate = "Please select event date";
        } else {
            const selectedDate = new Date(eventDate);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                newErrors.eventDate = "Past dates are not allowed";
            }
        }

        // Location
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
        } else if (Number(hours) <= 0) {
            newErrors.hours = "Hours must be greater than 0";
        }

        // Budget
        if (!budget) {
            newErrors.budget = "Please enter your budget";
        }

        return newErrors;
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setSent(false);

        const formData = new FormData(event.currentTarget);

        const validationErrors = validate(formData);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            setLoading(true);

            await new Promise((resolve) => setTimeout(resolve, 1200));

            setSent(true);

            event.currentTarget.reset();

            setErrors({});
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

        const quickMessage = "Hi! I am interested in Funblock Photobooth services.";

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-2">
            {/* Name & Phone */}
            <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <label className="block">
                    <span className="text-sm font-medium text-[var(--muted)]">
                        Your Name
                    </span>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        onChange={() => clearError("name")}
                        className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
                        ${errors.name ? "border-red-500 focus:ring-red-500/20" : "border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"}`}
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
                    </span>

                    <input
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        placeholder="Enter your phone number"
                        onChange={() => clearError("phone")}
                        className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
            ${errors.phone
                                ? "border-red-500 focus:ring-red-500/20"
                                : "border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"
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
            <div className="grid gap-4 sm:grid-cols-2">

                {/* Event Date */}
                <label className="block">
                    <span className="text-sm font-medium text-[var(--muted)]">
                        Event Date
                    </span>

                    <input
                        name="eventDate"
                        type="date"
                        onChange={() => clearError("eventDate")}
                        className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
                        ${errors.eventDate
                                ? "border-red-500 focus:ring-red-500/20"
                                : "border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"
                            }`}
                        min={new Date().toISOString().split("T")[0]}
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
                    </span>

                    <input
                        name="eventLocation"
                        type="text"
                        placeholder="City / Venue"
                        onChange={() => clearError("eventLocation")}
                        className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
                        ${errors.eventLocation
                                ? "border-red-500 focus:ring-red-500/20"
                                : "border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"
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
            <div className="grid gap-4 sm:grid-cols-2">

                {/* Booth Type */}
                <label className="block">
                    <span className="text-sm font-medium text-[var(--muted)]">
                        Booth Type
                    </span>

                    <select
                        name="boothType"
                        onChange={() => clearError("boothType")}
                        className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
                        ${errors.boothType
                                ? "border-red-500 focus:ring-red-500/20"
                                : "border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"
                            }`}
                    >
                        <option value="">Select Booth Type</option>
                        <option value="Photo Booth">Photo Booth</option>
                        <option value="Bubble Booth">Bubble Booth</option>
                        <option value="360 Booth">360 Booth</option>
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
                    </span>

                    <input
                        name="hours"
                        type="number"
                        min="1"
                        placeholder="Ex: 4"
                        onChange={() => clearError("hours")}
                        className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
                        ${errors.hours
                                ? "border-red-500 focus:ring-red-500/20"
                                : "border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"
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
                </span>

                <input
                    name="budget"
                    type="text"
                    placeholder="Ex: $300-$500"
                    onChange={() => clearError("budget")}
                    className={`mt-1 h-10 w-full rounded-[1.5rem] border px-5 text-[var(--text)] outline-none transition bg-[var(--surface)]
                    ${errors.budget
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-[var(--border)] focus:border-[var(--accent)] focus:ring-[var(--accent)]/20"
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
                    className="mt-1 w-full rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                />
            </label>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="
          inline-flex w-full sm:w-auto
          items-center justify-center
          rounded-full
          bg-[var(--accent)]
          px-8 py-3
          text-sm font-semibold
          uppercase tracking-[0.15em]
          text-white
          shadow-[0_20px_60px_-30px_rgba(139,94,52,0.25)]
          transition
          hover:scale-[1.02]
          hover:bg-[rgba(123,77,40,0.95)]
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
            >
                {loading ? "Sending..." : "Send Inquiry"}
            </button>

            {/* Success Message */}
            {sent ? (
                <p className="text-sm text-green-600">
                    Thank you! We’ll contact you shortly with pricing and availability.
                </p>
            ) : null}

            {/* Quick contact options */}
            <div className="mt-4 text-sm text-[var(--muted)]">
                <p className="mb-2">Prefer a faster reply? Reach us directly:</p>
                <div className="flex flex-wrap gap-3">
                    <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-white">Call</a>
                    <a href={`${site.whatsappUrl}?text=${encodeURIComponent(quickMessage)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2">WhatsApp</a>
                    <a href={`sms:${site.phoneRaw}?body=${encodeURIComponent(quickMessage)}`} className="inline-flex items-center gap-2 rounded-full bg-[#007aff] px-4 py-2 text-white">iMessage</a>
                </div>
            </div>

        </form>
    );
}