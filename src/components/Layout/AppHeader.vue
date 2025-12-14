<template>
  <header class="app-header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <span class="logo-text">Vue Gallery</span>
        </router-link>
        
        <nav class="nav-menu">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: $route.path === item.path }"
          >
            <component :is="item.icon" class="nav-icon" />
            {{ item.label }}
          </router-link>
        </nav>
        
        <div class="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'

// 菜单项配置
const menuItems = [
  {
    path: '/',
    label: '首页',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
      h('polyline', { points: '9,22 9,12 15,12 15,22' })
    ])
  },
  {
    path: '/components',
    label: '组件',
    icon: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('rect', { x: '3', y: '3', width: '7', height: '7' }),
      h('rect', { x: '14', y: '3', width: '7', height: '7' }),
      h('rect', { x: '14', y: '14', width: '7', height: '7' }),
      h('rect', { x: '3', y: '14', width: '7', height: '7' })
    ])
  }
]

// Vue的h函数需要导入
import { h } from 'vue'
</script>

<style scoped lang="scss">
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
  background: var(--bg-secondary);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.25rem;
  transition: all var(--transition-normal);
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
  transition: transform var(--transition-normal);
  
  svg {
    width: 20px;
    height: 20px;
  }
}

.logo:hover .logo-icon {
  transform: rotate(5deg) scale(1.05);
}

.nav-menu {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: all var(--transition-normal);
  position: relative;
  
  &:hover {
    color: var(--text-primary);
    background: var(--bg-tertiary);
  }
  
  &.active {
    color: var(--primary-color);
    background: rgba(99, 102, 241, 0.1);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 2px;
      background: var(--primary-color);
      border-radius: 1px;
    }
  }
}

.nav-icon {
  width: 18px;
  height: 18px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

// 响应式设计
@media (max-width: 768px) {
  .header-content {
    gap: 1rem;
  }
  
  .nav-menu {
    display: none;
  }
  
  .logo-text {
    font-size: 1.125rem;
  }
}
</style>