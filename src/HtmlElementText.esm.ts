/**
 * HTMLElement text
 *
 * @version 1.0.0
 */
export default class {
	#thisElement: HTMLElement; // 対象要素

	/**
	 * @param {HTMLElement} thisElement - Target element
	 */
	constructor(thisElement: HTMLElement) {
		this.#thisElement = thisElement;
	}

	/**
	 * Get the text width (the width of that inline box)
	 *
	 * @returns {number} Text width in CSS pixels
	 */
	getWidth(): number {
		const context = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
		context.beginPath();

		if (document.documentElement.computedStyleMap !== undefined) {
			/* CSSStyleValue API 対応ブラウザ https://caniuse.com/mdn-api_cssstylevalue */
			const stylePropertyMap = this.#thisElement.computedStyleMap();
			context.font = `${stylePropertyMap.get('font-style')} ${stylePropertyMap.get('font-variant')} ${stylePropertyMap.get(
				'font-weight'
			)} ${stylePropertyMap.get('font-size')} ${stylePropertyMap.get('font-family')}`;
		} else {
			const styleDeclaration = getComputedStyle(this.#thisElement, '');
			context.font = `${styleDeclaration.fontStyle} ${styleDeclaration.fontVariant} ${styleDeclaration.fontWeight} ${styleDeclaration.fontSize} ${styleDeclaration.fontFamily}`;
		}

		return context.measureText(<string>this.#thisElement.textContent).width;
	}
}
