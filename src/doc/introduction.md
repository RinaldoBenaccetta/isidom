### What is Isidomdom ?
The first goal of Isidom is to maximise minification of vanilla DOM manipulation.
Isidom should replace method, chained methods and values for optimisation of minification.
Isidom should stay simple and light. For lightweight, no errors should be thrown by Isidom, nor validation for input types.

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
// That makes 89 characters.
```

The same example with Isidom :
```javascript
let classes = [
    'myNewClass',
    'anotherClass',
    'andAgain'
    ]
isi.$addClass(classes, isi.$byID('myID'))

// Will be minified like this :

a(['myNewClass','anotherClass','andAgain'],b('myID'))
// That makes 53 characters.
```

Be carefull : the two functions (and their subfunctions) $addClass and $byId together use something like 450 characters (minified), so the example above would make about 500 characters. To be interesting in term of minification, theses function should be written at least 5 or 6 times. Note that subfunction are reused by all tools of Isidom. For small piece of code, Isidom not make sense, but with larger application, with several DOM manipulation, it can. By the way, Isidom stays simpler and shorter to write.