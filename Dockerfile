# Etapa 1: build
FROM node:22-alpine AS builder

WORKDIR /app

# Copia los archivos de dependencias y las instala
COPY package*.json ./
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps

# Copia el resto del proyecto y construye
COPY . .
RUN npm run build

# Etapa 2: runtime
FROM node:22-alpine

WORKDIR /app

# Copia dependencias y archivos necesarios del build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expone el puerto 3000
EXPOSE 3000

# Inicia la app
CMD ["npm", "start"]
