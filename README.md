# Vue Gallery - Vue组件演示框架

一个炫酷、可维护、易扩展的Vue 3组件展示和演示平台。

## ✨ 特性

- 🎨 **炫酷设计** - 现代化UI设计，支持深色/浅色主题切换
- 🔧 **易于维护** - 模块化架构，清晰的代码组织
- 📱 **响应式设计** - 完美适配各种设备
- 🚀 **高性能** - 基于Vue 3和Vite的快速构建
- 📚 **完整文档** - 自动生成组件API文档
- 🔍 **搜索功能** - 支持按名称、标签、分类搜索组件
- 🎯 **可扩展** - 插件化架构，易于添加新功能

## 🚀 快速开始

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看演示。

### 构建生产版本

```bash
yarn build
```

### 预览生产版本

```bash
yarn preview
```

## 📁 项目结构

```
src/
├── components/          # 核心组件
│   ├── Layout/         # 布局组件
│   ├── ThemeToggle.vue # 主题切换
│   ├── CodePreview.vue # 代码预览
│   ├── index.ts        # 组件注册系统
│   └── registry.ts     # 组件示例注册
├── examples/           # 组件示例
│   ├── ButtonExample.vue
│   └── CardExample.vue
├── styles/            # 样式文件
│   ├── variables.scss # CSS变量
│   └── global.scss    # 全局样式
├── views/             # 页面视图
│   ├── Home.vue       # 首页
│   ├── ComponentsList.vue # 组件列表
│   └── ComponentDemo.vue # 组件详情
├── router/            # 路由配置
├── plugins/           # 插件
├── utils/             # 工具函数
└── types/             # 类型定义
```

## 🎯 核心功能

### 1. 组件注册系统

```typescript
import { registerComponent } from '@/components/index'
import MyComponent from '@/examples/MyComponent.vue'

registerComponent({
  name: 'MyComponent',
  title: '我的组件',
  description: '组件描述',
  category: '基础组件',
  tags: ['按钮', '交互'],
  component: MyComponent,
  examples: [
    {
      name: 'basic',
      title: '基础用法',
      description: '基础示例',
      component: MyComponent,
      template: '<template>...</template>',
      script: '<script setup>...</script>',
      style: '<style>...</style>'
    }
  ],
  props: [
    {
      name: 'type',
      type: 'primary | secondary',
      description: '按钮类型',
      default: 'primary'
    }
  ],
  events: [
    {
      name: 'click',
      description: '点击事件',
      payload: 'MouseEvent'
    }
  ],
  slots: [
    {
      name: 'default',
      description: '默认插槽'
    }
  ]
})
```

### 2. 主题系统

支持浅色和深色主题，自动检测系统偏好：

```scss
:root {
  --primary-color: #6366f1;
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  // ... 更多变量
}

[data-theme="dark"] {
  --primary-color: #818cf8;
  --bg-primary: #0f172a;
  --text-primary: #f8fafc;
}
```

### 3. 响应式设计

使用SCSS提供响应式工具类：

```scss
// 移动端优先的响应式设计
@media (max-width: 768px) {
  .md\\:hidden { display: none; }
  .md\\:block { display: block; }
}

@media (min-width: 768px) {
  .lg\\:hidden { display: none; }
  .lg\\:block { display: block; }
}
```

### 4. 动画效果

集成VueUse Motion提供流畅的动画：

```typescript
import { fadeUp, scaleIn } from '@/plugins/motion'

// 在组件中使用
v-motion="fadeUp"
```

## 🎨 自定义主题

### 修改主色调

在 `src/styles/variables.scss` 中修改CSS变量：

```scss
:root {
  --primary-color: #your-color;
  --secondary-color: #your-secondary-color;
  --accent-color: #your-accent-color;
}
```

### 添加新的动画预设

在 `src/plugins/motion.ts` 中添加：

```typescript
export const customAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  enter: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}
```

## 📦 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **TypeScript** - 类型安全的JavaScript
- **Vite** - 下一代前端构建工具
- **Vue Router** - Vue官方路由管理器
- **SCSS** - CSS预处理器
- **VueUse** - Vue组合式工具集
- **@vueuse/motion** - 动画库

## 🔧 开发指南

### 添加新组件

1. 在 `src/examples/` 创建组件示例
2. 在 `src/components/registry.ts` 注册组件
3. 编写组件文档和示例代码
4. 测试组件在不同主题下的表现

### 添加新页面

1. 在 `src/views/` 创建页面组件
2. 在 `src/router/index.ts` 配置路由
3. 更新导航菜单

### 自定义样式

1. 修改 `src/styles/variables.scss` 中的变量
2. 在 `src/styles/global.scss` 添加全局样式
3. 使用组件级样式隔离

## 🤝 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [Vite](https://vitejs.dev/) - 快速的前端构建工具
- [VueUse](https://vueuse.org/) - Vue组合式工具集
- [Vue Router](https://router.vuejs.org/) - Vue官方路由