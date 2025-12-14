<template>
  <div class="code-preview">
    <div class="code-preview-header">
      <div class="code-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="activeTab = tab.key"
          class="code-tab"
          :class="{ active: activeTab === tab.key }"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="code-actions">
        <button
          @click="copyCode"
          class="code-action-btn"
          :disabled="!currentCode"
          :class="{ copied: copied }"
        >
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          {{ copied ? '已复制' : '复制' }}
        </button>
      </div>
    </div>
    
    <div class="code-preview-content">
      <div v-if="currentCode" class="code-container">
        <pre><code :class="`language-${activeTab}`" v-html="highlightedCode"></code></pre>
      </div>
      <div v-else class="code-empty">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
        <p>暂无{{ currentTabLabel }}代码</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  template?: string
  script?: string
  style?: string
}

const props = withDefaults(defineProps<Props>(), {
  template: '',
  script: '',
  style: ''
})

const activeTab = ref<'template' | 'script' | 'style'>('template')
const copied = ref(false)

const tabs = [
  { key: 'template' as const, label: '模板' },
  { key: 'script' as const, label: '脚本' },
  { key: 'style' as const, label: '样式' }
]

const currentTabLabel = computed(() => {
  const tab = tabs.find(t => t.key === activeTab.value)
  return tab?.label || ''
})

const currentCode = computed(() => {
  switch (activeTab.value) {
    case 'template':
      return props.template
    case 'script':
      return props.script
    case 'style':
      return props.style
    default:
      return ''
  }
})

const highlightedCode = computed(() => {
  if (!currentCode.value) return ''
  
  // 简单的语法高亮实现（生产环境建议使用 Prism.js 或 highlight.js）
  const code = currentCode.value
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/(["'])([^"']*)\1/g, '<span class="string">$1$2$1</span>')
    .replace(/\b(true|false|null|undefined)\b/g, '<span class="boolean">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
    .replace(/\b(function|const|let|var|if|else|for|while|return|import|export|from|default|class|extends)\b/g, '<span class="keyword">$1</span>')
    .replace(/(&lt;!--.*?--&gt;)/g, '<span class="comment">$1</span>')
    .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
    .replace(/(\/\*.*?\*\/)/gs, '<span class="comment">$1</span>')
  
  return code
})

const copyCode = async () => {
  if (!currentCode.value) return
  
  try {
    await navigator.clipboard.writeText(currentCode.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script>

<style scoped lang="scss">
.code-preview {
  border-radius: 12px;
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.code-preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
}

.code-tabs {
  display: flex;
  gap: 0.5rem;
}

.code-tab {
  padding: 0.375rem 0.75rem;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--text-primary);
    background: var(--bg-secondary);
  }
  
  &.active {
    background: var(--primary-color);
    color: white;
  }
}

.code-actions {
  display: flex;
  gap: 0.5rem;
}

.code-action-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.875rem;
  transition: all var(--transition-fast);
  
  &:hover:not(:disabled) {
    background: var(--bg-primary);
    color: var(--text-primary);
    border-color: var(--primary-color);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.copied {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
}

.icon {
  width: 14px;
  height: 14px;
}

.code-preview-content {
  max-height: 400px;
  overflow: auto;
}

.code-container {
  background: var(--bg-primary);
}

code {
  display: block;
  padding: 1rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-primary);
  white-space: pre-wrap;
  word-break: break-word;
}

// 语法高亮样式
:deep(.string) {
  color: #10b981;
}

:deep(.keyword) {
  color: #3b82f6;
  font-weight: 600;
}

:deep(.number) {
  color: #f59e0b;
}

:deep(.boolean) {
  color: #8b5cf6;
  font-weight: 600;
}

:deep(.comment) {
  color: #6b7280;
  font-style: italic;
}

.code-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  color: var(--text-tertiary);
}

.empty-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  opacity: 0.5;
}

// 滚动条样式
.code-preview-content::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.code-preview-content::-webkit-scrollbar-track {
  background: var(--bg-tertiary);
}

.code-preview-content::-webkit-scrollbar-thumb {
  background: var(--text-tertiary);
  border-radius: 3px;
  
  &:hover {
    background: var(--text-secondary);
  }
}
</style>