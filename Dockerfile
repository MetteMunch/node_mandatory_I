# Brug Node.js LTS som base
FROM node:20-alpine

# Sæt arbejdsdir
WORKDIR /app

# Kopiér package.json først (bedre caching)
COPY package*.json ./

# Installer dependencies
RUN npm install --production

# Kopiér resten af appen
COPY . .

# Eksponér port
EXPOSE 8080

# Start appen
CMD ["node", "node_mandatory_I/app.js"]
