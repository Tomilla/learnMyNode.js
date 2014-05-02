module.exports = function(incomes, origin) {
    var derive = incomes.initialize || function () {};

    for ( var mapping in incomes ) {
        if ( incomes.hasOwnProperty(mapping) && typeof incomes[mapping] == "function" && mapping != "initialize" ) {
            derive.prototype[mapping] = incomes[mapping];
        }
    }

    function ctor() {
       this.constructor = derive;
    };

    origin = origin || Object;
    ctor.prototype = origin.prototype;
    derive.prototype = new ctor();



    derive.__super__ = origin || Object;

//    internal implement of Instance Method
//    this.constructor.prototype["getA"] = incomes["getA"];
//    this.constructor.prototype["getB"] = incomes["getB"];
    return derive;
};
