//var expect = require("chai").expect
describe('greet', function(){
	greet = require('../index');
    it("shousd greet a person by name", function(){
        expect(greet('gerorim')).to.eql("Hello gerorim");
    });
    it("should greet a person flirtatiously if drunk", function(){
        expect(greet('gerorim', drinkMartinis=true)).to.eql("Hello gerorim, you look so sexy today");
    });
});
