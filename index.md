---
layout: default
title: Obuilt 自成集
---

<!-- 主题切换器 -->
<div class="theme-switcher">
  <button class="theme-btn active" data-theme="light" title="原生主题">☀️</button>
  <button class="theme-btn" data-theme="dark" title="夜晚主题">🌙</button>
  <button class="theme-btn" data-theme="eye-care" title="护眼主题">📖</button>
</div>

<div class="hero-section">
  <h1 class="page-title">Obuilt 自成集</h1>
  <p class="hero-subtitle">一个安静的博客，记录一些无用但有趣的思考。</p>
</div>

<div class="section-card">
  <h2>👋 这里会写什么？</h2>
  <ul class="intro-list">
    <li>
      <span class="intro-emoji">💭</span>
      <div><strong>思考与随笔</strong>：一些不太有用，但真实存在的想法</div>
    </li>
    <li>
      <span class="intro-emoji">🧰</span>
      <div><strong>技术与工具</strong>：折腾、踩坑、解决方案</div>
    </li>
    <li>
      <span class="intro-emoji">🗂️</span>
      <div><strong>笔记与整理</strong>：写给未来自己的东西</div>
    </li>
  </ul>
  <div class="writing-principle">
    写作原则：写给自己，也希望有人能读懂。
  </div>
</div>

<div class="section-card">
  <h2>📌 精选阅读</h2>
  <div class="featured-post">
    ⭐ <a href="/ai-jiang-qu-dai-jiao-shi/">AI将取代教师</a>
  </div>
  <div class="featured-post">
    ⭐ <a href="/cong-shao-bing-dian-he-long-xia-dian-xiang-dao-de-dui-yu-shang-ye-mo-shi-de-si-kao-he-fen-xi/">从烧饼店和龙虾店想到的，对于商业模式的思考和分析</a>
  </div>
</div>

<div class="section-card">
  <h2>🕒 最近更新</h2>
  <ul class="post-list">
  {% for post in site.posts limit:5 %}
    <li class="post-item">
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <a href="{{ post.url }}" class="post-link">{{ post.title }}</a>
    </li>
  {% endfor %}
  </ul>
</div>

<div class="section-card">
  <h2>📚 全部文章</h2>
  <ul class="post-list">
  {% for post in site.posts %}
    <li class="post-item">
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <a href="{{ post.url }}" class="post-link">{{ post.title }}</a>
    </li>
  {% endfor %}
  </ul>
</div>

<div class="message-board">
  💬 欢迎来留言板聊天 👉 
  <a href="https://github.com/huo241/Obuilt-/discussions/1">点这里</a>
</div>

