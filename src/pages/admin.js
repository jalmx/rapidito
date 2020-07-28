import React from "react";
import AdminSection from "../components/admin/";
import Layout from "../components/layout";

const Admin = (props) => (
  <Layout {...props} title="Admin">
    <AdminSection {...props} title="Admin" />
  </Layout>
);

export default Admin;
