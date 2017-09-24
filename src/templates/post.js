import React from 'react';
import Helmet from 'react-helmet';
import './post.scss';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <div className="postArea">
      <h1>
        {post.frontmatter.title}
      </h1>
      <div className="bodyText" dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`