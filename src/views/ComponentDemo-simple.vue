<template>
  <div class="component-demo">
    <div class="container">
      <div class="demo-header">
        <router-link to="/components" class="back-link">
          ← 返回组件列表
        </router-link>
        
        <h1>{{ component?.title || '组件未找到' }}</h1>
        <p v-if="component">{{ component.description }}</p>
      </div>
      
      <div v-if="component" class="demo-content">
        <div class="demo-section">
          <h2>基础演示</h2>
          <div class="demo-preview">
            <component :is="component.component" />
          </div>
        </div>
      </div>
      
      <div v-else class="not-found">
        <h3>组件未找到</h3>
        <p>抱歉，您要查看的组件不存在</p>
        <router-link to="/components" class="btn">
          返回组件列表
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ButtonExample from '@/examples/ButtonExample.vue'
import CardExample from '@/examples/CardExample.vue'

const route = useRoute()
const router = useRouter()

// 模拟组件数据
const components = {
  ButtonExample: {
    title: '按钮',
    description: '各种样式和状态的按钮组件，支持不同尺寸和交互效果',
    component: ButtonExample
  },
  CardExample: {
    title: '卡片',
    description: '灵活的卡片容器，支持多种样式和布局',
    component: CardExample
  }
}

const component = computed(() => {
  const name = route.params.name as string
  return components[name as keyof typeof components]
})

onMounted(() => {
  if (!component.value) {
    router.replace('/components')
  }
})
</script>

<style scoped>
.component-demo {
  padding: 2rem 0;
}

.demo-header {
  margin-bottom: 3rem;
}

.back-link {
  display: inline-block;
  color: var(--primary-color);
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

.demo-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.demo-header p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 800px;
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.demo-preview {
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.not-found p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
}

.btn:hover {
  background: var(--primary-hover);
}
</style>