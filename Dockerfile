# Stage 1: Build the Angular application
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable
COPY --from=build /app/dist/drone-fleet-management/browser /usr/share/nginx/html
EXPOSE 80
