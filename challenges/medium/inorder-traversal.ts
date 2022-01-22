/*
  3376 - InorderTraversal
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement the type version of binary tree inorder traversal.

  For example:

  ```typescript
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const

  type A = InorderTraversal<typeof tree1> // [1, 3, 2]
  ```

  > View on GitHub: https://tsch.js.org/3376
*/


/* _____________ Your Code Here _____________ */

interface ITreeNode {
  val: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
}

// Need tree node copy to fix ts 2589/2590 errors
type InorderTraversal<TreeNode extends ITreeNode | null, TreeNodeCopy extends ITreeNode = NonNullable<TreeNode>> = TreeNode extends ITreeNode
  ? [...InorderTraversal<TreeNodeCopy['left']>, TreeNodeCopy['val'], ...InorderTraversal<TreeNodeCopy['right']>]
  : []

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null
  }
} as const

type cases = [
  Expect<Equal<InorderTraversal<null>, []>>,
  Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
  Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
  Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
  Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
]
