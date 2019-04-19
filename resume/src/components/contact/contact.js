import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <div id="contact" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Lets Keep In Touch!</h2>
            <hr />
          </div>
          <div className="col-md-8 col-md-offset-2">
            <div className="social">
              <ul>
                <li><a href="https://twitter.com/NYCBEARDO"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://github.com/nycbeardo"><i className="fa fa-github" /></a></li>
                <li><a href="https://www.linkedin.com/in/montique-stevens/"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

        );
  }
}