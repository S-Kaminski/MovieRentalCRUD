# oficjalny obraz Node.js z repozytorium Docker Hub
FROM node:14

# katalog roboczy dla aplikacji
WORKDIR /usr/src/app

# Skopiuj pliki zależności aplikacji do kontenera
COPY package*.json ./

# Zainstaluj zależności aplikacji
RUN npm install

# Skopiuj pliki źródłowe aplikacji do kontenera
COPY . .

# Ustaw port na którym będzie działać aplikacja
EXPOSE 3000

# polecenie do wykonania po uruchomieniu kontenera
CMD [ "npm", "start" ]