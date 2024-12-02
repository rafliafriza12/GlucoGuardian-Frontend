# Menggunakan Node.js sebagai base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Menyalin package.json dan yarn.lock
COPY package.json yarn.lock ./

# Menginstal dependencies
RUN yarn install

# Menyalin semua file aplikasi
COPY . .

# Membangun aplikasi Next.js
RUN yarn build

# Menjalankan aplikasi
CMD ["yarn", "start"]

# Expose port yang digunakan oleh Next.js
EXPOSE 3000
