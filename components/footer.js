import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 dark:bg-gray-900 text-white dark:text-gray-100 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex gap-6">
            <Link
              href="/pricing"
              className="hover:text-blue-300 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="hover:text-blue-300 transition-colors"
            >
              View Docs
            </Link>
            <Link
              href="https://github.com/yourusername"
              className="hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>

          <div className="text-sm">
            © {new Date().getFullYear()} devStack. All rights reserved.
          </div>
        </div>

        <div className="text-center text-sm text-gray-400">
          Built with ❤️ for developers, designers, and founders
        </div>
      </div>
    </footer>
  );
}
