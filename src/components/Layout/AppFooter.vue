<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <div class="footer-logo">
            <div class="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <span>Vue Gallery</span>
          </div>
          <p class="footer-description">
            炫酷的Vue组件展示和演示平台，提供高质量的可复用组件和最佳实践示例。
          </p>
        </div>
        
        <div class="footer-links">
          <div class="link-group">
            <h4>资源</h4>
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>
            <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>
          </div>
          
          <div class="link-group">
            <h4>社区</h4>
            <a href="https://github.com/vuejs/vue" target="_blank" rel="noopener">Vue Core</a>
            <a href="https://forum.vuejs.org/" target="_blank" rel="noopener">论坛</a>
            <a href="https://chat.vuejs.org/" target="_blank" rel="noopener">Discord</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 Vue Gallery. Built with ❤️ and Vue.js</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem 0;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-primary);
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: var(--gradient-primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  svg {
    width: 20px;
    height: 20px;
  }
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 400px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  h4 {
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition-normal);
    
    &:hover {
      color: var(--primary-color);
    }
  }
}

.footer-bottom {
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

// 响应式设计
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-description {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>