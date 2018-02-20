import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        cover: postEdge.node.frontmatter.cover,
        date: postEdge.node.frontmatter.date,
        tags: postEdge.node.frontmatter.tags,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <h1>{post.title}</h1>
            <p>Time to read: {post.timeToRead} min</p>
            <p>{post.excerpt}</p>
            {post.tags && post.tags.join(', ')}
            <img src={post.cover} alt="" />
          </Link>
        ))}
      </div>
    )
  }
}

export default PostListing;
