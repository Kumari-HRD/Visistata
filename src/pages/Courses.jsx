import { lazy, Suspense } from "react";
import {
  StyledColoredDiv,
  StyledPrimaryButton,
} from "../components/styled-components";
import "../styles/services.css";
import courseImg from "../assets/courses.webp";
import javascript from "../assets/javascript.png";
import mern from "../assets/mern.png";
import python from "../assets/python.png";
import testing from "../assets/testing.png";
import react from "../assets/react.png";
import manual from "../assets/manual.png";
import automation from "../assets/automation.png";

// ✅ Lazy load only Footer (styled components are small, keep them)
const Footer = lazy(() => import("../components/Footer"));

// ✅ Loader component
const Loader = ({ height = "50vh", size = "2rem" }) => (
  <div style={{ height, display: "grid", placeItems: "center" }}>
    <div className="pi pi-spin pi-spinner" style={{ fontSize: size }}></div>
  </div>
);

const CourseConfigData = [
  {
    image: javascript,
    tag: "Web Development",
    title: "JavaScript for Beginners",
    description:
      "Master the fundamentals of JavaScript, the language of the web.",
  },
   {
    image: mern,
    tag: "Web Development",
    title: "MERN Full Stack Development",
    description:
      "Learn to build modern web apps with MongoDB, Express, React & Node.js.",
  },
  {
    image: python,
    tag: "Python Full Stack",
    title: "Python Full Stack Development",
    description:
      "Build robust and scalable web applications using Python with Django.",
  },
   {
    image: react,
    tag: "IOT",
    title: "Advanced IOT & Smart Systems",
    description:
      "Deep dive into connected devices, sensors, data, and intelligent automation systems.",
  },
  {
    image: manual,
    tag: "Drone",
    title: "Advanced Drone Technology",
    description:
      "Deep dive into drone systems, flight control, navigation, and industry usecases.",
  },
  {
    image: automation,
    tag: "Career Development",
    title: "Career Development",
    description:
      "Deep dive into skill building, career planning, growth strategies, and employability.",
  },
 
];

const Courses = () => {
  return (
    <div>
      <div className="py-4 px-4">
        <div className="mb-6">
          <h1 className="text-6xl space-grotesk text-center card">
            Course Catalog
          </h1>
          <p className="mb-3 text-muted-foreground text-center">
            Explore our expert-led courses and find the perfect one to advance
            your IT career.
          </p>
        </div>

        <div className="grid md:p-4">
          {CourseConfigData.map((service, index) => (
            <div key={index} className="md:col-6 lg:col-4 mt-3">
              <StyledColoredDiv className="border-1 h-full radius">
                <img
                  src={service.image}
                  alt={service.title}
                  width="100%"
                  height={250}
                />
                <div className="p-4">
                  <div className="text-xl font-semibold space-grotesk tracking-tight pb-4">
                    {service.title}
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                  <StyledPrimaryButton
                    className="w-full mt-3"
                    label="View Details"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                  />
                </div>
              </StyledColoredDiv>
            </div>
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Courses;
