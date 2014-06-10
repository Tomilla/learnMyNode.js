```
  **Trim a String**

  Description:

    Extend the String prototype by a trim function, that returns the \
    string with leading or trailing whitespaces removed.

    Examples can be found in the test fixture.

    PS: Of course, the original trim function was removed before ;)

  Tags:

    Fundamentals Strings Regular-Expressions Declarative Programming
    Advanced Language Features
```

```
  **Test Cases:**

  describe('trim the string', function() {
    // better message for string comparison
    var assertString = function(actual, expected, message) {
      var errorMessage = 'Tested ' + message + ', expected ' + JSON.stringify(expected) + ', but got ' + JSON.stringify(actual);
      Test.expect(expected === actual, errorMessage.replace(/ /g, '&nbsp;'));
    };

    it('should remove trailing whitespaces', function() {
      assertString("test ".trim(), "test", "single space");
      assertString("foo      ".trim(), "foo", "multiple spaces");
      assertString("bar\n".trim(), "bar", "line-break");
      assertString("baz\t".trim(), "baz", "tab");
      assertString("codewars  \t\n  \r\n ".trim(), "codewars", "different types of whitespace");
    });

    it('should remove leading whitespaces', function() {
      assertString(" test".trim(), "test", "single space");
      assertString("      foo".trim(), "foo", "multiple spaces");
      assertString("\nbar".trim(), "bar", "line-break");
      assertString("\tbaz".trim(), "baz", "tab");
      assertString(" \t\n  \r\n codewars".trim(), "codewars", "different types of whitespace");
    });

    it('should remove leading and trailing whitespaces', function() {
      assertString(" test ".trim(), "test", "single space");
      assertString("      foo      ".trim(), "foo", "multiple spaces");
      assertString("\nbar\n".trim(), "bar", "line-break");
      assertString("\tbaz\t".trim(), "baz", "tab");
      assertString(" \t\n  \r\n codewars  \r\n  \t \n ".trim(), "codewars", "different types of whitespace");
    });

    it('should not remove whitespaces in between', function() {
      assertString("foo bar".trim(), "foo bar", "single space");
      assertString("foo    bar".trim(), "foo    bar", "multiple spaces");
      assertString("foo\nbar".trim(), "foo\nbar", "line-break");
      assertString("foo\tbar".trim(), "foo\tbar", "tab");
      assertString("foo \t\n  \r\n bar".trim(), "foo \t\n  \r\n bar", "different types of whitespace");
    })

    it('should remove everything from a string, containing only whitespaces', function() {
      assertString(" ".trim(), "", "single space");
      assertString(" \n  \t  \r   ".trim(), "", "different types of whitespaces");
    });
  });
```

>Best Practives && Clever Solution

```
>Author:OverZealous (plus 257 more warriors)

  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
```

######My Solution

```
  String.prototype.trim = function() {
    var idx
      , self = this;
    for (idx = 0; idx < this.length; idx++) {
      if (self.lastIndexOf(' ') == self.length - 1
        || self.substring(self.length - 1) == '\t'
        || self.substring(self.length - 1) == '\n'
        || self.substring(self.length - 1) == '\r')
        self = self.substring(0, self.length - 1);
      if (self.indexOf(' ') == 0
        || self.substring(0, 1) == '\t'
        || self.substring(0, 1) == '\n'
        || self.substring(0, 1) == '\r')
        self = self.slice(1);
      self = self.replace(/\s^/g, ' ');
    }
    return self;
  };
```

ref.via: [CodeWar][1]
[1]:(http://www.codewars.com/kata/526e8de0512511429e000006/solutions/javascript)
