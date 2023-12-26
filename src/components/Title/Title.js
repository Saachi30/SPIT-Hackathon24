import React, { useState, useEffect } from "react";
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

const getRandomFont = () => fonts[Math.floor(Math.random() * fonts.length)];

const Title = () => {
	const [letterFonts1, setLetterFonts1] = useState(() =>
		letters1.map(() => getRandomFont())
	);
	const [letterFonts2, setLetterFonts2] = useState(() =>
		letters2.map(() => getRandomFont())
	);
	const [letterFonts3, setLetterFonts3] = useState(() =>
		letters3.map(() => getRandomFont())
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setLetterFonts1(() => letters1.map(() => getRandomFont()));
			setLetterFonts2(() => letters2.map(() => getRandomFont()));
			setLetterFonts3(() => letters3.map(() => getRandomFont()));
		}, 350);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

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
					{letters1.map((letter, index) => (
						<span
							key={index}
							className="letter"
							style={{ fontFamily: letterFonts1[index] }}
						>
							{letter}
						</span>
					))}
				</h3>
				<br />
				<h2 className="title hackathon">
					{letters2.map((letter, index) => (
						<span
							key={index}
							className="letter"
							style={{ fontFamily: letterFonts2[index] }}
						>
							{letter}
						</span>
					))}
				</h2>
				<br />
				<h3 className="title year">
					{letters3.map((letter, index) => (
						<span
							key={index}
							className="letter"
							style={{ fontFamily: letterFonts3[index] }}
						>
							{letter}
						</span>
					))}
				</h3>
			</div>
		</>
	);
};

export default Title;
