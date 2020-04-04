Use theses constants only if they are used more than one time in code.
E.G. :

with use of constant :

    $setStyle('red', $jsBackgroundColor, firstElement)

Will be minified like this :

    var b='backgroundColor'
    a('red',b,c)
    // 35 characters.

Without use of constant :

    $setStyle('red', 'backgroundColor', firstElement)

Will be minified like this :

    a('red','backgroundColor',c)
    // 29 characters.

for one occurence of $jsBackgroundColor, that make 35 characters with constant VS 29 characters without constant. That's not so interresting.

But with two occurences...

with use of constant :

    $setStyle('red', $jsBackgroundColor, firstElement)
    $setStyle('green', $jsBackgroundColor, secondElement)

Will be minified like this :

    var b='backgroundColor'
    a('red',b,c)
    a('red',b,d)
    // 47 characters.
 Without use of constant :

    $setStyle('red', 'backgroundColor', firstElement)
    $setStyle('green', 'backgroundColor', secondElement)

Will be minified like this :

    a('red','backgroundColor',c)
    a('red','backgroundColor',d)
    // 56 characters.

For two occurences of $jsBackgroundColor, that make 47 characters with constant VS 56 characters without constant. That become interesting. And that will become and more interesting with more occurences. (59 characters VS 84 for three occurences, 71 VS 112 for four occurences, ...).

