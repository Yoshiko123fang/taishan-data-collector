FROM node:20-alpine

WORKDIR /app

# 先装依赖（利用层缓存）
COPY package*.json ./
RUN npm install --omit=dev

# 再拷源码
COPY . .

# Hugging Face Spaces 默认注入 PORT=7860，server.js 已读取该变量
ENV PORT=7860
EXPOSE 7860

CMD ["node", "server.js"]
