import React, { useState } from "react";
import BlogHero from "../components/blog/blogHero/BlogHero";
import BlogsCon from "../components/blog/blogsCon/BlogsCon";
import FooterTop from "./../components/footer/FooterTop";

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <BlogsCon />
      <FooterTop />
    </div>
  );
};

export default Blog;
