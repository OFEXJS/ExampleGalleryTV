

// 主题工具
export const themeUtils = {
  // 获取系统主题偏好
  getSystemTheme(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  },

  // 应用主题
  applyTheme(theme: 'light' | 'dark') {
    const root = document.documentElement
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', theme)
  },

  // 获取保存的主题
  getSavedTheme(): 'light' | 'dark' | null {
    return localStorage.getItem('theme') as 'light' | 'dark' | null
  },

  // 初始化主题
  initTheme() {
    const savedTheme = this.getSavedTheme()
    const theme = savedTheme || this.getSystemTheme()
    this.applyTheme(theme)
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getSavedTheme()) {
        this.applyTheme(e.matches ? 'dark' : 'light')
      }
    })
  }
}

// 复制到剪贴板
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    
    try {
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    } catch (fallbackErr) {
      document.body.removeChild(textArea)
      return false
    }
  }
}

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

// 格式化代码
export const formatCode = (code: string): string => {
  // 简单的代码格式化，生产环境建议使用专业的格式化库
  try {
    // 这里可以集成 prettier 或其他格式化工具
    return code.trim()
  } catch (error) {
    return code
  }
}

// 生成唯一ID
export const generateId = (prefix = 'id'): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// 深拷贝
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as any
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as any
  }
  
  if (typeof obj === 'object') {
    const cloned = {} as any
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key])
      }
    }
    return cloned
  }
  
  return obj
}

// 获取文件扩展名
export const getFileExtension = (filename: string): string => {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2)
}

// 格式化文件大小
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 滚动到元素
export const scrollToElement = (
  element: HTMLElement,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' }
): void => {
  element.scrollIntoView(options)
}

// 检查元素是否在视口中
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect()
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// 延迟执行
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 重试函数
export const retry = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delayMs: number = 1000
): Promise<T> => {
  let lastError: Error
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      if (attempt < maxAttempts) {
        await delay(delayMs * attempt) // 指数退避
      }
    }
  }
  
  throw lastError!
}

// 本地存储工具
export const storage = {
  // 设置
  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn('Failed to save to localStorage:', error)
    }
  },

  // 获取
  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue || null
    } catch (error) {
      console.warn('Failed to read from localStorage:', error)
      return defaultValue || null
    }
  },

  // 删除
  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error)
    }
  },

  // 清空
  clear(): void {
    try {
      localStorage.clear()
    } catch (error) {
      console.warn('Failed to clear localStorage:', error)
    }
  }
}

// URL工具
export const urlUtils = {
  // 获取查询参数
  getQueryParam(name: string): string | null {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
  },

  // 设置查询参数
  setQueryParam(name: string, value: string): void {
    const url = new URL(window.location.href)
    url.searchParams.set(name, value)
    window.history.replaceState({}, '', url.toString())
  },

  // 删除查询参数
  removeQueryParam(name: string): void {
    const url = new URL(window.location.href)
    url.searchParams.delete(name)
    window.history.replaceState({}, '', url.toString())
  }
}