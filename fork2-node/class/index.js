module.exports = function(incomes, origin) {

    ///////////////////////////////////////////////////////////////////////
    function pr(string) {
      console.log(string);
    }
    ///////////////////////////////////////////////////////////////////////


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
            typeof incomes[mapping] == 'function' &&
            mapping != "initialize" ) {
            derive.prototype[ mapping ] = incomes[ mapping ];
        }
    }

    var temp;
    function ccc( target ) {    //change current class
        temp = target;
    }

    ccc(derive);
    derive.prototype.super = function() {
        ccc(temp.__super__);

        var thisFunc = arguments[0],
            argsArry = Array.prototype.slice.call(arguments, 1, arguments.length),
            result = temp.prototype[ thisFunc ].apply( this, argsArry );

        ///////////////////////////////////////////////////////////////
        pr( '#region : test' );
        pr( '#endregion' );
        ///////////////////////////////////////////////////////////////

        ccc(derive);
        return temp.__super__.prototype[ thisFunc ] !== undefined ?
            result : undefined;
    };

    return derive;
};
