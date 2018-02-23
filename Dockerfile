FROM starefossen/ruby-node:2-8
WORKDIR /app

COPY Gemfile Gemfile.lock package.json package-lock.json /app/
RUN bundle install
RUN npm install

COPY . /app

EXPOSE 3000 3001
CMD ["npm", "start"]
