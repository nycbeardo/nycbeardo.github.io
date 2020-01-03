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
              <li><a href="https://twitter.com/NYCBEARDO"><i class="fab fa-twitter fa-3x"></i></a></li>
              <li><a href="https://github.com/nycbeardo"><i class="fab fa-github fa-3x" ></i></a></li>
              
              <li><a href="https://objector.netlify.com"><i class="fas fa-blog fa-3x" ></i></a></li>
              <li><a href="https://dribbble.com/nycbeardo"><i class="fab fa-dribbble fa-3x" ></i></a></li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>

        );
  }
}