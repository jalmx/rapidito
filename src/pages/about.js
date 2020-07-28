import React from "react";
import Layout from "../components/layout";
import AboutSection from "../components/about/";

const About = (props) => (
  <Layout title="Sobre Nosotros" {...props}>
    <AboutSection {...props} />
  </Layout>
);

export default About;
