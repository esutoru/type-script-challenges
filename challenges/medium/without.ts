/*
  5117 - Without
  -------
  by Pineapple (@Pineapple0919) #medium #union #array

  ### Question

  Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.

  ```ts
  type Res = Without<[1, 2], 1>; // expected to be [2]
  type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
  type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
  ```

  > View on GitHub: https://tsch.js.org/5117
*/


/* _____________ Your Code Here _____________ */

type toUnion<T> = T extends unknown[] ? T[number] : T

type Without<Arr extends unknown[], Element> =
  Arr extends [infer First, ...infer Rest]
    ? First extends toUnion<Element>
      ? Without<Rest, Element>
      : [First, ...Without<Rest, Element>]
    : []

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]
