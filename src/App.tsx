/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";

// ─── App ──────────────────────────────────────────────────────────────────────
// Root component: Navbar (fixed) + main content + Footer.

const App = () => (
  <div className="min-h-screen bg-[#0a0a0a] text-white">
    {/* Skip to content link untuk keyboard navigation */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
        focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-lg focus:font-semibold"
    >
      Skip to main content
    </a>

    <Navbar />
    <HomePage />
    <Footer />
  </div>
);

export default App;
