import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'



class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          I am a curious, self driven Web Developer and UI / UX designer based in NYC who is passionate in Digital Art, Emerging technologies, Human - Computer Interaction, accessability in UI / UX design, 
          and tech education for underrepresented and marginalized groups.I believe in advocating
          for good design that is easy to use, provides a enjoyable experience and most importantly has good social impact
          for society at large.
           </p>

           <p> In addition I believe continuous learning about new methodologies as well as understanding one another and fair collaboration is crucial when it comes to the projects and products we build.Thoughtful design and equality in tech and design are extremely important in today 's ever connected world. 
           I strive to promote and embrace these ideas when I am connecting with others from all walks of life, 
           through social media, my personal blog, and even in person at conferences and meetups.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>MELAN8</h3>
          <p>
           A UI concept I designed for a blog devoted to highlighting stories from creatives. 
           It utilizes a clean modern look with serif fonts, a light color palette thats easy for the user to read, as well as modern site and social icons.  
           Made using Adobe Xd.
          </p>

          <a href="https://www.behance.net/gallery/88163899/MELAN8-Creative-Blog"><span className="icon fa-behance"> View source on Behance</span></a>
          
          {close}
          
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h3>Checkout Form</h3>
          <p>
          Credit card checkout form for a site. This was built using HTML5, CSS3, and Bootstrap with input validation in JavaScript
          </p>

          <a href="https://github.com/nycbeardo/UI002CreditCardCheckOut"><span className="icon fa-github"> View source on GitHub</span></a>
          
          {close}


          <span className="image main">
          <img src={pic05} alt="" />
        </span>
        <h3>Registration Slider</h3>
        <p>
        This responsive sign-in form allows you to switch between sections for returning and new users.
        </p>
        <a href="https://github.com/nycbeardo/Double-Sign-In-Form"><span className="icon fa-github"> View source on GitHub</span></a>
        {close}

        <span className="image main">
      <img src={pic07} alt="" />
    </span>
    <h3>Vintage Hobby Site</h3>
    <p>
     UI card concept designed for a clothing site to provide a preview of a product being offered. Made according to Google's Material Design guidelines with HTML5 and CSS.
    </p>
    <a href="https://github.com/nycbeardo/material-design-card"><span className="icon fa-github"> View source on GitHub</span></a>
    {close}

        <span className="image main">
        <img src={pic06} alt="" />
      </span>
      <h3>Product Card</h3>
      <p>
       UI card concept designed for a clothing site to provide a preview of a product being offered. Made according to Google's Material Design guidelines with HTML5 and CSS.
      </p>
      <a href="https://github.com/nycbeardo/material-design-card"><span className="icon fa-github"> View source on GitHub</span></a>
      {close}




        </article>




        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
          <img src={pic04} alt="" />
          </span>
          
           
          <div className="row">
            <div className="col-md-4 col-sm-6 skill">
              <h4>HTML5 <i className="devicon-html5-plain colored" /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>CSS3 <i className="devicon-css3-plain colored"  /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
            <h4>Javascript <i class="devicon-javascript-plain colored" ></i></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Bootstrap <i className="devicon-bootstrap-plain colored"  /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
            <h4>React<i class="devicon-react-plain colored"></i></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Python <i className="devicon-python-plain colored"  /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Adobe Xd <i className="devicon-cplusplus-plain colored"  /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Git <i className="devicon-git-plain colored"  /></h4>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Figma <i className="devicon-java-plain colored"  /></h4>
            </div>
          </div>
        
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
