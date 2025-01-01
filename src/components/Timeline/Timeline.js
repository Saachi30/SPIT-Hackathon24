import React from 'react'
import './Timeline.scss'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Timeline = () => {
    useEffect(() => {
		Aos.init({
			duration: 800,
    		easing: 'ease-in-out',
		});
	  }, []);
    return (
        <div classNameName='boxtimeline'>
            <h3 className="h3">Timeline</h3>
            <ul className="timeline">
            <li>
                    <div data-aos="fade-up">
                        <div classNameName="flag-wrapper roundbox">
                            <span className="flag special">Round 1</span>
                            {/* <span className="time-wrapper"><span className="time">2013 - present</span></span> */}
                        </div>
                        {/* <div className="desc">Registrations and Submission round start</div> */}
                    </div>
                </li>
                <li>
                    <div className="direction-r" data-aos="fade-left">
                        <div className="flag-wrapper">
                            <span className="flag">28th December 2023</span>
                            {/* <span className="time-wrapper"><span className="time">2013 - present</span></span> */}
                        </div>
                        <div className="desc">Registrations and Submission round start</div>
                    </div>
                </li>

                <li>
                    <div className="direction-l" data-aos="fade-right">
                        <div className="flag-wrapper">
                            <span className="flag">26th January 2024</span>
                            {/* <span className="time-wrapper"><span className="time">2011 - 2013</span></span> */}
                        </div>
                        <div className="desc">Registrations and Submission round ends</div>
                    </div>
                </li>


                <li>
                    <div className="direction-r" data-aos="fade-left">
                        <div className="flag-wrapper">
                            <span className="flag">31st January 2024</span>
                            {/* <span className="time-wrapper"><span className="time">2008 - 2011</span></span> */}
                        </div>
                        <div className="desc">Shortlisted teams announcement</div>
                    </div>
                </li>
                <li>
                    <div data-aos="fade-up">
                        <div classNameName="flag-wrapper roundbox">
                            <span className="flag special">Round 2</span>
                            {/* <span className="time-wrapper"><span className="time">2013 - present</span></span> */}
                        </div>
                        {/* <div className="desc">Registrations and Submission round start</div> */}
                    </div>
                </li>
                <li>
                    <div className="direction-l" data-aos="fade-right">
                        <div className="flag-wrapper">
                            <span className="flag">9th February 2024</span>
                            {/* <span className="time-wrapper"><span className="time">2008 - 2011</span></span> */}
                        </div>
                        <div className="desc">Problem statement preference form release</div>
                    </div>
                </li>

                <li>
                    <div className="direction-r" data-aos="fade-left">
                        <div className="flag-wrapper">
                            <span className="flag">10th-11th February 2024</span>
                            {/* <span className="time-wrapper"><span className="time">2008 - 2011</span></span> */}
                        </div>
                        <div className="desc">Grand Finale at Sardar Patel Institute of Technology</div>
                    </div>
                </li>

            </ul>

        </div>
    )
}

export default Timeline
