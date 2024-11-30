function Footer() {
    return (
        <footer>
            <div>
                <span className="logoNav">e</span><span className="logoNav navHeadingLogo">Dex</span><br /><br />
                <span className="navHeading">Contact Us</span>
                <p className="navItem">
                    Call: +91 12345 67890 <br /><br />
                    Don't call us unless we say so. <br />
                    We will never say so. <br /><br />
                    email: genric@genric.com <br />
                </p>
                <div>
                    <a href="./"><img src="./src/assets/socialMedia3.png" alt="Instagram" /></a>
                    <a href="./"><img src="./src/assets/socialMedia2.png" alt="Linked In" /></a>
                    <a href="./"><img src="./src/assets/socialMedia5.png" alt="Babel" /></a>
                    <a href="./"><img src="./src/assets/socialMedia4.png" alt="Tower of Hanoi" /></a>
                    <a href="./"><img src="./src/assets/socialMedia1.png" alt="Javascript" /></a>
                </div>
            </div>
            <div className="navList">
                <ul>
                    <li className="navHeading">Explore</li>
                    <li className="navItem"><a href="./">Home</a></li>
                    <li className="navItem"><a href="./">About</a></li>
                    <li className="navItem"><a href="./">Courses</a></li>
                    <li className="navItem"><a href="./">Blog</a></li>
                    <li className="navItem"><a href="./">Contact</a></li>
                </ul>
            </div>
            <div className="navList">
                <ul>
                    <li className="navHeading">Category</li>
                    <li className="navItem"><a href="./">Design</a></li>
                    <li className="navItem"><a href="./">Devlopment</a></li>
                    <li className="navItem"><a href="./">Marketing</a></li>
                    <li className="navItem"><a href="./">Business</a></li>
                    <li className="navItem"><a href="./">Lifestyle</a></li>
                    <li className="navItem"><a href="./">Photography</a></li>
                    <li className="navItem"><a href="./">Music</a></li>
                </ul>
            </div>
            <div>
                <span className="navHeading">Subscribe</span><br /><br />
                <span className="navItem">Give us your email for News!<br />This is our new letter.</span><br /><br />
                <input id="emailInput" type="text" placeholder="Email here" className="navInputEmail" /><br /><br />
                <button href="./" id="subscribe">Subscribe Now</button>
            </div>
        </footer>
    )
}

export default Footer;