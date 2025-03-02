import React from "react";
import "./style.css";

function Contact() {
  return (
      <div id="contact__page" className="contactme container-fluid">
       <div className="row">
            <div className="col-lg-4 col-md-5">
              <h3 className="serial-4">__04</h3>
              <p className="contact">Contact Me</p>
              <div className="contacts-details">
                <p className="email-head">Email</p>
                <p className="email-id">ramnayan699@gmail.com</p>
                <p className="email-id">
                  <strong>Mob:</strong> 9651444852
                </p>
                <p className="social-net-icon">Social Network</p>
                <a className="same-icon-color" href="https://www.linkedin.com/in/ramnayan-yadav-33371b165/" target="_block" >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Ram-1234" target="_block">
                  <i className="fab fa-github-square"></i>
                </a>
                <a className="same-icon-color" href="https://twitter.com/ramnayan1096" target="_block" >
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a className="same-icon-color" href="https://t.me/username" target="_block" >
                  <i className="fab fa-telegram"></i>
                </a>
                <a className="same-icon-color" href="https://www.facebook.com/" target="_block" >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a className="same-whatsapp-color" href="https://web.whatsapp.com/" target="_block" >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a className="same-pintrest-color" href="https://in.pinterest.com/yaryan1096/_saved/" target="_block" >
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
            <div className="contactinfo col-lg-8 col-md-7">
              <form className="form contact-bg" id="contact-form" name="contact" method="post">
                <input type="text" name="name" placeholder="Your Name" required />
                <br />
                <input type="email" name="email" placeholder="Your E-mail" required />
                <br />
                <input type="text" name="phone" placeholder="Phone Number" required />
                <br />
                <textarea name="message" type="text" placeholder="Your Message" required />
                <br />
                <button id="submit" type="submit" name="submit">SEND</button>
                <div id="success">
                    <p className="green textcenter"> Your message was sent successfully! I will be in touch as soon as I can. </p>
                </div>
                <div id="error">
                    <p> Something went wrong, try refreshing and submitting the form again. </p>
                </div>
              </form>
            </div>
       </div>
      </div>
  );
}

export { Contact };
