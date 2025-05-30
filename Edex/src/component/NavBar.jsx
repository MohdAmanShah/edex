function NavBar() {
    return (
        <div id="navBar">
            <div style={{ alignSelf: "center", fontStyle: "italic", fontSize: "2em" }}>
                <span style={{ color: "Red" }}>e</span>
                <span style={{ color: "orange" }}>Dex</span>
            </div>
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./">About</a></li>
                <li><a href="./">Courses</a></li>
                <li><a href="./">Blog</a></li>
                <li><a href="./">Contact</a></li>
            </ul>
            <div id="signLogArea">
                <a href="./" id='logInButton' style={{ display: "flex", alignItems: "center" }}>
                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="rgba(0,0,0,0%)" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61351 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.375C12.6213 15.375 13.125 14.8713 13.125 14.25C13.125 13.6287 12.6213 13.125 12 13.125C11.3787 13.125 10.875 13.6287 10.875 14.25C10.875 14.8713 11.3787 15.375 12 15.375Z" fill="white" />
                    </svg>
                    Login
                    {/* <span style={{ marginLeft: "0.5em" }}>Login</span> */}
                </a>
                <a href="./" id="signUpButton">Sign Up for free</a>
            </div>
        </div>
    );
}

export default NavBar;
