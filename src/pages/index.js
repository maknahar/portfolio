import React from "react";
import { Link as GatsbyLink, graphql } from "gatsby";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Header />
      <SEO title="Ryan Fitzgerald | Full-Stack Developer" />
      <Section id="about" title="About Me">
        <p>
          I'm a motivated full-stack engineer who has experience building and
          scaling web applications and services in various domains.
        </p>
        <p>
          I'm also passionate about open source contributions, working in high
          impact environments with frequent deployments, and helping growing
          development teams build great products.
        </p>
      </Section>
      <Section id="projects" title="Projects">
        <Link
          title="ChromeExtensionKit"
          link="https://chromeextensionkit.com/?ref=portfolio"
          desc="Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates"
        />
        <Link
          title="GamePressKit"
          link="https://gamepresskit.com"
          desc="All-in-one tool to build and manage press kits for games with no code required"
        />
        <Link
          title="Pivalink"
          link="https://pivalink.com"
          desc="Tool to create microlanding pages that can be easily updated and customized to fit any brand"
        />
        <Link
          title="Coursefacts"
          link="https://coursefacts.com"
          desc="A platform where students can read and write university / college course reviews anonymously"
        />
        <Link
          title="Dev Blog"
          link="https://github.com/RyanFitzgerald/devblog"
          desc="A open source and minimal personal blog template for developers built with Gatsby and React"
        />
        <Link
          title="Dev Portfolio"
          link="https://github.com/RyanFitzgerald/devportfolio"
          desc="An open source and customizable single-page personal portfolio template for developers"
        />
      </Section>
      <Section id="blog-posts" title="Blog Posts">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Link
              key={node.fields.slug}
              title={title}
              link={node.fields.slug}
              desc={node.frontmatter.description}
              internal={true}
            />
          );
        })}
        {/* <GatsbyLink
          style={{
            color: "#3997dc",
            fontSize: 15,
            fontWeight: 700,
            textDecoration: "none",
          }}
          to="/blog"
        >
          View All Posts &rarr;
        </GatsbyLink> */}
      </Section>
      <Section id="experience" title="Experience">
        <Link
          title="Resolver"
          link="https://www.resolver.com/"
          desc="Full-Stack Developer, March 2020 - Present"
        />
        <Link
          title="Ambyint"
          link="https://ambyint.com"
          desc="Full-Stack Developer, September 2018 - March 2020"
        />
        <Link
          title="Bank of Canada"
          link="https://bankofcanada.ca"
          desc="Full-Stack Developer, May 2015 - September 2018"
        />
      </Section>
      <Section id="skills" title="Skills">
        <Link
          title="Languages & Frameworks"
          desc="JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP"
        />
        <Link title="Databases" desc="MongoDB, PostreSQL, MySQL" />
        <Link
          title="Other"
          desc="Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum"
        />
      </Section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
