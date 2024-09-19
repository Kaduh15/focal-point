FROM node:20-alpine as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:20-alpine

WORKDIR /app

ENV SKIP_POSTINSTALL true

COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/sqlite.db ./sqlite.db

RUN npm install --omit=dev

EXPOSE 3000

CMD [ "npm", "run", "start" ]