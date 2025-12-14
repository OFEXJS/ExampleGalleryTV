<template>
  <div class="cyber-components">
    <!-- 炫酷头部 -->
    <header class="cyber-header">
      <div class="container">
        <div class="header-content">
          <router-link to="/" class="back-btn">
            <CyberIcon type="home" :size="20" />
            <span>返回首页</span>
          </router-link>
          
          <div class="search-section">
            <div class="cyber-search">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="搜索组件..."
                class="search-input"
              />
              <div class="search-glow"></div>
            </div>
          </div>
          
          <div class="filter-section">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = selectedCategory === category ? '' : category"
              class="category-btn"
              :class="{ active: selectedCategory === category }"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- 组件网格 -->
    <section class="components-section">
      <div class="container">
        <div v-if="filteredComponents.length === 0" class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>未找到组件</h3>
          <p>尝试调整搜索关键词或筛选条件</p>
        </div>
        
        <div v-else class="components-grid">
          <div
            v-for="component in filteredComponents"
            :key="component.name"
            class="component-card cyber-border"
            @click="navigateToComponent(component.name)"
            @mouseenter="component.hovered = true"
            @mouseleave="component.hovered = false"
          >
            <div class="card-header">
              <CyberIcon :type="getIconType(component.name)" :size="32" />
              <div class="component-category">{{ component.category }}</div>
            </div>
            
            <div class="card-body">
              <h3 class="component-title">{{ component.title }}</h3>
              <p class="component-desc">{{ component.description }}</p>
              
              <div class="component-tags">
                <span
                  v-for="tag in component.tags"
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <div class="card-glow" :class="{ active: component.hovered }"></div>
            <div class="hover-overlay">
              <div class="overlay-content">
                <div class="overlay-icon">👁</div>
                <div class="overlay-text">查看详情</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 统计信息 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">{{ totalComponents }}</div>
            <div class="stat-label">总组件数</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ categories.length }}</div>
            <div class="stat-label">分类数量</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ filteredComponents.length }}</div>
            <div class="stat-label">当前结果</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CyberIcon from '@/components/CyberIcon.vue'

const router = useRouter()
const searchQuery = ref('')
const selectedCategory = ref('')

// 组件数据
const components = ref([
  {
    name: 'ButtonExample',
    title: '赛博按钮',
    description: '未来感十足的按钮组件，霓虹发光效果，多种交互状态',
    category: '基础组件',
    tags: ['按钮', '交互', '霓虹'],
    icon: '🔘',
    hovered: false
  },
  {
    name: 'CardExample',
    title: '赛博卡片',
    description: '科技感卡片容器，支持玻璃态效果，渐变边框',
    category: '布局组件',
    tags: ['卡片', '布局', '玻璃态'],
    icon: '🎴',
    hovered: false
  },
  {
    name: 'InputExample',
    title: '赛博输入框',
    description: '未来感输入组件，霓虹光标，扫描线效果',
    category: '表单组件',
    tags: ['输入', '表单', '扫描'],
    icon: '📝',
    hovered: false
  },
  {
    name: 'ModalExample',
    title: '赛博弹窗',
    description: '沉浸式弹窗组件，模糊背景，发光边框',
    category: '反馈组件',
    tags: ['弹窗', '反馈', '模态'],
    icon: '🌐',
    hovered: false
  },
  {
    name: 'NavigationExample',
    title: '赛博导航',
    description: '科技感导航组件，霓虹指示器，流动效果',
    category: '导航组件',
    tags: ['导航', '菜单', '流动'],
    icon: '🧭',
    hovered: false
  },
  {
    name: 'LoadingExample',
    title: '赛博加载',
    description: '炫酷加载动画，粒子效果，扫描进度',
    category: '加载组件',
    tags: ['加载', '动画', '进度'],
    icon: '⚡',
    hovered: false
  }
])

// 所有分类
const categories = computed(() => {
  const cats = Array.from(new Set(components.value.map(c => c.category)))
  return ['全部', ...cats]
})

// 过滤组件
const filteredComponents = computed(() => {
  let filtered = components.value
  
  // 按分类筛选
  if (selectedCategory.value && selectedCategory.value !== '全部') {
    filtered = filtered.filter(c => c.category === selectedCategory.value)
  }
  
  // 按搜索关键词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(c => 
      c.title.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query) ||
      c.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }
  
  return filtered
})

// 总组件数
const totalComponents = computed(() => components.value.length)

// 导航到组件详情
const navigateToComponent = (name: string) => {
  router.push(`/component/${name}`)
}

// 获取图标类型
const getIconType = (name: string): string => {
  const iconMap: Record<string, string> = {
    'ButtonExample': 'code',
    'CardExample': 'components',
    'InputExample': 'search',
    'ModalExample': 'external',
    'NavigationExample': 'search',
    'LoadingExample': 'rocket'
  }
  return iconMap[name] || 'code'
}

onMounted(() => {
  // 页面标题
  document.title = '组件库 - Vue Gallery'
})
</script>

<style scoped lang="scss">
.cyber-components {
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  padding-top: 100px;
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
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  gap: 2rem;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
  
  &:hover {
    color: var(--cyber-primary);
    
    .back-arrow {
      transform: translateX(-3px);
    }
  }
}

.back-arrow {
  transition: transform var(--transition-normal);
}

.search-section {
  flex: 1;
  max-width: 400px;
}

.cyber-search {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all var(--transition-normal);
  
  &:focus {
    outline: none;
    border-color: var(--cyber-primary);
    box-shadow: var(--glow-primary);
  }
  
  &::placeholder {
    color: var(--text-dim);
  }
}

.search-glow {
  position: absolute;
  inset: -2px;
  background: var(--gradient-cyber);
  border-radius: 14px;
  opacity: 0;
  transition: opacity var(--transition-normal);
  filter: blur(10px);
  z-index: -1;
}

.search-input:focus + .search-glow {
  opacity: 0.2;
}

.filter-section {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.category-btn {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    border-color: var(--cyber-primary);
    color: var(--cyber-primary);
  }
  
  &.active {
    background: var(--gradient-cyber);
    border-color: transparent;
    color: var(--bg-primary);
  }
}

/* ===== 组件网格 ===== */
.components-section {
  padding: 80px 0;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.component-card {
  position: relative;
  background: var(--bg-card);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    
    .hover-overlay {
      opacity: 1;
    }
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 1.5rem 0 1.5rem;
}

.component-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.component-category {
  background: var(--gradient-cyber);
  color: var(--bg-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.card-body {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.component-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.component-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.component-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(0, 255, 255, 0.1);
  color: var(--cyber-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.card-glow {
  position: absolute;
  inset: 0;
  background: var(--gradient-cyber);
  opacity: 0;
  transition: opacity var(--transition-normal);
  filter: blur(20px);
  z-index: -1;
  
  &.active {
    opacity: 0.1;
  }
}

.hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-content {
  text-align: center;
}

.overlay-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.overlay-text {
  background: var(--cyber-primary);
  color: var(--bg-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
}

/* ===== 空状态 ===== */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: var(--text-secondary);
}

/* ===== 统计信息 ===== */
.stats-section {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 3rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  .stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--cyber-primary);
    text-shadow: var(--shadow-neon);
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: var(--text-secondary);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

/* ===== 响应式设计 ===== */
@media (max-width: 768px) {
  .cyber-components {
    padding-top: 80px;
  }
  
  .header-content {
    height: 60px;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .search-section {
    max-width: 100%;
  }
  
  .filter-section {
    justify-content: center;
  }
  
  .components-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .components-section {
    padding: 60px 0;
  }
  
  .component-card {
    margin: 0 1rem;
  }
}
</style>