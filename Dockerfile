
FROM oven/bun:alpine AS factory
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . ./
RUN bun run build

FROM oven/bun:alpine
WORKDIR /app
COPY --from=factory /app/.output/ ./
COPY --from=factory /app/docker-entrypoint.sh /docker-entrypoint.sh
ENV NUXT_PORT=3000
ENV NUXT_HOST=0.0.0.0
RUN bun install -g pm2
RUN chmod +x /docker-entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["/docker-entrypoint.sh"]
