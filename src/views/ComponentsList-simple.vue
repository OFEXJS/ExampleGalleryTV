<template>
  <div class="components-list">
    <div class="container">
      <h1>组件库</h1>
      <p>探索我们精心设计的Vue组件集合</p>
      
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索组件..."
          class="search-input"
        />
      </div>
      
      <div class="components-grid">
        <div
          v-for="component in filteredComponents"
          :key="component.name"
          class="component-card"
          @click="navigateToComponent(component.name)"
        >
          <h3>{{ component.title }}</h3>
          <p>{{ component.description }}</p>
          <div class="component-meta">
            <span class="category">{{ component.category }}</span>
            <div class="tags">
              <span
                v-for="tag in component.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

// 模拟组件数据
const components = [
  {
    name: 'ButtonExample',
    title: '按钮',
    description: '各种样式和状态的按钮组件，支持不同尺寸和交互效果',
    category: '基础组件',
    tags: ['按钮', '交互', '表单']
  },
  {
    name: 'CardExample', 
    title: '卡片',
    description: '灵活的卡片容器，支持多种样式和布局',
    category: '布局组件',
    tags: ['卡片', '布局', '容器']
  }
]

const filteredComponents = computed(() => {
  if (!searchQuery.value.trim()) {
    return components
  }
  
  const query = searchQuery.value.toLowerCase()
  return components.filter(comp => 
    comp.title.toLowerCase().includes(query) ||
    comp.description.toLowerCase().includes(query) ||
    comp.tags.some(tag => tag.toLowerCase().includes(query))
  )
})

const navigateToComponent = (name: string) => {
  router.push(`/component/${name}`)
}
</script>

<style scoped>
.components-list {
  padding: 2rem 0;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.components-list > .container > p {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.search-box {
  max-width: 400px;
  margin: 0 auto 2rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.component-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.component-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-color);
}

.component-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.component-card p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.component-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.category {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}
</style>