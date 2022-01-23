/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/


/* _____________ Your Code Here _____________ */

type GreaterThan<Num1 extends number, Num2 extends number, Acc extends unknown[] = []> =
  Acc['length'] extends Num1
    ? false
    : Acc['length'] extends Num2
      ? true
      : GreaterThan<Num1, Num2, [unknown, ...Acc]>

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>
]
