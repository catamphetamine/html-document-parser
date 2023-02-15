// `DOMParser` is supported in web browsers.
export default function parseHtmlSnippet(html) {
	const document = new DOMParser().parseFromString(html, 'text/html')
	return document.body
}