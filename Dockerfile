#STAGE 0 COMPILE TS ON NODEJS
FROM node:12 as inventarios
WORKDIR /app
COPY . .
RUN npm install && npm run start:dev
CMD [ "node", "dist/main.js" ]