"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  img: { src: string; alt: string };
  className?: string;
  caption?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

const photoFrame =
  "h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_18px_44px_-30px_rgba(0,0,0,0.7)]";

export function Photo({
  img,
  className = "",
  caption,
  objectFit = "cover",
  objectPosition = "center",
}: Props) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    },
    [close]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onKey]);

  const fitClass = objectFit === "contain" ? "object-contain" : "object-cover";
  const positionStyle =
    objectPosition === "center" ? undefined : { objectPosition };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${img.alt} full screen`}
        className={`group block w-full ${photoFrame} cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#f87171]/60`}
      >
        <img
          src={img.src}
          alt={img.alt}
          className={`block h-full w-full ${fitClass} transition duration-200 group-hover:scale-[1.01]`}
          style={positionStyle}
          loading="lazy"
        />
      </button>
      {caption ? (
        <p className="mt-2 text-center text-[13px] leading-relaxed text-slate-300">{caption}</p>
      ) : null}
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={img.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#f87171]/60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.25}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={img.src}
            alt={img.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />
        </div>
      ) : null}
    </div>
  );
}
