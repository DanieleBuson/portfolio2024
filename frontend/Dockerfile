FROM node:alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

CMD ["sh", "-c", "cp -r dist/* /app/build/"]
