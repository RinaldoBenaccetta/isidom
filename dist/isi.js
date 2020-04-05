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
 * Remove '.' and '#' from start of selectors names.
 *
 * '.myClass' become 'myClass' and '#myId' become 'myId'.
 * 
 * The spaces at the start and end of the string will be removed.
 * 
 * @example
 * let a = $cleanSelector(myElement)
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
 * Filter an HTMLCollection and return an array with the fitered HTMLElements.
 * Return null if nothing is matching the filter.
 * 
 * @example
 * let a = $filterCollection("div.myClass input[name='myName']", myElement)
 *
 * @param {string} filter
 * The filter like in querySelector :
 *  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * @param {HTMLElement} element
 *
 * @returns {Array|null}
 * An array of HTMLElement.
 */
function $filterCollection (filter, element) {
  var output = [];
  for (var i = 0; i < element.length; i++) {
    // if nodetype is an element and match selector :
    // push the element in the array
    if (element[i].nodeType === 1 && element[i].matches(filter)) {
      output.push(element[i]);
    }
  }

  return output.length > 0 ? output : $null
}

/**
 * @description
 * Check if input is a nodelist and return true or false.
 *
 * @example
 * if($isNodeList(input)) { make something }
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
 * Check if input is an array or not and return true or false.
 *
 * @example 
 * if($isArray(input)) { make something }
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
 * Check if input is an HTMLcollection and return true or false.
 *
 * @example
 * if($isCollection(input)) { make something }
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
 * Replacement based on for loop for the forEach native Javascript function.
 * Note that $forEach return nothing.
 * 
 * @example
 * $forEach(functionToExecute}, element)
 * 
 * // Or :
 * 
 * $forEach(itemsInElement => {
 *     itemsInElement.doSomething
 * }, element)
 *
 * // Note that outside of the DOM elements, the $forEach function does not act
 * // on the element itself.
 * // E.g. :
 * 
 * let myArray = [1, 2, 3]
 * $forEach(item => {
 *     items = item * 2
 * }, myArray)
 *
 * // Will not transform myArray in [2, 4, 6]. myArray will stay [1, 2, 3].
 * // To do that, this code will do the job :
 * 
 * let myArray = [1, 2, 3]
 * let outputArray = []
 * $forEach(item => {
 *     outputArray.push(item * 2)
 * }, myArray)
 * console.log(outputArray) // this should output [2, 4, 6].
 *
 * @param {function} functionToExecute
 * This is the function that will be executed in the forEach loop.
 *
 * @param {*} element
 * This is the array, the nodelist, the HTMLCollection or the HTMLElement that
 * will be processed by the for loop.
 * If this is not an array, an HTMLCollection or a nodelist,
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
 * Return true if selector matches an element in the document or in
 * the specified parent element.
 *
 * Return false if selector matches no element in the document or in
 * the specified parent element.
 *
 * @example
 * if($isExisting(query)) { make something }
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
 * Check if input is an HTMLelement and return true or false.
 *
 * @example
 * if($isHtmlElement(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
function $isHtmlElement (input) {
  return input instanceof HTMLElement
}

/**
 * @description Replacement for : typeof variable === 'undefined'
 * @example
 * // instead of this :
 * typeof variable === 'undefined'
 * 
 * // Use this :
 * if($isUndefined(variable)) { make something }
 *
 * @param {*} variable
 *
 * @returns {boolean}
 */
function $isUndefined (variable) {
  // eslint-disable-next-line valid-typeof
  return typeof variable === _$undefined
}

/**
 * @description
 * Return an array of strings without '.' and '#' at start of strings.
 *
 * The spaces at the start and end of the string will be removed.
 *
 * A sole string will return an array with the string as the only item in the array.
 *
 * @example
 * let a = $selectorToArray(input)
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
 * Return a string concatened from an array of string.
 *
 * Each string from the array will be transformed in a class name
 * if 'dot' is set to true. e.g. : 'myClass' become '.myClass',
 * '.myClass' stay '.myClass'.
 * 
 * If 'dot' is set to false, any dot in class name will be removed.
 * e.g. : '.myClass' become 'myClass'.
 *
 * Spaces from start and end of strings will be removed.
 *
 * @example
 * let a = $selectorArrayToString(input, false)
 *
 * @param {string|string[]} input
 * A string value will output the same string with or without '.' at start
 * according to the argument 'dot' received. An array of string will return
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
 * Select elements based on getElementsByClassName(https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) wich return
 * an HTMLCollection of elements containing specified class.
 *
 * An HTMLCollection is live : a modification in the DOM is reflected
 * in the HTMLCollection.
 *
 * An HTMLCollection don't accept forEach. Use other loops with it.
 *
 * @example
 * let a = $byClassLive('classList', element)
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
 * Select elements based on querySelectorAll(https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) wich return a static nodeList of
 * elements containing specified class.
 *
 * The result is not live : Change in the DOM does not affect the nodeList content.
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 *
 * The nodeList accept native JS forEach.
 *
 * @example
 * let a = $byClass('classList', element)
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
 * Return an HTMLElement based on getElementById.
 * Return null if nothing is found.
 *
 * @example
 * let a = $byId('id')
 *
 * @param {string} id
 * The string and strings in array can start with a # or not.
 * The string and strings in array can have spaces at start an end.
 *
 * @returns {HTMLElement|null}
 */
function $byId (id) {
  return $document.getElementById($cleanSelector(id))
}

/**
 * @description
 * Return an array containing all next HTMLElements siblings from
 * a specified HTMLElement.
 *
 * Return null if there is no next siblings found.
 *
 * @example
 * let a = $findNextSiblings(element)
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
 * Replace native JS property element.parentElement.
 * (https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
 *
 * Return an HTMLElement wich is the parent of the specified HTMLElement.
 *
 * @example
 * let a = $findParent(element)
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
 * Return an array containing all previous HTMLElements siblings from
 * a specified HTMLElement.
 *
 * The closest sibling is the first of the array, then the second closest,
 * and so on.
 *
 * Return null if there is no previous siblings found.
 *
 * @example
 * let a = $findPreviousSiblings(element)
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
 * Return an array containing siblings HTMLElement from a specified HTMLElement.
 *
 * Return null if there is no siblings.
 *
 * @example
 * let a = $findSiblings(element)
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
 * Select elements based on querySelectorAll :
 *  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * Wich return a nodeList of elements containing specified selectors.
 *
 * A nodeList is static and is not live. It's like a snapshot of the DOM.
 *
 * A nodeList accept native JS forEach.
 *
 * @example
 * let query = "div.myClass, div.myOtherClass"
 * let a = $select(query, element)
 *
 * @param {string} query
 * @param {element} [element=document]
 *
 * @returns {NodeList}
 */
function $select (query, element = $document) {
  return element.querySelectorAll(query)
}

export { $byClass, $byClassLive, $byId, $classList, $cleanSelector, $cssAlignContent, $cssAlignItems, $cssAlignSelf, $cssAll, $cssAnimation, $cssAppearance, $cssBackdropFilter, $cssBackfaceVisibility, $cssBackground, $cssBackgroundAttachment, $cssBackgroundBlendMode, $cssBackgroundClip, $cssBackgroundColor, $cssBackgroundImage, $cssBackgroundOrigin, $cssBackgroundPosition, $cssBackgroundRepeat, $cssBackgroundSize, $cssBleed, $cssBlockOverflow, $cssBorder, $cssBorderBottom, $cssBorderBottomStyle, $cssBorderCollapse, $cssBorderImage, $cssBorderLeft, $cssBorderLeftStyle, $cssBorderRadius, $cssBorderRight, $cssBorderRightStyle, $cssBorderSpacing, $cssBorderTop, $cssBorderTopStyle, $cssBottom, $cssBoxDecorationBreak, $cssBoxShadow, $cssBoxSizing, $cssBreakInside, $cssCaptionSide, $cssCaretColor, $cssClear, $cssClipPath, $cssColor, $cssColorAdjust, $cssColumnCount, $cssColumnFill, $cssColumnGap, $cssColumnRule, $cssColumnSpan, $cssColumnWidth, $cssColumns, $cssContent, $cssCounterIncrement, $cssCounterReset, $cssCursor, $cssDirection, $cssDisplay, $cssEmptyCells, $cssFill, $cssFilter, $cssFlex, $cssFlexBasis, $cssFlexDirection, $cssFlexFlow, $cssFlexGrow, $cssFlexShrink, $cssFlexWrap, $cssFloat, $cssFont, $cssFontDisplay, $cssFontFamily, $cssFontFeatureSettings, $cssFontSize, $cssFontSizeAdjust, $cssFontStretch, $cssFontStyle, $cssFontVariant, $cssFontVariantNumeric, $cssFontWeight, $cssGridColumn, $cssGridRow, $cssGridTemplateColumns, $cssGridTemplateRows, $cssHangingPunctuation, $cssHeight, $cssHyphens, $cssImageRendering, $cssInitialLetter, $cssIsolation, $cssJustifyContent, $cssLeft, $cssLetterSpacing, $cssLineClamp, $cssLineHeight, $cssListStyle, $cssMargin, $cssMarginBottom, $cssMarginLeft, $cssMarginRight, $cssMarginTop, $cssMaxHeight, $cssMaxWidth, $cssMinHeight, $cssMinWidth, $cssMixBlendMode, $cssObjectFit, $cssObjectPosition, $cssOffsetAnchor, $cssOffsetDistance, $cssOffsetPath, $cssOffsetRotate, $cssOpacity, $cssOrder, $cssOrphans, $cssOutline, $cssOutlineOffset, $cssOverflow, $cssOverflowAnchor, $cssOverflowWrap, $cssOverscrollBehavior, $cssPadding, $cssPaddingBottom, $cssPaddingLeft, $cssPaddingRight, $cssPaddingTop, $cssPageBreak, $cssPerspective, $cssPerspectiveOrigin, $cssPlaceItems, $cssPointerEvents, $cssPosition, $cssQuotes, $cssResize, $cssRight, $cssScrollBehavior, $cssScrollMargin, $cssScrollPadding, $cssScrollSnapAlign, $cssScrollSnapStop, $cssScrollSnapType, $cssScrollbar, $cssScrollbarColor, $cssScrollbarGutter, $cssScrollbarWidth, $cssShapeOutside, $cssSpeak, $cssStroke, $cssStrokeDasharray, $cssStrokeDashoffset, $cssStrokeLinecap, $cssStrokeLinejoin, $cssStrokeWidth, $cssTabSize, $cssTableLayout, $cssTextAlign, $cssTextAlignLast, $cssTextDecoration, $cssTextDecorationColor, $cssTextDecorationLine, $cssTextDecorationSkip, $cssTextDecorationSkipInk, $cssTextDecorationStyle, $cssTextIndent, $cssTextJustify, $cssTextOverflow, $cssTextRendering, $cssTextShadow, $cssTextStroke, $cssTextTransform, $cssTextUnderlinePosition, $cssTop, $cssTouchAction, $cssTransform, $cssTransformOrigin, $cssTransformStyle, $cssTransition, $cssTransitionDelay, $cssTransitionDuration, $cssTransitionProperty, $cssTransitionTimingFunction, $cssUnicodeBidi, $cssUnicodeRange, $cssUserSelect, $cssVerticalAlign, $cssVisibility, $cssWhiteSpace, $cssWidows, $cssWidth, $cssWillChange, $cssWordBreak, $cssWordSpacing, $cssWritingMode, $cssZIndex, $cssZoom, $docBody, $docElement, $document, $false, $filterCollection, $findNextSiblings, $findParent, $findPreviousSiblings, $findSiblings, $forEach, $isArray, $isCollection, $isExisting, $isHtmlElement, $isNodeList, $isUndefined, $jsAlignContent, $jsAlignItems, $jsAlignSelf, $jsAll, $jsAnimation, $jsAppearance, $jsBackdropFilter, $jsBackfaceVisibility, $jsBackground, $jsBackgroundAttachment, $jsBackgroundBlendMode, $jsBackgroundClip, $jsBackgroundColor, $jsBackgroundImage, $jsBackgroundOrigin, $jsBackgroundPosition, $jsBackgroundRepeat, $jsBackgroundSize, $jsBleed, $jsBlockOverflow, $jsBorder, $jsBorderBottom, $jsBorderBottomStyle, $jsBorderCollapse, $jsBorderImage, $jsBorderLeft, $jsBorderLeftStyle, $jsBorderRadius, $jsBorderRight, $jsBorderRightStyle, $jsBorderSpacing, $jsBorderTop, $jsBorderTopStyle, $jsBottom, $jsBoxDecorationBreak, $jsBoxShadow, $jsBoxSizing, $jsBreakInside, $jsCaptionSide, $jsCaretColor, $jsClear, $jsClipPath, $jsColor, $jsColorAdjust, $jsColumnCount, $jsColumnFill, $jsColumnGap, $jsColumnRule, $jsColumnSpan, $jsColumnWidth, $jsColumns, $jsContent, $jsCounterIncrement, $jsCounterReset, $jsCursor, $jsDirection, $jsDisplay, $jsEmptyCells, $jsFill, $jsFilter, $jsFlex, $jsFlexBasis, $jsFlexDirection, $jsFlexFlow, $jsFlexGrow, $jsFlexShrink, $jsFlexWrap, $jsFloat, $jsFont, $jsFontDisplay, $jsFontFamily, $jsFontFeatureSettings, $jsFontSize, $jsFontSizeAdjust, $jsFontStretch, $jsFontStyle, $jsFontVariant, $jsFontVariantNumeric, $jsFontWeight, $jsGridColumn, $jsGridRow, $jsGridTemplateColumns, $jsGridTemplateRows, $jsHangingPunctuation, $jsHeight, $jsHyphens, $jsImageRendering, $jsInitialLetter, $jsIsolation, $jsJustifyContent, $jsLeft, $jsLetterSpacing, $jsLineClamp, $jsLineHeight, $jsListStyle, $jsMargin, $jsMarginBottom, $jsMarginLeft, $jsMarginRight, $jsMarginTop, $jsMaxHeight, $jsMaxWidth, $jsMinHeight, $jsMinWidth, $jsMixBlendMode, $jsObjectFit, $jsObjectPosition, $jsOffsetAnchor, $jsOffsetDistance, $jsOffsetPath, $jsOffsetRotate, $jsOpacity, $jsOrder, $jsOrphans, $jsOutline, $jsOutlineOffset, $jsOverflow, $jsOverflowAnchor, $jsOverflowWrap, $jsOverscrollBehavior, $jsPadding, $jsPaddingBottom, $jsPaddingLeft, $jsPaddingRight, $jsPaddingTop, $jsPageBreak, $jsPerspective, $jsPerspectiveOrigin, $jsPlaceItems, $jsPointerEvents, $jsPosition, $jsQuotes, $jsResize, $jsRight, $jsScrollBehavior, $jsScrollMargin, $jsScrollPadding, $jsScrollSnapAlign, $jsScrollSnapStop, $jsScrollSnapType, $jsScrollbar, $jsScrollbarColor, $jsScrollbarGutter, $jsScrollbarWidth, $jsShapeOutside, $jsSpeak, $jsStroke, $jsStrokeDasharray, $jsStrokeDashoffset, $jsStrokeLinecap, $jsStrokeLinejoin, $jsStrokeWidth, $jsTabSize, $jsTableLayout, $jsTextAlign, $jsTextAlignLast, $jsTextDecoration, $jsTextDecorationColor, $jsTextDecorationLine, $jsTextDecorationSkip, $jsTextDecorationSkipInk, $jsTextDecorationStyle, $jsTextIndent, $jsTextJustify, $jsTextOverflow, $jsTextRendering, $jsTextShadow, $jsTextStroke, $jsTextTransform, $jsTextUnderlinePosition, $jsTop, $jsTouchAction, $jsTransform, $jsTransformOrigin, $jsTransformStyle, $jsTransition, $jsTransitionDelay, $jsTransitionDuration, $jsTransitionProperty, $jsTransitionTimingFunction, $jsUnicodeBidi, $jsUnicodeRange, $jsUserSelect, $jsVerticalAlign, $jsVisibility, $jsWhiteSpace, $jsWidows, $jsWidth, $jsWillChange, $jsWordBreak, $jsWordSpacing, $jsWritingMode, $jsZIndex, $jsZoom, $null, $select, $selectorArrayToString, $selectorToArray, $true, $undefined, $window, _$block, _$blur, _$body, _$change, _$click, _$default, _$disabled, _$em, _$emptyString, _$error, _$false, _$focus, _$hidden, _$html, _$img, _$initial, _$length, _$mouseup, _$ms, _$no, _$none, _$null, _$ok, _$px, _$rem, _$true, _$undefined, _$width };
