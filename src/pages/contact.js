import React from "react";
import Layout from "../components/layout";
import ContactSection from "../components/contact";

const Contact = (props) => (
  <Layout {...props}>
    <ContactSection title="Contactanos" {...props} />
  </Layout>
);

export default Contact;
