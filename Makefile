.PHONY: build

build:
	docker build -t flystyles -f Dockerfile.node . && docker run -it --mount type=bind,source=${CURDIR},target=/src flystyles npm run build
