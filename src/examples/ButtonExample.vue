<template>
  <div class="button-example">
    <div class="button-group">
      <button class="btn btn-primary">主要按钮</button>
      <button class="btn btn-secondary">次要按钮</button>
      <button class="btn btn-ghost">幽灵按钮</button>
    </div>
    
    <div class="button-group">
      <button class="btn btn-primary btn-sm">小按钮</button>
      <button class="btn btn-primary">默认按钮</button>
      <button class="btn btn-primary btn-lg">大按钮</button>
    </div>
    
    <div class="button-group">
      <button class="btn btn-primary" disabled>禁用按钮</button>
      <button class="btn btn-primary loading">
        <svg class="loading-icon" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 0 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        加载中
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 按钮示例组件
</script>

<style scoped lang="scss">
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

.loading-icon {
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 150ms;
  border: none;
  font-size: 0.875rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  
  &.btn-primary {
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }
    
    &:active {
      background: var(--primary-active);
      transform: translateY(0);
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
  
  &.btn-sm {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
  }
  
  &.btn-lg {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  
  &.loading {
    cursor: wait;
  }
}
</style>