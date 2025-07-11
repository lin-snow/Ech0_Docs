---
title: 开发指南
description: 开发环境搭建和前后端联调指南
---

## **后端要求:**  
📌 **Go 1.24.3+**

📌 **C 编译器**  
使用 `go-sqlite3` 等需要 CGO 的库时，需安装：  
- Windows：
    - [MinGW-w64](https://winlibs.com/)
    - 解压后将bin目录添加到PATH
- macOS： `brew install gcc`
- Linux： `sudo apt install build-essential`

📌 **Google Wire**  
安装[wire](https://github.com/google/wire)用于依赖注入文件生成:  
- `go install github.com/google/wire/cmd/wire@latest`

## **前端要求:**  
📌  **NodeJS v23.11.1+, PNPM v10**
> 注：如需要多个nodejs版本共存可使用[fnm](https://github.com/Schniz/fnm)进行管理  

---

## **启动前后端联调**  
**第一步： 后端(在Ech0根目录下)：**
```shell
go run cmd/ech0/main.go # 编译并启动后端
```
> 如果依赖注入关系发生了变化先需要在`ech0/internal/di/`下执行`wire`命令生成新的`wire_gen.go`文件

**第二步： 前端（新终端）：**  
```shell
cd web # 进入前端目录

pnpm install # 如果没有安装依赖则执行

pnpm dev # 启动前端预览
```

**第三步： 前后端启动后访问:**  
前端预览： http://localhost:5173 （端口在启动后可在控制台查看）  
后端预览： http://localhost:6277 （默认后端端口为6277）  

---