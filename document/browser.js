// `DOMParser` is supported in web browsers.
export default function parseHtmlDocument(html) {
	return new DOMParser().parseFromString(html, 'text/html')
}