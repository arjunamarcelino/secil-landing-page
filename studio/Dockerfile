# syntax=docker/dockerfile:1

# ---- Builder: bundle the Studio SPA (Sanity CLI needs Node >= 22.12) ----
FROM node:22-bookworm-slim AS builder
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

# SANITY_STUDIO_* are inlined into the bundle at BUILD time (the Studio is a SPA).
# Pass your real project values as build args in Easypanel — the defaults produce a
# Studio that loads but cannot connect until pointed at a real project.
ARG SANITY_STUDIO_PROJECT_ID=placeholder
ARG SANITY_STUDIO_DATASET=production
ENV SANITY_STUDIO_PROJECT_ID=$SANITY_STUDIO_PROJECT_ID \
    SANITY_STUDIO_DATASET=$SANITY_STUDIO_DATASET

RUN pnpm build

# ---- Runner: serve static files with nginx (SPA fallback) ----
FROM nginx:1.27-alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
