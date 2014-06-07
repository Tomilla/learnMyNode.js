describe('greet', ->
	greet =      
		require('../lib/index')
	it("shousd greet a person by name", ->
    	assert.equal(greet('gerorim'), "Hello gerorim")
	)
	it("should greet a person flirtatiously if drunk", ->
    	assert.equal(greet('gerorim', true), "Hello gerorim, you look so sexy today")
    )
)
