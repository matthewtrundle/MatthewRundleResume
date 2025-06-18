"use client";

export default function ModernFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2024 Matthew Rundle. All rights reserved.
          </p>
          <p className="text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}