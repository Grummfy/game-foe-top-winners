build:
	docker run -it --user $(shell id -u) --rm -v $(shell pwd):/toto -w /toto node:16 npm run build

serve:
	docker run -it --user $(shell id -u) --rm -v $(shell pwd):/toto -w /toto -p 9229:9229 -p 4242:4242 node:16 npm run serve

debug:
	docker run -it --user $(shell id -u) --rm -v $(shell pwd):/toto -w /toto -p 9229:9229 -p 4242:4242 node:16 npm run debug

exec:
	docker run -it --user $(shell id -u) --rm -v $(shell pwd):/toto -w /toto -p 9229:9229 -p 4242:4242 node:16 npm $(ARGS)