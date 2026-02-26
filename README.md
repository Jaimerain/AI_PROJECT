# Pantum Utilities - 奔图实用工具

基于 React + TypeScript 开发的奔图打印机实用工具应用，提供打印、扫描、票据处理等多种功能。

## 功能特性

- 🖨️ **打印功能** - 支持拖拽文件打印，批量处理
- 📷 **扫描功能** - 高质量图像扫描和处理
- 🎫 **票据处理** - 智能票据识别和管理
- 👥 **会务管理** - 座位牌、证件照等会务工具
- ✨ **智能高清** - 图像清晰度增强
- 🔍 **OCR识别** - 文字识别和提取

## 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **构建工具**: Create React App
- **样式方案**: CSS Modules + CSS Variables
- **图标系统**: Emoji Icons (可替换为 SVG)

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── Sidebar.tsx     # 侧边栏导航
│   ├── PrintCard.tsx   # 打印卡片
│   ├── FeatureGrid.tsx # 功能网格
│   └── BottomActionBar.tsx # 底部操作栏
├── App.tsx            # 主应用组件
├── App.css            # 全局样式
└── index.tsx          # 入口文件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

应用将在 http://localhost:3000 启动

### 构建生产版本

```bash
npm run build
```

## 组件说明

### Sidebar 侧边栏
- 应用导航菜单
- 设备管理入口
- 设置和帮助功能

### PrintCard 打印卡片
- 文件拖拽上传
- 支持多文件处理
- 裁剪和编辑功能

### FeatureGrid 功能网格
- 六大功能模块入口
- 渐变色彩设计
- 响应式布局

### BottomActionBar 底部操作栏
- 快捷操作按钮
- 设置和帮助入口
- 开始使用引导

## 设计规范

### 颜色系统
- 主色调: #4392FF (奔图蓝)
- 背景色: #F2F4FA
- 文字色: #272727
- 边框色: #E0E0E0

### 字体规范
- 主字体: Source Han Sans CN
- 备用字体: PingFang SC
- 基础字号: 14px
- 行高: 22px

### 间距系统
- 基础单位: 8px
- 卡片圆角: 12px
- 按钮圆角: 8px

## 开发指南

### 添加新功能

1. 在 `src/components/` 创建新组件
2. 更新 `App.tsx` 引入组件
3. 添加对应的样式文件
4. 更新 README 文档

### 样式开发

- 使用 CSS Variables 管理颜色
- 遵循 BEM 命名规范
- 保持响应式设计
- 注意浏览器兼容性

### 组件规范

- 使用 TypeScript 定义接口
- 组件Props要有默认值
- 保持组件单一职责
- 添加适当的注释

## 部署说明

### 环境要求
- Node.js >= 14
- npm >= 6

### 构建命令
```bash
npm run build
```

构建产物在 `build/` 目录，可直接部署到静态服务器。

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交代码变更
4. 创建 Pull Request

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系：

- 项目 Issues: [GitHub Issues](https://github.com/your-repo/pantum-utilities/issues)
- 邮箱: your-email@example.com

---

**注意**: 这是一个基于 Figma 设计稿实现的前端项目，设计文件链接: [Figma Design](https://www.figma.com/design/2oEBoZloJel75KP2P6MkDd/Pantum-Utilities)