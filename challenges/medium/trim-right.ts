/*
  4803 - Trim Right
  -------
  by Yugang Cao (@Talljack) #medium

  ### Question

  Implement `TrimRight<T>` which takes an exact string type and returns a new string with the whitespace ending removed.

  For example:

  ```ts
  type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
  ```

  > View on GitHub: https://tsch.js.org/4803
*/


/* _____________ Your Code Here _____________ */

type TrimRight<Str extends string> = Str extends `${infer SubStr}${' ' | '\n\t'}` ? TrimRight<SubStr> : Str


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
]
