<template>
  <div class="home">
    <div class="container">
      <section class="hero">
        <h1>Vue Gallery 组件演示框架</h1>
        <p>炫酷、可维护、易扩展的Vue组件展示平台</p>
        <div class="actions">
          <router-link to="/components" class="btn">浏览组件</router-link>
        </div>
      </section>
      
      <section class="features">
        <h2>核心特性</h2>
        <div class="grid">
          <div class="card">
            <h3>🎨 炫酷设计</h3>
            <p>现代化的UI设计，支持主题切换</p>
          </div>
          <div class="card">
            <h3>🔧 易于维护</h3>
            <p>模块化的代码结构，便于团队协作</p>
          </div>
          <div class="card">
            <h3>🚀 高性能</h3>
            <p>基于Vue 3的响应式系统</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// 简化版本
</script>

<style scoped>
.home {
  padding: 2rem 0;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
}

.btn:hover {
  background: var(--primary-hover);
}

.features {
  margin-bottom: 4rem;
}

.features h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.card p {
  color: var(--text-secondary);
}
</style>