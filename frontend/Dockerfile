# frontend/Dockerfile

# Étape de build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape de runtime avec Nginx
FROM nginx:stable-alpine

# On remplace la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# On copie notre config Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# On copie le build React dans le dossier servi par Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
