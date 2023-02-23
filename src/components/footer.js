import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function FooterFunction() {
  return (
    <div>
      <footer className="row text-center items-center m-auto w-100">
        <div className="col align-self-center">
          <h2>Brand</h2>
        </div>

        <h6 className="col align-self-center">All right reserved 2020</h6>

        <div className="col d-flex justify-content-evenly">
          <div className="align-self-center">
            <FontAwesomeIcon icon={faFacebook} /> facebook
          </div>
          <div className="align-self-center">
            <FontAwesomeIcon icon={faLinkedin} /> linkedIn
          </div>
          <div className="align-self-center">
            <FontAwesomeIcon icon={faTwitter} /> twitter
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterFunction;
