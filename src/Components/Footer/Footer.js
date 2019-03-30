import React, { Component } from "react";
import styles from "./Footer.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF);
library.add(faTwitter);
library.add(faInstagram);
library.add(faYoutube);
library.add(faPinterest);

class Footer extends Component {
  render() {
    return (
      <div className={styles.Footer}>
        <div className={styles.Left_Navigator}>
          <div className={styles.Menu}>
            <h1>Account</h1>
            <ul>
              <li>Register</li>
              <li>Log In</li>
              <li>Orders</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className={styles.Menu}>
            <h1>Assistance</h1>
            <ul>
              <li>Customer Care</li>
              <li>Store Locator</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className={styles.Menu}>
            <h1>Account</h1>
            <ul>
              <li>Register</li>
              <li>Log In</li>
              <li>Orders</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
        <div className={styles.Right_Navigator}>
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <FontAwesomeIcon icon={["fab", "pinterest"]} />
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </div>
      </div>
    );
  }
}

export default Footer;
