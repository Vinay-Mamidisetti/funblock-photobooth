import Link from "next/link";
import { ExternalLink, Phone, MapPin } from "lucide-react";
import { site } from "@/constants/site";
import { navLinks } from "@/constants/navigation";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              Elegant event imaging
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              Funblock Photobooth
            </h2>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
              We deliver premium photobooth productions designed for luxury weddings, branded corporate soirées, and unforgettable private celebrations.
            </p>
            <div className="flex flex-col gap-3 text-sm text-[var(--text)] sm:flex-row sm:flex-wrap">
              <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-2 text-[var(--text)] transition hover:text-[var(--accent)]">
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[var(--text)] transition hover:text-[var(--accent)]">
                <FaInstagram className="h-4 w-4" />
                @funblockphotobooth
              </a>
              <div className="inline-flex items-center gap-2 text-[var(--muted)]">
                <MapPin className="h-4 w-4" />
                {site.address}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
              Quick links
            </h3>
            <ul className="space-y-4 text-sm text-[var(--text)]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-[var(--accent)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
              Service highlights
            </h3>
            <ul className="space-y-4 text-sm text-[var(--text)]">
              <li>Luxury booth styling</li>
              <li>Instant digital sharing</li>
              <li>White glove event support</li>
              <li>Custom branded activations</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-12 pt-8 text-center text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          © {new Date().getFullYear()} Funblock Photobooth. Premium event photography experiences.
        </div>
      </div>
    </footer>
  );
}
