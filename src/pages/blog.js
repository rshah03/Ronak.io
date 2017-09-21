import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Icon, Grid, Button } from 'semantic-ui-react'

class BlogPage extends Component {
  render() {
    return (
      <div>
        <h1><Link to="/projects"><Icon name="chevron left"/></Link>B L O G</h1>
        <hr />

        {console.log(this.props.data)}
        {this.props.data.allMarkdownRemark.edges.map(post => (
          <Button
            key={post.node.id}
            href={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Button>
        ))}
      </div>
    );
  }
}

export const pageQuery = graphql`
query indexQUery {
  allMarkdownRemark(limit: 1000) {
    edges {
      node {
        id
        frontmatter {
          title
          path
        }
      }
    }
  }
} 
`

export default BlogPage;