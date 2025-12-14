<template>
  <button 
    @click="toggleTheme"
    class="theme-toggle"
    :class="{ 'dark': isDark }"
    :aria-label="`切换到${isDark ? '浅色' : '深色'}主题`"
  >
    <div class="theme-toggle-track">
      <div class="theme-toggle-thumb">
        <svg v-if="isDark" class="icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <svg v-else class="icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const applyTheme = (dark: boolean) => {
  const root = document.documentElement
  if (dark) {
    root.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.removeAttribute('data-theme')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // 从本地存储读取主题设置
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
  } else if (savedTheme === 'light') {
    isDark.value = false
  } else {
    // 检测系统主题偏好
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  applyTheme(isDark.value)
})

// 监听系统主题变化
watch(() => window.matchMedia('(prefers-color-scheme: dark)').matches, (prefersDark) => {
  if (localStorage.getItem('theme') === null) {
    isDark.value = prefersDark
  }
})

// 监听主题变化并应用
watch(isDark, applyTheme)

// 导出当前主题状态供其他组件使用
defineExpose({
  isDark
})
</script>

<style scoped lang="scss">
.theme-toggle {
  position: relative;
  width: 60px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 15px;
  overflow: hidden;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
}

.theme-toggle-track {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-normal);
}

.theme-toggle.dark .theme-toggle-track {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

.theme-toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform var(--transition-normal);
}

.theme-toggle.dark .theme-toggle-thumb {
  transform: translateX(30px);
  background: #1e293b;
}

.icon {
  width: 14px;
  height: 14px;
  color: #667eea;
  transition: color var(--transition-normal);
}

.theme-toggle.dark .icon {
  color: #fbbf24;
}

.sun {
  stroke: #fbbf24;
}

.moon {
  stroke: #6366f1;
}
</style>