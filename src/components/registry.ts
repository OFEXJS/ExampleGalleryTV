import { registerComponent } from './index'
import ButtonExample from '@/examples/ButtonExample.vue'
import CardExample from '@/examples/CardExample.vue'

// 注册按钮组件
registerComponent({
  name: 'ButtonExample',
  title: '按钮',
  description: '各种样式和状态的按钮组件，支持不同尺寸和交互效果',
  category: '基础组件',
  tags: ['按钮', '交互', '表单'],
  component: ButtonExample,
  examples: [
    {
      name: 'basic',
      title: '基础按钮',
      description: '展示不同样式的按钮，包括主要、次要和幽灵按钮',
      component: ButtonExample,
      template: `<template>
  <div class="button-example">
    <div class="button-group">
      <button class="btn btn-primary">主要按钮</button>
      <button class="btn btn-secondary">次要按钮</button>
      <button class="btn btn-ghost">幽灵按钮</button>
    </div>
  </div>
</template>`,
      script: `<script setup lang="ts">
// 按钮示例组件
</script>`,
      style: `<style scoped lang="scss">
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms;
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
  
  &.btn-secondary {
    background: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    
    &:hover {
      background: var(--primary-color);
      color: white;
    }
  }
  
  &.btn-ghost {
    background: transparent;
    color: var(--text-primary);
    
    &:hover {
      background: var(--bg-tertiary);
    }
  }
}
</style>`
    }
  ],
  props: [
    {
      name: 'type',
      type: 'primary | secondary | ghost',
      description: '按钮类型',
      default: 'primary'
    },
    {
      name: 'size',
      type: 'small | medium | large',
      description: '按钮尺寸',
      default: 'medium'
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '是否禁用',
      default: 'false'
    },
    {
      name: 'loading',
      type: 'boolean',
      description: '是否显示加载状态',
      default: 'false'
    }
  ],
  events: [
    {
      name: 'click',
      description: '点击按钮时触发',
      payload: 'MouseEvent'
    }
  ],
  slots: [
    {
      name: 'default',
      description: '按钮内容'
    },
    {
      name: 'icon',
      description: '按钮图标'
    }
  ]
})

// 注册卡片组件
registerComponent({
  name: 'CardExample',
  title: '卡片',
  description: '灵活的卡片容器，支持多种样式和布局，可以展示各种内容',
  category: '布局组件',
  tags: ['卡片', '布局', '容器'],
  component: CardExample,
  examples: [
    {
      name: 'basic',
      title: '基础卡片',
      description: '展示不同样式的卡片，包括基础卡片、悬停效果卡片和玻璃态卡片',
      component: CardExample,
      template: `<template>
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
    </div>
  </div>
</template>`,
      script: `<script setup lang="ts">
// 卡片示例组件
</script>`,
      style: `<style scoped lang="scss">
.demo-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: all var(--transition-normal);
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
</style>`
    }
  ],
  props: [
    {
      name: 'variant',
      type: 'default | elevated | outlined | glass',
      description: '卡片变体样式',
      default: 'default'
    },
    {
      name: 'padding',
      type: 'none | small | medium | large',
      description: '内边距大小',
      default: 'medium'
    },
    {
      name: 'hoverable',
      type: 'boolean',
      description: '是否启用悬停效果',
      default: 'true'
    }
  ],
  events: [
    {
      name: 'click',
      description: '点击卡片时触发',
      payload: 'MouseEvent'
    }
  ],
  slots: [
    {
      name: 'default',
      description: '卡片主要内容'
    },
    {
      name: 'header',
      description: '卡片头部内容'
    },
    {
      name: 'footer',
      description: '卡片底部内容'
    },
    {
      name: 'actions',
      description: '卡片操作区域'
    }
  ]
})