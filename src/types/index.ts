// 组件相关类型
export interface ComponentMeta {
  name: string
  title: string
  description: string
  category: string
  tags: string[]
  version?: string
  author?: string
}

export interface ExampleMeta {
  name: string
  title: string
  description: string
  live?: boolean
  expanded?: boolean
}

export interface CodeMeta {
  template?: string
  script?: string
  style?: string
}

export interface APIMeta {
  props?: PropMeta[]
  events?: EventMeta[]
  slots?: SlotMeta[]
  methods?: MethodMeta[]
}

export interface PropMeta {
  name: string
  type: string
  description: string
  required?: boolean
  default?: any
  options?: string[]
  deprecated?: boolean
}

export interface EventMeta {
  name: string
  description: string
  payload?: string
  deprecated?: boolean
}

export interface SlotMeta {
  name: string
  description: string
  props?: string
  deprecated?: boolean
}

export interface MethodMeta {
  name: string
  description: string
  params?: ParamMeta[]
  returns?: string
  deprecated?: boolean
}

export interface ParamMeta {
  name: string
  type: string
  description?: string
  required?: boolean
}

// 路由相关类型
export interface RouteMeta {
  title?: string
  description?: string
  icon?: string
  hidden?: boolean
  requiresAuth?: boolean
}

// 主题相关类型
export type Theme = 'light' | 'dark' | 'auto'

export interface ThemeConfig {
  theme: Theme
  primaryColor: string
  borderRadius: string
  fontSize: string
}

// 布局相关类型
export interface LayoutConfig {
  header: {
    fixed: boolean
    height: number
  }
  sidebar: {
    collapsed: boolean
    width: number
  }
  footer: {
    fixed: boolean
    height: number
  }
}

// 动画相关类型
export interface AnimationConfig {
  duration: number
  easing: string
  delay: number
}

export interface MotionPreset {
  initial: Record<string, any>
  enter: Record<string, any>
  leave?: Record<string, any>
  visibleOnce?: Record<string, any>
}

// 搜索相关类型
export interface SearchOptions {
  query?: string
  category?: string
  tags?: string[]
  author?: string
}

export interface SearchResult {
  components: ComponentMeta[]
  total: number
  page: number
  pageSize: number
}