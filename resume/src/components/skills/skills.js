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
              <h4><i className="fab fa-html5" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4><i className="fab fa-css3" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
            <h4><i class="fab fa-js-square" style="font-size:60px;"></i></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4> <i className="fab fa-bootstrap" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
            <h4><i class="fab fa-react" style="font-size:60px;"></i></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4><i className="fab fa-python" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4><i className="fab fa-adobe" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4><i className="fab fa-figma" style={{fontSize: '60px'}} /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4> <i className="fab fa-invision" style={{fontSize: '60px'}} /></h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}