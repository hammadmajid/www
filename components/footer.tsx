import { Link } from "next-view-transitions";
import { Octokit } from "octokit";

async function getLastCommit() {
	try {
		const octokit = new Octokit({
			auth: process.env.GITHUB_TOKEN,
		});

		const { data } = await octokit.request(
			"GET /repos/{owner}/{repo}/commits",
			{
				owner: "hammadmajid",
				repo: "bine",
				headers: {
					"X-GitHub-Api-Version": "2022-11-28",
				},
				per_page: 1,
			},
		);

		if (data.length > 0) {
			const lastCommit = data[0];
			return {
				url: lastCommit.html_url,
				hash: lastCommit.sha.slice(0, 7), // Short commit hash
				date: new Date(lastCommit.commit.author?.date || "")
					.toISOString()
					.split("T")[0], // Date in YYYY-MM-DD format
			};
		}
	} catch (error) {
		console.error("Error fetching commit information:", error);
		return null;
	}
}

export async function Footer() {
	const commitInfo = await getLastCommit();

	return (
		<footer className="p-4 pb-10 text-center border-t-2 border-light-border">
			<div className="container mx-auto">
				<p className="text-sm ">
					<Link
						href="/meta#license"
						className="hover:text-light-accent focus:outline-hidden focus:text-light-accent"
					>
						Unlicensed
					</Link>{" "}
					by Hammad Majid.
				</p>
				{commitInfo && (
					<p className="text-xs  mt-2">
						Last built on{" "}
						<Link
							href={commitInfo.url}
							className="hover:text-light-accent focus:outline-hidden focus:text-light-accent"
						>
							{commitInfo.hash}
						</Link>{" "}
						at {commitInfo.date} with{" "}
						<Link
							href="https://nextjs.org/"
							className="hover:text-light-accent focus:outline-hidden focus:text-light-accent"
						>
							NextJs
						</Link>
					</p>
				)}
			</div>
		</footer>
	);
}
