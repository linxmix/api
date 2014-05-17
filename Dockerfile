FROM ahdinosaur/debian-nodejs

WORKDIR /srv/www/api.linx.dj
ADD package.json package.json
RUN npm install

ADD . /srv/www/api.linx.dj

EXPOSE 5000
CMD npm start