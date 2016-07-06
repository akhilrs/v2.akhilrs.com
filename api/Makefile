#
# Paths
#

TEST_EXEC=node_modules/.bin/hydro
TEST_COV_EXEC=node_modules/.bin/istanbul
TEST_EXEC_BARE = node_modules/.bin/_hydro


# run - Run local server
run:
	@make clean
	@echo "--------------------------------------------------------------"
	@echo " python3 manage.py runserver --setting=akhil_rs.settings.development "
	@echo "=============================================================="
	@python3 -W ignore manage.py runserver --setting=akhil_rs.settings.development

# DEVELOPMENT
# install - install locally
install:
	@cd ./config/requirements && pip3 install -r .development.txt
	# @make newdb

# test - run tests
test:
	@python3 manage.py test --pattern="test_*.py" --settings=akhil_rs.settings.test

# onetest - run one test
onetest:
	@python3 manage.py test apps.admin.fail_login.tests.test_fail_login.FailLoginTest --settings=akhil_rs.settings.development

# create fixture
fixture:
	python3 manage.py dumpdata --setting=akhil_rs.settings.development --format=json preferences  --output=preferences.json

# startapp - Use: $ make startapp app=newappname
startapp:
	mkdir ./apps/$(app)
	python3 manage.py startapp $(app) ./apps/$(app)

# syncdb - Run syncdb
syncdb:
	python3 manage.py syncdb --noinput --settings=akhil_rs.settings.development

# migrate - Run makemigrations & migrate command simultaneously
migrate:
	python3 manage.py makemigrations --settings=akhil_rs.settings.development
	python3 manage.py migrate --settings=akhil_rs.settings.development

# newdb - Create new empty database with one page
newdb:
	make syncdb
	echo "from django.contrib.auth.models import User; User.objects.create_superuser('test', 'myemail@domen.com', 'test')" | python3 manage.py shell
	python manage.py createcachetable
	make migrate
	python3 manage.py loaddata preferences.json --settings=akhil_rs.settings.development
	python3 manage.py loaddata onepage.json --settings=akhil_rs.settings.development

# DEPLOY
# clean - Clean all temporary files
clean:
	@find . -name "*.pyc" -print0 | xargs -0 rm -rf
	@find . -name "*.*~" -print0 | xargs -0 rm -rf
	@find . -name "__pycache__" -print0 | xargs -0 rm -rf
	@echo "CLEAN!"

# checkdeploy - check deploy. Use it on server
checkdeploy:
	python3 manage.py check --deploy --settings=akhil_rs.settings.production

# LOCALE
# makemessages - Create locale. Use: $ make makemessages lang=uk
makemessages:
	@echo "Strings are extracting from all apps..."
	@python3 manage.py  makemessages --locale=$(lang) --settings=akhil_rs.settings.development

# compilemessages - run 'make makemessages lang=pl' to compile polish locale
compilemessages:
	@python3 manage.py  compilemessages --locale=$(lang) --settings=akhil_rs.settings.development

# style - Check PEP8 and others
PEP8IGNORE=E22,E23,E24,E302,E401
style:
	@echo "PyFlakes check:"
	@echo
	-pyflakes .
	@echo
	@echo "PEP8 check:"
	@echo
	-pep8 --ignore=$(PEP8IGNORE) .

# help - Display callable targets.
help:
	@egrep "^# [a-z,\",=,_ ]+ - " Makefile
