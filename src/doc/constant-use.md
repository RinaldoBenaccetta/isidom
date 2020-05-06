Use these constants only if they are used more than one time in code.
E.G. :

with use of constant :

```javascript
$setStyle("red", $jsBackgroundColor, firstElement);
```

Will be minified like this :

```javascript
var b = "backgroundColor";
a("red", b, c);
// Total : 35 characters.
```

Without use of constant :

```javascript
$setStyle("red", "backgroundColor", firstElement);
```

Will be minified like this :

```javascript
a("red", "backgroundColor", c);
// Total : 28 characters.
```

for one occurrence of \$jsBackgroundColor, that makes 35 characters with constant vs. 29 characters without constant. That's not so interesting.

_But with two occurrences..._

with use of constant :

```javascript
$setStyle("red", $jsBackgroundColor, firstElement);
$setStyle("green", $jsBackgroundColor, secondElement);
```

Will be minified like this :

```javascript
var b = "backgroundColor";
a("red", b, c);
a("red", b, d);
// Total : 47 characters.
```

Without use of constant :

```javascript
$setStyle("red", "backgroundColor", firstElement);
$setStyle("green", "backgroundColor", secondElement);
```

Will be minified like this :

```javascript
a("red", "backgroundColor", c);
a("red", "backgroundColor", d);
// Total : 56 characters.
```

For two occurrences of \$jsBackgroundColor, that make 47 characters with constant vs. 56 characters without constant. That becomes interesting. And that will become more and more interesting with more occurrences. (59 characters vs. 84 for three occurrences, 71 vs. 112 for four occurrences, ...).
