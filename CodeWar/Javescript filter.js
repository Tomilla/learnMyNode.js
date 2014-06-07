/*
 * [7kyu]: Javascript filter - 1
 * #Description:

  While developing a website, you detect that some of the members have
  troubles logging in. Searching through the code you find that all
  logins ending with a "_" make problems. So you want to write a
  function that takes an array of pairs of login-names and e-mails,
  and outputs an array of all login-name, e-mails-pairs from the
  login-names that end with "_".

  If you have the input-array:

  [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]

  it should output

  [ [ "bar_", "bar@bar.com" ] ]

  You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

  Fundamentals
  Regular Expressions
  Declarative Programming
  Advanced Language Features
  Strings
*/

// Best Practices
/*
 * mrkishi (plus 9 more warriors)
 * 
  function searchNames( logins ){
    return logins.filter(function (login) {
      return login[0].slice(-1) === '_'
    });
  }
*/

// Clever Solution
/*
 * tchan247
 *
  function searchNames( logins ){
    return logins.filter(function(x){return x[0].search(/\_$/) !== -1})
  }
*/

// My Solution

function searchNames( logins ){
  return logins.filter(function (_value, _index, _array) {
    return _array[_index][0].lastIndexOf('_')
      == _array[_index][0].length - 1 ?
      _array[_index] : null;
  })
}

/*
 * #Test Cases:

  describe( "Testing basic functionality", function(){
    it( "searchNames exists?", function(){
      Test.assertEquals( typeof( searchNames ), "function",
        "oups, searchNames is not a function" );
    } );
    it( "Should handle empty input", function(){
      Test.assertSimilar( searchNames( [] ), [], "nope" );
    } );
    it( "Should use filter-method", function(){
      var a = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ];
      searchNames( a );
      Test.assertEquals( Array.prototype.filter_used, true, "Try with filter-method" );
    } );
  } );

  describe( "Testing some lists", function(){
    it( "Basic list", function(){
      var a = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ],
      b = [ [ "bar_", "bar@bar.com" ] ];    
      Test.assertSimilar( searchNames( a ), b,
        "not correct " + Test.inspect(a) + " given" );
    } );
    it( "Longer list", function(){
      var a = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ],
      ["foobar", "hello@dot.com" ], ["barfoo_", "barfoo@t.com"]],
      b = [ [ "bar_", "bar@bar.com" ], ["barfoo_", "barfoo@t.com"] ];    
      Test.assertSimilar( searchNames( a ), b,
        "not correct " + Test.inspect(a) + " given" );
    } );
    it( "mixed underscores", function(){
      var a = [ [ "f_o_o", "foo@foo.com" ], [ "bar_", "bar@bar.com" ],
      [ "b_a_r_", "foobar@fb.com" ], [ "_barfoot", "bar_foot@fb.com" ], 
      [ "_barfoot_", "bar_foo@fb.com" ] ],
      b = [ [ "bar_", "bar@bar.com" ], [ "b_a_r_", "foobar@fb.com" ],
      [ "_barfoot_", "bar_foo@fb.com" ]];
      Test.assertSimilar( searchNames( a ), b,
        "not correct with " + Test.inspect(a) + " given" );
    } );
  } );
*/
