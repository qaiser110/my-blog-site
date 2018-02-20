import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


export default class MainLayout extends React.Component {
  getLocalTitle() {
    const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories xxxx";
    } else if (currentPath === "about/") {
      title = "About xxxx";
    } else if (currentPath === "contact/") {
      title = "Contact xxxx";
    } else if (currentPath.indexOf("posts")) {
      title = "Article";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
        <Helmet>
          <title>{`${config.siteTitle} yyy |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>My Site</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/categories">Categories</ListLink>
            <ListLink to="/tags/">Tags</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>
        {children()}
      </div>
    );
  }
}
