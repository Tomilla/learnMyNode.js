module.exports = function(incomes, origin) {
    console.log( '#region : src');
    console.log(incomes, origin);
    console.log( '#endregion' );

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
        //`__hasProp.call( incomes, mapping)` deeply equal `incomes.hasOwnProperty(mapping)`
        if ( __hasProp.call( incomes, mapping ) &&
            mapping != "initialize" ) {
            derive.prototype[ mapping ] = incomes[ mapping ];
        }
    }

//    internal implement of Instance Method
//    this.constructor.prototype["getA"] = incomes["getA"];
//    this.constructor.prototype["getB"] = incomes["getB"];
   return derive;
};
