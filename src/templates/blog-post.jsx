import { graphql } from "gatsby";
import moment from "moment";
import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import SEO from "../components/seo";

import classes from "./blog-post.module.css";

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  return (
    <Layout small={true}>
      <Header />
      <SEO title={`${post.frontmatter.title} | Ryan Fitzgerald`} />
      <div>
        <article>
          <div className={classes.blogTitle}>
            <h1>{post.frontmatter.title}</h1>
            <p>
              Posted on {moment(post.frontmatter.date).format("MMMM D, YYYY")}
            </p>
          </div>
          <section
            className={classes.blogContent}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
