import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="header">
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <h1>
                  <span className="txt-rotate" data-period={2000} data-rotate="[ &quot;Montique Stevens&quot; ]" />
                </h1>
                <p>Web Developer</p>
                <a href="#about" className="btn btn-default btn-lg page-scroll">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      </React.Fragment>
    );
  }
}