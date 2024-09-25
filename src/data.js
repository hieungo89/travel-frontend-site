import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "squarespace" },
];

export const serviceItems = [
  {
    id: 1,
    name: "saving money",
    icon: "wallet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    name: "endless hiking",
    icon: "tree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    name: "amazing comfort",
    icon: "socks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tourItems = [
  {
    id: 1,
    title: "Tibet Adventure",
    date: "August 26th, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    duration: "6",
    cost: "2100",
    img: tour1,
  },
  {
    id: 2,
    title: "Best of Java",
    date: "September 15th, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    duration: "11",
    cost: "1400",
    img: tour2,
  },
  {
    id: 3,
    title: "Explore Hong Kong",
    date: "October 1st, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    duration: "8",
    cost: "5000",
    img: tour3,
  },
  {
    id: 4,
    title: "Kenya Highlights",
    date: "December 5th, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    duration: "20",
    cost: "3000",
    img: tour4,
  },
];
