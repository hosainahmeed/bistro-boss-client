import { Helmet } from "react-helmet-async";
import PageBanner from "../../Home/Home/Shared/Chef-Show/PageBanner";
import contactBanner from "../../../assets/contact/banner.jpg";
import Infocard from "../../../Components/InfoCard/Infocard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ContactSection from "./ContactSection";
function Contact() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      <PageBanner
        bannerImage={contactBanner}
        heading="Contact"
        sub_heading="Lets test our good and bring our journy"
      ></PageBanner>
      <Infocard></Infocard>
      <SectionTitle
        subheading="send your massage"
        heading="CONTACT FORM"
      ></SectionTitle>
      <ContactSection> </ContactSection>
    </div>
  );
}

export default Contact;
