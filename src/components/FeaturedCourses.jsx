import { StyledColoredDiv, StyledFeatureCards } from "./styled-components";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import javascript from "../assets/javascript.png";
import mern from "../assets/mern.png";
import python from "../assets/python.png";
import testing from "../assets/testing.png";

const coursesConfig = [
  {
    title: "JavaScript Essentials",
    description:
      "Kickstart your web development journey by mastering JavaScript, the backbone of modern websites.",
    tagline: "Web Development",
    bannerImage: javascript,
    path: "/course-1",
  },
  {
    title: "MERN Stack Mastery",
    description:
      "Become a full-stack web developer by building dynamic apps with MongoDB, Express, React, and Node.js.",
    tagline: "Full Stack Development",
    bannerImage: mern,
    path: "/course-2",
  },
  {
    title: "Python Programming",
    description:
      "Unlock the power of Python to build applications, automate tasks, and solve real-world problems.",
    tagline: "Python Development",
    bannerImage: python,
    path: "/course-3",
  },
  {
    title: "Drone Technology",
    description:
      "Deep dive into drone systems, flight control, navigation, and industry usecases.",
    tagline: "Software Testing",
    bannerImage: testing,
    path: "/course-4",
  },
];

const header = (imageUrl) => <img alt="Card Banner" src={imageUrl} />;

const FeaturedCourses = () => {
  return (
    <>
      <div className="md:py-6 sm:py-2 w-12">
        <p className="text-5xl font-bold text-center space-grotesk">
          {" "}
          Featured Courses
        </p>
        <p className="text-lg font-medium text-center">
          Get started with our most popular courses and kickstart your journey
          in tech.
        </p>
        <div className="grid col-10 m-auto">
          {coursesConfig.map((course) => (
            <div
              key={course.title}
              className="lg:col-3 md:col-6 sm:col-12 mt-3 "
            >
              <StyledFeatureCards
                title={course.title}
                subTitle={course.description}
                // footer={footer}
                header={header(course.bannerImage)}
                className="mx-auto h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
