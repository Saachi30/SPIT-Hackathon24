import React from "react";
import "./Tempad.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CodeIcon from "@mui/icons-material/Code";

import DateRangeIcon from "@mui/icons-material/DateRange";
import Groups3Icon from "@mui/icons-material/Groups3";
import DomainIcon from "@mui/icons-material/Domain";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Tempad = () => {
	return (
		<div className="fullOuter">
			<div className="outerdiv">
				<div className="leftdiv">
					<h4>Announcing</h4>
					<h1>SPIT Hackathon 2024</h1>
					<h3>
						Following tradition, CSI-SPIT is conducting the annual
						24-hour <em>SPIT Hackathon</em> in February 2024. With a
						great team and skilled panel of judges, this hackathon
						will be an ideal platform to put student's knowledge to
						use and network with peers.
					</h3>
					<div className="Details">
						<div className="Detail">
							<p className="header">
								<DateRangeIcon className="detailicon" />
								<p>Date</p>
							</p>
							<p className="extra">
								10th and 11th February, 2024
							</p>
						</div>
						<div className="Detail">
							<p className="header">
								<Groups3Icon className="detailicon" />
								<p>TeamSize</p>
							</p>
							<p className="extra">2-4 Members</p>
						</div>
						<div className="Detail">
							<p className="header">
								<DomainIcon className="detailicon" />
								<p>Domains</p>
							</p>
							<p className="extra">
								Web/App Dev, AI/ML, AR/VR, Blockchain, FOSS
							</p>
						</div>
						<div className="Detail">
							<p className="header">
								<LocationOnIcon className="detailicon" />
								<p>Location</p>
							</p>
							<p className="extra">
								Sardar Patel Institute of Technology, Mumbai
							</p>
						</div>
					</div>
				</div>
				<div className="rightdiv">
					<div className="icon">
						<PhoneAndroidIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
						/>
						<p className="Name">Mobile-Dev</p>
					</div>
					<div className="icon">
						<ViewInArIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
						/>
						<p className="Name">AR/VR</p>
					</div>
					<div className="icon">
						<RocketLaunchIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
						/>
						<p className="Name">AI/ML</p>
					</div>
					<div className="icon">
						<LanguageIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
						/>
						<p className="Name">Web-Dev</p>
					</div>
					<div className="icon">
						<CurrencyBitcoinIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
						/>
						<p className="Name">BlockChain</p>
					</div>
					<div className="icon">
						<CodeIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
						/>
						<p className="Name">OpenSource</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tempad;
