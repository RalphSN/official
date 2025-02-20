import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cover from "./pages/Cover/Cover";
import Service from "./pages/Service/Service";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Footer from "./components/Footer/Footer";
import GoTopButton from "./components/GoTopButton/GoTopButton";

function App() {
  const title = "遊戲夢想實踐者";
  const description = "將創意化為現實，為您創造無與倫比的價值！";

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const anchor = event.currentTarget;
      event.preventDefault();

      const targetId = anchor.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleAnchorClick));
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Cover title={title} description={description} />
        <Service />
        <About />
        <Works />
      </main>
      <Footer />
      <GoTopButton />
    </>
  );
}

export default App;
