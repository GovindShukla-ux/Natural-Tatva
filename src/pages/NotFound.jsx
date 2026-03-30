import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Natural Tatva</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen flex items-center justify-center text-center px-4"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div>
          <h1
            className="text-8xl font-bold mb-4"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}
          >
            404
          </h1>
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-heading)" }}
          >
            Page Not Found
          </h2>
          <p
            className="mb-8 max-w-md mx-auto"
            style={{ color: "var(--color-text-light)" }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-white)",
            }}
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </>
  );
}