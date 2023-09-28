import "./gallery.css";
import cat1 from "../assets/img/cat1.jpg";
import cat2 from "../assets/img/cat2.jpg";
import cat3 from "../assets/img/cat3.jpg";
import cat4 from "../assets/img/cat4.png";
import cat5 from "../assets/img/cat5.jpg";
import cat6 from "../assets/img/cat6.jpg";
import cat7 from "../assets/img/cat7.png";
import { useState } from "react";
import Bordered from "./Bordered";

const Gallery = () => {
  const [columns, setColumns] = useState(2);

  let imagesClass = "images";

  switch (columns) {
    case 1:
      imagesClass += " one-column";
      break;
    case 2:
      imagesClass += " two-columns";
      break;
    case 3:
      imagesClass += " three-columns";
      break;
    default:
      imagesClass += " two-columns";
      break;
  }

  return (
    <div className="gallery">
      <Bordered>
        <section>
          <button onClick={() => setColumns(1)}>One column</button>
          <button onClick={() => setColumns(2)}>Two columns</button>
          <button onClick={() => setColumns(3)}>Three columns</button>
        </section>
      </Bordered>

      <section className={imagesClass}>
        <img src={cat1} alt="1" />
        <img src={cat2} alt="2" />
        <img src={cat3} alt="3" />
        <img src={cat4} alt="4" />
        <img src={cat5} alt="5" />
        <img src={cat6} alt="6" />
        <img src={cat7} alt="7" />
      </section>
    </div>
  );
};

export default Gallery;
