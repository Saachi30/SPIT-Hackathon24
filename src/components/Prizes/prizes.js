import React from "react";
import "./prizes.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Prizes = () => {
	useEffect(() => {
		Aos.init({
			duration: 800,
    		easing: 'ease-in-out',
		});
	  }, []);
	return (
		<div className="outer">
			<h2 className="heading">Prizes</h2>
			<div className="box">
				<div className="innerbox" data-aos="fade-up">
					<h3 className="rank" data-aos="zoom-in">Grand Prize Pool</h3>
					<h2 className="prize" data-aos="zoom-in">₹ 1,00,000+</h2>
					<p className="extras">
						With Internship Opportunities, Exciting Goodies & Lots
						More!
					</p>
				</div>
				<div className="innerbox" data-aos="fade-up">
					<h3 className="rank" data-aos="zoom-in">Certificates</h3>
					<h2 className="prize" data-aos="zoom-in">
						Certificate of Excellence for Top 3 Teams
					</h2>
					<p className="extras">
						Certificate of Distinction for Top 10 Teams &
						Certificate of Participation to All Teams!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Prizes;
