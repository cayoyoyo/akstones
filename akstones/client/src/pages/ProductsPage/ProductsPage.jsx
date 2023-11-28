import "./ProductsPage.css";
import { useState } from "react";

const porcelainImages = [
  { imageSrc: "/porcelain/ArmaniSilver.png", imageName: "Armani Silver" },
  { imageSrc: "/porcelain/BahiaSilver.png", imageName: "Bahia Silver" },
  { imageSrc: "/porcelain/BelvedereBlack.png", imageName: "Belvedere Black" },
  { imageSrc: "/porcelain/BorealUmber.png", imageName: "Boreal Umber" },
  { imageSrc: "/porcelain/CosmopolitaGray.png", imageName: "Cosmopolita Gray" },
  { imageSrc: "/porcelain/CrotonePulpis.png", imageName: "Crotone Pulpis" },
  { imageSrc: "/porcelain/GrassiWhite.png", imageName: "Grassi White" },
  { imageSrc: "/porcelain/AlpiWhite.png", imageName: "Alpi White" },
  { imageSrc: "/porcelain/LaurentBlack.png", imageName: "Laurent Black" },
  {
    imageSrc: "/porcelain/MacchiaVecchiaGold.png",
    imageName: "Macchia Vecchia Gold",
  },
  { imageSrc: "/porcelain/MarquinaBlack.png", imageName: "Marquina Black" },
  { imageSrc: "/porcelain/MoonBlack.png", imageName: "Moon Black" },
  { imageSrc: "/porcelain/VagliGold.png", imageName: "Vagli Gold" },
  { imageSrc: "/porcelain/VareceOnice.png", imageName: "Varece Onice" },
];

const quartzImages = [
  {
    imageSrc: "/quartz/CalacattaBari.jpg",
    imageName: 'Calacatta Bari\n(also - 138"x79")',
  },
  {
    imageSrc: "/quartz/CalacattaEsenza.jpg",
    imageName: 'Calacatta Esenza\n(also - 138"x79")',
  },
  {
    imageSrc: "/quartz/CalacattaOro.jpg",
    imageName: 'Calacatta Oro\n(also - 138"x79")',
  },
  {
    imageSrc: "/quartz/CalacattaSienna.jpg",
    imageName: 'Calacatta Sienna\n(also - 138"x79")',
  },
  { imageSrc: "/quartz/RavenHoned.png", imageName: "Raven Honed" },
  { imageSrc: "/quartz/CalacattaMaximo.png", imageName: "Calacatta Maximo" },
  {
    imageSrc: "/quartz/CalacattaVictorian.png",
    imageName: "Calacatta Victorian",
  },
  { imageSrc: "/quartz/PureGrayHoned.png", imageName: "Pure Gray Honed" },
  { imageSrc: "/quartz/ConcreteHoned.png", imageName: "Concrete Honed" },
  { imageSrc: "/quartz/CalacattaLuna.png", imageName: "Calacatta Luna" },
  { imageSrc: "/quartz/CalacattaRio.png", imageName: "Calacatta Rio" },

  { imageSrc: "/quartz/CarraraGold.jpg", imageName: "Carrara Gold" },
  { imageSrc: "/quartz/CarraraGray.jpg", imageName: "Carrara Gray" },
  { imageSrc: "/quartz/Clamshell.jpg", imageName: "Clamshell" },
  { imageSrc: "/quartz/CarraraCloud.jpg", imageName: "Carrara Cloud" },
  {
    imageSrc: "/quartz/CalacattaGraylacy.jpg",
    imageName: "Calacatta Graylacy",
  },
  { imageSrc: "/quartz/CalacattaAvenza.jpg", imageName: "Calacatta Avenza" },
  { imageSrc: "/quartz/CalacattaCemento.jpg", imageName: "Calacatta Cemento" },
  { imageSrc: "/quartz/CalacattaGold.jpg", imageName: "Calacatta Gold" },
  { imageSrc: "/quartz/CalacattaVulcano.jpg", imageName: "Calacatta Vulcano" },
  {
    imageSrc: "/quartz/CalacattaGoldenTravesio.jpg",
    imageName: "Calacatta Golden Travesio",
  },
  {
    imageSrc: "/quartz/CalacattaNegroMarquina.jpg",
    imageName: "Calacatta Negro Marquina",
  },
  { imageSrc: "/quartz/CalacattaIbiza.jpg", imageName: "Calacatta Ibiza" },
  {
    imageSrc: "/quartz/CalacattaMajestic.jpg",
    imageName: "Calacatta Majestic",
  },
  { imageSrc: "/quartz/CalacattaPerlino.jpg", imageName: "Calacatta Perlino" },
  {
    imageSrc: "/quartz/CalacattaMisterio.jpg",
    imageName: "Calacatta Misterio",
  },
  {
    imageSrc: "/quartz/CalacattaStatuarioNuvo.jpg",
    imageName: "Calacatta Statuario Nuvo",
  },
  { imageSrc: "/quartz/EsoticPesto.jpg", imageName: "Esotic Pesto" },
  {
    imageSrc: "/quartz/CalacattaStatuarioBrown.jpg",
    imageName: "Calacatta Statuario Brown",
  },
  {
    imageSrc: "/quartz/CalacattaArabescato.jpg",
    imageName: "Calacatta Arabescato",
  },
  {
    imageSrc: "/quartz/CalacattaDianaGold.jpg",
    imageName: "Calacatta Diana Gold",
  },
  {
    imageSrc: "/quartz/CalacattaGrayWave.jpg",
    imageName: "Calacatta Gray Wave",
  },
  { imageSrc: "/quartz/CalacattaMilan.png", imageName: "Calacatta Milan" },
  { imageSrc: "/quartz/CalacattaVerona.png", imageName: "Calacatta Verona" },
  { imageSrc: "/quartz/AppleFun.jpg", imageName: "Apple Fun" },
  { imageSrc: "/quartz/Caramel.jpg", imageName: "Caramel" },
  { imageSrc: "/quartz/GraySayoe.jpg", imageName: "Gray Sayoe" },
  { imageSrc: "/quartz/MagentaFun.jpg", imageName: "Magenta Fun" },
  { imageSrc: "/quartz/PureBlack.jpg", imageName: "Pure Black" },
  { imageSrc: "/quartz/PureRed.jpg", imageName: "Pure Red" },
  { imageSrc: "/quartz/PureWhite.jpg", imageName: "Pure White" },
  { imageSrc: "/quartz/Raven.jpg", imageName: "Raven" },
  { imageSrc: "/quartz/SilverGray.jpg", imageName: "Silver Gray" },
  { imageSrc: "/quartz/StarBlack.jpg", imageName: "Star Black" },
  { imageSrc: "/quartz/StarBlue.jpg", imageName: "Star Blue" },
  { imageSrc: "/quartz/WhiteCloudy.jpg", imageName: "White Cloudy" },
  { imageSrc: "/quartz/StarRed.jpg", imageName: "Star Red" },
];

function ProductsPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setSelectedImage(null);
    setIsFullscreen(false);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredPorcelainImages = porcelainImages.filter((item) => {
    return filter === "all" || filter === "porcelain";
  });

  const filteredQuartzImages = quartzImages.filter((item) => {
    return filter === "all" || filter === "quartz";
  });

  return (
    <>
      <div className="filter-controls">
        <button
          onClick={() => handleFilterChange("all")}
          className={filter === "all" ? "active-filter" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("porcelain")}
          className={filter === "porcelain" ? "active-filter" : ""}
        >
          Porcelain
        </button>
        <button
          onClick={() => handleFilterChange("quartz")}
          className={filter === "quartz" ? "active-filter" : ""}
        >
          Quartz
        </button>
      </div>

      {filter === "all" || filter === "porcelain" ? (
  <div className="products-container">
    <h2 className="quartz-title">Porcelain</h2>
    <p className="sizes">127"x64" (12 mm)</p>
    <div className="hr-container">
      <hr className="raya" />
    </div>
    <section className="layout">
      {filteredPorcelainImages.map((item, index) => (
        <div key={index} className="image-container">
          <div className="image-wrapper">
            <img
              src={item.imageSrc}
              alt={`Número ${index}`}
              onClick={() => handleImageClick(item.imageSrc)}
            />
          </div>
          <p className="image-label">{item.imageName}</p>
        </div>
      ))}
    </section>
    {isFullscreen && (
      <div className="image-fullscreen" onClick={handleCloseFullscreen}>
        <img src={selectedImage} alt="Imagen en tamaño completo" />
      </div>
    )}
  </div>
) : null}


      {filter === "all" || filter === "quartz" ? (
        <div className="products-container">
          <h2 className="quartz-title">Quartz</h2>
          <p className="sizes">127"x64" (12 mm)</p>
          <section className="layout">
            {filteredQuartzImages.map((item, index) => (
              <div key={index} className="image-container">
                <div className="image-wrapper">
                  <img
                    src={item.imageSrc}
                    alt={`Número ${index}`}
                    onClick={() => handleImageClick(item.imageSrc)}
                  />
                </div>
                <p className="image-label">{item.imageName}</p>
              </div>
            ))}
          </section>
          {isFullscreen && (
            <div className="image-fullscreen" onClick={handleCloseFullscreen}>
              <img src={selectedImage} alt="Imagen en tamaño completo" />
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default ProductsPage;
