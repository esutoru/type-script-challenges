/*
  4484 - IsTuple
  -------
  by jiangshan (@jiangshanmeta) #medium #tuple

  ### Question

  Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.

  For example:

  ```typescript
  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  ```

  > View on GitHub: https://tsch.js.org/4484
*/


/* _____________ Your Code Here _____________ */

// 7 extends number -> true
// number extends 7 -> false
// unknown[]['length'] extends number -> true
// [number]['length'] extends 1 -> true
type IsTuple<Arr> = Arr extends readonly unknown[] ? number extends Arr['length'] ? false : true : false

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1}>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
]
