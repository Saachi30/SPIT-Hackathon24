import React from "react";
import "./Tempad.css";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CodeIcon from "@mui/icons-material/Code";
const Tempad = () => {
	return (
		<div className="fullOuter">
			<div className="outerdiv">
				<div className="leftdiv">
					<h4>Announcing</h4>
					<h1>SPIT Hackathon 2024</h1>
					<h3>
						Following tradition, CSI-SPIT is conducting the annual
						24-hour "SPIT Hackathon" in February 2023. This year, we
						are going back to organizing the hackathon completely in
						Offline Mode. With a great team and skilled panel of
						judges, this hackathon will be an ideal platform to put
						student's knowledge to use and network with peers.
					</h3>
				</div>
				<div className="rightdiv">
					<div className="icon">
						<DeveloperModeIcon
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
