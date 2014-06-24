REPORTER = spec
TESTFILES = $(shell find test/ -name '*.test.js')

install:
	@echo "Installing production"
	@npm install --production
	@echo "Install complete"

test:
	@NODE_ENV=test mocha \
		--reporter $(REPORTER) \
		$(TESTFILES)

lint:
	@echo "Linting..."
	@jshint \
		--config .jshintrc \
		*.js test/*.js

coverage:
	@echo "Generating coverage report.."
	@istanbul cover _mocha
	@echo "Done: ./coverage/lcov-report/index.html"

.PHONY: install lint test coverage
