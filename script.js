"use strict";
/*
async function sleep(millis) {
  const sleeper = await new Promise((resolve) =>
    setTimeout(() => {
      console.log(`${millis} millisecond passed`);
      resolve(millis);
    }, millis)
  );

  return sleeper;
}

console.log(sleep(200));

// console.log("Start");

const intervals = [
  [1, 3],
  [5, 6],
  [8, 10],
  [11, 13],
];

console.log(intervals.flat());

const minGroups = function (intervals) {
  const groups = new Map();
  let curIntArr;

  const checkOverlap = intervals.some((int, i, arr) => {
    curIntArr = arr.slice(i + 1).flat();

    for (const n of int) return curIntArr.includes(n);
  });

  console.log(checkOverlap);
  if (!checkOverlap)
    groups.set(`Group`, intervals.map((el) => JSON.stringify(el)).join(", "));
  else {
    let groupsNum = Math.round(intervals.length / 2);
    const interCopie = intervals.slice();
    let secInt;
    let secIntIndex;

    for (let i = 0; i < groupsNum; i++) {
      let firstInt = interCopie[0];
      secInt = interCopie.find((int, i) => {
        for (const num of int) {
          if (firstInt.includes(num)) return;
        }
        secIntIndex = i;
        return int;
      });
      console.log(`Loop ${i + 1}:::: ${interCopie}`);
      console.log(
        `Loop ${
          i + 1
        }:::: firtInt: ${firstInt},  secInt:${secInt},  secIntIndex: ${secIntIndex}`
      );

      if (secInt === undefined && interCopie.length !== 1) {
        firstInt = interCopie[0];
        interCopie.splice(0, 1);
        if (interCopie.length !== 0) groupsNum += interCopie.length;
      }
      groups.set(
        `Group ${i + 1}`,
        secInt
          ? [firstInt, secInt].map((el) => JSON.stringify(el)).join(", ")
          : [firstInt].map((el) => JSON.stringify(el)).join(", ")
      );

      if (secInt) {
        interCopie.splice(secIntIndex, 1);
        interCopie.splice(0, 1);
      }
    }
  }
  return groups;
};

const group = minGroups([
  [1, 3],
  [5, 6],
  [8, 10],
  [11, 13],
]);
console.log(group);

const groups = minGroups([
  [5, 10],
  [1, 5],
  [6, 8],
  [1, 10],
  [2, 3],
  [6, 7],
  [10, 5],
  [5, 3],
  [3, 10],
  [10, 3],
]);
console.log(groups);


const longestDiverseString = function (a, b, c) {
  let aStr = '';
  let bStr = '';
  let cStr = '';
  const aArr = [];
  const bArr = [];
  const cArr = [];
  const chars = ['a', 'b', 'c'];
  let strLength = a + b + c;
  let counter = strLength;
  const happyStr = [];
  for (let i = 0; i < strLength; i++) {
    counter--;
    const index = Math.floor(Math.random() * chars.length);
    if (chars[index] === 'a') {
      aArr.push(chars[index]);
      aStr += 'a';
      if (a !== 0 && aArr.length <= a && aStr.length < 3) {
        bStr = '';
        cStr = '';
        happyStr.push(chars[index]);
      }
    }

    if (chars[index] === 'b') {
      bArr.push(chars[index]);
      bStr += 'b';
      if (b !== 0 && bArr.length <= b && bStr.length < 3) {
        aStr = '';
        cStr = '';
        happyStr.push(chars[index]);
      }
    }

    if (chars[index] === 'c') {
      cArr.push(chars[index]);
      cStr += 'c';
      if (c !== 0 && cArr.length <= c && cStr.length < 3) {
        aStr = '';
        bStr = '';

        happyStr.push(chars[index]);
      }
    }
  }
  if (happyStr.length === 0) return '';
  else return happyStr.join('');
};

console.log(longestDiverseString(1, 1, 7));

////// Return the indice of the two numbers which their sum is the target  
const twoSum = function (nums, target) {
  const answer = [];
  
  for (let i = 0; i < nums.length; i++) {
    let slicer = i + 1;
    let curNumsArr = nums.slice(slicer);
    const curNums1 = nums[i];
    
    for (let j = 0; j < curNumsArr.length; j++) {
      const curNums2 = curNumsArr[j];
      
      if (target - curNums1 === curNums2) {
        answer.push(i);
        answer.push(j + slicer);
      }
    }
  }
  return answer;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

const addTwoNumbers = function (l1, l2) {
  let result = [0];
  let carry = 0;
  // while (l1 || l2) {
  //   if (l1) {
  //   }
  // }

  return result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// let node = new ListNode(0);
// console.log(node);



const lengthOfLongestSubstring = function (s) {
  let curRes = new Set();
  let l = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    while (curRes.has(s[i])) {
      curRes.delete(s[l]);
      l++;
    }

    curRes.add(s[i]);
    res = Math.max(res, i - l + 1);
  }

  return res;
};

console.log(lengthOfLongestSubstring('pwwke'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbb'));
console.log(lengthOfLongestSubstring('cdd'));
console.log(lengthOfLongestSubstring('cibklkd'));


// const countMaxOrSubsets = function (nums) {
//   const maxOr = nums.reduce((a, c) => a | c);
//   return maxOr;
// };

// console.log(2 | 1 | 5);

const kthLargestLevelSum = function (root, k) {
  if (!root) return -1;
  const result = [];
  let curLevel = [root];

  while (curLevel.length > 0) {
    let levelSum = 0;
    let l = curLevel.length;

    for (let n = 0; n < l; n++) {
      const curNode = curLevel.shift();
      levelSum += curNode.val;
      if (curNode.left) curLevel.push(curNode.left);
      if (curNode.right) curLevel.push(curNode.right);
    }

    result.push(levelSum);
  }
  if (k > result.length) return -1;
  result.sort((a, b) => b - a);
  return result[k - 1];
};

const root1 = {
  val: 5,
  left: {
    val: 8,
    left: { val: 2, left: { val: 4 }, right: { val: 6 } },
    right: { val: 1 },
  },
  right: { val: 9, left: { val: 3 }, right: { val: 7 } },
};

const root2 = {
  val: 1,
  left: { val: 2, left: { val: null, left: { val: 3 } } },
};
console.log(kthLargestLevelSum(root1, 2));
console.log(kthLargestLevelSum(root2, 1));


const maxUniqueSplit = function (s) {
  const uniqueStr = new Set();

  const checkMaxUniqueStr = function (start) {
    if (start === s.length) {
      console.log(uniqueStr);
      return uniqueStr.size;
    }
    let maxCount = 0;
    for (let i = start + 1; i <= s.length; i++) {
      const curStr = s.slice(start, i);
      if (!uniqueStr.has(curStr)) {
        uniqueStr.add(curStr);
        maxCount = Math.max(maxCount, checkMaxUniqueStr(i));
        uniqueStr.delete(curStr);
      }
    }
    return maxCount;
  };

  return checkMaxUniqueStr(0);
};

console.log(maxUniqueSplit('ababccc'));
console.log(maxUniqueSplit('aa'));
console.log(maxUniqueSplit('aba'));
console.log(maxUniqueSplit('wwwzfvedwfvhsww'));
console.log(maxUniqueSplit('addbsd'));
console.log(maxUniqueSplit('gpaccacseleac'));

 
///////////////
// Fliper
const root1 = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4 },
    right: { val: 5, left: { val: 7 }, right: { val: 8 } },
  },
  right: { val: 3, left: { val: 6 } },
};
const root2 = {
  val: 1,
  left: { val: 3, right: { val: 6 } },
  right: {
    val: 2,
    left: { val: 4 },
    right: { val: 5, left: { val: 8 }, right: { val: 7 } },
  },
};

const flipEquiv = function (root1, root2) {
  let res = false;
  const checkFlipEquiv = function (r1, r2 = root2) {
    if (r1 && !r1.left && !r1.right) return;
    if (r2 && !r2.left && !r2.right) return;
    let newR1 =
      r1 !== undefined ? r1 : { val: 0, left: { val: 0 }, right: { val: 0 } };
    let newR2 =
      r2 !== undefined ? r2 : { val: 0, left: { val: 0 }, right: { val: 0 } };
    const checkCurTree = function (t2, t1 = newR1) {
      if (t2 && !t2.left && !t2.right) return;
      const left1 = t1.left ? t1.left.val : 0;
      const right1 = t1.right ? t1.right.val : 0;
      const left2 = t2.left ? t2.left.val : 0;
      const right2 = t2.right ? t2.right.val : 0;
      console.log(t1, t2);
      if (t1.val === t2.val && left1 === right2 && right1 === left2) res = true;

      if (t2.left) checkCurTree(t2.left);
      if (t2.right) checkCurTree(t2.right);
    };
    checkCurTree(newR2);

    if (newR1.left) checkFlipEquiv(newR1.left);
    if (newR1.right) checkFlipEquiv(newR1.right);
  };
  checkFlipEquiv(root1);

  return res;
};
console.log(flipEquiv(root1, root2));
console.log(flipEquiv());
console.log(flipEquiv({}, { val: 1 }));


/////////////////////
// Max moves in a grid
const maxMoves = function (grid) {
  const dir = [-1, 0, 1];
  let memoized = new Array(grid.length).fill().map(r =>
    Array(grid[0].length)
      .fill()
      .map(c => -1)
  );

  console.log(memoized);
  let res = 0;

  const checkMoves = function (row, col, table, memoizedRes) {
    const curCell = table[row][col];

    if (memoized[row][col] !== -1) {
      console.log(curCell);
      return memoized[row][col];
    }
    let maxMoves = 0;
    for (const d of dir) {
      let nRow = row + d,
        ncol = col + 1;

      if (
        nRow >= 0 &&
        nRow < table.length &&
        ncol >= 0 &&
        ncol < table[0].length &&
        table[nRow][ncol] > curCell
      ) {
        console.log('New call');
        maxMoves = Math.max(
          maxMoves,
          checkMoves(nRow, ncol, table, memoizedRes) + 1
        );

        memoized[row][col] = maxMoves;
      }
    }

    return maxMoves;
  };

  for (let i = 0; i < grid.length; i++) {
    res = Math.max(res, checkMoves(i, 0, grid, memoized));
  }
  console.log(res);
  console.log(memoized);
  return res;
};

// console.log(0 + 1);
maxMoves([
  [2, 4, 3, 5],
  [5, 4, 9, 3],
  [3, 4, 2, 11],
  [10, 9, 13, 15],
]);

maxMoves([
  [3, 2, 4],
  [2, 1, 9],
  [1, 1, 7],
]);

const minimumMountainRemovals = function (nums) {
  const n = nums.length;
  let removed = [];
};

console.log(minimumMountainRemovals([1, 3, 1]));
console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]));
console.log(minimumMountainRemovals([4, 3, 2, 1, 1, 2, 3, 1]));
console.log(minimumMountainRemovals([1, 16, 84, 9, 29, 71, 86, 79, 72, 12]));
console.log(
  minimumMountainRemovals([23, 47, 63, 72, 81, 99, 88, 55, 21, 33, 32])
);

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.reduce((a, c) => {
//   console.log(a, c);
//   return Math.min(a, c);
// });
// // console.log(newArr);

// const minimumTotalDistance = function (robot, factory) {
//   robot.sort((a, b) => a - b);
//   factory.sort((a, b) => a[0] - b[0]);
//   const memoizer = new Set();
//   const factPos = [];
//   for (const f of factory) {
//     for (let i = 0; i < f[1]; i++) {
//       factPos.push(f[0]);
//     }
//   }
//   if (factPos.length < robot.length) return 1e12;
//   const resArr = [];
//   for (let j = 0; j < factory.length; j++) {
//     for (let i = 0; i < robot.length; i++) {
//       let curRes = 0;
//       const factQ = factory.slice(0);
//       const robQ = robot.slice(0);
//       factQ[j][1] = factQ[j][1] - 1;
//       const f = factQ[j][0];
//       const [r] = robQ.splice(i, 1);
//       let memo = `${r}${f}`;
//       if (!memoizer.has(memo)) {
//         memoizer.add(memo);
//         curRes += Math.abs(f - r);
//         const fqPos = [];
//         for (const f of factQ) {
//           for (let i = 0; i < f[1]; i++) {
//             fqPos.push(f[0]);
//           }
//         }

//         while (robQ.length !== 0 && fqPos.length) {
//           const rq = robQ.shift();
//           const fq = fqPos.shift();
//           let memo1 = `${rq}${fq}`;
//           if (!memoizer.has(memo1)) {
//             memoizer.add(memo1);
//             curRes += Math.abs(fq - rq);
//           }
//         }
//         resArr.push(curRes);
//         console.log(curRes);
//       }
//     }
//   }

//   console.log(memoizer, resArr);
//   return resArr.reduce((a, m) => Math.min(a, m));
// };

// console.log(
//   minimumTotalDistance(
//     [0, 4, 6],
//     [
//       [2, 2],
//       [6, 2],
//     ]
//   )
// );
// console.log(
//   minimumTotalDistance(
//     [1, -1],
//     [
//       [-2, 1],
//       [2, 1],
//     ]
//   )
// );
// console.log(
//   minimumTotalDistance(
//     [9, 11, 99, 101],
//     [
//       [10, 1],
//       [7, 1],
//       [14, 1],
//       [100, 1],
//       [96, 1],
//       [103, 1],
//     ]
//   )
// );

var minimumTotalDistance0 = function (robot, factory) {
  // Sort positions
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);

  const m = robot.length;
  const n = factory.length;

  // Create DP table
  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // Base case initialization
  for (let i = 0; i < m; i++) {
    dp[i][n] = Infinity;
  }

  // Process each factory from right to left
  for (let j = n - 1; j >= 0; j--) {
    let prefix = 0;
    const qq = [[m, 0]];

    // Process each robot from right to left
    for (let i = m - 1; i >= 0; i--) {
      // Add distance to current factory
      prefix += Math.abs(robot[i] - factory[j][0]);

      // Remove elements outside factory limit window
      if (qq[0][0] > i + factory[j][1]) {
        qq.shift();
      }

      // Maintain monotonic queue property
      while (qq.length && qq[qq.length - 1][1] >= dp[i][j + 1] - prefix) {
        qq.pop();
      }

      qq.push([i, dp[i][j + 1] - prefix]);
      dp[i][j] = qq[0][1] + prefix;
    }
  }
  console.log(dp);
  return dp[0][0];
};
console.log(
  minimumTotalDistance0(
    [9, 11, 99, 101],
    [
      [10, 1],
      [7, 1],
      [14, 1],
      [100, 1],
      [96, 1],
      [103, 1],
    ]
  )
);


const isCircularSentence = function (sentence) {
  let lastChar = sentence[sentence.length - 1];
  const strArr = sentence.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    if (i === 0 && strArr[i][0] !== lastChar) return false;
    console.log(strArr);
    lastChar = strArr[i][strArr[i].length - 1];
    const nextFirstChar = strArr[i + 1] && strArr[i + 1][0];
    if (nextFirstChar && lastChar !== nextFirstChar) return false;
  }
  return true;
};

console.log(isCircularSentence('leetcode is cool'));
console.log(isCircularSentence('leetcode exercises sound delightful'));

console.log(isCircularSentence('eetcode'));
// console.log('L' == 'L');


const compressedString = function (word) {
  let comp = '';
  let startI = 0;
  while (startI < word.length) {
    let curChar = word[startI];
    let count = 1;
    while (word[++startI] === curChar && count !== 9) {
      count++;
    }
    comp += `${count}${curChar}`;
  }
  console.log(comp);
  return comp;
};

compressedString('aaaaaaaaaaaaaabb');
compressedString('abcde');
compressedString('mrm');


const minChanges = function (s) {
  let min = 0;
  let startI = 0;

  // # Option 1
  while (startI < s.length) {
    let curChar = s[startI];
    let count = 1;

    while (s[++startI] === curChar) {
      count++;
    }
    min += count % 2 === 0 ? 0 : 1;
    startI += count % 2 === 0 ? 0 : 1;
  } // # Option2
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === curChar) {
  //     count++;
  //     continue;
  //   }
  //   if (count % 2 === 0) {
  //     count = 1;
  //   } else {
  //     min++;
  //     count = 0;
  //   }
  //   curChar = s[i];
  // }
  return min;
};
console.log(minChanges('1001'));
console.log(minChanges('0001110001'));
console.log(minChanges('0000'));
console.log(minChanges('10'));


const balancedStringSplit = function (s) {
  let max = 0;
  let startI = 0;
  while (startI < s.length) {
    let countR = s[startI] === 'R' ? 1 : 0;
    let countL = s[startI] === 'L' ? 1 : 0;
    while (countR !== countL) {
      startI++;
      countR += s[startI] === 'R' ? 1 : 0;
      countL += s[startI] === 'L' ? 1 : 0;
    }
    max++;
    startI++;
  }
  return max;
};
console.log(balancedStringSplit('RLRRLLRLRL'));
console.log(balancedStringSplit('RLRRRLLRLL'));
console.log(balancedStringSplit('LLLLRRRR'));


const rotateString = function (s, goal) {
  let curStr = s;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    curStr = curStr.slice(1) + char;
    console.log(curStr);
    if (curStr === goal) return true;
  }
  return false;
};

console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));

// const frequencySort = function (s) {
//   const memo = new Set();
//   for (const str of s) {
//     memo.add(str);
//   }
//   const chars = Array.from(memo);
//   const sortArr = [];
//   const res = [];

//   for (const str of chars) {
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//       count += s[i] === str ? 1 : 0;
//     }
//     sortArr.push([count, str]);
//   }
//   sortArr.sort((a, b) => b[0] - a[0]);

//   for (const arr of sortArr) {
//     for (let i = 0; i < arr[0]; i++) {
//       res.push(arr[1]);
//     }
//   }
//   console.log(res);
//   return res.join('');
// };

// console.log(frequencySort('tree'));
// console.log(frequencySort('cccaaa'));
// console.log(frequencySort('Aabb'));

const frequencySort = function (s) {
  const memo = new Map();
  for (let i = 0; i < s.length; i++) {
    if (memo.has(s[i])) {
      const count = memo.get(s[i]) + 1;
      memo.set(s[i], count);
    } else memo.set(s[i], 1);
  }
  const chars = Array.from(memo);
  const res = [];
  chars.sort((a, b) => b[1] - a[1]);
  for (const char of chars) {
    for (let i = 0; i < char[1]; i++) {
      res.push(char[0]);
    }
  }

  console.log(res);
  return res.join('');
};

console.log(frequencySort('tree'));
console.log(frequencySort('cccaaa'));
console.log(frequencySort('Aabb'));
*/

const navLinks = document.querySelector(".nav__links");
const navItems = document.querySelectorAll(".nav__item");
const bars = document.querySelectorAll(".bar");
const slider = document.querySelector(".services_slide-show");
const img = document.querySelector(".services_slide-show").querySelector("img");

navLinks.addEventListener("click", function (e) {
  const navItem = e.target.closest(".nav__item");
  if (!navItem) return;
  bars.forEach((bar) => bar.classList.remove("bar_active"));
  navItems.forEach((nav) => nav.classList.remove("nav__item-active"));
  const bar = navItem.lastElementChild;
  bar.classList.add("bar_active");
  navItem.classList.add("nav__item-active");
});

const totalImg = 13;

const timeout = 10; // in seconds
let curImgIndex = 1;

const imageSlider = function (imgIndex) {
  slider.innerHTML = "";
  const image = `  <img src="imgs/services-img/img${imgIndex}.jpg" />`;
  slider.insertAdjacentHTML("beforeend", image);
};

setInterval(function () {
  img.computedStyleMap.transform = "translateX(300%)";
  curImgIndex = curImgIndex === totalImg ? 1 : ++curImgIndex;
  console.log(curImgIndex);
  imageSlider(curImgIndex);
}, timeout * 1000);

console.log("New site");
