FROM ruby:2.7.1

COPY action.sh /action.sh

ENTRYPOINT ["/action.sh"]
