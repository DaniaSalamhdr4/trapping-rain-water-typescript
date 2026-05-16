# trapping-rain-water-typescript

TypeScript solution for the classic Trapping Rain Water problem using optimized problem-solving approaches.

## Repository Description

This project demonstrates how to calculate the total amount of rainwater trapped between bars of different heights after raining.
The solution is optimized for performance with:

- Linear time complexity `O(n)`
- Constant space complexity `O(1)`
- Clean and readable TypeScript implementation

---

# Problem Overview

Given an array of non-negative integers:

```ts
height[i];
```

Each element represents the height of a vertical bar with width `1`.  
The goal is to calculate how much rainwater can be trapped between these bars after raining.

## Example

```ts
Input: [4, 2, 0, 3, 2, 5];

Output: 9;
```

# Algorithm Used

## Two Pointers Technique

Instead of using extra arrays to store maximum heights, this solution uses:

- Left pointer
- Right pointer
- Left maximum boundary
- Right maximum boundary  
  This allows solving the problem efficiently with constant memory usage.

# Solution Explanation

### Step 1 — Initialize Pointers

Two pointers are created:

- `left` → starts from the beginning
- `right` → starts from the end  
  We also track:
- `leftMax`
- `rightMax`

### Step 2 — Compare Heights

At every iteration:

- If the left bar is smaller:
  - Update `leftMax`
  - Calculate trapped water on the left side  
    Otherwise:

- Update `rightMax`
- Calculate trapped water on the right side

### Step 3 — Accumulate Water

The trapped water at any position equals:

```text
currentMaxHeight - currentHeight
```

The result is accumulated in:

```ts
result;
```

# How to Run

1. Install TypeScript

```bash
npm install -g typescript
```

2. Compile the File

```bash
tsc trappingRainWater.ts
```

3. Run the Program

```bash
node trappingRainWater.js
```

# Author:

- **Dania Salama** - [DaniaSalamadr4](https://github.com/DaniaSalamhdr4)
