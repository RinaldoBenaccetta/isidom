/**
 * importation and use model.
 */

//first import isi library
import * as isi from "./index.js";

// then use it!
console.log($$null);// rollup don't define $$null : $$null haven't been imported
console.log(isi.$$false);// rollup will define $$false : $$null have been imported
//console.log(test.$$foo);// rollup don't define $$foo : $$foo haven't been exported by index.js

let x = 2;
if (!isi.$isUndefined(x)) {// rollup will output : if (!$isUndefined(x)) {
    console.log("defined");
} else {
  console.log('undefined');
  
}