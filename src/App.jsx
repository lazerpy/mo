import React from "react";
import SidebarHeader from "./components/SidebarHeader";
import SidebarContent from "./components/SidebarContent";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <CustomCursor />
      
      {/* Small Screen Layout - Header at top with nav below */}
      <div className="md:hidden w-full">
        <div className="glass-strong px-4 py-6">
          <SidebarHeader />
        </div>
        <div className="glass px-4 py-4">
          <NavigationBar />
        </div>
      </div>

      {/* Large Screen Sidebar */}
      <aside className="hidden md:flex md:sticky md:top-0 md:h-screen flex-col justify-start w-[32vw] min-w-[300px] max-w-[420px] glass-strong px-4 sm:px-8 py-8 gap-8">
        <div className="flex flex-col gap-8">
          <SidebarHeader />
          <SidebarContent />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Large Screen Navigation */}
        <div className="hidden md:block">
          <NavigationBar />
        </div>
        
        <main className="flex-1 p-4 sm:p-6 md:p-8">
          <PageTransition>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
