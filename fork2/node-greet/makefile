compile:
	coffee --compile --output lib src
.PHONY: compile

mocha: compile
	mocha -R spec
.PHONY: mocha

pack: mocha
	sudo npm pack
.PHONY: pack

show: pack mocha compile
	tar -ztf ./greet-0.0.0.tgz
.PHONY: show
