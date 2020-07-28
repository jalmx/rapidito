import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import BlogSection from "../components/blog";
import uid from "uid";
import { getAllPost } from "../firebase/post";

const Blog = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getAllPost().then((postList) => setState(postList));
    return () => {};
  },[]);

  return (
    <Layout {...props}>
      {state.map((blog) => (
        <BlogSection key={uid(10)} {...blog} more="Ver más" />
      ))}
    </Layout>
  );
};

export default Blog;
