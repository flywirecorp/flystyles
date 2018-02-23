.PHONY: up publish version

up:
	@docker-compose up

publish:
	@echo "Building a new version..."
	@docker build -qt publish .

	@docker run \
		--mount type=bind,source=$(HOME)/.npmrc,target=/root/.npmrc \
		--mount type=bind,source="$(shell pwd)",target=/app/ \
		publish \
		npm publish

version:
	@docker-compose run --rm app npm version $(type)

default: up
