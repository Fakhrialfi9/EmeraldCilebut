import { Routes, Route } from "react-router-dom";

import "./../MainStyle/Main.css";
import "./../MainStyle/Root.css";

import Navbar from "./../../Resources/Views/Components/Navbar/Navbar.jsx";
import Header from "./../../Resources/Views/Components/Header/Header.jsx";
import ContentPages from "./../../Resources/Views/ContentPages/Home.jsx";
import Footer from "./../../Resources/Views/Components/Footer/Footer.jsx";
import FloatingActionButton from "./../../Resources/Views/Components/FloatingActionButton/FloatingActionButton.jsx";

function MainApp() {
  return (
    <main id="MainApp">
      <section className="MainLayout">
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<ContentPages />} />
        </Routes>
        <Routes>
          <Route path="/" element={<FloatingActionButton />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </section>
    </main>
  );
}

export default MainApp;
