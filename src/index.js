

import {
  $$true,
  $$false,
  $$null,
  $$_true,
  $$_false,
  $$_null,
  $$undefined
} from "./constants/common_values.js";

import $isUndefined from "./tools/is_undefined.js";

console.log("hello " + $$undefined);
console.log("true : " + $$_true);


let x = 2;
if (!$isUndefined(x)) {
  console.log('defined');
} else {
  console.log('undefined');
  
}
