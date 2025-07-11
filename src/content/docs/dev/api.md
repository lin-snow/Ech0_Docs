---
title: API文档
description: API接口文档和使用指南
---

# 用户管理 API 文档

**基础URL**: `http://ip:6277`

## 公开接口 (Public APIs)

### 登录
```
POST /login
```

**描述**: 用户登录接口

**请求体**:
```json
{"username":"1","password":"1"}
```

**响应示例**:
```json
{
    "code": 1,
    "msg": "登陆成功",
    "data": "会返回一段token"
}
```

---


## 认证接口 (Authenticated APIs)

> **注意**: 以下接口需要在请求头中携带认证token
> 
> `Authorization: Bearer <your_token>`

### 获取用户信息
```
GET /user
```

**描述**: 获取当前登录用户的信息

**请求头**:
```
Authorization: Bearer <your_token>
```

**响应示例**:
```json
{
    "code": 1,
    "msg": "获取用户信息成功",
    "data": {
        "id": 1,
        "username": "1",
        "password": "",
        "is_admin": true,
        "avatar": ""
    }
}
```
