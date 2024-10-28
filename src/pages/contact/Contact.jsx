import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/contact/ContactForm";
import Map from "../../components/contact/Map";
import FAQ from "../../components/shared/FAQ/FAQ";
import PageTitle from "../../components/shared/PageTitle/PageTitle";

const Contact = () => {
  return (
    <div>
      {/* Page Titles */}
      <Helmet>
        <title>Cherub | Contact </title>
      </Helmet>
      <PageTitle heading={"Contact Us"} />
      {/* Components */}
      <ContactForm />
      <Map />
      <FAQ />
    </div>
  );
};

export default Contact;
