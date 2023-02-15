import { DOMParser } from '@xmldom/xmldom'

export default function parseHtmlDocument(html) {
	return new DOMParser().parseFromString(html, 'text/html')
}