<template>
  <div class="component-demo">
    <div class="container">
      <div class="demo-header">
        <div class="breadcrumb">
          <router-link to="/" class="breadcrumb-link">首页</router-link>
          <span class="breadcrumb-separator">/</span>
          <router-link to="/components" class="breadcrumb-link">组件</router-link>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">{{ component?.title }}</span>
        </div>
        
        <div v-if="component" class="component-info">
          <h1 class="component-title">{{ component.title }}</h1>
          <p class="component-description">{{ component.description }}</p>
          
          <div class="component-meta">
            <span class="category-badge">{{ component.category }}</span>
            <div class="component-tags">
              <span v-for="tag in component.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="component" class="demo-content">
        <div class="demo-main">
          <div class="example-sections">
            <div
              v-for="(example, index) in component.examples"
              :key="example.name"
              :id="`example-${index}`"
              class="example-section"
            >
              <div class="example-header">
                <h3>{{ example.title }}</h3>
                <p>{{ example.description }}</p>
              </div>
              
              <div class="example-demo">
                <div class="demo-preview">
                  <component :is="example.component" />
                </div>
              </div>
              
              <CodePreview
                :template="example.template"
                :script="example.script"
                :style="example.style"
              />
            </div>
          </div>
          
          <div v-if="component.props || component.events || component.slots" class="api-section">
            <h2 class="section-title">API 文档</h2>
            
            <div v-if="component.props" class="api-subsection">
              <h3>Props</h3>
              <div class="api-table">
                <table>
                  <thead>
                    <tr>
                      <th>属性名</th>
                      <th>类型</th>
                      <th>默认值</th>
                      <th>说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="prop in component.props" :key="prop.name">
                      <td><code>{{ prop.name }}</code></td>
                      <td><code>{{ prop.type }}</code></td>
                      <td><code>{{ prop.default ?? '-' }}</code></td>
                      <td>{{ prop.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div v-if="component.events" class="api-subsection">
              <h3>Events</h3>
              <div class="api-table">
                <table>
                  <thead>
                    <tr>
                      <th>事件名</th>
                      <th>参数</th>
                      <th>说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="event in component.events" :key="event.name">
                      <td><code>{{ event.name }}</code></td>
                      <td><code>{{ event.payload ?? '-' }}</code></td>
                      <td>{{ event.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div v-if="component.slots" class="api-subsection">
              <h3>Slots</h3>
              <div class="api-table">
                <table>
                  <thead>
                    <tr>
                      <th>插槽名</th>
                      <th>属性</th>
                      <th>说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="slot in component.slots" :key="slot.name">
                      <td><code>{{ slot.name }}</code></td>
                      <td><code>{{ slot.props ?? '-' }}</code></td>
                      <td>{{ slot.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div class="demo-sidebar">
          <div class="sidebar-section">
            <h4>快速导航</h4>
            <nav class="sidebar-nav">
              <a
                v-for="(example, index) in component.examples"
                :key="example.name"
                :href="`#example-${index}`"
                class="nav-link"
              >
                {{ example.title }}
              </a>
              <a href="#api-docs" class="nav-link">API 文档</a>
            </nav>
          </div>
        </div>
      </div>
      
      <div v-else class="not-found">
        <div class="not-found-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h3>组件未找到</h3>
        <p>抱歉，您要查看的组件不存在</p>
        <router-link to="/components" class="btn btn-primary">
          返回组件列表
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getComponentByName } from '@/components/index'
import CodePreview from '@/components/CodePreview.vue'

const route = useRoute()
const router = useRouter()

// 获取组件信息
const component = computed(() => {
  const name = route.params.name as string
  return getComponentByName(name)
})

onMounted(() => {
  // 如果组件不存在，重定向到组件列表
  if (!component.value) {
    router.replace('/components')
    return
  }
  
  // 设置页面标题
  if (component.value) {
    document.title = `${component.value.title} - Vue Gallery`
  }
})

// 监听路由变化
watch(() => route.params.name, () => {
  if (!component.value) {
    router.replace('/components')
  } else if (component.value) {
    document.title = `${component.value.title} - Vue Gallery`
  }
})
</script>

<style scoped lang="scss">
.component-demo {
  padding: 2rem 0;
}

.demo-header {
  margin-bottom: 3rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
}

.breadcrumb-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-normal);
  
  &:hover {
    color: var(--primary-color);
  }
}

.breadcrumb-separator {
  color: var(--text-tertiary);
}

.breadcrumb-current {
  color: var(--text-primary);
  font-weight: 500;
}

.component-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.component-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 800px;
}

.component-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.category-badge {
  padding: 0.375rem 0.75rem;
  background: var(--primary-color);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.component-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.demo-content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
}

.demo-main {
  min-width: 0;
}

.example-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.example-section {
  scroll-margin-top: 2rem;
}

.example-header {
  margin-bottom: 2rem;
}

.example-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.example-header p {
  color: var(--text-secondary);
}

.example-demo {
  margin-bottom: 2rem;
}

.demo-preview {
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.api-section {
  margin-top: 3rem;
  scroll-margin-top: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border-color);
}

.api-subsection {
  margin-bottom: 2rem;
}

.api-subsection h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.api-table {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
}

.api-table table {
  width: 100%;
  border-collapse: collapse;
}

.api-table th {
  background: var(--bg-tertiary);
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}

.api-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.api-table tr:last-child td {
  border-bottom: none;
}

.api-table code {
  background: var(--bg-tertiary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  color: var(--primary-color);
}

.demo-sidebar {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.sidebar-section {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
}

.sidebar-section h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-link {
  display: block;
  padding: 0.5rem 0.75rem;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--bg-tertiary);
    color: var(--text-primary);
  }
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  color: var(--text-tertiary);
  
  svg {
    width: 100%;
    height: 100%;
  }
}

.not-found h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.not-found p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

// 响应式设计
@media (max-width: 1024px) {
  .demo-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .demo-sidebar {
    position: static;
    order: -1;
  }
  
  .sidebar-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .nav-link {
    flex-shrink: 0;
  }
}

@media (max-width: 768px) {
  .component-demo {
    padding: 1rem 0;
  }
  
  .component-title {
    font-size: 2rem;
  }
  
  .component-description {
    font-size: 1rem;
  }
  
  .demo-preview {
    padding: 1.5rem;
    min-height: 150px;
  }
  
  .api-table {
    overflow-x: auto;
  }
  
  .api-table table {
    min-width: 500px;
  }
  
  .breadcrumb {
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .component-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .demo-preview {
    padding: 1rem;
  }
  
  .api-table th,
  .api-table td {
    padding: 0.75rem 0.5rem;
  }
}
</style>