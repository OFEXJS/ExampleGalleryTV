<template>
  <div class="card-example">
    <div class="example-cards">
      <div class="demo-card">
        <div class="card-image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
        </div>
        <div class="card-content">
          <h3>卡片标题</h3>
          <p>这是一个基本的卡片示例，包含图片、标题和描述文本。</p>
          <button class="btn btn-primary">查看详情</button>
        </div>
      </div>
      
      <div class="demo-card card-hover">
        <div class="card-badge">热门</div>
        <div class="card-content">
          <h3>高级卡片</h3>
          <p>这个卡片包含徽章、阴影效果和悬停动画。</p>
          <div class="card-footer">
            <span class="author">作者</span>
            <span class="date">2024-01-01</span>
          </div>
        </div>
      </div>
      
      <div class="demo-card card-glass">
        <div class="card-content">
          <h3>玻璃态卡片</h3>
          <p>使用毛玻璃效果的现代卡片设计，具有半透明背景。</p>
          <div class="card-stats">
            <div class="stat">
              <span class="stat-value">1.2k</span>
              <span class="stat-label">浏览</span>
            </div>
            <div class="stat">
              <span class="stat-value">89</span>
              <span class="stat-label">点赞</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 卡片示例组件
</script>

<style scoped lang="scss">
.card-example {
  width: 100%;
}

.example-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.demo-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: all var(--transition-normal);
  
  &.card-hover {
    box-shadow: var(--shadow-md);
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }
  }
  
  &.card-glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}

.card-image {
  height: 120px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  svg {
    width: 48px;
    height: 48px;
  }
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--accent-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.card-content {
  padding: 1.5rem;
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  border: none;
  font-size: 0.875rem;
  
  &.btn-primary {
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
    }
  }
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

.card-stats {
  display: flex;
  gap: 1.5rem;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

// 响应式设计
@media (max-width: 768px) {
  .example-cards {
    grid-template-columns: 1fr;
  }
}
</style>