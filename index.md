---
layout: default
title: Obuilt 自成集
---

<div style="max-width: 860px; margin: 0 auto;">

# Obuilt 自成集

一个安静的博客。  
记录一些无用但有趣的思考。

---

## 关于这个博客
（这里放你 README 里的那段）

---

## 📚 全部文章

{% for post in site.posts %}
- {{ post.date | date: "%Y-%m-%d" }} · [{{ post.title }}]({{ post.url }})
{% endfor %}

</div>
