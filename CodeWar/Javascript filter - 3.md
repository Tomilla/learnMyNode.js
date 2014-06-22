  >**Java-Script filter -3**

===

  >Description:

```
    Your friend saw the great work you did with keeping your user-names
    at bay in

    http://www.codewars.com/dojo/katas/525d9b1a037b7a9da7000905

    now he'd like you to do (nearly) the same thing for his website,
    but as always, the devil is in the details.

    He has troubles with users ending or starting in a ".", and his user
    -array is a flat array of user-email-pairs, like so:

    [ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]

    He is only interested in e-mailing the users and ask them to sign
    up again, so no need to keep the user-name, only e-mail addresses
    for the user-names that start or end with a "." should be returned.
    For the above array, the correct return-array would be

    ["food@bar.com" ]

    You have to use the filter-method of Javascript, which returns each
    element of the array for which the filter-method returns true.
    The second argument gives the index you're looking at and the third
    argument is the array itself:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
```

    >Tags:

```
    *Fundamentals
    *Regular Expressions
    *Declarative Programming
    *Advanced Language Features
    *Strings
    *Arrays
```

---

Test Cases:

```
    describe( "Testing basic functionality", function(){
    it( "searchNames exists?", function(){
        Test.assertEquals( typeof( searchNames ), "function",
        "oups, searchNames is not a function" );
    } );
    it( "Should handle empty input", function(){
        Test.assertSimilar( searchNames( [] ), [], "nope" );
    } );
    it( "Should use filter-method", function(){
        var a = [ "foo", "foo@foo.com", "bar.", "bar@bar.com" ];
        searchNames( a );
        Test.assertEquals( Array.prototype.filter_used, true, "Try with filter-method" );
    } );
    } );

    describe( "Testing some lists", function(){
    it( "Basic list", function(){
        var a = [ "foo", "foo@foo.com", "bar.", "bar@bar.com" ],
        b = [ "bar@bar.com" ];
        Test.assertSimilar( searchNames( a ), b,
        "not correct " + Test.inspect(a) + " given" );
    } );
    it( "Longer list", function(){
        var a = [ "foo", "foo@foo.com", "bar.", "bar@bar.com",
        "foobar", "hello@dot.com", ".barfoo", "barfoo@t.com" ],
        b = [ "bar@bar.com", "barfoo@t.com"];
        Test.assertSimilar( searchNames( a ), b,
        "not correct " + Test.inspect(a) + " given" );
    } );
    it( "mixed dots", function(){
        var a = [ "f.o.o", "foo@foo.com", "bar.", "bar@bar.com",
        ".b.a.r", "foobar@fb.com", ".b.a.r.f.o.o.t.", "bar_foo@fb.com" ],
        b = [ "bar@bar.com", "foobar@fb.com",
        "bar_foo@fb.com"];
        Test.assertSimilar( searchNames( a ), b,
        "not correct with " + Test.inspect(a) + " given" );
    } );
    } );
```

---

  >**Clever Practices**

```
    @Author: johnsoe

    function searchNames(logins) {
      return logins.filter(function (el, index, arr) {
        return index % 2 === 1 && arr[index - 1].match(/^\.|\.$/);
      });
    }
```

  >**Normal Solution**

```
    @Author: muecke.jo

    function searchNames(logins) {
      return logins.filter( function(value, index, array) {
        return isEmail(value) ? isTroubleUsername(array[index - 1]) : false;
      });
    }

    function isEmail(value) {
      return value.indexOf("@") > -1;
    }

    function isTroubleUsername(value) {
      return startsWith(value, ".") || endsWith(value, ".");
    }

    function startsWith(value, char) {
      return value.length > 0 ? value.charAt(0) === char : false;
    }

    function endsWith(value, char) {
      return value.length > 0 ? value.charAt(value.length - 1) === char : false;
    }
```
---

  >**My Solution**

```
    function searchNames(logins) {
      return logins.filter(function (val, idx ,arr) {
        return val.match(/^\.+|\.+$/);
      }).map(function (val) {
        return logins[logins.indexOf(val) + 1];
      });
    }
```

Ref.via: [CodeWar][1]

    [1]: http://www.codewars.com/kata/525f0459fb9570f9ff00005d/javascript
