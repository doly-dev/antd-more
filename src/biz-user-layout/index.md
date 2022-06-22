---
order: 0
nav:
  title: 组件
  path: /components
---

# BizUserLayout - 用户界面布局

常见的用户登录和忘记密码界面布局。

## 代码演示

### 基础用法

<code src="./demos/basic.tsx" iframe="500" />

### 登录页-通栏

内容向上偏移，无 logo

<code src="./demos/coral.tsx" iframe="500" />

### 登录页-分栏

<code src="./demos/agent.tsx" iframe="500" />

### 登录页-分栏翻转

<code src="./demos/agent-reverse.tsx" iframe="500" />

### 登录页-全屏

<code src="./demos/fullscreen.tsx" iframe="500" />

### 登录页-全屏分栏

<code src="./demos/fullscreen-column.tsx" iframe="500" />

### 忘记密码

<code src="./demos/forget-password.tsx" iframe="500" />

## API

```typescript
type BannerItem = {
  src: string;
  link?: string;
  title?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

type Feature = {
  title: React.ReactNode;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

type FooterLink = {
  text?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};
```

除了以下参数，其余和 dev 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| logo | 品牌图标 | `string` | - |
| title | 项目名称 | `ReactNode` | - |
| headerRightContent | 头部右侧内容 | `ReactNode` | - |
| renderHeader | 自定义头部渲染 | `(props: BizUserLayoutProps) => ReactNode` | - |
| hideHeader | 隐藏头部 | `boolean` | - |
| banner | 广告栏 | `BannerItem[]` | - |
| bannerCarouselProps | 广告轮播配置 | [CarouselProps] | - |
| bannerRightContent | 广告栏右侧内容 | `ReactNode` | - |
| sideRowProps | 侧边栏 Row 属性 | `RowProps` | - |
| sideColProps | 侧边栏 Col 属性 | `ColProps` | - |
| sideBanner | 侧边广告栏 | `BannerItem[]` | - |
| sideBannerCarouselProps | 侧边广告轮播配置 | [CarouselProps] | - |
| sideContent | 侧边内容 | `ReactNode` | - |
| features | 功能介绍 | `Feature[]` | - |
| footer | 底部链接和版权配置 | `{ links?: FooterLink[]; copyright?: ReactNode; }'` | - |

[carouselprops]: https://ant-design.gitee.io/components/carousel-cn/#API