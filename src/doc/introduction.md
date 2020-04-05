The first goal of isi is to maximise minification of vanilla dom manipulation, and also ease of use.
Isi should replace method, chained methods and values for optimisation of minification.
Isi should stay simple and light. For lightweight, no errors should be throw by isi, nor validation for input types.

Example code with vanilla Javascript :
```javascript
let classes = [
    'myNewClass',
    'anotherClass',
    'andAgain'
    ]
elements.document.getElementById('myId').classList.add(...classes)

// Will be minified like this :

elements.document.getElementById('myId').classList.add(...['myNewClass','anotherClass','andAgain')
// That make 98 characters.
```

The same example with Isi :
```javascript
let classes = [
    'myNewClass',
    'anotherClass',
    'andAgain'
    ]
$addClass(classes, $byID('myID'))

// Will be minified like this :

a(['myNewClass','anotherClass','andAgain'],b('myID'))
// That make 53 characters.
```

But be care : the two functions (and there subfunction) $addClass and $byId together use something like 500 characters (minified), so the example above would make about 550 characters. To be interesting in term of minification, theses function should be written at least 5 or 6 times. For minification of small piece of code, Isi can not make sense, but with larger application, it can. By the way, Isi stay simpler and shorter to write.