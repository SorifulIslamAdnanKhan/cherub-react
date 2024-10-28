import contactImg from "../../assets/home-one/images/contact/contact.png";
import Container from "../shared/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2z4da18", //Add your Service ID
        "template_kosj2so", //Add your Template ID
        form.current,
        "o9MieoWJcCVid4HTl" //Add your Public Key
      )
      .then(
        () => {
          toast.success(`Your message has been sent successfully.`);
          form.current.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="my-[80px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[30px]">
          <div>
            <img
              className="w-full lg:h-[490px] xl:h-auto"
              src={contactImg}
              alt="Contact Image"
            />
          </div>
          <div className="w-full h-full rounded-lg md:rounded-2xl py-4 md:py-5 px-5 md:px-8 bg-[#F0F5DA] dark:bg-[#1C2329]">
            <h2>Send A Message</h2>
            <form className="py-4" ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <input
                    className="w-full px-5 py-5 text-base text-[#10171E] dark:text-[#FFFFFF] focus:outline-none rounded-lg dark:placeholder-white"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                  <div className="absolute top-6 right-5">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                </div>
                {/* Email */}
                <div className="relative">
                  <input
                    className="w-full px-5 py-5 text-base text-[#10171E] dark:text-[#FFFFFF] focus:outline-none rounded-lg dark:placeholder-white"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                  <div className="absolute top-6 right-5">
                    <FontAwesomeIcon icon={faAt} />
                  </div>
                </div>
              </div>
              {/* Address */}
              <div className="relative my-5">
                <input
                  className="w-full px-5 py-5 text-base text-[#10171E] dark:text-[#FFFFFF] focus:outline-none rounded-lg dark:placeholder-white"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Address"
                />
                <div className="absolute top-6 right-5">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
              </div>
              {/* Message */}
              <div className="relative my-5">
                <textarea
                  className="w-full px-5 py-4 text-base text-[#10171E] dark:text-[#FFFFFF] focus:outline-none rounded-lg dark:placeholder-white"
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
                <div className="absolute top-5 right-5">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </div>
              {/* Submit button */}
              <button className="bg-[#10171E] font-bold py-4 w-full text-[#FFFFFF] rounded-md flex justify-center items-center gap-2">
                <span>Send Message</span>{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
