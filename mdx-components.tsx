import React, { ComponentPropsWithoutRef } from "react";
import Link from "@/components/link";
import { getHighlighter } from "shiki";

let highlighter: Awaited<ReturnType<typeof getHighlighter>> | null = null;

async function ensureHighlighter() {
	if (!highlighter) {
		highlighter = await getHighlighter({
			themes: ["github-dark"],
			langs: [
				"typescript",
				"javascript",
				"jsx",
				"tsx",
				"css",
				"json",
				"markdown",
				"bash",
				"html",
			],
		});
	}
	return highlighter;
}

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
	h1: (props: HeadingProps) => (
		<h1 className="font-bold text-2xl mb-3 fade-in" {...props} />
	),
	h2: (props: HeadingProps) => (
		<h2 className="font-semibold text-xl mt-4 mb-3" {...props} />
	),
	h3: (props: HeadingProps) => (
		<h3 className="font-medium mt-4 mb-3" {...props} />
	),
	h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
	p: (props: ParagraphProps) => (
		<p className="text-justify leading-relaxed" {...props} />
	),
	ol: (props: ListProps) => (
		<ol className="list-decimal pl-5 space-y-2" {...props} />
	),
	ul: (props: ListProps) => (
		<ul className="list-disc pl-5 space-y-1" {...props} />
	),
	li: (props: ListItemProps) => <li className="pl-1" {...props} />,
	em: (props: ComponentPropsWithoutRef<"em">) => (
		<em className="font-medium" {...props} />
	),
	strong: (props: ComponentPropsWithoutRef<"strong">) => (
		<strong className="font-medium" {...props} />
	),
	a: ({ href, children, ...props }: AnchorProps) => {
		if (href?.startsWith("/") || href?.startsWith("#")) {
			return (
				<Link href={href} {...props}>
					{children}
				</Link>
			);
		}
		return (
			<Link href={href as string} external={true} {...props}>
				{children}
			</Link>
		);
	},
	code: async ({
		children,
		className,
		...props
	}: ComponentPropsWithoutRef<"code">) => {
		const highlighter = await ensureHighlighter();
		const lang = className?.replace(/language-/, "") || "text";
		const codeHTML = highlighter.codeToHtml(children as string, {
			lang,
			theme: "github-dark",
		});
		return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
	},
	Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
		<table>
			<thead>
				<tr>
					{data.headers.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.rows.map((row, index) => (
					<tr key={index}>
						{row.map((cell, cellIndex) => (
							<td key={cellIndex}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	),
	blockquote: (props: BlockquoteProps) => (
		<blockquote
			className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
			{...props}
		/>
	),
};

declare global {
	type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
	return components;
}
