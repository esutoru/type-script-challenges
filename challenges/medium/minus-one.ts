/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/


/* _____________ Your Code Here _____________ */

// Support numbers between 1...999
// type BuildTuple<L extends number, T extends unknown[] = []> =
//     T extends { length: L } ? T : BuildTuple<L, [...T, unknown]>;

// type MinusOne<T extends number> = BuildTuple<T> extends [unknown, ...infer R] ? R['length'] : never

// Support numbers between 1...9999
type DigitToArray = {
  "0": [],
  "1": [unknown],
  "2": [unknown, unknown],
  "3": [unknown, unknown, unknown],
  "4": [unknown, unknown, unknown, unknown],
  "5": [unknown, unknown, unknown, unknown, unknown],
  "6": [unknown, unknown, unknown, unknown, unknown, unknown],
  "7": [unknown, unknown, unknown, unknown, unknown, unknown, unknown],
  "8": [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown],
  "9": [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
};

type CreateArrayByLength<N extends string, Arr extends unknown[] = []> = N extends `${infer First}${infer Rest}`
  ? First extends keyof DigitToArray
    ? CreateArrayByLength<Rest, [...Arr, ...Arr, ...Arr, ...Arr, ...Arr, ...Arr, ...Arr, ...Arr, ...Arr, ...Arr, ...DigitToArray[First]]>
    : never
  : Arr

type MinusOne<Num extends number> = CreateArrayByLength<`${Num}`> extends [unknown, ...infer Rest] ? Rest["length"] : never


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]
