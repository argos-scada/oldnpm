FROM scratch AS npm_src
WORKDIR /scadalts-ui
COPY ./scadalts-ui /scadalts-ui

FROM node:14.21.3-bullseye AS npm_build
WORKDIR /scadalts-ui
COPY ./scadalts-ui/package.json ./scadalts-ui/node_modules /scadalts-ui
RUN npm install
COPY ./scadalts-ui /scadalts-ui
RUN npm run build

FROM scratch AS npm_package
COPY --from=npm_build /scadalts-ui/dist /dist

