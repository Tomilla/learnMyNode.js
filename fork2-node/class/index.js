module.exports = function(incomes, origin) {

    ////////////////////////////////////////////////////////////////////
    function prpr( string ) {
      console.log( string );
    }
    ////////////////////////////////////////////////////////////////////

    var derive = incomes.initialize || function () {},
        __hasProp = {}.hasOwnProperty;

/*
 *Absraction Form, @Hayeah Not Recommended
 *──────────────────────────────────────────────────────────────────────
    function ctor() {
       this.constructor = derive;
    };
    origin = origin || Object;
    ctor.prototype = origin.prototype;
    derive.prototype = new ctor();
 *──────────────────────────────────────────────────────────────────────
**/

    derive.prototype.constructor = derive;
    derive.__super__ = origin || Object;

    for ( var mapping in incomes ) {
        //# `__hasProp.call( incomes, mapping)`
        //# deeply equal `incomes.hasOwnProperty(mapping)`
        if ( __hasProp.call( incomes, mapping ) &&
            typeof incomes[mapping] == 'function' &&
            mapping != "initialize" ) {
            derive.prototype[ mapping ] = incomes[ mapping ];
        }
    }

    ////////////////////////////////////////////////////////////////////
    prpr( '#region : test' );
    prpr( '#endregion' );
    ////////////////////////////////////////////////////////////////////

    var temp = derive;
    derive.prototype.super = function( _0thArg ) {
        temp = temp.__super__;
        var result = temp.prototype[ _0thArg ].apply( this,
            [].slice.call(arguments, 1));

        //# make 'temp class' point back to 'derive class'
        temp = derive;
        return temp.__super__.prototype[ _0thArg ] !== undefined ?
            result : undefined;
    };

    return derive;
};
