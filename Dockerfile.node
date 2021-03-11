FROM node:12

ENV APP /src
RUN mkdir -p $APP

COPY package.json $APP/package.json
COPY package-lock.json $APP/package-lock.json

WORKDIR $APP

CMD ["npm", "run", "build"]
