import SectionHeading from "@/components/common/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/constants/testimonials";

type TestimonialsProps = {
  showHeading?: boolean;
};
export default function Testimonials({ showHeading = true }: TestimonialsProps) {
  return (
    <section id="testimonials" className="pt-10 pb-24 {showHeading ? 'border-t' : ''} border-[var(--border)] bg-[var(--background)] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <SectionHeading
            eyebrow="Testimonials"
            title="Stories from luxury events we have honored"
            description="Client feedback that reflects our attention to premium detail, service quality, and unforgettable event activations."
          />
        )}

        <div className="mt-3 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
