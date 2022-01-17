/*
  1367 - Remove Index Signature
  -------
  by hiroya iizuka (@hiroyaiizuka) #medium

  ### Question

  Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

  For example:

  ```

  type Foo = {
    [key: string]: any;
    foo(): void;
  }

  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }

  ```

  > View on GitHub: https://tsch.js.org/1367
*/


/* _____________ Your Code Here _____________ */

type RemoveIndexSignature<Obj> = {
    [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key]
}


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'


type Foo = {
  [key: string]: unknown;
  foo(): void;
}


type Bar = {
  [key: number]: unknown;
  bar(): void;
}

type Baz = {
  bar(): void;
  baz: string
}


type cases = [
  Expect<Equal< RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal< RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal< RemoveIndexSignature<Baz>, { bar(): void, baz: string }>>
]
