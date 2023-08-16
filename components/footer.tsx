import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Fabian. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>

      <p className="text-xs mt-1">
        <span className="font-semibold">Project Repo:</span>{" "}
        <Link href="https://github.com/fabiangamboa95/portfolio-app">
          https://github.com/fabiangamboa95/portfolio-app
        </Link>
      </p>
    </footer>
  );
}
