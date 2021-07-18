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
                    <a href="https://www.linkedin.com/in/ramnayan-yadav-33371b165/" target="_block">
                       <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Ram-1234" target="_block">
                    <i class="fab fa-github-square"></i>
                    </a>
                    <a href="https://twitter.com/ramnayan1096" target="_block">
                    <i class="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://app.slack.com/client/TN7HY14KE/CN8267ACQ" target="_block">
                    <i class="fab fa-slack"></i>
                    </a>
                    <a href="" target="_block">
                    <i class="fab fa-telegram"></i>
                    </a>
                    <a href="" target="_block">
                    <i class="fab fa-facebook-square"></i>
                    </a>
                </div>
                <form>
                    <input type="text" placeholder="Your Name"/><br/>
                    <input type="email" placeholder="Your E-mail"/><br/>
                    <input type="text" placeholder="Phone Number"/><br/>
                    <textarea type="text" placeholder="Your Message" /><br/>
                   <button>SEND</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
