FROM ahdinosaur/debian-nodejs

WORKDIR /opt/api.linx.dj
ADD package.json package.json
RUN bundle install --deployment --full-index --jobs $(nproc)

ADD . /opt/loomio
WORKDIR /opt/loomio

EXPOSE 3000
CMD bundle exec foreman start