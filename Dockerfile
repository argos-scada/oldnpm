FROM scratch as npm_src
WORKDIR /scadalts-ui
COPY ./scadalts-ui /scadalts-ui

FROM node:14.21.3-bullseye as npm_build
WORKDIR /scadalts-ui
COPY ./scadalts-ui/package.json ./scadalts-ui/node_modules /scadalts-ui
RUN --mount=type=cache,target=/src/scadalts-ui/node_modules	\
	npm install
COPY ./scadalts-ui /scadalts-ui
RUN --mount=type=cache,target=/src/scadalts-ui/node_modules	\
	npm run build

FROM scratch as npm_package
COPY --from=npm_build /scadalts-ui/dist /dist

