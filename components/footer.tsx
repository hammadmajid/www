import { Link } from "next-view-transitions";

export async function Footer() {
	return (
		<footer className="p-4 pb-10 text-center border-t-2">
			<div className="container mx-auto">
				<p className="text-sm">Unlicensed by Hammad Majid.</p>
			</div>
		</footer>
	);
}
