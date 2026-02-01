---
layout: default
title: Obuilt 自成集
---
<div align="center">
  <h1 class="page-title">Obuilt 自成集</h1>
  <p><strong>一个安静的博客，记录一些无用但有趣的思考。</strong></p>

  <p>
    <a href="/about/">关于我</a> ·
    <a href="/archive/">归档</a> ·
    <a href="https://github.com/huo241/Obuilt-">GitHub</a>
  </p>
</div>



## 👋 这里会写什么？

- 💭 **思考与随笔**：一些不太有用，但真实存在的想法  
- 🧰 **技术与工具**：折腾、踩坑、解决方案  
- 🗂️ **笔记与整理**：写给未来自己的东西  

> 写作原则：写给自己，也希望有人能读懂。

## 📌 精选阅读

- ⭐ [集体主义的破产：Z 世代的精神流亡](/z-shi-dai-jing-shen-liu-wang/)

## 🕒 最近更新
{% for post in site.posts limit:5 %}
- {{ post.date | date: "%Y-%m-%d" }} · [{{ post.title }}]({{ post.url }})
{% endfor %}

## 📚 全部文章
{% for post in site.posts %}
- {{ post.date | date: "%Y-%m-%d" }} · [{{ post.title }}]({{ post.url }})
{% endfor %}

