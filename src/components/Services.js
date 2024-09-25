import Title from "./Title";
import Service from "./Service";
import { serviceItems } from "../data.js";

const Services = () => (
  <section className="section services" id="services">
    <Title title1="our" title2="services" />
    <div className="section-center services-center">
      {serviceItems.map((item) => (
        <Service
          key={item.id}
          icon={item.icon}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  </section>
);

export default Services;
