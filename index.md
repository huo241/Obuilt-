---
layout: default
title: Obuilt 自成集
---

# Obuilt 自成集

一个安静的博客，记录一些无用但有趣的思考。

---

## 📚 全部文章

{% for post in site.posts %}
- {{ post.date | date: "%Y-%m-%d" }} · [{{ post.title }}]({{ post.url }})
{% endfor %}
