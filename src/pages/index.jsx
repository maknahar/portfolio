import {graphql} from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionEducation from '../components/section-education';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({data}) => {
    const about = get(data, 'site.siteMetadata.about', false);
    const projects = get(data, 'site.siteMetadata.projects', false);
    const posts = data.allMarkdownRemark.edges;
    const experience = get(data, 'site.siteMetadata.experience', false);
    const education = get(data, 'site.siteMetadata.education', false);
    const skills = get(data, 'site.siteMetadata.skills', false);
    const blogEnabled = get(data, 'site.siteMetadata.blogEnabled', false);

    return (
        <Layout>
            <SEO/>
            <Header metadata={data.site.siteMetadata}/>
            {about && <SectionAbout about={about}/>}
            {skills && skills.length && <SectionSkills skills={skills}/>}
            {blogEnabled && posts && posts.length && <SectionBlog posts={posts}/>}
            {projects && projects.length && <SectionProjects projects={projects}/>}
            {experience && experience.length && (
                <SectionExperience experience={experience}/>
            )}
            {education && education.length && (
                <SectionEducation education={education}/>
            )}
        </Layout>
    );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blogEnabled
        name
        title
        description
        about
        author
        github
        linkedin
        projects {
          name
          description
          link
          logo
        }
        experience {
          name
          description
          link
          logo
          timeline
        }
        education {
          name
          description
          link
          logo
          timeline
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
