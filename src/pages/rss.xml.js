import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';
import sanitizeHtml from 'sanitize-html';

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true }).filter((post) => !post.frontmatter.draft);
const posts = Object.values(postImportResult);

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		// Don't include drafts please thank u
		items: posts.map((post) => ({
			link: post.url,
			title: post.frontmatter.title,
			pubDate: post.frontmatter.pubDate,
			content: sanitizeHtml(post.compiledContent()),
		})),
	});
