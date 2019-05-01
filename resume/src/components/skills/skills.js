import React, { Component } from 'react';
export default  class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <div id="skills" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Tech Stack</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 skill">
              <h4>HTML5 <i className="devicon-html5-plain colored" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>CSS3 <i className="devicon-css3-plain colored" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>jQuery <i className="devicon-jquery-plain colored" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Bootstrap <i className="devicon-bootstrap-plain colored" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Javascript <i className="devicon-javascript-plain colored" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Wordpress <i className="devicon-wordpress-plain colored" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>C++ <i className="devicon-cplusplus-plain colored" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Git <i className="devicon-git-plain colored" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Java <i className="devicon-java-plain colored" style={{fontSize: '60px'}} /></h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}