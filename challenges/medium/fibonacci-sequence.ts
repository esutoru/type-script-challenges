/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium

  ### Question

  Implement a generic Fibonacci\<T\> takes an number T and returns it's corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > View on GitHub: https://tsch.js.org/4182
*/


/* _____________ Your Code Here _____________ */

type Fibonacci<
  Num extends number,
  Arr1 extends unknown[] = [],
  Arr2 extends unknown[] = [unknown],
  Acc extends unknown[] = [unknown, unknown]
> =
  Num extends 0 | 1
    ? Num
    : Acc["length"] extends Num
      ? [...Arr1, ...Arr2]["length"]
      : Fibonacci<Num, Arr2, [...Arr1, ...Arr2], [...Acc, unknown]>

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]
