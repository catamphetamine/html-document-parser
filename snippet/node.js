import { DOMParser } from '@xmldom/xmldom'

export default function parseHtmlSnippet(html) {
	// Web browsers trim whitespace when parsing HTML markup
	// because that's how HTML specification handles whitespace.
	// For example, " Some <b>text</b> " would be parsed as "Some <b>text</b>"
	// when parsed using the code in `./browser.js`, so this Node.js parser
	// should mimick that behavior.
	html = html.trim()
	// Without the `<body/>` wrapper, it would discard root-level text nodes
	// in `html` markup snippet for some weird reason.
	const document = new DOMParser().parseFromString('<body>' + html + '</body>', 'text/html')
	return document.childNodes[0]
}