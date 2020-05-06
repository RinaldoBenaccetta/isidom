const $window = window;
const $document = document;
const $docElement = $document.documentElement;
const $docBody = $document.body;
const $classList = 'classList';

const $true = true;
const $false = false;
const $null = null;
const $undefined = undefined;

const _$true = 'true';
const _$false = 'false';
const _$null = 'null';

const _$emptyString = '';
const _$undefined = 'undefined';

const _$default = 'default';
const _$initial = 'initial';
const _$hidden = 'hidden';
const _$none = 'none';
const _$block = 'block';
const _$disabled = 'disabled';

const _$click = 'click';
const _$mouseup = 'mouseup';

const _$change = 'change';
const _$blur = 'blur';
const _$focus = 'focus';

const _$body = 'body';
const _$html = 'html';
const _$img = 'img';

const _$px = 'px';
const _$em = 'em';
const _$rem = 'rem';
const _$ms = 'ms';

const _$ok = 'ok';
const _$no = 'no';
const _$error = 'error';

const _$length = 'length';
const _$width = 'width';

const $cssAlignContent = 'align-content';
const $jsAlignContent = 'alignContent';
const $cssAlignItems = 'align-items';
const $jsAlignItems = 'alignItems';
const $cssAlignSelf = 'align-self';
const $jsAlignSelf = 'alignSelf';
const $cssAll = 'all';
const $jsAll = $cssAll;
const $cssAnimation = 'animation';
const $jsAnimation = $cssAnimation;
const $cssAppearance = 'appearance';
const $jsAppearance = $cssAppearance;

const $cssBackdropFilter = 'backdrop-filter';
const $jsBackdropFilter = 'backdropFilter';
const $cssBackfaceVisibility = 'backface-visibility';
const $jsBackfaceVisibility = 'backfaceVisibility';
const $cssBackground = 'background';
const $jsBackground = $cssBackground;
const $cssBackgroundAttachment = 'background-attachment';
const $jsBackgroundAttachment = 'backgroundAttachment';
const $cssBackgroundBlendMode = 'background-blend-mode';
const $jsBackgroundBlendMode = 'backgroundBlend-mode';
const $cssBackgroundClip = 'background-clip';
const $jsBackgroundClip = 'backgroundClip';
const $cssBackgroundColor = 'background-color';
const $jsBackgroundColor = 'backgroundColor';
const $cssBackgroundImage = 'background-image';
const $jsBackgroundImage = 'backgroundImage';
const $cssBackgroundOrigin = 'background-origin';
const $jsBackgroundOrigin = 'backgroundOrigin';
const $cssBackgroundPosition = 'background-position';
const $jsBackgroundPosition = 'backgroundPosition';
const $cssBackgroundRepeat = 'background-repeat';
const $jsBackgroundRepeat = 'backgroundRepeat';
const $cssBackgroundSize = 'background-size';
const $jsBackgroundSize = 'backgroundSize';
const $cssBleed = 'bleed';
const $jsBleed = $cssBleed;
const $cssBlockOverflow = 'block-overflow';
const $jsBlockOverflow = 'blockOverflow';
const $cssBorder = 'border';
const $jsBorder = $cssBorder;
const $cssBorderTop = 'border-top';
const $jsBorderTop = 'borderTop';
const $cssBorderRight = 'border-right';
const $jsBorderRight = 'borderRight';
const $cssBorderBottom = 'border-bottom';
const $jsBorderBottom = 'borderBottom';
const $cssBorderLeft = 'border-left';
const $jsBorderLeft = 'borderLeft';
const $cssBorderTopStyle = 'border-top-style';
const $jsBorderTopStyle = 'borderTopStyle';
const $cssBorderRightStyle = 'border-right-style';
const $jsBorderRightStyle = 'borderRightStyle';
const $cssBorderBottomStyle = 'border-bottom-style';
const $jsBorderBottomStyle = 'borderBottomStyle';
const $cssBorderLeftStyle = 'border-left-style';
const $jsBorderLeftStyle = 'borderLeftStyle';
const $cssBorderCollapse = 'border-collapse';
const $jsBorderCollapse = 'borderCollapse';
const $cssBorderImage = 'border-image';
const $jsBorderImage = 'borderImage';
const $cssBorderRadius = 'border-radius';
const $jsBorderRadius = 'borderRadius';
const $cssBorderSpacing = 'border-spacing';
const $jsBorderSpacing = 'borderSpacing';
const $cssBottom = 'bottom';
const $jsBottom = $cssBottom;
const $cssBoxDecorationBreak = 'box-decoration-break';
const $jsBoxDecorationBreak = 'box-decorationBreak';
const $cssBoxShadow = 'box-shadow';
const $jsBoxShadow = 'boxShadow';
const $cssBoxSizing = 'box-sizing';
const $jsBoxSizing = 'boxSizing';
const $cssBreakInside = 'break-inside';
const $jsBreakInside = 'breakInside';

const $cssCaptionSide = 'caption-side';
const $jsCaptionSide = 'captionSide';
const $cssCaretColor = 'caret-color';
const $jsCaretColor = 'caretColor';
const $cssClear = 'clear';
const $jsClear = $cssClear;
const $cssClipPath = 'clip-path';
const $jsClipPath = 'clipPath';
const $cssColor = 'color';
const $jsColor = $cssColor;
const $cssColorAdjust = 'color-adjust';
const $jsColorAdjust = 'colorAdjust';
const $cssColumnCount = 'column-count';
const $jsColumnCount = 'columnCount';
const $cssColumnFill = 'column-fill';
const $jsColumnFill = 'columnFill';
const $cssColumnGap = 'column-gap';
const $jsColumnGap = 'columnGap';
const $cssColumnRule = 'column-rule';
const $jsColumnRule = 'columnRule';
const $cssColumnSpan = 'column-span';
const $jsColumnSpan = 'columnSpan';
const $cssColumnWidth = 'column-width';
const $jsColumnWidth = 'columnWidth';
const $cssColumns = 'columns';
const $jsColumns = $cssColumns;
const $cssContent = 'content';
const $jsContent = $cssContent;
const $cssCounterIncrement = 'counter-increment';
const $jsCounterIncrement = 'counterIncrement';
const $cssCounterReset = 'counter-reset';
const $jsCounterReset = 'counterReset';
const $cssCursor = 'cursor';
const $jsCursor = $cssCursor;

const $cssDirection = 'direction';
const $jsDirection = $cssDirection;
const $cssDisplay = 'display';
const $jsDisplay = $cssDisplay;

const $cssEmptyCells = 'empty-cells';
const $jsEmptyCells = 'emptyCells';

const $cssFill = 'fill';
const $jsFill = $cssFill;
const $cssFilter = 'filter';
const $jsFilter = $cssFilter;
const $cssFlex = 'flex';
const $jsFlex = $cssFlex;
const $cssFlexBasis = 'flex-basis';
const $jsFlexBasis = 'flexBasis';
const $cssFlexDirection = 'flex-direction';
const $jsFlexDirection = 'flexDirection';
const $cssFlexFlow = 'flex-flow';
const $jsFlexFlow = 'flexFlow';
const $cssFlexGrow = 'flex-grow';
const $jsFlexGrow = 'flexGrow';
const $cssFlexShrink = 'flex-shrink';
const $jsFlexShrink = 'flexShrink';
const $cssFlexWrap = 'flex-wrap';
const $jsFlexWrap = 'flexWrap';
const $cssFloat = 'float';
const $jsFloat = $cssFloat;
const $cssFont = 'font';
const $jsFont = $cssFont;
const $cssFontDisplay = 'font-display';
const $jsFontDisplay = 'fontDisplay';
const $cssFontFamily = 'font-family';
const $jsFontFamily = 'fontFamily';
const $cssFontFeatureSettings = 'font-feature-settings';
const $jsFontFeatureSettings = 'fontFeatureSettings';
const $cssFontSize = 'font-size';
const $jsFontSize = 'fontSize';
const $cssFontSizeAdjust = 'font-size-adjust';
const $jsFontSizeAdjust = 'fontSizeAdjust';
const $cssFontStretch = 'font-stretch';
const $jsFontStretch = 'fontStretch';
const $cssFontStyle = 'font-style';
const $jsFontStyle = 'fontStyle';
const $cssFontVariant = 'font-variant';
const $jsFontVariant = 'fontVariant';
const $cssFontVariantNumeric = 'font-variant-numeric';
const $jsFontVariantNumeric = 'fontVariantNumeric';
const $cssFontWeight = 'font-weight';
const $jsFontWeight = 'fontWeight';

const $cssGridRow = 'grid-row';
const $jsGridRow = 'gridRow';
const $cssGridColumn = 'grid-column';
const $jsGridColumn = 'gridColumn';
const $cssGridTemplateColumns = 'grid-template-columns';
const $jsGridTemplateColumns = 'gridTemplateColumns';
const $cssGridTemplateRows = 'grid-template-rows';
const $jsGridTemplateRows = 'gridTemplateRows';

const $cssHangingPunctuation = 'hanging-punctuation';
const $jsHangingPunctuation = 'hangingPunctuation';
const $cssHeight = 'height';
const $jsHeight = $cssHeight;
const $cssHyphens = 'hyphens';
const $jsHyphens = $cssHyphens;

const $cssImageRendering = 'image-rendering';
const $jsImageRendering = 'imageRendering';
const $cssInitialLetter = 'initial-letter';
const $jsInitialLetter = 'initialLetter';
const $cssIsolation = 'isolation';
const $jsIsolation = $cssIsolation;

const $cssJustifyContent = 'justify-content';
const $jsJustifyContent = 'justifyContent';

const $cssLeft = 'left';
const $jsLeft = $cssLeft;
const $cssLetterSpacing = 'letter-spacing';
const $jsLetterSpacing = 'letterSpacing';
const $cssLineClamp = 'line-clamp';
const $jsLineClamp = 'lineClamp';
const $cssLineHeight = 'line-height';
const $jsLineHeight = 'lineHeight';
const $cssListStyle = 'list-style';
const $jsListStyle = 'listStyle';

const $cssMargin = 'margin';
const $jsMargin = $cssMargin;
const $cssMarginTop = 'margin-top';
const $jsMarginTop = 'marginTop';
const $cssMarginLeft = 'margin-left';
const $jsMarginLeft = 'marginLeft';
const $cssMarginBottom = 'margin-bottom';
const $jsMarginBottom = 'marginBottom';
const $cssMarginRight = 'margin-right';
const $jsMarginRight = 'marginRight';
const $cssMaxHeight = 'max-height';
const $jsMaxHeight = 'maxHeight';
const $cssMaxWidth = 'max-width';
const $jsMaxWidth = 'maxWidth';
const $cssMinHeight = 'min-height';
const $jsMinHeight = 'minHeight';
const $cssMinWidth = 'min-width';
const $jsMinWidth = 'minWidth';
const $cssMixBlendMode = 'mix-blend-mode';
const $jsMixBlendMode = 'mixBlendMode';

const $cssObjectFit = 'object-fit';
const $jsObjectFit = 'objectFit';
const $cssObjectPosition = 'object-position';
const $jsObjectPosition = 'objectPosition';
const $cssOffsetAnchor = 'offset-anchor';
const $jsOffsetAnchor = 'offsetAnchor';
const $cssOffsetDistance = 'offset-distance';
const $jsOffsetDistance = 'offsetDistance';
const $cssOffsetPath = 'offset-path';
const $jsOffsetPath = 'offsetPath';
const $cssOffsetRotate = 'offset-rotate';
const $jsOffsetRotate = 'offsetRotate';
const $cssOpacity = 'opacity';
const $jsOpacity = $cssOpacity;
const $cssOrder = 'order';
const $jsOrder = $cssOrder;
const $cssOrphans = 'orphans';
const $jsOrphans = $cssOrphans;
const $cssOutline = 'outline';
const $jsOutline = $cssOutline;
const $cssOutlineOffset = 'outline-offset';
const $jsOutlineOffset = 'outlineOffset';
const $cssOverflow = 'overflow';
const $jsOverflow = $cssOverflow;
const $cssOverflowAnchor = 'overflow-anchor';
const $jsOverflowAnchor = 'overflowAnchor';
const $cssOverflowWrap = 'overflow-wrap';
const $jsOverflowWrap = 'overflowWrap';
const $cssOverscrollBehavior = 'overscroll-behavior';
const $jsOverscrollBehavior = 'overscrollBehavior';

const $cssPadding = 'padding';
const $jsPadding = $cssPadding;
const $cssPaddingTop = 'padding-top';
const $jsPaddingTop = 'paddingTop';
const $cssPaddingRight = 'padding-right';
const $jsPaddingRight = 'paddingRight';
const $cssPaddingBottom = 'padding-bottom';
const $jsPaddingBottom = 'paddingBottom';
const $cssPaddingLeft = 'padding-left';
const $jsPaddingLeft = 'paddingLeft';
const $cssPageBreak = 'page-break';
const $jsPageBreak = 'pageBreak';
const $cssPerspective = 'perspective';
const $jsPerspective = $cssPerspective;
const $cssPerspectiveOrigin = 'perspective-origin';
const $jsPerspectiveOrigin = 'perspectiveOrigin';
const $cssPlaceItems = 'place-items';
const $jsPlaceItems = 'placeItems';
const $cssPointerEvents = 'pointer-events';
const $jsPointerEvents = 'pointerEvents';
const $cssPosition = 'position';
const $jsPosition = $cssPosition;

const $cssQuotes = 'quotes';
const $jsQuotes = $cssQuotes;

const $cssResize = 'resize';
const $jsResize = $cssResize;
const $cssRight = 'right';
const $jsRight = $cssRight;

const $cssScrollBehavior = 'scroll-behavior';
const $jsScrollBehavior = 'scrollBehavior';
const $cssScrollMargin = 'scroll-margin';
const $jsScrollMargin = 'scrollMargin';
const $cssScrollPadding = 'scroll-padding';
const $jsScrollPadding = 'scrollPadding';
const $cssScrollSnapAlign = 'scroll-snap-align';
const $jsScrollSnapAlign = 'scrollSnapAlign';
const $cssScrollSnapStop = 'scroll-snap-stop';
const $jsScrollSnapStop = 'scrollSnapStop';
const $cssScrollSnapType = 'scroll-snap-type';
const $jsScrollSnapType = 'scrollSnapType';
const $cssScrollbar = 'scrollbar';
const $jsScrollbar = $cssScrollbar;
const $cssScrollbarColor = 'scrollbar-color';
const $jsScrollbarColor = 'scrollbarColor';
const $cssScrollbarGutter = 'scrollbar-gutter';
const $jsScrollbarGutter = 'scrollbarGutter';
const $cssScrollbarWidth = 'scrollbar-width';
const $jsScrollbarWidth = 'scrollbarWidth';
const $cssShapeOutside = 'shape-outside';
const $jsShapeOutside = 'shapeOutside';
const $cssSpeak = 'speak';
const $jsSpeak = $cssSpeak;
const $cssStroke = 'stroke';
const $jsStroke = $cssStroke;
const $cssStrokeDasharray = 'stroke-dasharray';
const $jsStrokeDasharray = 'strokeDasharray';
const $cssStrokeDashoffset = 'stroke-dashoffset';
const $jsStrokeDashoffset = 'strokeDashoffset';
const $cssStrokeLinecap = 'stroke-linecap';
const $jsStrokeLinecap = 'strokeLinecap';
const $cssStrokeLinejoin = 'stroke-linejoin';
const $jsStrokeLinejoin = 'strokeLinejoin';
const $cssStrokeWidth = 'stroke-width';
const $jsStrokeWidth = 'strokeWidth';

const $cssTabSize = 'tab-size';
const $jsTabSize = 'tabSize';
const $cssTableLayout = 'table-layout';
const $jsTableLayout = 'tableLayout';
const $cssTextAlign = 'text-align';
const $jsTextAlign = 'textAlign';
const $cssTextAlignLast = 'text-align-last';
const $jsTextAlignLast = 'textAlignLast';
const $cssTextDecoration = 'text-decoration';
const $jsTextDecoration = 'textDecoration';
const $cssTextDecorationColor = 'text-decoration-color';
const $jsTextDecorationColor = 'textDecorationColor';
const $cssTextDecorationLine = 'text-decoration-line';
const $jsTextDecorationLine = 'textDecorationLine';
const $cssTextDecorationSkip = 'text-decoration-skip';
const $jsTextDecorationSkip = 'textDecorationSkip';
const $cssTextDecorationSkipInk = 'text-decoration-skip-ink';
const $jsTextDecorationSkipInk = 'textDecorationSkipInk';
const $cssTextDecorationStyle = 'text-decoration-style';
const $jsTextDecorationStyle = 'textDecorationStyle';
const $cssTextIndent = 'text-indent';
const $jsTextIndent = 'textIndent';
const $cssTextJustify = 'text-justify';
const $jsTextJustify = 'textJustify';
const $cssTextOverflow = 'text-overflow';
const $jsTextOverflow = 'textOverflow';
const $cssTextRendering = 'text-rendering';
const $jsTextRendering = 'textRendering';
const $cssTextShadow = 'text-shadow';
const $jsTextShadow = 'textShadow';
const $cssTextStroke = 'text-stroke';
const $jsTextStroke = 'textStroke';
const $cssTextTransform = 'text-transform';
const $jsTextTransform = 'textTransform';
const $cssTextUnderlinePosition = 'text-underline-position';
const $jsTextUnderlinePosition = 'textUnderlinePosition';
const $cssTop = 'top';
const $jsTop = $cssTop;
const $cssTouchAction = 'touch-action';
const $jsTouchAction = 'touchAction';
const $cssTransform = 'transform';
const $jsTransform = $cssTransform;
const $cssTransformOrigin = 'transform-origin';
const $jsTransformOrigin = 'transformOrigin';
const $cssTransformStyle = 'transform-style';
const $jsTransformStyle = 'transformStyle';
const $cssTransition = 'transition';
const $jsTransition = $cssTransition;
const $cssTransitionDelay = 'transition-delay';
const $jsTransitionDelay = 'transitionDelay';
const $cssTransitionDuration = 'transition-duration';
const $jsTransitionDuration = 'transitionDuration';
const $cssTransitionProperty = 'transition-property';
const $jsTransitionProperty = 'transitionProperty';
const $cssTransitionTimingFunction = 'transition-timing-function';
const $jsTransitionTimingFunction = 'transitionTimingFunction';

const $cssUnicodeBidi = 'unicode-bidi';
const $jsUnicodeBidi = 'unicodeBidi';
const $cssUnicodeRange = 'unicode-range';
const $jsUnicodeRange = 'unicodeRange';
const $cssUserSelect = 'user-select';
const $jsUserSelect = 'userSelect';

const $cssVerticalAlign = 'vertical-align';
const $jsVerticalAlign = 'verticalAlign';
const $cssVisibility = 'visibility';
const $jsVisibility = $cssVisibility;

const $cssWhiteSpace = 'white-space';
const $jsWhiteSpace = 'whiteSpace';
const $cssWidows = 'widows';
const $jsWidows = $cssWidows;
const $cssWidth = 'width';
const $jsWidth = $cssWidth;
const $cssWillChange = 'will-change';
const $jsWillChange = 'willChange';
const $cssWordBreak = 'word-break';
const $jsWordBreak = 'wordBreak';
const $cssWordSpacing = 'word-spacing';
const $jsWordSpacing = 'wordSpacing';
const $cssWritingMode = 'writing-mode';
const $jsWritingMode = 'writingMode';

const $cssZIndex = 'z-index';
const $jsZIndex = 'zIndex';
const $cssZoom = 'zoom';
const $jsZoom = $cssZoom;

/**
 * @description
 * Shortcut for getAttribute vannilla JS method.
 * Returns the specified attribute of the specified HTMLElement.
 *
 * @example
 * let a = isi.$getAttribute('attribute', element)
 *
 * @param {string} attribute
 * @param {HTMLElement} element
 *
 * @returns {string}
 */
function $getAttribute (attribute, element) {
  return element.getAttribute(attribute)
}

/**
 * @description
 * Returns an object filled with all attributes and values of
 * the specified HTMLElement.
 *
 * @example
 * let a = $getAttributes(element)
 *
 * // The returned object is like this :
 *
 * {
 *     id: 'myId',
 *     class: 'myClass',
 *     type: 'range'
 * }
 *
 * // The values can then be accessed like this :
 *
 * a.id
 * a.class
 * a.type
 *
 * // The data can be directly accessed like this :
 *
 * let a = isi.$getAttributes(element).type
 *
 * // But in this case, the best would be to use the $getAttribute function
 * // instead of $getAttributes.
 *
 * @param {HTMLElement} element
 *
 * @returns {Object}
 */
function $getAttributes (element) {
  const OUTPUT = {};
  for (let i = 0, attributes = element.attributes; i < attributes.length; i++) {
    OUTPUT[attributes[i].nodeName] = attributes[i].nodeValue;
  }

  return OUTPUT
}

/**
 * @description
 * Returns the value of the specified data (E.g. : data-color) of the element.
 *
 * If the specified data is not present in the HTMLElement, null is returned.
 *
 * @example
 * let a = isi.$getData(data, element)
 *
 * // E.g. :
 *
 * let a = isi.$getData('color', element)
 * // Will return the data-color of the Element.
 *
 * @param {string} data
 * The data without data- at start (E.g. : color 'refer' to 'data-color')
 * @param {HTMLElement} element
 *
 * @returns {string, null}
 */
function $getData (data, element) {
  return $getAttribute('data-' + data, element)
}

/**
 * @description
 * Gets the value of the specified style of the specified HTMLElement.
 *
 * The property must be in JS camel case like :
 * 'backgroundColor' for the 'background-color' CSS property.
 *
 * If Isi's constants are used, the $js prefixed ones must be used.
 * E.g. : $jsBackgroundColor instead of $cssBackgroundColor.
 *
 * @example
 * let a = $getStyle(property, element)
 *
 * // E.g. :
 *
 * let a = isi.$getStyle('backgroundColor', element)
 * // or
 * let a = isi.$getStyle($jsBackgroundColor, element)
 * // Will return the background-color of the element.
 *
 * @param {string} property
 * The style property : the css-property's constants can be used for maximum
 * minification when used several times. In this case,
 * the $js prefixed constants must be used.
 * @param {HTMLElement} element
 *
 * @returns
 */
function $getStyle (property, element) {
  return element.style[property]
}

/**
 * @description
 * Returns the text value of the specified HTMLElement.
 *
 * @example
 * let a = isi.$getText(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {string}
 */
function $getText (element) {
  return element.textContent
}

/**
 * @description
 * Returns the value of an input element.
 *
 * @example
 * let a = isi.$getValue(input)
 *
 * @param {HTMLElement} input
 *
 * @returns {string}
 */
function $getValue (input) {
  return input.value
}

/**
 * @description
 * Removes the specified style of the specified HTMLElement.
 *
 * The property must be in CSS like, E.g. : 'background-color'.
 *
 * If Isi's constants are used, the $css prefixed ones must be used.
 * E.g. : $cssBackgroundColor instead of $jsBackgroundColor.
 *
 * @example
 * isi.$removeStyle(property, element)
 *
 * // E.g. :
 *
 * isi.$setStyle('background-color', element)
 *
 * // or
 *
 * isi.$setStyle($cssBackgroundColor, element)
 *
 * // Will remove the background-color style of the element.
 *
 * @param {string} property
 * The style property : the css-property's constants can be used
 * for maximum minification when used several times.
 * In this case, unlike $setStyle and $getStyle,
 * $css prefixed constants must be used.
 * @param {HTMLElement} element
 */
function $removeStyle (property, element) {
  element.style.removeProperty([property]);
}

/**
 * @description
 * Checks if input is a nodeList and returns true or false.
 *
 * @example
 * if(isi.$isNodeList(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
function $isNodeList (input) {
  // return NodeList.prototype.isPrototypeOf(input)
  return input instanceof NodeList
}

/**
 * @description
 * Checks if input is an array or not and returns true or false.
 *
 * @example
 * if(isi.$isArray(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
function $isArray (input) {
  return Array.isArray(input)
}

/**
 * @description
 * Checks if input is an HTMLcollection and returns true or false.
 *
 * @example
 * if(isi.$isCollection(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
function $isCollection (input) {
  // return HTMLCollection.prototype.isPrototypeOf(input)
  return input instanceof HTMLCollection
}

/**
 * @description
 * Replacement based on *for* loop for the *forEach* native Javascript function.
 * Note that $forEach returns nothing.
 *
 * @example
 * isi.$forEach(functionToExecute}, element)
 *
 * // Or :
 *
 * isi.$forEach(itemsInElement => {
 *     itemsInElement.doSomething
 * }, element)
 *
 * // Note that outside of the DOM elements, the $forEach function does not act
 * // on the element itself.
 * // E.g. :
 *
 * let myArray = [1, 2, 3]
 * isi.$forEach(item => {
 *     items = item * 2
 * }, myArray)
 *
 * // Will not transform myArray in [2, 4, 6]. myArray will stay [1, 2, 3].
 * // To do that, this code will do the job :
 *
 * let myArray = [1, 2, 3]
 * let outputArray = []
 * isi.$forEach(item => {
 *     outputArray.push(item * 2)
 * }, myArray)
 * console.log(outputArray) // this should output [2, 4, 6].
 *
 * @param {function} functionToExecute
 * This is the function that will be executed in the forEach loop.
 *
 * @param {*} element
 * This is the array, the nodeList, the HTMLCollection or the HTMLElement that
 * will be processed by the for loop.
 * If this is not an array, an HTMLCollection or a nodeList,
 * the function will be executed once on the argument. Note : a string is
 * an array of letters.
 */
function $forEach (functionToExecute, element) {
  if ($isNodeList(element) || $isArray(element) || $isCollection(element)) {
    for (const ITEM of element) {
      functionToExecute(ITEM);
    }
  } else {
    functionToExecute(element);
  }
}

/**
 * @description
 * Changes or adds specified value to the specified attribute of HTMLElement
 * or all HTMLElement of the specified array, HTMLCollection or nodeList.
 *
 * To be used like this :
 *
 *     isi.$setAttributes(value, attribute, element)
 *
 * @example
 * isi.$setAttributes('John Doe', 'name', element)
 *
 * @param {string} value
 * @param {string} attribute
 * @param {HTMLElement|HTMLElement[]|nodeList|HTMLCollection} element
 */
function $setAttribute (value, attribute, element) {
  $forEach(item => {
    item.setAttribute(attribute, value);
  }, element);
}

/**
 * @description
 * Adds or replaces specified style's value to the specified HTMLElement.
 *
 * The property must be in JS camel case like :
 * 'backgroundColor' for the 'background-color' CSS property.
 *
 * If Isi's constants are used, the $js prefixed ones must be used.
 * E.g. : $jsBackgroundColor instead of $cssBackgroundColor.
 *
 * @example
 * isi.$setStyle(value, property, element)
 *
 * // E.g. :
 *
 * isi.$setStyle('red', 'backgroundColor', element)
 * // or
 * isi.$setStyle('red', $jsBackgroundColor, element)
 *
 *
 * // Will set the background-color of the element.
 *
 * @param {string} value
 * @param {string} property
 * The style property : the css-property's constants can be used
 * for maximum minification when used several times.
 * In this case, the $js prefixed constants must be used.
 * @param {HTMLElement} element
 *
 * @returns
 */
function $setStyle (value, property, element) {
  return (element.style[property] = value)
}

/**
 * @description
 * Replaces the specified HTMLElement's text by the new specified one.
 *
 * @example
 * isi.$setText('text', element)
 *
 * @param {string} text
 * @param {HTMLElement} element
 */
function $setText (text, element) {
  element.textContent = text;
}

/**
 * @description
 * Sets the specified value of the specified input element.
 *
 * @example
 * isi.$setValue(value, input)
 *
 * @param {string|number|boolean} value
 *
 * @param {HTMLElement} input
 */
function $setValue (value, input) {
  input.value = value;
}

/**
 * @description
 * Removes '.' and '#' from start of selectors names.
 *
 * '.myClass' becomes 'myClass' and '#myId' becomes 'myId'.
 *
 * The spaces at the start and end of the string will be removed.
 *
 * @example
 * let a = isi.$cleanSelector(myElement)
 *
 * @param {string} selector
 *
 * @returns {string}
 */
function $cleanSelector (selector) {
  selector = selector.trim();
  if (selector.charAt(0) === '#' || selector.charAt(0) === '.') {
    selector = selector.substr(1);
  }
  return selector
}

/**
 * @description
 * Returns an array of strings without '.' and '#' at start of strings.
 *
 * The spaces at the start and end of the string will be removed.
 *
 * A sole string will return an array with the string
 * as the only item in the array.
 *
 * @example
 * let a = isi.$selectorToArray(input)
 *
 * @param {string|string[]} input
 *
 * @returns  {string[]}
 */
function $selectorToArray (input) {
  if ($isArray(input)) {
    for (let i = 0, len = input.length; i < len; i++) {
      input[i] = $cleanSelector(input[i]);
    }
    return input
  }
  return [$cleanSelector(input)]
}

/**
 * @description
 * Adds a class or a list of classes to an HTMLElement
 * or to all HTMLElements of a nodeList or an HTMLCollection.
 *
 * If in the application, classes are added only on HTMLELement a few
 * number of times, then the best for minification would be
 * to not use $addClass, but instead use this :
 *
 *     myElement[isi.$classList].add(class)
 *     // Or :
 *     myElement['classList'].add(class)
 *
 * That's doesn't apply if $forEach or other classes and
 * attributes manipulators are already used.
 * In this case, the best is to use $addClass.
 *
 * @example
 * isi.$addClass('myClass', element)
 * isi.$addClass(['myClass', 'myOtherClass'], element)
 *
 * @param {(string|string[])} classList
 * @param {(HTMLElement|nodeList|HTMLCollection)} element
 */
function $addClass (classList, element) {
  $forEach(target => {
    target[$classList].add(...$selectorToArray(classList));
  }, element);
}

/**
 * @description
 * Returns true if a class is present in the specified HTMLElement.
 * Returns false if not.
 *
 * Can only test one class at a time.
 *
 * @example
 * isi.if($hasClass('className', element)) { make something }
 *
 * @param {string} className
 * The string can start with a dot or not with no influence on the output.
 * The string can have spaces at start and end with no influence on the output.
 * @param {HTMLElement} element
 *
 * @returns {boolean}
 */
function $hasClass (className, element) {
  return element[$classList].contains($cleanSelector(className))
}

/**
 * @description
 * Removes a class or a list of classes from an HTMLElement or
 * from all HTMLElement of a nodeList or an HTMLCollection.
 *
 * If in the application, classes are removed only on HTMLELement a few
 * number of times, then the best for minification would be
 * to not use $removeClass, but instead use this :
 *
 *     myElement[$classList].remove(class)
 *     // Or :
 *     myElement['classList'].remove(class)
 *
 * That's doesn't apply if $forEach or other classes
 * and attributes manipulators are
 * already used. In this case, the best is to use $removeClass.
 *
 * @example
 * isi.$removeClass('myClass', element)
 * isi.$removeClass(['myClass', 'myOtherClass'], element)
 *
 * @param {(string|string[])} classList
 * @param {(HTMLElement|nodeList|HTMLCollection)} element
 */
function $removeClass (classList, element) {
  $forEach(target => {
    target[$classList].remove(...$selectorToArray(classList));
  }, element);
}

/**
 * @description
 * Replaces a class by another in an HTMLElement
 * or in all HTMLElements of a nodeList or an HTMLCollection.
 *
 * Based on native element.classList.replace that is not well
 * supported : https://caniuse.com/#search=classlist%20replace.
 * Until it's well supported, the best would be to use $toggleClass
 * on the two classes.
 *
 * If in the application, classes are replaced only on HTMLELement a
 * few number of times, then the best for minification would be to not use
 * $replaceClass, but instead use this :
 *
 *     myElement[$classList].replace('oldClass', 'newClass')
 *     // Or :
 *     myElement['classList'].replace('oldClass', 'newClass')
 *
 * That's doen't apply if $forEach or other classes
 * and attributes manipulators are already used.
 * In this case, the best is to use $replaceClass.
 *
 * @example
 * isi.$replaceClass('oldClass', 'newClass', element)
 *
 * @param {string} oldClass
 * @param {string} newClass
 * @param {(HTMLElement|nodeList|HTMLCollection)} element
 */
function $replaceClass (oldClass, newClass, element) {
  $forEach(target => {
    target[$classList].replace(
      $cleanSelector(oldClass),
      $cleanSelector(newClass)
    );
  }, element);
}

/**
 * @description
 * Toggles a class or a list of classes of an HTMLElement
 * or of all HTMLElements of a nodeList or an HTMLCollection.
 *
 * If in application, classes are toggled only on HTMLELement a few
 * number of times, then the best for minification
 * would be to not use $toggleClass, but instead use this :
 *
 *     myElement[$classList].toggle(class)
 *     //Or :
 *     myElement['classList'].toggle(class)
 *
 * That's doesn't apply if $forEach or other classes
 * and attributes manipulators are already used.
 * In this case, the best is to use $toggleClass.
 *
 * @example
 * isi.$toggleClass('myClass', element)
 * isi.$toggleClass(['myClass', 'myOtherClass'], element)
 *
 * @param {(string|string[])} classList
 * @param {(HTMLElement|nodeList|HTMLCollection)} element
 */
function $toggleClass (classList, element) {
  const CLASSES = $selectorToArray(classList);

  $forEach(target => {
    for (let i = 0, len = CLASSES.length; i < len; i++) {
      target[$classList].toggle(CLASSES[i]);
    }
  }, element);
}

/**
 * @description
 * Returns a string concatened from an array of strings.
 *
 * Each string from the array will be transformed in a class name
 * if 'dot' is set to true. e.g. : 'myClass' becomes '.myClass',
 * '.myClass' stays '.myClass'.
 *
 * If 'dot' is set to false, any dot in class name will be removed.
 * e.g. : '.myClass' becomes 'myClass'.
 *
 * Spaces from start and end of strings will be removed.
 *
 * @example
 * let a = isi.$selectorArrayToString(input, false)
 *
 * @param {string|string[]} input
 * A string value will output the same string with or without '.' at start
 * according to the argument 'dot' received. An array of strings will return
 * a concatened string with or without '.' at start according
 * to the argument 'dot' received.
 * @param {boolean=} [dot=true]
 * true will set separator as '.' and false will set separator as a space.
 *
 * @returns {string}
 */
function $selectorArrayToString (input, dot = $true) {
  const SEPARATOR = dot === $true ? '.' : ' ';
  input = $selectorToArray(input);
  return (SEPARATOR + input.join(SEPARATOR)).trim()
}

/**
 * @description
 * Selects elements based on getElementsByClassName(https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
 * which returns an HTMLCollection of elements containing specified class.
 *
 * An HTMLCollection is live : change in the DOM is reflected
 * in the HTMLCollection.
 *
 * An HTMLCollection doesn't accept forEach. Use other loops with it.
 *
 * @example
 * let a = isi.$byClassLive('classList', element)
 *
 * @param {string|string[]} classList
 * The string and strings in array can start with a dot or not.
 * The string and strings in array can have spaces at start an end.
 * @param {HTMLElement=} [element=document]
 *
 * @returns {HTMLCollection}
 */
function $byClassLive (classList, element = $document) {
  return element.getElementsByClassName(
    $selectorArrayToString(classList, $false)
  )
}

/**
 * @description
 * Selects elements based on querySelectorAll(https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) Which returns a static nodeList of
 * elements containing specified classes.
 *
 * The result is not live :
 * Change in the DOM do not affect the nodeList content.
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 *
 * The nodeList accepts native JS forEach.
 *
 * @example
 * let a = isi.$byClass('classList', element)
 *
 * @param {string|string[]} classList
 * The string and strings in array can start with a dot or not.
 * The string and strings in array can have spaces at start an end.
 * @param {HTMLElement=} [element=document]
 *
 * @returns {NodeList}
 */
function $byClass (classList, element = $document) {
  return element.querySelectorAll($selectorArrayToString(classList))
}

/**
 * @description
 * Returns an HTMLElement based on getElementById.
 * Returns null if nothing is found.
 *
 * @example
 * let a = isi.$byId('id')
 *
 * @param {string} id
 * The string can start with a # or not.
 * The string can have spaces at start an end.
 *
 * @returns {HTMLElement|null}
 */
function $byId (id) {
  return $document.getElementById($cleanSelector(id))
}

/**
 * @description
 * Returns an array containing all next HTMLElements siblings from
 * a specified HTMLElement.
 *
 * Returns null if there are no next siblings found.
 *
 * @example
 * let a = isi.$findNextSiblings(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {array, null}
 */
function $findNextSiblings (element) {
  const SIBLINGS = [];
  while ((element = element.nextElementSibling)) {
    SIBLINGS.push(element);
  }
  return SIBLINGS.length > 0 ? SIBLINGS : $null
}

/**
 * @description
 * Replaces native JS property element.parentElement.
 * (https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
 *
 * Returns an HTMLElement Which is the parent of the specified HTMLElement.
 *
 * @example
 * let a = isi.$findParent(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {HTMLElement}
 */
function $findParent (element) {
  return element.parentElement
}

/**
 * @description
 * Returns an array containing all previous HTMLElements siblings from
 * a specified HTMLElement.
 *
 * The closest sibling is the first of the array, then the second closest,
 * and so on.
 *
 * Returns null if there are no previous siblings found.
 *
 * @example
 * let a = isi.$findPreviousSiblings(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {Array|null}
 */
function $findPreviousSiblings (element) {
  const SIBLINGS = [];
  while ((element = element.previousElementSibling)) {
    SIBLINGS.push(element);
  }
  return SIBLINGS.length > 0 ? SIBLINGS : $null
}

/**
 * @description
 * Returns an array containing siblings HTMLElement
 * from a specified HTMLElement.
 *
 * Returns null if there are no siblings.
 *
 * @example
 * let a = isi.$findSiblings(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {Array|null}
 */
function $findSiblings (element) {
  const output = Array.prototype.filter.call(
    element.parentNode.children,
    function (child) {
      return child !== element
    }
  );

  return output.length > 0 ? output : $null
}

/**
 * @description
 * Selects elements based on querySelectorAll :
 *  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * Which returns a nodeList of elements containing specified selectors.
 *
 * A nodeList is static and is not live. It's like a snapshot of the DOM.
 *
 * A nodeList accepts native JS forEach.
 *
 * @example
 * let query = "div.myClass, div.myOtherClass"
 * let a = isi.$select(query, element)
 *
 * @param {string} query
 * @param {element} [element=document]
 *
 * @returns {NodeList}
 */
function $select (query, element = $document) {
  return element.querySelectorAll(query)
}

/**
 * @description
 * Returns the height in pixels of an HTMLElement.
 * If no HTMLElement is specified, the height of the window is returned.
 *
 * @example
 * let a = isi.$getHeight(element)
 *
 * @param {HTMLElement} [element=null]
 *
 * @returns {number}
 */
function $getHeight (element = $null) {
  if (element) {
    return parseFloat(
      getComputedStyle(element)[$cssHeight].replace(
        _$px,
        _$emptyString
      )
    )
  }
  return $window.innerHeight
}

/**
 * @description
 * Returns an object containing the top and left positions
 * of a specified element relative to the top and left of the view.
 *
 * @example
 * let offset = isi.$getOffset(element)
 * console.log(offset.top)
 * console.log(offset.left)
 *
 * @param {HTMLElement} element
 *
 * @returns {Object}
 * The returned object contains the 'top' and 'left' properties
 * that can be accessed.
 */
function $getOffset (element) {
  var rectangle = element.getBoundingClientRect();
  return {
    top: rectangle.top + $docBody.scrollTop,
    left: rectangle.left + $docBody.scrollLeft
  }
}

/**
 * @description
 * Returns the width in pixels of an HTMLElement.
 * If no HTMLElement is specified, or the element value is null,
 * the width of the window is returned.
 *
 * @example
 * let a = isi.$getWidth(element)
 *
 * @param {HTMLElement} [element=null]
 *
 * @returns {number}
 */
function $getWidth (element = $null) {
  if (element) {
    return parseFloat(
      getComputedStyle(element)[$cssWidth].replace(
        _$px,
        _$emptyString
      )
    )
  }
  return $window.innerWidth
}

/**
 * @description
 * Filters an HTMLCollection and returns an array with the fitered HTMLElements.
 * Returns null if nothing matches the filter.
 *
 * @example
 * let a = isi.$filterCollection("div.myClass input[name='myName']", myElement)
 *
 * @param {string} filter
 * The filter like in querySelector :
 *  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * @param {HTMLCollection} collection
 *
 * @returns {Array|null}
 * An array of HTMLElement.
 */
function $filterCollection (filter, collection) {
  var output = [];
  for (var i = 0; i < collection.length; i++) {
    // if nodeType is an element and match selector :
    // push the element in the array
    if (collection[i].nodeType === 1 && collection[i].matches(filter)) {
      output.push(collection[i]);
    }
  }

  return output.length > 0 ? output : $null
}

/**
 * @description
 * Returns true if selector matches an element in the document or in
 * the specified parent element.
 *
 * Returns false if selector matches no element in the document or in
 * the specified parent element.
 *
 * @example
 * if(isi.$isExisting(query)) { make something }
 *
 * @param {string} query
 * @param {HTMLElement=} [element=document]
 *
 * @returns {boolean}
 */
function $isExisting (query, element = $document) {
  return element.querySelector(query) ? $true : $false
}

/**
 * @description
 * Checks if input is an HTMLelement and returns true or false.
 *
 * @example
 * if(isi.$isHtmlElement(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
function $isHtmlElement (input) {
  return input instanceof HTMLElement
}

/**
 * @description
 * Replacement for : typeof variable === 'undefined'
 *
 * @example
 * // instead of this :
 * typeof variable === 'undefined'
 *
 * // Use this :
 * if(isi.$isUndefined(variable)) { make something }
 *
 * @param {*} variable
 *
 * @returns {boolean}
 */
function $isUndefined (variable) {
  // eslint-disable-next-line valid-typeof
  return typeof variable === _$undefined
}

export { $addClass, $byClass, $byClassLive, $byId, $classList, $cleanSelector, $cssAlignContent, $cssAlignItems, $cssAlignSelf, $cssAll, $cssAnimation, $cssAppearance, $cssBackdropFilter, $cssBackfaceVisibility, $cssBackground, $cssBackgroundAttachment, $cssBackgroundBlendMode, $cssBackgroundClip, $cssBackgroundColor, $cssBackgroundImage, $cssBackgroundOrigin, $cssBackgroundPosition, $cssBackgroundRepeat, $cssBackgroundSize, $cssBleed, $cssBlockOverflow, $cssBorder, $cssBorderBottom, $cssBorderBottomStyle, $cssBorderCollapse, $cssBorderImage, $cssBorderLeft, $cssBorderLeftStyle, $cssBorderRadius, $cssBorderRight, $cssBorderRightStyle, $cssBorderSpacing, $cssBorderTop, $cssBorderTopStyle, $cssBottom, $cssBoxDecorationBreak, $cssBoxShadow, $cssBoxSizing, $cssBreakInside, $cssCaptionSide, $cssCaretColor, $cssClear, $cssClipPath, $cssColor, $cssColorAdjust, $cssColumnCount, $cssColumnFill, $cssColumnGap, $cssColumnRule, $cssColumnSpan, $cssColumnWidth, $cssColumns, $cssContent, $cssCounterIncrement, $cssCounterReset, $cssCursor, $cssDirection, $cssDisplay, $cssEmptyCells, $cssFill, $cssFilter, $cssFlex, $cssFlexBasis, $cssFlexDirection, $cssFlexFlow, $cssFlexGrow, $cssFlexShrink, $cssFlexWrap, $cssFloat, $cssFont, $cssFontDisplay, $cssFontFamily, $cssFontFeatureSettings, $cssFontSize, $cssFontSizeAdjust, $cssFontStretch, $cssFontStyle, $cssFontVariant, $cssFontVariantNumeric, $cssFontWeight, $cssGridColumn, $cssGridRow, $cssGridTemplateColumns, $cssGridTemplateRows, $cssHangingPunctuation, $cssHeight, $cssHyphens, $cssImageRendering, $cssInitialLetter, $cssIsolation, $cssJustifyContent, $cssLeft, $cssLetterSpacing, $cssLineClamp, $cssLineHeight, $cssListStyle, $cssMargin, $cssMarginBottom, $cssMarginLeft, $cssMarginRight, $cssMarginTop, $cssMaxHeight, $cssMaxWidth, $cssMinHeight, $cssMinWidth, $cssMixBlendMode, $cssObjectFit, $cssObjectPosition, $cssOffsetAnchor, $cssOffsetDistance, $cssOffsetPath, $cssOffsetRotate, $cssOpacity, $cssOrder, $cssOrphans, $cssOutline, $cssOutlineOffset, $cssOverflow, $cssOverflowAnchor, $cssOverflowWrap, $cssOverscrollBehavior, $cssPadding, $cssPaddingBottom, $cssPaddingLeft, $cssPaddingRight, $cssPaddingTop, $cssPageBreak, $cssPerspective, $cssPerspectiveOrigin, $cssPlaceItems, $cssPointerEvents, $cssPosition, $cssQuotes, $cssResize, $cssRight, $cssScrollBehavior, $cssScrollMargin, $cssScrollPadding, $cssScrollSnapAlign, $cssScrollSnapStop, $cssScrollSnapType, $cssScrollbar, $cssScrollbarColor, $cssScrollbarGutter, $cssScrollbarWidth, $cssShapeOutside, $cssSpeak, $cssStroke, $cssStrokeDasharray, $cssStrokeDashoffset, $cssStrokeLinecap, $cssStrokeLinejoin, $cssStrokeWidth, $cssTabSize, $cssTableLayout, $cssTextAlign, $cssTextAlignLast, $cssTextDecoration, $cssTextDecorationColor, $cssTextDecorationLine, $cssTextDecorationSkip, $cssTextDecorationSkipInk, $cssTextDecorationStyle, $cssTextIndent, $cssTextJustify, $cssTextOverflow, $cssTextRendering, $cssTextShadow, $cssTextStroke, $cssTextTransform, $cssTextUnderlinePosition, $cssTop, $cssTouchAction, $cssTransform, $cssTransformOrigin, $cssTransformStyle, $cssTransition, $cssTransitionDelay, $cssTransitionDuration, $cssTransitionProperty, $cssTransitionTimingFunction, $cssUnicodeBidi, $cssUnicodeRange, $cssUserSelect, $cssVerticalAlign, $cssVisibility, $cssWhiteSpace, $cssWidows, $cssWidth, $cssWillChange, $cssWordBreak, $cssWordSpacing, $cssWritingMode, $cssZIndex, $cssZoom, $docBody, $docElement, $document, $false, $filterCollection, $findNextSiblings, $findParent, $findPreviousSiblings, $findSiblings, $forEach, $getAttribute, $getAttributes, $getData, $getHeight, $getOffset, $getStyle, $getText, $getValue, $getWidth, $hasClass, $isArray, $isCollection, $isExisting, $isHtmlElement, $isNodeList, $isUndefined, $jsAlignContent, $jsAlignItems, $jsAlignSelf, $jsAll, $jsAnimation, $jsAppearance, $jsBackdropFilter, $jsBackfaceVisibility, $jsBackground, $jsBackgroundAttachment, $jsBackgroundBlendMode, $jsBackgroundClip, $jsBackgroundColor, $jsBackgroundImage, $jsBackgroundOrigin, $jsBackgroundPosition, $jsBackgroundRepeat, $jsBackgroundSize, $jsBleed, $jsBlockOverflow, $jsBorder, $jsBorderBottom, $jsBorderBottomStyle, $jsBorderCollapse, $jsBorderImage, $jsBorderLeft, $jsBorderLeftStyle, $jsBorderRadius, $jsBorderRight, $jsBorderRightStyle, $jsBorderSpacing, $jsBorderTop, $jsBorderTopStyle, $jsBottom, $jsBoxDecorationBreak, $jsBoxShadow, $jsBoxSizing, $jsBreakInside, $jsCaptionSide, $jsCaretColor, $jsClear, $jsClipPath, $jsColor, $jsColorAdjust, $jsColumnCount, $jsColumnFill, $jsColumnGap, $jsColumnRule, $jsColumnSpan, $jsColumnWidth, $jsColumns, $jsContent, $jsCounterIncrement, $jsCounterReset, $jsCursor, $jsDirection, $jsDisplay, $jsEmptyCells, $jsFill, $jsFilter, $jsFlex, $jsFlexBasis, $jsFlexDirection, $jsFlexFlow, $jsFlexGrow, $jsFlexShrink, $jsFlexWrap, $jsFloat, $jsFont, $jsFontDisplay, $jsFontFamily, $jsFontFeatureSettings, $jsFontSize, $jsFontSizeAdjust, $jsFontStretch, $jsFontStyle, $jsFontVariant, $jsFontVariantNumeric, $jsFontWeight, $jsGridColumn, $jsGridRow, $jsGridTemplateColumns, $jsGridTemplateRows, $jsHangingPunctuation, $jsHeight, $jsHyphens, $jsImageRendering, $jsInitialLetter, $jsIsolation, $jsJustifyContent, $jsLeft, $jsLetterSpacing, $jsLineClamp, $jsLineHeight, $jsListStyle, $jsMargin, $jsMarginBottom, $jsMarginLeft, $jsMarginRight, $jsMarginTop, $jsMaxHeight, $jsMaxWidth, $jsMinHeight, $jsMinWidth, $jsMixBlendMode, $jsObjectFit, $jsObjectPosition, $jsOffsetAnchor, $jsOffsetDistance, $jsOffsetPath, $jsOffsetRotate, $jsOpacity, $jsOrder, $jsOrphans, $jsOutline, $jsOutlineOffset, $jsOverflow, $jsOverflowAnchor, $jsOverflowWrap, $jsOverscrollBehavior, $jsPadding, $jsPaddingBottom, $jsPaddingLeft, $jsPaddingRight, $jsPaddingTop, $jsPageBreak, $jsPerspective, $jsPerspectiveOrigin, $jsPlaceItems, $jsPointerEvents, $jsPosition, $jsQuotes, $jsResize, $jsRight, $jsScrollBehavior, $jsScrollMargin, $jsScrollPadding, $jsScrollSnapAlign, $jsScrollSnapStop, $jsScrollSnapType, $jsScrollbar, $jsScrollbarColor, $jsScrollbarGutter, $jsScrollbarWidth, $jsShapeOutside, $jsSpeak, $jsStroke, $jsStrokeDasharray, $jsStrokeDashoffset, $jsStrokeLinecap, $jsStrokeLinejoin, $jsStrokeWidth, $jsTabSize, $jsTableLayout, $jsTextAlign, $jsTextAlignLast, $jsTextDecoration, $jsTextDecorationColor, $jsTextDecorationLine, $jsTextDecorationSkip, $jsTextDecorationSkipInk, $jsTextDecorationStyle, $jsTextIndent, $jsTextJustify, $jsTextOverflow, $jsTextRendering, $jsTextShadow, $jsTextStroke, $jsTextTransform, $jsTextUnderlinePosition, $jsTop, $jsTouchAction, $jsTransform, $jsTransformOrigin, $jsTransformStyle, $jsTransition, $jsTransitionDelay, $jsTransitionDuration, $jsTransitionProperty, $jsTransitionTimingFunction, $jsUnicodeBidi, $jsUnicodeRange, $jsUserSelect, $jsVerticalAlign, $jsVisibility, $jsWhiteSpace, $jsWidows, $jsWidth, $jsWillChange, $jsWordBreak, $jsWordSpacing, $jsWritingMode, $jsZIndex, $jsZoom, $null, $removeClass, $removeStyle, $replaceClass, $select, $selectorArrayToString, $selectorToArray, $setAttribute, $setStyle, $setText, $setValue, $toggleClass, $true, $undefined, $window, _$block, _$blur, _$body, _$change, _$click, _$default, _$disabled, _$em, _$emptyString, _$error, _$false, _$focus, _$hidden, _$html, _$img, _$initial, _$length, _$mouseup, _$ms, _$no, _$none, _$null, _$ok, _$px, _$rem, _$true, _$undefined, _$width };
