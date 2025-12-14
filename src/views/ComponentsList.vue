<template>
  <div class="components-list">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">组件库</h1>
        <p class="page-description">
          探索我们精心设计的Vue组件集合，每个组件都经过精心打磨，提供最佳的用户体验
        </p>
      </div>
      
      <div class="filters-section">
        <div class="search-box">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索组件..."
            class="search-input"
          />
        </div>
        
        <div class="category-filters">
          <button
            v-for="category in allCategories"
            :key="category"
            @click="selectedCategory = selectedCategory === category ? '' : category"
            class="category-btn"
            :class="{ active: selectedCategory === category }"
          >
            {{ category }}
            <span class="category-count">
              {{ getComponentsByCategory(category).length }}
            </span>
          </button>
        </div>
      </div>
      
      <div v-if="filteredComponents.length === 0" class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>
        <h3>未找到组件</h3>
        <p>尝试调整搜索关键词或筛选条件</p>
      </div>
      
      <div v-else class="components-grid">
        <div
          v-for="component in filteredComponents"
          :key="component.name"
          class="component-card"
          @click="navigateToComponent(component.name)"
          v-motion="cardMotion"
        >
          <div class="card-preview">
            <div class="preview-container">
              <component :is="component.component" />
            </div>
          </div>
          
          <div class="card-content">
            <div class="card-header">
              <h3 class="component-title">{{ component.title }}</h3>
              <span class="component-category">{{ component.category }}</span>
            </div>
            
            <p class="component-description">{{ component.description }}</p>
            
            <div class="component-tags">
              <span
                v-for="tag in component.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
            
            <div class="card-actions">
              <span class="action-link">
                查看详情
                <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12,5 19,12 12,19"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAllComponents, getComponentsByCategory, getAllCategories } from '@/components/index'
import type { ComponentConfig } from '@/components/index'

const router = useRouter()
const searchQuery = ref('')
const selectedCategory = ref('')

// 获取所有组件和分类
const allComponents = getAllComponents()
const allCategories = getAllCategories()

// 动画配置
const cardMotion = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0 },
  delay: 100
}

// 过滤组件
const filteredComponents = computed(() => {
  let components = allComponents
  
  // 按分类筛选
  if (selectedCategory.value) {
    components = components.filter((comp: ComponentConfig) => comp.category === selectedCategory.value)
  }
  
  // 按搜索关键词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    components = components.filter((comp: ComponentConfig) => 
      comp.title.toLowerCase().includes(query) ||
      comp.description.toLowerCase().includes(query) ||
      comp.tags.some((tag: string) => tag.toLowerCase().includes(query))
    )
  }
  
  return components
})

// 导航到组件详情页
const navigateToComponent = (name: string) => {
  router.push(`/component/${name}`)
}

onMounted(() => {
  // 页面标题
  document.title = '组件列表 - Vue Gallery'
})
</script>

<style scoped lang="scss">
.components-list {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.filters-section {
  margin-bottom: 3rem;
}

.search-box {
  position: relative;
  max-width: 400px;
  margin: 0 auto 2rem;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--text-tertiary);
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all var(--transition-normal);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
  }
}

.category-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all var(--transition-normal);
  
  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    background: rgba(99, 102, 241, 0.05);
  }
  
  &.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
}

.category-count {
  background: rgba(0, 0, 0, 0.1);
  padding: 0.125rem 0.5rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  
  .category-btn.active & {
    background: rgba(255, 255, 255, 0.2);
  }
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  color: var(--text-tertiary);
  
  svg {
    width: 100%;
    height: 100%;
  }
}

.empty-state h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: var(--text-secondary);
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.component-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-color);
    
    .arrow-icon {
      transform: translateX(2px);
    }
  }
}

.card-preview {
  padding: 2rem;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-content {
  padding: 1.5rem;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.component-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.component-category {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: 12px;
  font-weight: 500;
}

.component-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.component-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  border-radius: 6px;
  font-weight: 500;
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.action-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.875rem;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform var(--transition-normal);
}

// 响应式设计
@media (max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .category-filters {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: var(--bg-tertiary);
    }
    
    &::-webkit-scrollbar-thumb {
      background: var(--text-tertiary);
      border-radius: 2px;
    }
  }
}

@media (max-width: 480px) {
  .components-list {
    padding: 1rem 0;
  }
  
  .page-header {
    margin-bottom: 2rem;
  }
  
  .filters-section {
    margin-bottom: 2rem;
  }
}
</style>