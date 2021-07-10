// 653. Two Sum IV - Input is a BST

// Given a Binary Search Tree and a target number, return true if there exist two
// elements in the BST such that their sum is equal to the given target.

// Example 1:

// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 9

// Output: True

// Example 2:

// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 28

// Output: False


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 const findTarget = function(root, k) 
 {
     var arr=[], myMap=new Map();
     
     function inOrder(root)
     {
         if(!root)
             return;
         inOrder(root.left);
         arr.push(root.val);
         inOrder(root.right);
     }
     inOrder(root);
     function twoSum(arr)
     {
         for(var i=0; i<arr.length; i++)
         {
             const anotherNum=k-arr[i];
             if(myMap.has(anotherNum))
             {
                 return true;
             }
             myMap.set(arr[i],i)
         }
     return false;
     }
     return twoSum(arr);
 };
 
