<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="gradient-text">Vue 组件</span>
            <br />
            演示框架
          </h1>
          <p class="hero-description">
            炫酷、可维护、易扩展的Vue组件展示平台
            <br />
            提供丰富的组件示例和最佳实践
          </p>
          <div class="hero-actions">
            <router-link to="/components" class="btn btn-primary btn-lg">
              浏览组件
              <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </router-link>
            <a href="https://github.com/zhengjialux" target="_blank" class="btn btn-secondary btn-lg">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="floating-cards">
            <div class="card card-1" v-motion="card1Motion">
              <div class="card-header">
                <div class="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="card-content">
                <div class="code-line"></div>
                <div class="code-line short"></div>
                <div class="code-line"></div>
              </div>
            </div>
            
            <div class="card card-2" v-motion="card2Motion">
              <div class="preview-element"></div>
              <div class="preview-element small"></div>
            </div>
            
            <div class="card card-3" v-motion="card3Motion">
              <div class="stats">
                <div class="stat">
                  <div class="stat-value">50+</div>
                  <div class="stat-label">组件</div>
                </div>
                <div class="stat">
                  <div class="stat-value">100+</div>
                  <div class="stat-label">示例</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="features">
      <div class="container">
        <h2 class="section-title">核心特性</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.title" v-motion="featureCardMotion">
            <div class="feature-icon">
              <component :is="feature.icon" />
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="preview">
      <div class="container">
        <h2 class="section-title">组件预览</h2>
        <div class="preview-grid">
          <div 
            v-for="category in categories" 
            :key="category.name"
            class="preview-category"
            @click="$router.push('/components')"
            v-motion="previewCategoryMotion"
          >
            <div class="category-icon">
              <component :is="category.icon" />
            </div>
            <h4>{{ category.name }}</h4>
            <p>{{ category.count }} 个组件</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">


// 动画配置
const card1Motion = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  delay: 100
}

const card2Motion = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  delay: 200
}

const card3Motion = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  delay: 300
}

const featureCardMotion = {
  initial: { opacity: 0, scale: 0.9 },
  enter: { opacity: 1, scale: 1 },
  delay: 100
}

const previewCategoryMotion = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0 },
  delay: 100
}

// 特性数据
const features = [
  {
    title: '🎨 炫酷设计',
    description: '现代化的UI设计，支持主题切换，提供流畅的动画效果',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', { d: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' })
    ])
  },
  {
    title: '🔧 易于维护',
    description: '模块化的代码结构，清晰的组件划分，便于团队协作和维护',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', { d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' })
    ])
  },
  {
    title: '🚀 高性能',
    description: '基于Vue 3的响应式系统，优化渲染性能，提供流畅的用户体验',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('polygon', { points: '13,2 3,14 12,14 11,22 21,10 12,10 13,2' })
    ])
  },
  {
    title: '📱 响应式',
    description: '完美适配各种设备，从手机到桌面，提供一致的用户体验',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('rect', { x: '2', y: '4', width: '16', height: '12', rx: '2', ry: '2' }),
      h('line', { x1: '22', y1: '8', x2: '22', y2: '16' }),
      h('line', { x1: '16', y1: '8', x2: '16', y2: '16' })
    ])
  },
  {
    title: '🎯 可扩展',
    description: '灵活的插件系统，支持自定义主题，轻松扩展新功能',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('circle', { cx: '12', cy: '12', r: '3' }),
      h('path', { d: 'M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 8.04l4.24 4.24m12.44 0l4.24 4.24M1.54 15.96l4.24-4.24' })
    ])
  },
  {
    title: '📚 完整文档',
    description: '详细的API文档，丰富的示例代码，助你快速上手',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
      h('polyline', { points: '14,2 14,8 20,8' }),
      h('line', { x1: '16', y1: '13', x2: '8', y2: '13' }),
      h('line', { x1: '16', y1: '17', x2: '8', y2: '17' }),
      h('polyline', { points: '10,9 9,9 8,9' })
    ])
  }
]

// 分类数据
const categories = [
  {
    name: '基础组件',
    count: 15,
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('rect', { x: '3', y: '3', width: '7', height: '7' }),
      h('rect', { x: '14', y: '3', width: '7', height: '7' }),
      h('rect', { x: '14', y: '14', width: '7', height: '7' }),
      h('rect', { x: '3', y: '14', width: '7', height: '7' })
    ])
  },
  {
    name: '表单组件',
    count: 12,
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
      h('polyline', { points: '14,2 14,8 20,8' }),
      h('line', { x1: '16', y1: '13', x2: '8', y2: '13' }),
      h('line', { x1: '16', y1: '17', x2: '8', y2: '17' })
    ])
  },
  {
    name: '导航组件',
    count: 8,
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('polygon', { points: '3,11 22,2 13,21 11,13 3,11' })
    ])
  },
  {
    name: '反馈组件',
    count: 10,
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
      h('polyline', { points: '22,4 12,14.01 9,11.01' })
    ])
  }
]

// Vue的h函数需要导入
import { h } from 'vue'
</script>

<style scoped lang="scss">
.home {
  overflow-x: hidden;
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.arrow-icon {
  width: 18px;
  height: 18px;
  margin-left: 0.25rem;
  transition: transform var(--transition-normal);
}

.hero-actions a:hover .arrow-icon {
  transform: translateX(2px);
}

.hero-visual {
  position: relative;
}

.floating-cards {
  position: relative;
  height: 400px;
}

.card {
  position: absolute;
  background: var(--bg-primary);
  border-radius: 12px;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border-color);
  overflow: hidden;
  animation: float 6s ease-in-out infinite;
  
  &.card-1 {
    width: 200px;
    height: 150px;
    top: 0;
    left: 0;
    animation-delay: 0s;
  }
  
  &.card-2 {
    width: 180px;
    height: 180px;
    top: 50px;
    right: 0;
    animation-delay: 2s;
  }
  
  &.card-3 {
    width: 160px;
    height: 120px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 4s;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.card-header {
  padding: 0.75rem;
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
}

.card-dots {
  display: flex;
  gap: 0.375rem;
  
  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-tertiary);
    
    &:nth-child(1) { background: #ef4444; }
    &:nth-child(2) { background: #f59e0b; }
    &:nth-child(3) { background: #10b981; }
  }
}

.card-content {
  padding: 1rem;
}

.code-line {
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: 4px;
  margin-bottom: 0.5rem;
  
  &.short {
    width: 60%;
  }
  
  &:last-child {
    margin-bottom: 0;
    width: 80%;
  }
}

.preview-element {
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 8px;
  margin-bottom: 1rem;
  
  &.small {
    height: 20px;
    width: 70%;
    background: var(--gradient-secondary);
    margin-bottom: 0.5rem;
  }
}

.stats {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}

.stat {
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  margin-top: 0.25rem;
}

.features {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-color);
  }
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  svg {
    width: 30px;
    height: 30px;
  }
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.preview {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.preview-category {
  text-align: center;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
  }
}

.category-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem;
  background: var(--gradient-secondary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  svg {
    width: 25px;
    height: 25px;
  }
}

.preview-category h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.preview-category p {
  color: var(--text-tertiary);
  font-size: 0.875rem;
}

// 响应式设计
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    display: none;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .preview-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .preview-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>