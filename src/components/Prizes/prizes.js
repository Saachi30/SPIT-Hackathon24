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
		<div class="outer">
			<h2 class="heading">Prizes</h2>
			<div class="box">
				<div class="innerbox" data-aos="fade-up">
					<h3 class="rank" data-aos="zoom-in">Grand Prize Pool</h3>
					<h2 class="prize" data-aos="zoom-in">₹ 1,00,000+</h2>
					<p class="extras">
						With Internship Opportunities, Exciting Goodies & Lots
						More!
					</p>
				</div>
				<div class="innerbox" data-aos="fade-up">
					<h3 class="rank" data-aos="zoom-in">Certificates</h3>
					<h2 class="prize" data-aos="zoom-in">
						Certificate of Excellence for Top 3 Teams
					</h2>
					<p class="extras">
						Certificate of Distinction for Top 10 Teams &
						Certificate of Participation to All Teams!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Prizes;