module.exports = function(incomes) {
    this.constructor = incomes.initialize ? incomes.initialize : function () {};
    for (var mapping in incomes) {
        if (typeof incomes[mapping] == "function" && mapping != "initialize")
            this.constructor.prototype[mapping] = incomes[mapping];
		}
//    internal implement of Instance Method
//    this.constructor.prototype["getA"] = incomes["getA"];
//    this.constructor.prototype["getB"] = incomes["getB"];
    return this.constructor;
};
