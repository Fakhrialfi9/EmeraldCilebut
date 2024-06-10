import { useState, useEffect } from "react";

import "./../../Style/Components/CookieBanner/CookieBanner.css";

const CookieBanner = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(localStorage.getItem("acceptedCookies") === "true");

  const acceptCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem("acceptedCookies", "true");
  };

  useEffect(() => {
    // Menggunakan useEffect untuk menyembunyikan banner setelah cookies diterima
    if (acceptedCookies) {
      // Lakukan sesuatu setelah cookies diterima, misalnya: panggil fungsi untuk mengatur cookie
      // Contoh: setCookie('cookieName', 'cookieValue', { expires: 365 });
    }
  }, [acceptedCookies]);

  if (acceptedCookies) {
    return null; // Tidak menampilkan banner jika cookies telah diterima
  }

  return (
    <div className="cookiebanner">
      <p>Situs web ini menggunakan cookies. Dengan melanjutkan, Anda menyetujui penggunaan cookies.</p>
      <button onClick={acceptCookies}>Terima</button>
    </div>
  );
};

export default CookieBanner;
