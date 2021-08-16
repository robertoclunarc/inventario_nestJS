#STAGE 0 COMPILE TS ON NODEJS
FROM node:12 as inventarios
WORKDIR /src
COPY ./src/ /src/
RUN npm install && npm run build 
CMD [ "node", "dist/main.js" ]