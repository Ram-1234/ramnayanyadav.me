import React from 'react'

function Contact() {
    return (
        <div className="contactme">
            <h3 className="serial-4">__04</h3>
            <p className='contact'>Contact Me</p> 
            <div className="contactinfo">
                <div>
                    <p className="email-head">Email</p>
                    <p className="email-id">ramnayan699@gmail.com</p>
                    <p className="email-id"><strong>Mob:</strong> 9651444852</p>
                    <p className="social-net-icon">Social Network</p>
                    <a className="same-icon-color" href="https://www.linkedin.com/in/ramnayan-yadav-33371b165/" target="_block">
                       <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Ram-1234" target="_block">
                    <i class="fab fa-github-square"></i>
                    </a>
                    <a className="same-icon-color" href="https://twitter.com/ramnayan1096" target="_block">
                    <i class="fab fa-twitter-square"></i>
                    </a>
                    <a className="same-slack-color" href="https://app.slack.com/client/TN7HY14KE/CN8267ACQ" target="_block">
                    <i class="fab fa-slack"></i>
                    </a>
                    <a className="same-icon-color" href="https://t.me/username" target="_block">
                    <i class="fab fa-telegram"></i>
                    </a>
                    <a className="same-icon-color" href="https://www.facebook.com/" target="_block">
                    <i class="fab fa-facebook-square"></i>
                    </a><br/>
                    <a className="same-whatsapp-color" href="https://web.whatsapp.com/" target="_block">
                    <i class="fab fa-whatsapp"></i>
                    </a>
                    <a className="same-pintrest-color" href="https://in.pinterest.com/yaryan1096/_saved/" target="_block">
                    <i class="fab fa-pinterest"></i>
                    </a>
                </div>
                <form>
                    <input type="text" placeholder="Your Name" required /><br/>
                    <input type="email" placeholder="Your E-mail" required /><br/>
                    <input type="text" placeholder="Phone Number" required /><br/>
                    <textarea type="text" placeholder="Your Message" required /><br/>
                   <button>SEND</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
