import { HeroText } from "../components/HeroText";
import { ParallaxBackground } from "../components/ParallaxBackground";

export default function Hero() {
	return (
		<section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
			<HeroText />

			<ParallaxBackground />

			<figure
				className="inset-0 absolute"
				style={{ width: "100vw", height: "100vh" }}></figure>
		</section>
	);
}
