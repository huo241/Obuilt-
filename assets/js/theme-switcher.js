// 主题切换功能
document.addEventListener('DOMContentLoaded', function() {
  // 获取主题按钮
  const themeButtons = document.querySelectorAll('.theme-btn');
  
  // 从 localStorage 加载保存的主题，默认为 light
  const savedTheme = localStorage.getItem('blog-theme') || 'light';
  
  // 应用初始主题
  applyTheme(savedTheme);
  
  // 为每个按钮添加点击事件
  themeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const theme = this.getAttribute('data-theme');
      applyTheme(theme);
      // 保存到 localStorage
      localStorage.setItem('blog-theme', theme);
    });
  });
  
  // 应用主题的函数
  function applyTheme(theme) {
    // 设置 html 标签的 data-theme 属性
    document.documentElement.setAttribute('data-theme', theme);
    
    // 更新按钮的 active 状态
    themeButtons.forEach(btn => {
      if (btn.getAttribute('data-theme') === theme) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
});
