## What is Isi ?
Isi is a browser side Javascript library, for helping to easily and intuitively manipulate the DOM with minification efficiency of bundled apps.



The first goal of isi is to maximise minification of vanilla DOM manipulation, and also ease of use.
Isi should replace method, chained methods and values for optimisation of minification.
Isi should stay simple and light. For lightweight, no errors should be thrown by isi, nor validation for input types.

Example code with vanilla Javascript :
```javascript
let classes = [
    'myNewClass',
    'anotherClass',
    'andAgain'
    ]
document.getElementById('myId').classList.add(...classes)

// Will be minified like this :

document.getElementById('myId').classList.add(...['myNewClass','anotherClass','andAgain')
// That make 89 characters.
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

Be carefull care : the two functions (and their subfunctions) $addClass and $byId together use something like 450 characters (minified), so the example above would make about 500 characters. To be interesting in term of minification, theses function should be written at least 5 or 6 times. Note that subfunction are reused by all tools of Isi. For small piece of code, Isi not make sense, but with larger application, with several DOM manipulation, it can. By the way, Isi stays simpler and shorter to write.