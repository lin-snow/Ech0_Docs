---
title: 更新
description: 更新Ech0应用程序的详细指南
---

### 🔄 Docker部署如何更新

1. 停止当前的容器

```shell
docker stop ech0
```

2. 移除容器

```shell
docker rm ech0
```

3. 拉取最新的镜像

```shell
docker pull sn0wl1n/ech0:latest
```

4. 启动新版本的容器

```shell
docker run -d \
  --name ech0 \
  -p 6277:6277 \
  -p 6278:6278 \
  -v /opt/ech0/data:/app/data \
  -v /opt/ech0/backup:/app/backup \
  -e JWT_SECRET="Hello Echos" \
  sn0wl1n/ech0:latest
```

### 💎 Docker Compose部署如何更新

1. 进入 compose 文件目录
```shell
cd /path/to/compose
```

2. 拉取最新镜像并重启
```shell
docker-compose pull && \
docker-compose up -d --force-recreate
```

3. 清理旧镜像 
```shell
docker image prune -f
```
