import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export default function PrimaryButton({
  href,
  children,
  className = "",
  ...props
}: PrimaryButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] !text-white shadow-[0_15px_40px_-20px_rgba(139,94,52,0.35)] transition hover:bg-[rgba(123,77,40,0.95)] ${className}`;

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
