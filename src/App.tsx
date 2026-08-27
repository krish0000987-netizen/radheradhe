import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import UjjainDarshan from "./pages/UjjainDarshan";
import Outstation from "./pages/Outstation";
import TourPackages from "./pages/TourPackages";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import TravelGuide from "./pages/TravelGuide";
import Contact from "./pages/Contact";

type Page =
  | "home" | "about" | "vehicles" | "ujjain"
  | "outstation" | "packages" | "services"
  | "gallery" | "guide" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: string) => setPage(p as Page);

  const renderPage = () => {
    switch (page) {
      case "home": return <Home onNavigate={navigate} />;
      case "about": return <About onNavigate={navigate} />;
      case "vehicles": return <Vehicles onNavigate={navigate} />;
      case "ujjain": return <UjjainDarshan onNavigate={navigate} />;
      case "outstation": return <Outstation onNavigate={navigate} />;
      case "packages": return <TourPackages onNavigate={navigate} />;
      case "services": return <Services onNavigate={navigate} />;
      case "gallery": return <Gallery />;
      case "guide": return <TravelGuide onNavigate={navigate} />;
      case "contact": return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar currentPage={page} onNavigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <FloatingButtons />
    </div>
  );
}
