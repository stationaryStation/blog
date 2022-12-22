import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		// Don't include drafts please thank u
		items: import.meta.glob('./blog/**/*.{md,mdx}').filter((post) => !post.frontmatter.draft),
	});
