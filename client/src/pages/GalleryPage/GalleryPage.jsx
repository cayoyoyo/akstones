import { Carousel } from "react-bootstrap";
import "./GalleryPage.css";

function GalleryPage() {
 
  return (
    <>
      <div className="gallery-container">
        <div className="content-left">
          <h2>
            <span className="highlight-years">9 years </span>of quality service
            in <br></br>
            <span className="highlight-stones">Quartz &amp; Porcelain</span>
          </h2>

          <hr></hr>

          <p>
            Our international suppliers have caused a great impact on our
            country and thanks to their top quality merchandise have positioned
            us one of the first places in the distribution of stones such as
            quartz and porcelain.
          </p>
        </div>

        <div className="content-right">
          <img src="/ej/cocina4.jpeg" alt="img" />
        </div>
      </div>

       {/* <div className="gallery-container2">
        <div className="content-right">
          <img src="/ej/sala.jpeg" alt="Imagen de sala" />
        </div>
        <div className="content-left">
          <h2>AK Stones</h2>
          <p>
            Where elegance meets functionality. Explore a diverse range of
            quartz and porcelain slabs sourced globally, transforming homes and
            industries across our nation
          </p>
        </div>
      </div>  */}

      <div className="gallery-container3">
        <Carousel>
          <Carousel.Item>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kpw7DSlgm9k?si=C8ki2vRBZejbGxEB"
              title="Video 1"
              allowFullScreen
            ></iframe>
          </Carousel.Item>
          <Carousel.Item>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cKSQDyz1qfg?si=xd6NG5GsGYRx1UcE"
              title="Video 2"
              allowFullScreen
            ></iframe>
          </Carousel.Item>
          <Carousel.Item>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4gwWWQiojWY?si=j-8J_G2VOx838wb-"
              title="Video 3"
              allowFullScreen
            ></iframe>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default GalleryPage;