install:; npm ci
build: install; npm run build
run: build; hugo server -s exampleSite --themesDir=../..
clean:;
	rm -rf node_modules
	rm package-lock.json
release: clean;
	npm install
	npm run production
	git add .
	git commit -m "prepare new release" -s