import Hero from "./sections/Hero";
import { Navbar } from "./sections/Navbar";


export default function App() {
  return (
		<div className="container mx-auto max-w-7xl">
			{/* navbar */}
      <Navbar />
			{/* hero */}
      <Hero/>
			{/* about */}
			<section className="min-h-screen"></section>
		</div>
	);
}
