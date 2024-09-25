import Title from "./Title";
import { tourItems } from "../data.js";

const Tours = () => (
  <section className="section" id="tours">
    <Title title1="featured" title2="tours" />
    <div className="section-center featured-center">
      {tourItems.map((item) => (
        <article key={item.id} className="tour-card">
          <div className="tour-img-container">
            <img src={item.img} className="tour-img" alt={item.img} />
            <p className="tour-date">{item.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{item.title}</h4>
            </div>
            <p>{item.description}</p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>
                {item.location}
              </p>
              <p>{item.duration} Days</p>
              <p>from ${item.cost}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Tours;
