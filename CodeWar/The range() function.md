  >**The range() function**
  >Description

```
    Let's implement the range function:

    range([start], stop, [step])

    range(1, 11);
    => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    range(1, 4, 0); // /!\ note that the step is 0
    => [1, 1, 1]

    range(0);
    => []

    range(10, 0); // /!\ note that the end is before the start
    => []

    range(10);
    => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    range(0, 30, 5);
    => [0, 5, 10, 15, 20, 25]
    start, if omitted, defaults to 0; step defaults to 1.

    Returns a list of integers from start to stop, incremented (or decremented) by step, exclusive.

    Note that ranges that stop before they start are considered to be zero-length instead of negative.

```

  >Tags:

```
    FundamentalsRangesBasic Language FeaturesNumbersIntegers
```

----

  >Test Cases:

```
    Test.assertSimilar(range(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    Test.assertSimilar(range(1, 11), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    Test.assertSimilar(range(0, 30, 5), [0, 5, 10, 15, 20, 25]);
    Test.assertSimilar(range(1, 4, 0), [1, 1, 1]);
    Test.assertSimilar(range(0), []);
    Test.assertSimilar(range(10, 0), []);
```

----

  >**Best Practives**

```
    @Author: dangerhire8

    function range(start, end, step) {

      var result = [],
          a = arguments.length == 1 ? 0 : start,
          b = arguments.length == 1 ? start : end,
          c = step != void(0) ? step : 1;
      if( b < a ) return result;

      for (var i = a; (step == 0 ? result.length + a : i) < b; i = i + c) {
        result.push(i);
      }
      return result;
    }
```

----

  >**Normal Solution**

```
    @Author: dportzline83, abahrain

    function range(start, end, step) {
      if (start && end === undefined && step === undefined) {
        end = start;
        start = 0;
      }
      var increment = step === 0 || step ? step : 1;
      var result = [];
      for (var i = 0; i < end - start && (start + (i * increment)) < end; i++) {
        result.push(start + (i * increment));
      }
      return result;
    }
```

----

**My Solution**

```
    function range(start, end, step){
        var result = [];
        if (start == 0 && !end && !step) return result;
        if (typeof start == 'number') {
            if (typeof end == 'undefined') {
              end = start-1;
              start = 0;
            } else if (end == 0) {
                return result;
            } else end--;

            result[0] = start;

            if (step == 0) {
              for (var idx = 0; idx < end - start; idx++) {
                result[result.length] = start;
              }
              return result;
            }
            step = step || 1;
            while(start + step <= end) {
                result[result.length] = start += step;
            }
        } else {
            var str = 'abcdefghijklmnopqrstuvwxyz';
            if(start === start.toUpperCase()) {
                end = end.toUpperCase();
                str = str.toUpperCase();
            }
            str = str.substring(str.indexOf(start), str.indexOf(end)+ 1);
            result = str.split('');
        }

        return result;
    }
```
ref.via: [CodeWar][1]
[1]: http://www.codewars.com/kata/5298961d9ce954d77b0003a6/solutions/javascript
