<template>
  <svg 
    :class="iconClass" 
    :viewBox="viewBox" 
    :width="size" 
    :height="size"
    v-bind="iconProps"
  >
    <template v-if="type === 'vue-gallery'">
      <use href="#vue-gallery-icon" />
    </template>
    <template v-else-if="type === 'home'">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" fill="none"/>
      <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2" fill="none"/>
    </template>
    <template v-else-if="type === 'components'">
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" fill="none"/>
      <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" fill="none"/>
    </template>
    <template v-else-if="type === 'search'">
      <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" fill="none"/>
    </template>
    <template v-else-if="type === 'rocket'">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 2.52 5.47-5.31-2.67L8 17.47V21a2 2 0 0 1 2 2h4a2 2 0 0 1 2-2v-3.53l-6.21 3.07a2 2 0 0 1-2.53-2.67L7 14.14l5-4.87 6.89-1.01L12 2z" 
            stroke="currentColor" stroke-width="2" fill="none"/>
    </template>
    <template v-else-if="type === 'code'">
      <polyline points="16,18 22,12 16,6" stroke="currentColor" stroke-width="2" fill="none"/>
      <polyline points="8,6 2,12 8,18" stroke="currentColor" stroke-width="2" fill="none"/>
    </template>
    <template v-else-if="type === 'external'">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" 
            stroke="currentColor" stroke-width="2" fill="none"/>
      <polyline points="15,3 21,3 21,3" stroke="currentColor" stroke-width="2" fill="none"/>
    </template>
    <template v-else-if="type === 'sun'">
      <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
    </template>
    <template v-else-if="type === 'moon'">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
            stroke="currentColor" stroke-width="2" fill="none"/>
    </template>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type: string
  size?: number | string
  color?: string
  animated?: boolean
  glow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  animated: false,
  glow: false
})

const viewBox = computed(() => {
  const viewBoxs: Record<string, string> = {
    'vue-gallery': '0 0 200 60',
    'home': '0 0 24 24',
    'components': '0 0 24 24',
    'search': '0 0 24 24',
    'rocket': '0 0 24 24',
    'code': '0 0 24 24',
    'external': '0 0 24 24',
    'sun': '0 0 24 24',
    'moon': '0 0 24 24'
  }
  return viewBoxs[props.type] || '0 0 24 24'
})

const iconClass = computed(() => [
  'cyber-icon',
  {
    'animated': props.animated,
    'glow': props.glow,
    [`size-${props.size}`]: true
  }
])

const iconProps = computed(() => ({
  fill: props.color || 'currentColor',
  stroke: props.color || 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round' as const,
  'stroke-linejoin': 'round' as const
}))
</script>

<style scoped>
.cyber-icon {
  display: inline-block;
  vertical-align: middle;
  transition: all var(--transition-normal);
}

.cyber-icon.animated {
  animation: pulse 2s ease-in-out infinite;
}

.cyber-icon.glow {
  filter: drop-shadow(0 0 10px currentColor);
}

.cyber-icon.size-16 {
  width: 16px;
  height: 16px;
}

.cyber-icon.size-20 {
  width: 20px;
  height: 20px;
}

.cyber-icon.size-24 {
  width: 24px;
  height: 24px;
}

.cyber-icon.size-32 {
  width: 32px;
  height: 32px;
}

.cyber-icon.size-48 {
  width: 48px;
  height: 48px;
}

.cyber-icon:hover {
  transform: scale(1.1);
  color: var(--cyber-primary);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
</style>