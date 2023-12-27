import ParticleBackground from "./components/ParticlesBackground";
import "./App.css";
import Title from "./components/Title/Title";
import Unstopbtn from "./components/Unstopbtn/Unstopbtn";
import Tempad from "./components/Tempad/Tempad";

function App() {
	return (
		<div className="App">
			<div className="outercontainer">
				<div className="particlecontainer">
					<ParticleBackground />
				</div>

				<div className="imgcontainer"></div>
				<div className="titlesect" style={{ opacity: 0.8 }}>
					<Title></Title>
				</div>
				<Unstopbtn></Unstopbtn>
			</div>
			<div className="tempadsect">
			<Tempad />
			</div>
			
		</div>

	);
}

export default App;
