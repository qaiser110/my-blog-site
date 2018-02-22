import React from "react";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <button onClick={this.handleScriptLoad()} />
      </div>
    );
  }
}

export default Index;
