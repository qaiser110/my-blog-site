import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-container">
        <Helmet title={`Contact Us | ${config.siteTitle}`} />
        <div className="contact">
          <h1>
            Edit pages/contact.jsx to include your information.
          </h1>
        </div>
      </div>
    );
  }
}

export default ContactPage
