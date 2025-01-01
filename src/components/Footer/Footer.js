import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
		
			<div className="section">
				<p>Let's Connect</p>
				<div className="link">
					<i className="fa fa-github"></i>
					<a className="name" href="https://github.com/CSI-SPIT">
						GitHub
					</a>
				</div>
				<div className="link">
					<i className="fa fa-linkedin"></i>
					<a
						className="name"
						href="https://www.linkedin.com/company/s-p-i-t-csi/mycompany/"
					>
						LinkedIn
					</a>
				</div>
			</div>
			<div className="section">
				<p>Social Media</p>
				<div className="link">
					<i className="fa fa-instagram"></i>
					<a className="name" href="https://www.instagram.com/csispit/">
						Instagram
					</a>
				</div>
				<div className="link">
					<i className="fa fa-facebook-official"></i>
					<a className="name" href="https://www.facebook.com/CSI.SPIT/">
						Facebook
					</a>
				</div>
			</div>
			<h3 className="credits">
				Developed by{" "}
				<a href="https://www.linkedin.com/in/satyam-vyas/">
					Satyam Vyas
				</a>{" "}
				and{" "}
				<a href="https://www.linkedin.com/in/saachi-peswani-419995258/">
					Saachi Peswani
				</a>
			</h3>
		</footer>
	);
};

export default Footer;
