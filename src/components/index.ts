import type { Component } from 'vue'

// 组件配置接口
export interface ComponentConfig {
  name: string
  title: string
  description: string
  category: string
  tags: string[]
  component: Component
  examples: ComponentExample[]
  props?: PropConfig[]
  events?: EventConfig[]
  slots?: SlotConfig[]
}

// 组件示例接口
export interface ComponentExample {
  name: string
  title: string
  description: string
  component: Component
  code?: string
  template?: string
  script?: string
  style?: string
}

// 属性配置接口
export interface PropConfig {
  name: string
  type: string
  description: string
  required?: boolean
  default?: any
  options?: string[]
}

// 事件配置接口
export interface EventConfig {
  name: string
  description: string
  payload?: string
}

// 插槽配置接口
export interface SlotConfig {
  name: string
  description: string
  props?: string
}

// 组件注册表
export const componentRegistry: ComponentConfig[] = []

// 注册组件
export function registerComponent(config: ComponentConfig) {
  componentRegistry.push(config)
}

// 获取所有组件
export function getAllComponents(): ComponentConfig[] {
  return componentRegistry
}

// 根据名称获取组件
export function getComponentByName(name: string): ComponentConfig | undefined {
  return componentRegistry.find(comp => comp.name === name)
}

// 根据分类获取组件
export function getComponentsByCategory(category: string): ComponentConfig[] {
  return componentRegistry.filter(comp => comp.category === category)
}

// 获取所有分类
export function getAllCategories(): string[] {
  const categories = componentRegistry.map(comp => comp.category)
  return Array.from(new Set(categories))
}

// 搜索组件
export function searchComponents(query: string): ComponentConfig[] {
  const lowerQuery = query.toLowerCase()
  return componentRegistry.filter(comp => 
    comp.title.toLowerCase().includes(lowerQuery) ||
    comp.description.toLowerCase().includes(lowerQuery) ||
    comp.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}