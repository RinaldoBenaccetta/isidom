Use theses constants only if they are used more than one time in code.
E.G. :

with use of constant :

```javascript
$setStyle('red', $jsBackgroundColor, firstElement)
```

Will be minified like this :

```javascript
var b='backgroundColor'
a('red',b,c)
// Total : 35 characters.
```

Without use of constant :

```javascript
$setStyle('red', 'backgroundColor', firstElement)
```
    
Will be minified like this :

```javascript
a('red','backgroundColor',c)
// Total : 28 characters.
```

for one occurence of $jsBackgroundColor, that make 35 characters with constant V.S. 29 characters without constant. That's not so interresting.

*But with two occurences...*

with use of constant :

```javascript
$setStyle('red', $jsBackgroundColor, firstElement)
$setStyle('green', $jsBackgroundColor, secondElement)
```

Will be minified like this :

```javascript
var b='backgroundColor'
a('red',b,c)
a('red',b,d)
// Total : 47 characters.
```
    
 Without use of constant :

```javascript
$setStyle('red', 'backgroundColor', firstElement)
$setStyle('green', 'backgroundColor', secondElement)
```
    
Will be minified like this :

```javascript
a('red','backgroundColor',c)
a('red','backgroundColor',d)
// Total : 56 characters.
```
    
For two occurences of $jsBackgroundColor, that make 47 characters with constant V.S. 56 characters without constant. That become interesting. And that will become more and more interesting with more occurences. (59 characters V.S. 84 for three occurences, 71 V.S. 112 for four occurences, ...).

