FROM node:22-alpine AS build
LABEL "language"="nodejs"
LABEL "framework"="create-react-app"
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有源代码
COPY . .

# 构建应用
RUN npm run build

# 生产阶段
FROM zeabur/caddy-static:latest
WORKDIR /usr/share/caddy

# 复制构建产物
COPY --from=build /app/build .

# 暴露端口
EXPOSE 8080

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1
