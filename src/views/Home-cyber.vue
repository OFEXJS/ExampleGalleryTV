<template>
  <div class="cyber-home">
    <!-- 炫酷头部 -->
    <header class="cyber-header">
      <div class="container">
        <div class="header-content">
          <div class="logo-section">
            <div class="cyber-logo">
              <img src="../assets/logo.svg" alt="Vue Gallery" class="logo-image" />
            </div>
          </div>
          
          <nav class="cyber-nav">
            <router-link to="/" class="nav-link active">
              <span class="nav-text">首页</span>
              <div class="nav-indicator"></div>
            </router-link>
            <router-link to="/components" class="nav-link">
              <span class="nav-text">组件</span>
              <div class="nav-indicator"></div>
            </router-link>
          </nav>
          
          <div class="cyber-actions">
            <button @click="toggleTheme" class="theme-btn">
              <span v-if="isDark" class="theme-icon">🌙</span>
              <span v-else class="theme-icon">☀️</span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- 扫描线效果 -->
      <div class="scan-line"></div>
    </header>

    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-main">
            <h1 class="hero-title">
              <span class="title-line">NEXT GEN</span>
              <span class="title-line gradient-text">VUE 组件</span>
              <span class="title-line">演示框架</span>
            </h1>
            
            <p class="hero-subtitle">
              炫酷赛博朋克风格 • 超高可维护性 • 极致性能体验
            </p>
            
            <div class="hero-stats">
              <div class="stat-card">
                <div class="stat-value">50+</div>
                <div class="stat-label">组件</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">100+</div>
                <div class="stat-label">示例</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">∞</div>
                <div class="stat-label">可能</div>
              </div>
            </div>
            
            <div class="hero-actions">
              <router-link to="/components" class="cyber-btn primary">
                <span>探索组件</span>
                <div class="btn-glow"></div>
              </router-link>
              <button class="cyber-btn secondary">
                <span>GitHub</span>
                <div class="btn-glow"></div>
              </button>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="cyber-grid">
              <div class="grid-line" v-for="i in 20" :key="i"></div>
            </div>
            <div class="floating-cards">
              <div class="float-card card-1">Vue 3</div>
              <div class="float-card card-2">TypeScript</div>
              <div class="float-card card-3">Vite</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 特性展示 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title gradient-text">核心特性</h2>
        
        <div class="features-grid">
          <div 
            v-for="feature in features" 
            :key="feature.id"
            class="feature-card cyber-border"
            @mouseenter="feature.hovered = true"
            @mouseleave="feature.hovered = false"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
            <div class="feature-glow" :class="{ active: feature.hovered }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 预览区域 -->
    <section class="preview-section">
      <div class="container">
        <h2 class="section-title gradient-text">组件预览</h2>
        
        <div class="preview-grid">
          <div 
            v-for="preview in previews" 
            :key="preview.id"
            class="preview-card"
            @click="$router.push('/components')"
          >
            <div class="preview-icon">{{ preview.icon }}</div>
            <h4>{{ preview.title }}</h4>
            <p>{{ preview.count }} 个组件</p>
            <div class="preview-overlay">
              <div class="overlay-text">点击查看</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部信息 -->
    <footer class="cyber-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="brand-text">VUE.GALLERY</div>
            <div class="brand-tagline">NEXT GENERATION COMPONENTS</div>
          </div>
          <div class="footer-links">
            <a href="#" class="footer-link">文档</a>
            <a href="#" class="footer-link">API</a>
            <a href="#" class="footer-link">贡献</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'


// 主题状态
const isDark = ref(true)

// 特性数据
const features = ref([
  {
    id: 1,
    icon: '🎨',
    title: '赛博美学',
    description: '未来感十足的视觉设计，霓虹发光效果，渐变色彩系统',
    hovered: false
  },
  {
    id: 2,
    icon: '⚡',
    title: '极速性能',
    description: 'Vue 3 + Vite 构建，毫秒级响应，极致优化',
    hovered: false
  },
  {
    id: 3,
    icon: '🔧',
    title: '超高维护',
    description: '模块化架构，TypeScript支持，完整的类型系统',
    hovered: false
  },
  {
    id: 4,
    icon: '🎯',
    title: '极易扩展',
    description: '插件化设计，组件自动注册，文档自动生成',
    hovered: false
  },
  {
    id: 5,
    icon: '📱',
    title: '完美适配',
    description: '响应式设计，移动端优先，触摸优化',
    hovered: false
  },
  {
    id: 6,
    icon: '🚀',
    title: '开箱即用',
    description: '零配置启动，完整示例，最佳实践',
    hovered: false
  }
])

// 预览数据
const previews = ref([
  { id: 1, icon: '🔘', title: '基础组件', count: 20 },
  { id: 2, icon: '📝', title: '表单组件', count: 15 },
  { id: 3, icon: '🧭', title: '导航组件', count: 8 },
  { id: 4, icon: '💬', title: '反馈组件', count: 7 }
])

// 主题切换
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'dark')
})
</script>

<style scoped lang="scss">
.cyber-home {
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

/* ===== 头部样式 ===== */
.cyber-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  
  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient-cyber);
    animation: scan 3s linear infinite;
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.cyber-logo {
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
}

.logo-image {
  height: 100%;
  width: auto;
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.3));
  transition: all var(--transition-normal);
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.6));
  }
}

.cyber-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 600;
  transition: all var(--transition-normal);
  
  &:hover {
    color: var(--cyber-primary);
    
    .nav-indicator {
      width: 100%;
    }
  }
  
  &.active {
    color: var(--cyber-primary);
    
    .nav-indicator {
      width: 100%;
      background: var(--gradient-cyber);
    }
  }
}

.nav-indicator {
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 2px;
  width: 0;
  background: var(--cyber-primary);
  transition: all var(--transition-normal);
}

.theme-btn {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    border-color: var(--cyber-primary);
    box-shadow: var(--glow-primary);
  }
}

/* ===== 英雄区域 ===== */
.hero-section {
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -2px;
}

.title-line {
  display: block;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  letter-spacing: 1px;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  min-width: 100px;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--cyber-primary);
    box-shadow: var(--glow-primary);
  }
}

.stat-value {
  font-size: 2rem;
  font-weight: 900;
  color: var(--cyber-primary);
  text-shadow: var(--shadow-neon);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

.cyber-btn {
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid var(--cyber-primary);
  color: var(--text-primary);
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-normal);
  overflow: hidden;
  
  &.primary {
    background: var(--gradient-cyber);
    border: none;
    color: var(--bg-primary);
  }
  
  &:hover {
    transform: translateY(-2px);
    
    .btn-glow {
      opacity: 1;
    }
  }
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: var(--gradient-cyber);
  opacity: 0;
  transition: opacity var(--transition-normal);
  filter: blur(10px);
  z-index: -1;
}

/* ===== 视觉效果 ===== */
.hero-visual {
  position: relative;
  height: 400px;
}

.cyber-grid {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.grid-line {
  position: absolute;
  background: var(--cyber-primary);
  opacity: 0.1;
  width: 1px;
  height: 100%;
}

.floating-cards {
  position: relative;
  z-index: 10;
}

.float-card {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--cyber-primary);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  color: var(--cyber-primary);
  box-shadow: var(--glow-primary);
  
  &.card-1 {
    top: 20%;
    left: 10%;
    animation: float 3s ease-in-out infinite;
  }
  
  &.card-2 {
    top: 50%;
    right: 20%;
    animation: float 3s ease-in-out infinite 0.5s;
  }
  
  &.card-3 {
    bottom: 20%;
    left: 30%;
    animation: float 3s ease-in-out infinite 1s;
  }
}

/* ===== 特性展示 ===== */
.features-section,
.preview-section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  position: relative;
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 16px;
  transition: all var(--transition-normal);
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.feature-desc {
  color: var(--text-secondary);
  line-height: 1.6;
}

.feature-glow {
  position: absolute;
  inset: 0;
  background: var(--gradient-cyber);
  opacity: 0;
  transition: opacity var(--transition-normal);
  filter: blur(20px);
  
  &.active {
    opacity: 0.1;
  }
}

/* ===== 预览区域 ===== */
.preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.preview-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--cyber-primary);
    
    .preview-overlay {
      opacity: 1;
    }
  }
}

.preview-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.preview-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.preview-card p {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
  backdrop-filter: blur(2px);
}

.overlay-text {
  background: var(--cyber-primary);
  color: var(--bg-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
}

/* ===== 底部 ===== */
.cyber-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 3rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  text-align: left;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.brand-tagline {
  color: var(--cyber-primary);
  font-size: 0.875rem;
  letter-spacing: 2px;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-normal);
  
  &:hover {
    color: var(--cyber-primary);
  }
}

/* ===== 响应式设计 ===== */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    height: 300px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .preview-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .header-content {
    height: 60px;
  }
  
  .cyber-logo {
    font-size: 1.2rem;
  }
  
  .cyber-nav {
    gap: 1rem;
  }
  
  .hero-section {
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .preview-grid {
    grid-template-columns: 1fr;
  }
}
</style>