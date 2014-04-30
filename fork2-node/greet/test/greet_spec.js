describe('greet', function() {
	greet = require('../src/index.coffee')
	it("shousd greet a person by name", function() {
    	assert.equal(greet('gerorim'), "Hello gerorim")
	})
	it("should greet a person flirtatiously if drunk", function() {
    	assert.equal(greet('gerorim', drinkMartinis=true), "Hello gerorim, you look so sexy today")
    })
})
