import SideImg from "../assets/heroSection.png";
import Footer from "../components/Footer";
import "../styles/services.css";
import { StyledColoredDiv } from "../components/styled-components";
function About() {
  return (
    <>
      <StyledColoredDiv className="py-6 md:py-6 w-12">
        <div className="grid grid-nogutter col-10 m-auto">
          <section className="col-12 md:col-6 pr-4">
            <img src={SideImg} style={{ width: "100%" }} />
          </section>
          <section className="col-12 md:col-6 pl-4">
            <h1 className="md:text-6xl text-4xl mb-3 space-grotesk">
              About Deep Root
            </h1>
            <p className="mb-3 text-muted-foreground">
              Deep Rooted Software Training & Development Services was founded
              with a simple mission: to bridge the gap between aspiring IT
              professionals and their dream careers. We saw a need for
              high-quality, practical, and affordable online education that
              directly addresses the skills employers are looking for.
            </p>
            <p className="text-muted-foreground">
              Our team of industry experts and passionate educators is dedicated
              to creating courses that are not only informative but also
              engaging and career-focused. We believe in learning by doing, and
              our curriculum is packed with real-world projects and hands-on
              exercises.
            </p>
          </section>
        </div>
      </StyledColoredDiv>
      <div className="md:py-6 sm:py-2 w-12">
        <div className="grid grid-nogutter">
          <section className="col-12">
            <p className="text-5xl font-bold text-center">
              Our Guiding Principles
            </p>
            <p className="text-lg font-medium text-center text-muted-foreground">
              The core beliefs that drive our commitment to student success.
            </p>
            <div className="grid grid-nogutter md:col-9 md:m-auto mt-6 col-12 ">
              <div className=" md:col-6 col-12">
                <div className="flex gap-4 md:pr-4	">
                  <div>
                    <div className="about-icon-background  border-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-goal  text-accent"
                      >
                        <path d="M12 13V2l8 4-8 4"></path>
                        <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"></path>
                        <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="space-grotesk">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower individuals with the practical skills and
                      confidence needed to excel in the tech industry. We are
                      committed to providing accessible, high-quality education
                      that bridges the gap between ambition and opportunity.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" md:col-6 col-12">
                <div className="flex gap-4	md:pl-4">
                  <div>
                    <div className="about-icon-background  border-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-eye text-accent"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="space-grotesk">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading online platform for career-focused IT
                      training, recognized for our cutting-edge curriculum and
                      unwavering dedication to student success in a world
                      powered by technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
