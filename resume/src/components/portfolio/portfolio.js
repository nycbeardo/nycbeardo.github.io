import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div id="portfolio">
        <div className="container">
          <div className="section-title text-center center">
            <h2>Portfolio</h2>
            <hr />
          </div>
          <div className="categories">
            <ul className="cat">
              <li>
                <ol className="type">
                  <li><a href="#" data-filter="*" className="active">All</a></li>
                  <li><a href="#" data-filter=".web">Concepts</a></li>
                  <li><a href="#" data-filter=".app">Projects</a></li>
                </ol>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-3 col-lg-3 web">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/example/01-large.jpg" title="Example of a tribute Site for the Worlds Fair in Queens" rel="prettyPhoto">
                      <div className="hover-text">
                        <h4>Tribute Site</h4>
                        <small>Web Design</small>
                      </div>
                      <img src="img/example/01-small.jpg" className="img-responsive" alt="Tribute Site" />
                    </a> </div>
                  <a data-v-4b155e36 href="https://github.com/nycbeardo/personalproject" className="project__source"><svg data-v-4b155e36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" data-darkreader-inline-fill data-darkreader-inline-stroke style={{-darkreaderInlineFill: 'none', -darkreaderInlineStroke: 'currentColor'}}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg> <span data-v-4b155e36>View source on GitHub</span></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 app">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/example/02-large.jpg" title="Project description" rel="prettyPhoto">
                      <div className="hover-text">
                        <h4>Tic Tac Toe</h4>
                        <small>App Development</small>
                      </div>
                      <img src="img/example/02-small.jpg" className="img-responsive" alt="Project Title" />
                    </a> </div>
                  <a data-v-4b155e36 href="https://github.com/nycbeardo/TicTacToe" className="project__source"><svg data-v-4b155e36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" data-darkreader-inline-fill data-darkreader-inline-stroke style={{-darkreaderInlineFill: 'none', -darkreaderInlineStroke: 'currentColor'}}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg> <span data-v-4b155e36>View source on GitHub</span></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 web">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/example/03-large.jpg" title="This is an example of a card based view of a product being offered on a site. Made according to Google's Material Design guidelines." rel="prettyPhoto">
                      <div className="hover-text">
                        <h4>Material Design Card</h4>
                        <small>Web Design</small>
                      </div>
                      <img src="img/example/03-small.jpg" className="img-responsive" alt="Material Design Card" />
                    </a> </div>
                  <a data-v-4b155e36 href="https://github.com/nycbeardo/material-design-card" className="project__source"><svg data-v-4b155e36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" data-darkreader-inline-fill data-darkreader-inline-stroke style={{-darkreaderInlineFill: 'none', -darkreaderInlineStroke: 'currentColor'}}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg> <span data-v-4b155e36>View source on GitHub</span></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 web">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/example/04-large.jpg" title="Project description" rel="prettyPhoto">
                      <div className="hover-text">
                        <h4>Digital Clock</h4>
                        <small>Web Design</small>
                      </div>
                      <img src="img/example/04-small.jpg" className="img-responsive" alt="Project Title" />
                    </a> </div>
                  <a data-v-4b155e36 href="https://github.com/nycbeardo/Digital-Clock" className="project__source"><svg data-v-4b155e36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" data-darkreader-inline-fill data-darkreader-inline-stroke style={{-darkreaderInlineFill: 'none', -darkreaderInlineStroke: 'currentColor'}}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg> <span data-v-4b155e36>View source on GitHub</span></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 app">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/example/05-large.jpg" title="Project description" rel="prettyPhoto">
                      <div className="hover-text">
                        <h4>Issue Tracker</h4>
                        <small>App Development</small>
                      </div>
                      <img src="img/example/05-small.jpg" className="img-responsive" alt="Project Title" />
                    </a> </div>
                  <a data-v-4b155e36 href="https://github.com/nycbeardo/Javascript-Project" className="project__source"><svg data-v-4b155e36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" data-darkreader-inline-fill data-darkreader-inline-stroke style={{-darkreaderInlineFill: 'none', -darkreaderInlineStroke: 'currentColor'}}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg> <span data-v-4b155e36>View source on GitHub</span></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 branding">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/example/06-large.jpg" title="Project description" rel="prettyPhoto">
                      <div className="hover-text">
                        <h4>Project Title</h4>
                        <small>Branding</small>
                      </div>
                      <img src="img/example/06-small.jpg" className="img-responsive" alt="Project Title" />
                    </a> </div>
                  <a data-v-4b155e36 href="https://github.com/nycbeardo/material-design-card" className="project__source"><svg data-v-4b155e36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" data-darkreader-inline-fill data-darkreader-inline-stroke style={{-darkreaderInlineFill: 'none', -darkreaderInlineStroke: 'currentColor'}}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg> <span data-v-4b155e36>View source on GitHub</span></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 branding app">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/example/07-large.jpg" title="Project description" rel="prettyPhoto">
                      <div className="hover-text">
                        <h4>To Do List</h4>
                        <small>App Development</small>
                      </div>
                      <img src="img/example/07-small.jpg" className="img-responsive" alt="Project Title" />
                    </a> </div>
                  <a data-v-4b155e36 href="https://github.com/nycbeardo/To-Do-List" className="project__source"><svg data-v-4b155e36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" data-darkreader-inline-fill data-darkreader-inline-stroke style={{-darkreaderInlineFill: 'none', -darkreaderInlineStroke: 'currentColor'}}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg> <span data-v-4b155e36>View source on GitHub</span></a>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 web">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href="img/example/08-large.jpg" title="Project description" rel="prettyPhoto">
                      <div className="hover-text">
                        <h4>Project Title</h4>
                        <small>Web Design</small>
                      </div>
                      <img src="img/example/08-small.jpg" className="img-responsive" alt="Project Title" />
                    </a> </div>
                  <a data-v-4b155e36 href="https://github.com/nycbeardo/material-design-card" className="project__source"><svg data-v-4b155e36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" data-darkreader-inline-fill data-darkreader-inline-stroke style={{-darkreaderInlineFill: 'none', -darkreaderInlineStroke: 'currentColor'}}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg> <span data-v-4b155e36>View source on GitHub</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
  }
}
