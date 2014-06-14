  >**Multiplication table**

  >Description:

```
    Your task, is to create NxN multiplication table, of size provided \
    in parameter.

    for example, when given size is 3:

      1 2 3
      2 4 6
      3 6 9

    for given example, the return value should be:

      [[1,2,3],[2,4,6],[3,6,9]]

```
  >Tags:

```
  *Fundamentals* *Arithmetic* *Mathematics* *Algorithms*
  *Numbers* *Arrays*
```

  >**Test Cases:**

```
    multiplicationTable_good = function(size) {
      var c, out, r, row, _i, _j;
      out = [];
      for (r = _i = 1; 1 <= size ? _i <= size : _i >= size; r = 1 <= size ? ++_i : --_i) {
        row = [];
        for (c = _j = 1; 1 <= size ? _j <= size : _j >= size; c = 1 <= size ? ++_j : --_j) {
          row.push(c * r);
        }
        out.push(row);
      }
      return out;
    };

    Test.assertSimilar(multiplicationTable(1), multiplicationTable_good(1))
    Test.assertSimilar(multiplicationTable(3), multiplicationTable_good(3))
    Test.assertSimilar(multiplicationTable(5), multiplicationTable_good(5))
    Test.assertSimilar(multiplicationTable(20), multiplicationTable_good(20))
```

>**Best Practives && Clever Solution**

```
>Author: malyshevalex

    multiplicationTable = function(size) {

      return Array.apply(null, new Array(size)).map(function(val, i) {
        return Array.apply(null, new Array(size)).map(function(val, j) {
          return (i+1) * (j+1);
        });
      });
    }
```

**My Solution**

```
    multiplicationTable = function(size) {
      var result = [];
      for (var idx_m = 1; idx_m <= size; idx_m++) {
        result.push(elemIncrease(idx_m, size));
      }
      return result;
    }

    function elemIncrease(incrNum, sizeNum) {
      var ret = []
        , sum = 0;
      for (var i = 0; i < sizeNum; i++) {
        sum += incrNum;
        ret.push(sum);
      }
      return ret;
    }
```

ref.via: [CodeWar][1]
[1]:(http://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/solutions/javascript)
