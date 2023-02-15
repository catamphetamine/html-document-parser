# `html-document-parser`

Parses an arbitrary HTML markup snippet into DOM [Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) in a web browser or in Node.js.

## API

### Parse HTML document

```js
import parseHtmlDocument from 'html-document-parser'

const html = '<html><head></head><body><div></div></body></html>'
const document = parseHtmlDocument(html)

document.childNodes.length === 1
document.childNodes[0].tagName === 'HTML'
```

* Input: HTML document markup.
* Output: DOM [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document).

### Parse HTML snippet

```js
import parseHtmlSnippet from 'html-document-parser/snippet'

const html = 'Some <b>bold</b><span> text</span>'
const root = parseHtmlSnippet(html)

root.childNodes.length === 3

// `node.nodeType === 3` means "text node".
root.childNodes[0].nodeType === 3
root.childNodes[0].nodeValue === 'Some '

// `node.nodeType === 1` means "DOM element".
root.childNodes[1].nodeType === 1
root.childNodes[1].tagName === 'B'

root.childNodes[2].nodeType === 1
root.childNodes[2].tagName === 'SPAN'
```

* Input: Arbitrary HTML markup snippet.
* Output: The input markup converted to DOM [Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element).

## Under the hood

Under the hood, it uses native [`DOMParser`](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString) in web browsers and [`xmldom`](https://www.npmjs.com/package/@xmldom/xmldom) polyfill in Node.js.

## GitHub

On March 9th, 2020, GitHub, Inc. silently [banned](https://medium.com/@catamphetamine/how-github-blocked-me-and-all-my-libraries-c32c61f061d3) my account (erasing all my repos, issues and comments) without any notice or explanation. Because of that, all source codes had to be promptly moved to GitLab. The [GitHub repo](https://github.com/catamphetamine/html-document-parser) is now only used as a backup (you can star the repo there too), and the primary repo is now the [GitLab one](https://gitlab.com/catamphetamine/html-document-parser). Issues can be reported in any repo.

## License

[MIT](LICENSE)