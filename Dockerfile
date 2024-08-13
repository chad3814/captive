FROM node:lts-alpine

COPY dist/index.js /app/dist/index.js
COPY package.json package-lock.json /app/

EXPOSE 80
CMD [ "node", "/app" ]
