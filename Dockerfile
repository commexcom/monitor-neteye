# Estágio de construção (build)
FROM node:20 as build

# Instale o pnpm globalmente
RUN npm install -g pnpm

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instala as dependências
RUN pnpm install --frozen-lockfile

# Copia o restante dos arquivos do projeto
COPY . .

# Constrói o projeto para produção
RUN pnpm build

# Estágio de produção
FROM node:20-alpine

# Instale o pnpm globalmente
RUN npm install -g pnpm

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários para produção
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar o servidor
CMD ["pnpm", "start"]