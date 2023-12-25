import React, { useState, useEffect, useCallback } from 'react';
import './Title.scss';


const fonts = [`'Cloister Black', sans-serif`, `'Old English Five', sans-serif`, `'USAngel', sans-serif`, `'ARB 85 Poster Script JAN-39', sans-serif`,'Glass Antiqua','Special Elite',`'Cloister Black', sans-serif`, `'Old English Five', sans-serif`, `'USAngel', sans-serif`,`'Cloister Black', sans-serif`, `'Old English Five', sans-serif`, `'USAngel', sans-serif`, `'ARB 85 Poster Script JAN-39', sans-serif`,'Glass Antiqua','Special Elite',`'Cloister Black', sans-serif`, `'Old English Five', sans-serif`, `'USAngel', sans-serif`];
const letters = ['S', 'P', 'I', 'T', '-', 'H', 'A', 'C', 'K', 'A', 'T', 'H', 'O', 'N', "'", '2', '4'];

const Title = () => {
  const getRandomFont = useCallback(() => fonts[Math.floor(Math.random() * fonts.length)], []);

  const [letterFonts, setLetterFonts] = useState(() => letters.map(() => getRandomFont()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Updating fonts');
      setLetterFonts(() => letters.map(() => getRandomFont()));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [letterFonts, getRandomFont]);

  return (
    <>
    <style>@import url('https://fonts.googleapis.com/css2?family=Glass+Antiqua&family=Permanent+Marker&family=Sevillana&family=Silkscreen&family=Single+Day&family=Special+Elite&family=Splash&display=swap');
    @import url('https://fonts.cdnfonts.com/css/cloister-black');
@import url('https://fonts.cdnfonts.com/css/old-english-five');
@import url('https://fonts.cdnfonts.com/css/usangel');
@import url('https://fonts.cdnfonts.com/css/arb-85-poster-script-jan-39');</style>
    <div className="container">
      <h2 className="loki">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="letter"
            style={{ fontFamily: letterFonts[index] }}
          >
            {letter}
          </span>
        ))}
      </h2>
    </div>
    </>
  );
};

export default Title;
