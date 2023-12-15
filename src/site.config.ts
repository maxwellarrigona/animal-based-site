import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Maxwell Johnson",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Carnivore Maximus",
	// Meta property used as the default description meta property
	description: "Reviving primal living: carnivore diet, sustainable choices for modernity.",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	webmentions: {
		link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Eat",
		path: "/eat/",
	},
	{
		title: "Wear",
		path: "/wear/",
	},
  	{
		title: "Cook",
		path: "/cook/",
	},
  	{
		title: "Bath",
		path: "/bath/",
	},
  	{
		title: "Extras",
		path: "/extras/",
	},
  	{
		title: "Swap",
		path: "/swap/",
	},
  	{
		title: "Blog",
		path: "/posts/",
	},
];
