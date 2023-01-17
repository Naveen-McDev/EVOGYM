import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/type";
import { Benefits, ContactUs, Home, Navbar, OurClasses } from "@/scenes";
import Footer from "./footer";

function App() {
  // to change the color in the navlinks in navbar with the respective section's view.
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  // check if the page is at the top to toggle the navbar transparency.
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // handling the side effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20">
      {/* Navbar */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* Hero section */}
      <Home setSelectedPage={setSelectedPage} />

      {/* benefits section */}
      <Benefits setSelectedPage={setSelectedPage} />

      {/* Our class section */}
      <OurClasses setSelectedPage={setSelectedPage} />

      {/* contact us section */}
      <ContactUs setSelectedPage={setSelectedPage} />

      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;
