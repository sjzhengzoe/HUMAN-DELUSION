# 性能优化之 HTML 篇

## 前置知识

[一文说清 DOMContentLoade 和 Load.md]('./../一文说清DOMContentLoade和Load.md)

- 顺序上看

  - preload 预加载
  - CSS 请求放在最前
  - JS 请求放在最后 添加 async 或 defer

- 文件上看

  - 压缩代码

- 网络上看

  - 使用浏览器缓存
  - 减少域名查询
  - 减少请求 js、css 等文件数量
