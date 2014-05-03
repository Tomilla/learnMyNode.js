module.exports = function(incomes, origin) {

    var derive = incomes.initialize || function () {},
        __hasProp = {}.hasOwnProperty;

    function ctor() {
       this.constructor = derive;
    };

    origin = origin || Object;
    ctor.prototype = origin.prototype;
    derive.prototype = new ctor();
    derive.__super__ = origin || Object;

    for ( var mapping in incomes ) {
        // `__hasProp.call( incomes, mapping)` deeply equal `incomes.hasOwnProperty(mapping)`
        if ( __hasProp.call( incomes, mapping ) &&
            mapping != "initialize" ) {
            derive.prototype[ mapping ] = incomes[ mapping ];
        }
    }

    var curr_class;
    function ccc( target ) {    //change current class
        curr_class = target;
    }

    ccc(derive);
    derive.prototype.super = function() {
        ccc(curr_class.__super__);
        var thisFunc = arguments[0],
            argsArry = Array.prototype.slice.call(arguments, 1),
            result = curr_class.prototype[ thisFunc ].apply( this, argsArry );
        ccc(derive);
        return curr_class.__super__.prototype[ thisFunc ] !== undefined ?
            result : undefined;
    };

    ///////////////////////////////////////////////////////////////////////
    function println(string) {
      console.log(string);
    }
    println( '#region : test' );
    println( '#endregion' );
    ///////////////////////////////////////////////////////////////////////

    return derive;
};
