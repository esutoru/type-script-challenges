/*
  110 - Capitalize
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.

  For example

  ```ts
  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
  ```

  > View on GitHub: https://tsch.js.org/110
*/


/* _____________ Your Code Here _____________ */

// 1 solution: Use uppercase map
// interface UppercaseMap {
//   a: 'A';
//   b: 'B';
//   c: 'C';
//   d: 'D';
//   e: 'E';
//   f: 'F';
//   g: 'G';
//   h: 'H';
//   i: 'I';
//   j: 'J';
//   k: 'K';
//   l: 'L';
//   m: 'M';
//   n: 'N';
//   o: 'O';
//   p: 'P';
//   q: 'Q';
//   r: 'R';
//   s: 'S';
//   t: 'T';
//   u: 'U';
//   v: 'V';
//   w: 'W';
//   x: 'X';
//   y: 'Y';
//   z: 'Z';
// }

// type Capitalize<S extends string> = S extends `${infer F}${infer R}` ? F extends keyof UppercaseMap ? `${UppercaseMap[F]}${R}` : `${F}${R}` : S

// 2 solution: Use Uppercase
type Capitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S

// 3 solution: intrinsic :)
// type Capitalize<S extends string> = intrinsic


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Capitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<Capitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<Capitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capitalize<''>, ''>>,
  Expect<Equal<Capitalize<'a'>, 'A'>>,
  Expect<Equal<Capitalize<'b'>, 'B'>>,
  Expect<Equal<Capitalize<'c'>, 'C'>>,
  Expect<Equal<Capitalize<'d'>, 'D'>>,
  Expect<Equal<Capitalize<'e'>, 'E'>>,
  Expect<Equal<Capitalize<'f'>, 'F'>>,
  Expect<Equal<Capitalize<'g'>, 'G'>>,
  Expect<Equal<Capitalize<'h'>, 'H'>>,
  Expect<Equal<Capitalize<'i'>, 'I'>>,
  Expect<Equal<Capitalize<'j'>, 'J'>>,
  Expect<Equal<Capitalize<'k'>, 'K'>>,
  Expect<Equal<Capitalize<'l'>, 'L'>>,
  Expect<Equal<Capitalize<'m'>, 'M'>>,
  Expect<Equal<Capitalize<'n'>, 'N'>>,
  Expect<Equal<Capitalize<'o'>, 'O'>>,
  Expect<Equal<Capitalize<'p'>, 'P'>>,
  Expect<Equal<Capitalize<'q'>, 'Q'>>,
  Expect<Equal<Capitalize<'r'>, 'R'>>,
  Expect<Equal<Capitalize<'s'>, 'S'>>,
  Expect<Equal<Capitalize<'t'>, 'T'>>,
  Expect<Equal<Capitalize<'u'>, 'U'>>,
  Expect<Equal<Capitalize<'v'>, 'V'>>,
  Expect<Equal<Capitalize<'w'>, 'W'>>,
  Expect<Equal<Capitalize<'x'>, 'X'>>,
  Expect<Equal<Capitalize<'y'>, 'Y'>>,
  Expect<Equal<Capitalize<'z'>, 'Z'>>,
]
