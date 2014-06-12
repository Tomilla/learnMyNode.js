  >**Simple elevator**

  >Description:

```
    There is a house with 4 levels. In that house there is an elevator.
    You can program this elevator to go up or down, depending on what \
    button the user touches inside the elevator.

    levels can be only numbers: 0,1,2,3 buttons can be strings: '0','1'
    ,'2','3' possible return values are numbers: -3,-2,-1,0,1,2,3

    If the elevator is on the ground floor(0th level) and the user \
    touches button '2' the elevator must go 2 levels up,
    so our function must return 2.

    If the elevator is on the 3rd level and the user touches button '0'\
    the elevator must go 3 levels down, so our function must return -3.

    If the elevator is on the 2nd level, and the user touches button \
    '2' the elevator must remain on the same level, so we return 0.

    We cannot endanger the lives of our passengers, so if we get \
    erronous inputs, our elevator must remain on the same level. So for\
    example goto(2,'4') must return 0, because there is no button '4' \
    in the elevator. goto(4,'0') must return 0, because there is no \
    level 4. goto(3,undefined) must return 0. goto(undefined,'2') must \
    return 0. goto([],'2') must return 0 because the type of the input \
    level is array instead of a number. goto(3,{}) must return 0 \
    because the type of the input button is object instead of a number.
```

  >Tags:

```
    *Fundamentals* *State Machines* *Computational Science*
    *Theoretical Computer Science* *Design Patterns*
```
  >**Test Cases:**

```
    Test.assertEquals(goto(0,'0'),0);
    Test.assertEquals(goto(0,'1'),1);
    Test.assertEquals(goto(0,'2'),2);
    Test.assertEquals(goto(0,'3'),3);

    Test.assertEquals(goto(1,'0'),-1);
    Test.assertEquals(goto(1,'1'),0);
    Test.assertEquals(goto(1,'2'),1);
    Test.assertEquals(goto(1,'3'),2);

    Test.assertEquals(goto(2,'0'),-2);
    Test.assertEquals(goto(2,'1'),-1);
    Test.assertEquals(goto(2,'2'),0);
    Test.assertEquals(goto(2,'3'),1);

    Test.assertEquals(goto(3,'0'),-3);
    Test.assertEquals(goto(3,'1'),-2);
    Test.assertEquals(goto(3,'2'),-1);
    Test.assertEquals(goto(3,'3'),0);

    console.log('dangerous inputs')
    Test.assertEquals(goto(0,'4'),0);
    Test.assertEquals(goto(0,undefined),0);
    Test.assertEquals(goto(1,'4'),0);
    Test.assertEquals(goto(1,undefined),0);
    Test.assertEquals(goto(2,'4'),0);
    Test.assertEquals(goto(2,undefined),0);
    Test.assertEquals(goto(3,'4'),0);
    Test.assertEquals(goto(3,undefined),0);
    Test.assertEquals(goto(4,'2'),0);
    Test.assertEquals(goto(undefined,'2'),0);
    Test.assertEquals(goto([],'2'),0);
    Test.assertEquals(goto(3,{}),0);
```
>**Best Practives && Clever Solution**

```
>Author: kontrach, Pianist, Andrei11, iphp

    function goto(level,button){
      return level in [0,1,2,3] && button in [0,1,2,3] ? button - level : 0
    }
```

**My Solution**

```
    function goto(level,button){
      // TODO:return a number, how much levels the elevator must go up
      // or down
      console.log("#L:\t ", level, "#B:\t ", button);
      if (button > 3 || button == undefined) return 0;
      var num_btn = parseInt(button);
      switch (level) {
        case 0:
          return num_btn;
          break;
        case 1:
        case 2:
        case 3:
          if (num_btn < level) {
            return -(level-num_btn);
          } else if (num_btn > level) {
            return num_btn - level;
          } else return 0;
          break;
        default:
          return 0;
          break;
      }
    }
```

ref.via: [CodeWar][1]
[1]:(http://www.codewars.com/kata/52ed326b8df6540e06000029/solutions/javascript)
