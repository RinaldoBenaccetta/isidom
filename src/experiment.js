

// first import isi library
import * as isi from '../dist/isi'

// then use it!
// eslint-disable-next-line no-undef
console.log($null) // rollup don't define $null : $null haven't been imported
console.log(isi.$false) // rollup will define $$false : $null have been imported

// rollup don't define $foo : $foo haven't been exported by index.js
// console.log(test.$foo);

const x = 2
if (!isi.$isUndefined(x)) {
  // rollup will output : if (!$isUndefined(x)) {
  // wich will can be minified like tike this : if(y(x)){
  console.log('defined')
} else {
  console.log('undefined')
}
