// src/pages/Contact.jsx
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Footer from "../components/Footer";
import {
  StyledColoredDiv,
  StyledPrimaryButton,
} from "../components/styled-components";
import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "enquiries"), {
        fullname: formData.fullname,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
      });
      alert("Form submitted successfully!");
      setFormData({ fullname: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting form. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div> */}

      <div className="py-4 px-4">
        <div className="mb-6">
          <h1 className="text-6xl space-grotesk text-center	card">
            Get in Touch
          </h1>
          <p className="mb-3 text-muted-foreground text-center	">
            Have questions about our courses or enrollment? We're here to help.
          </p>
        </div>

        {/* form */}

        <div style={{ maxWidth: "896px", margin: "auto" }}>
          <StyledColoredDiv className="grid grid-nogutter radius border-1">
            {/* contact */}
            <div className="p-4 col-12 md:col-6">
              <div className="mb-4">
                <h3 className="text-2xl	line-height-1 space-grotesk tracking-tight">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mt-2">
                  You can also reach us directly through the channels below.
                </p>
              </div>

              <div>
                <div className="flex gap-3">
                  <div className="contactIcon-background border-circle ">
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
                      class="lucide lucide-mail text-accent"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold">Email</p>
                    <a
                      href="mailto:supp_visistata@outlook.com"
                      className="text-muted-foreground"
                    >
                      supp_visistata@outlook.com
                    </a>
                  </div>
                </div>
                {/* <div className="flex gap-3 mt-4 mb-4">
                  <div className="contactIcon-background border-circle ">
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
                      class="lucide lucide-phone text-accent"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold">Phone</p>
                    <a
                      href="tel:+919035920555"
                      className="text-muted-foreground"
                    >
                      (+91) &nbsp; 9035920555
                    </a>
                  </div> */}
                {/* </div> */}
                <div className="flex gap-3 mt-4 mb-4">
                  <div className="contactIcon-background border-circle ">
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
                      class="lucide lucide-map-pin text-accent"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>

                  <div>
                    <p class="font-semibold">Office Address</p>
                    <a
                      href="mailto:supp_visistata@outlook.com"
                      className="text-muted-foreground"
                    >
                       #63, Muddinapalya Main Road, Muneshwara Layout, 
                          Gidadakonenahalli, Bengaluru, Karnataka 560091
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* send message */}
            <div className="p-4 col-12 border-left-1	md:border-left-none md:col-6">
              <div className="mb-4">
                <h3 className="text-2xl	line-height-1 space-grotesk tracking-tight">
                  Send us a Message
                </h3>
                <p className="text-muted-foreground mt-2">
                  Fill out the form and our team will get back to you within 24
                  hours.{" "}
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-column gap-2">
                  <label htmlFor="fullname" className="font-semibold">
                    Full Name
                  </label>
                  <InputText
                    className="pt-2 pb-2 pl-3"
                    id="fullname"
                    name="fullname"
                    aria-describedby="fullname-help"
                    placeholder="Shiva"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-column gap-2 mt-3">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <InputText
                    className="pt-2 pb-2 pl-3"
                    id="email"
                    name="email"
                    aria-describedby="email-help"
                    placeholder="shiva@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-column gap-2 mt-3">
                  <label htmlFor="subject" className="font-semibold">
                    Subject
                  </label>
                  <InputText
                    className="pt-2 pb-2 pl-3"
                    id="subject"
                    name="subject"
                    aria-describedby="subject-help"
                    placeholder="Course Inquiry regarding Web Development"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-column gap-2 mt-3">
                  <label htmlFor="Message" className="font-semibold">
                    Message
                  </label>
                  <InputTextarea
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you"
                    className="pt-2 pb-2 pl-3"
                    id="Message"
                    name="message"
                    rows={5}
                    cols={30}
                  />
                  <small id="Message-help"></small>
                </div>
                <StyledPrimaryButton
                  className="w-full mt-3"
                  label={loading ? "Submitting..." : "Submit"}
                  icon="pi pi-arrow-right"
                  iconPos="right"
                />
              </form>
            </div>
          </StyledColoredDiv>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
