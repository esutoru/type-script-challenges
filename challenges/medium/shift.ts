/*
  3062 - Shift
  -------
  by jiangshan (@jiangshanmeta) #medium #array

  ### Question

  Implement the type version of ```Array.shift```

  For example

  ```typescript
  type Result = Shift<[3, 2, 1]> // [2, 1]
  ```

  > View on GitHub: https://tsch.js.org/3062
*/


/* _____________ Your Code Here _____________ */

type Shift<Arr> = Arr extends [unknown, ...infer Rest] ? Rest : never


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd', ]>, ['b', 'c', 'd']>>,
]
