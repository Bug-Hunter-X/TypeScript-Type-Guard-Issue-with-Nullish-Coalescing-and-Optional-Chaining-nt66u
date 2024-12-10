# TypeScript Type Guard Issue with Nullish Coalescing and Optional Chaining

This repository demonstrates a subtle bug in TypeScript's type handling related to nullish coalescing assignment and optional chaining within type guards.  The issue arises when a type guard attempts to check for null or undefined values in a variable that might be either a string or null.  The standard null check doesn't function as expected. 

The `bug.ts` file shows the problematic code, where the type guard unexpectedly throws a type error even when explicitly assigning null and the logic should handle it.

The solution, provided in `bugSolution.ts`, shows how to resolve the type error using a more robust null check that correctly manages the potential types.