# PATH - Globally defined paths
TEST_EXEC=node_modules/.bin/hydro
TEST_COV_EXEC=node_modules/.bin/istanbul
TEST_EXEC_BARE = node_modules/.bin/_hydro

# all - Run clean install and test
all: clean install test


# install - Install all dependencies
install:
	@npm install
	@bower install

# test-ci - Test runner for the CI server
test-ci: test

# test-cov - Test coverage report
test-cov:
	@$(TEST_COV_EXEC) cover $(TEST_EXEC_BARE)

# clean - Clean all temporary files
clean:
	@rm -rf node_modules


# Instructions - Instructions
.PHONY: test-acceptance test-cov test-unit test-ci test

# help - Display callable targets.
help:
	@egrep "^# [a-z,\",=,_ ]+ - " Makefile
