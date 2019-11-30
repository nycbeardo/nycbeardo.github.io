import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <div id="about">
        <div className="container">
          <div className="section-title text-center center">
            <h2>About Me</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-12 text-center"><img src="img/example/portraitme2.jpg" className="img-responsive" /></div>
            <div className="col-md-8 col-md-offset-2">
              <div className="about-text">
              <p>I am a curious, self driven Web Developer and UI/UX designer based in NYC who is passionate 
              about Digital Art, Emerging technologies, Human-Computer Interaction, accessability in UI/UX design, and tech education for underrepresented and marginalized groups. 
              I believe in advocating for good design that is easy to use, provides a enjoyable experience and most importantly has good social impact for society at large.</p>


            <p>In addition I believe continuous learning about new methodologies as well as understanding one another and 
              fair collaboration is crucial when it comes to the projects and products we build. 
              Thoughtful design and equality in tech and design are extremely important in today's ever connected world. 
              I strive to promote and embrace these ideas when I am connecting with others from all walks of life, 
              through social media, <a class="linky" href="https://objector.netlify.com"> my personal blog</a>, and even in person at conferences and meetups.
            </p>
                <p className="text-center"><a className="btn btn-primary" href="https://drive.google.com/open?id=1EPdDs5eNJPp_te04DVVv-xXuBbXpISeK"><i className="fa fa-download" /> Download Resume</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}