import "./../../../Style/Components/Header/Header.css";

function Header() {
  return (
    <main id="HeaderSection">
      <section className="HeaderSection">
        <header className="MainHeader">
          <div className="MainHeaderContentImage"></div>
          <div className="MainHeaderContentOpacity"></div>
          <div className="MainHeaderContent">
            <span>
              <h1>Emerald Cilebut</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </span>
          </div>
        </header>
      </section>
    </main>
  );
}

export default Header;
