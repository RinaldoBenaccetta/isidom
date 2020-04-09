### Use with Isidom file

Download *dist/Isidom.js* from GitHub and put it in a vendor path ( or a path of your choice ) and import it in your app like this :

```javascript
import * as isi from './path/to/isidom.js'
```

And use it in your code like that :

```javascript
console.log( isi.$cssAlignContent )
// That will print align-content in console.

// or also :

isi.$addClass( 'myClass', isi.$byId( 'myId' ))
// That will add the class 'myClass' to the element with the ID 'myId'.
```


### Use with NPM

install :

```
npm install isidom
```

Then import Isidom in your entry point :

```javascript
import * as isi from 'isidom'
```
And use it in your code like that :

```javascript
console.log( isi.$cssAlignContent )
// That will print align-content in console.

// or also :

isi.$addClass( 'myClass', isi.$byId( 'myId' ))
// That will add the class 'myClass' to the element with the ID 'myId'.
```


### Bundle with Rollup
This will bundle your app with only needed Isidom functions.

First install these dependencies :
  - rollup
  - @rollup/plugin-commonjs
  - @rollup/plugin-node-resolve

Create a *rollup.config.js* file with this content :

```javascript
// This allows to import node-modules in the bundle.
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'index.js', // your entry point.
  output: {
    file: 'dist/index.js', // The bundled file.
    format: 'iife', // This wraps the code.
    //format: 'esm', // This doesn't wrap the code.
    name: 'MyModule'
  },
  plugins: [resolve(), commonjs()]
}
```

Then add a build script in your *package.json* :
```javascript
"build": "npx rollup --config"
```

And run your build script.

### Minify
Here is a Terser config that mangle names of constants and functions :

```javascript
{
    "ecma": 5,
    "keep_classnames": false,
    "keep_fnames": false,
    "ie8": false,
    "module": false,
    "nameCache": null,
    "safari10": false,
    "toplevel": true,
    "warnings": false
}
```

