/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object

  ### Question

  Get an `Object` that is the difference between `O` & `O1`

  > View on GitHub: https://tsch.js.org/645
*/


/* _____________ Your Code Here _____________ */
type Diff<O, O1> = {
  [K in keyof O | keyof O1 as Exclude<K, keyof O & keyof O1>]:
    K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar,Foo>, { gender: number }>>
]
