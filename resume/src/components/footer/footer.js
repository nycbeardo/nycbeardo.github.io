import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <div id="footer">
        <div className="container text-center">
          <div className="fnav">
            <p>Designed by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire.</a> Modified by Montique
              Stevens</p>
          </div>
        </div>
      </div>
    );
  }
}