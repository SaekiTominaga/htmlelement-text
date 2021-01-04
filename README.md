# Show confirmation dialog message when page is tries to close while filling out a form.

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Fhtmlelement-text.svg)](https://badge.fury.io/js/%40saekitominaga%2Fhtmlelement-text)

If the page is tries to close with the contents of the form control changed, a confirm dialog is displayed to prevent the changes from being discarded.

## Demo

- [Demo page](https://saekitominaga.github.io/htmlelement-text/demo.html)

## Examples

```
<script type="module">
import HtmlElementText from './dist/HtmlElementText.esm.js';

for (const textElement of document.querySelectorAll('.js-text-width')) {
  const htmlElementText = new HtmlElementText(textElement);
  console.debug(`${htmlElementText.getWidth()}px`);
}
</script>

<span class="js-text-width">Hello world!</span>
```
