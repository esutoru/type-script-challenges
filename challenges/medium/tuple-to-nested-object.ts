/*
  3188 - Tuple to Nested Object
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Given a tuple type ```T``` that only contains string type, and a type ```U```, build an object recursively.

  ```typescript
  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
  ```

  > View on GitHub: https://tsch.js.org/3188
*/


/* _____________ Your Code Here _____________ */

type TupleToNestedObject<Arr, Type> = Arr extends [infer First, ...infer Rest]
  ? Record<First & string, TupleToNestedObject<Rest, Type>>
  : Type

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, {a: string}>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, {a: {b: number}}>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, {a: {b: {c: boolean}}}>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]
