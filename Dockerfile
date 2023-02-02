FROM node:14-alpine AS development
ENV NODE_ENV development

WORKDIR /app
COPY package.json .
RUN yarn install --force

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]