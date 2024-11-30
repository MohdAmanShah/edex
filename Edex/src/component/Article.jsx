let arr_0 = ["/src/assets/student_1.png", "/src/assets/student_2.png", "/src/assets/student_3.png", "/src/assets/student_4.png"]
let arr_1 = ["/src/assets/person_1.png", "/src/assets/person_2.png", "/src/assets/person_3.png"]
let arr_2 = ["/src/assets/tool_0.png", "/src/assets/tool_1.png", "/src/assets/tool_2.png", "/src/assets/tool_3.png", "/src/assets/tool_4.png", "/src/assets/tool_5.png", "/src/assets/tool_6.png", "/src/assets/tool_7.png", "/src/assets/tool_8.png", "/src/assets/tool_9.png", "/src/assets/tool_10.png", "/src/assets/tool_11.png"]
let arr_3 = ["1","2","3","4"]
import {EmptyStar, FullStar, HalfStar, ArrowUpRight, CaretLeft, CaretRight} from "./SvgCollection.jsx"
function Article() {
    return (
        <article>
            <div className="genricBlock">
                <span className="headingText margin20">Most <span style={{ color: "blue" }}>World's Largest</span></span><br />
                <span className="paraText margin20">Various version have evoled over the years, sometimes by accident.</span>
                <div className="courseContainer">
                    <div className="courseList">
                        {
                            arr_3.map( src => {
                                return (
                                    <div className="courseBanner">
                                        <div className="courseIcon">
                                            <span>html</span>
                                            <img src={"/src/assets/course_" + src + ".png"} alt="123" />         
                                        </div>                       
                                        <p className="courseText">Various version have evoled over the years, sometimes by accident.</p>
                                        <div className="starReview">
                                            <FullStar />
                                            <FullStar />
                                            <FullStar />
                                            <FullStar />
                                            <FullStar />
                                            <span> (15) </span>
                                        </div>
                                        <hr />
                                        <div className="coursePrice">
                                            <span className="price">$ 500</span>
                                            <ArrowUpRight />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="genricBlock">
                <span className="headingText margin20">Most <span style={{ color: "blue" }}>World's Largest</span></span><br />
                <span className="paraText margin20">Various version have evoled over the years, sometimes by accident.</span>
                <div className="eduList">
                    {
                        arr_2.map(src => {
                            return (
                                <div className="eduListItem">
                                    <div>
                                        <img src={src} alt="123" />
                                        Driving
                                    </div>
                                    <ArrowUpRight />
                                </div>

                            );
                        })
                    }
                </div>
            </div>

            <div className="genricBlock">
                <span className="headingText margin20">Out <span style={{ color: "blue" }}>Popular Category</span></span><br />
                <span className="paraText margin20">Various version have evoled over the years, sometimes by accident.</span>
                <div className="genricMenu">
                    <div className="studentBlockArea ">
                        {
                            arr_0.map(src => {
                                return (
                                    <div className="studentBlock">
                                        <img src={src} alt="" />
                                        <span>Jacob Jones</span> <br />
                                        <span>UI-UX Design Expert</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="genricBlock">
                <span className="headingText margin20">Out <span style={{ color: "blue" }}>Popular Category</span></span><br />
                <span className="paraText margin20">Various version have evoled over the years, sometimes by accident.</span>
                <div className="studentReviewArea">
                    {
                        arr_1.map(src => {
                            return (
                                <div className="studentReview">
                                    <div className="reviewBlock">
                                        <div className="reviewName">
                                            <img src={src} alt="studentPhoto" />
                                            <p>
                                                <span className="subHeadingText black">Jacob Jones <br /></span>
                                                <span className="reviewText">UI-UX Design Expert</span>
                                            </p>
                                        </div>
                                        <img src="/src/assets/quotes.png" alt="Qoute" width="18px" height="18px" />
                                    </div>
                                    <div className="reviewText">
                                        <p>THis is my review. This is a paid review nice review woowowow. THis is my review. This is a paid review nice review woowowow
                                            THis is my review. This is a paid review nice review woowowow
                                            THis is my review.
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="joinPanel">
                <img src="./src/assets/JoinPanelImage.png" alt="Random Shit" />
                <div>
                    <p className="headingText">Join the <span style={{ color: "blue" }}>World's Largest</span> learning<br />platform today</p>
                    <p className="subHeadingText">Start Learning his is the time this is the time t by registering for free</p>
                    <p className="paraText">This is the timhis is the time this is the time te to register <br /> Now registhis is the time this is the time this is the time ter for free <br /> This is limited this is the time this is the time this is the time t  ime offer<br /><br /></p>
                    <a href="./" className="signUpPanel">Sign Up for free</a>
                </div>
            </div>
        </article>
    );
}

export default Article;
