import React, { useState, useEffect, useCallback } from "react";
import "./Title.scss";

const fonts = [
	`'Cloister Black', sans-serif`,
	`'ARB 85 Poster Script JAN-39', sans-serif`,
	"Glass Antiqua",
	"Special Elite",
	`'Old English Five', sans-serif`,
	`'Permanent Marker'`,
	`'USAngel', sans-serif`,
	`Splash`,
];

const letters1 = ["S", "P", "I", "T"];
const letters2 = ["H", "A", "C", "K", "A", "T", "H", "O", "N"];
const letters3 = ["2", "0", "2", "4"];

const Title = () => {
	const getRandomFont = useCallback(
		() => fonts[Math.floor(Math.random() * fonts.length)],
		[]
	);

	const [letterFonts, setLetterFonts] = useState(() =>
		letters2.map(() => getRandomFont())
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setLetterFonts(() => letters2.map(() => getRandomFont()));
		}, 350);

		return () => {
			clearInterval(intervalId);
		};
	}, [letterFonts, getRandomFont]);

	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Glass+Antiqua&family=Permanent+Marker&family=Special+Elite&family=Splash&display=swap');
				@import url('https://fonts.cdnfonts.com/css/cloister-black');
				@import url('https://fonts.cdnfonts.com/css/old-english-five');
				@import url('https://fonts.cdnfonts.com/css/usangel'); @import
				url('https://fonts.cdnfonts.com/css/arb-85-poster-script-jan-39');
			</style>
			<div className="container">
				<h3 className="title spit">
					{letters1.map((letters1, index) => (
						<span
							key={index}
							className="letter"
							style={{ fontFamily: letterFonts[index] }}
						>
							{letters1}
						</span>
					))}
				</h3>
				<br></br>
				<h2 className="title hackathon">
					{letters2.map((letters2, index) => (
						<span
							key={index}
							className="letter"
							style={{ fontFamily: letterFonts[index] }}
						>
							{letters2}
						</span>
					))}
				</h2>
				<br></br>
				<h3 className="title year">
					{letters3.map((letters3, index) => (
						<span
							key={index}
							className="letter"
							style={{ fontFamily: letterFonts[index] }}
						>
							{letters3}
						</span>
					))}
				</h3>
			</div>
		</>
	);
};

export default Title;
