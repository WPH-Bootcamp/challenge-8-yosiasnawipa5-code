import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
