---
category: Components
group: 布局
title: Splitter
subtitle: 分隔面板
description: 自由切分指定区域
demo:
  cols: 1
tag: 5.21.0
---

## 何时使用

- 可以水平或垂直地分隔区域。
- 当需要自由拖拽调整各区域大小。
- 当需要指定区域的最大最小宽高时。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/size.vue">基本用法</code>

<code src="./demo/control.vue">受控模式</code>
<!-- <code src="./demo/vertical.vue">垂直方向</code> -->
<!-- <code src="./demo/collapsible.vue">可折叠</code> -->

<code src="./demo/collapsibleIcon.vue" version="5.27.0">可折叠图标显示</code>
<code src="./demo/multiple.vue">多面板</code>
<code src="./demo/group.vue">复杂组合</code>
<code src="./demo/lazy.vue" version="5.23.0">延迟渲染模式</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

> Splitter 组件需要通过子元素计算面板大小，因而其子元素仅支持 `Splitter.Panel`。

### Splitter

| 参数            | 说明                                                       | 类型                                                | 默认值       | 版本   |
| --------------- | ---------------------------------------------------------- | --------------------------------------------------- | ------------ | ------ |
| classNames      | 语义化结构 className                                       | [Record<SemanticDOM, string>](#semantic-dom)        | -            | 6.0.0  |
| collapsibleIcon | 折叠图标                                                   | `{start?: ReactNode; end?: ReactNode}`              | -            | 6.0.0  |
| draggerIcon     | 拖拽图标                                                   | `ReactNode`                                         | -            | 6.0.0  |
| lazy            | 延迟渲染模式                                               | `boolean`                                           | `false`      | 5.23.0 |
| orientation     | 布局方向                                                   | `horizontal` \| `vertical`                          | `horizontal` | -      |
| styles          | 语义化结构 style                                           | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | -            | 6.0.0  |
| vertical        | 排列方向，与 `orientation` 同时存在，以 `orientation` 优先 | boolean                                             | `false`      |        |
| onResize        | 面板大小变化回调                                           | `(sizes: number[]) => void`                         | -            | -      |
| onResizeEnd     | 拖拽结束回调                                               | `(sizes: number[]) => void`                         | -            | -      |
| onResizeStart   | 开始拖拽之前回调                                           | `(sizes: number[]) => void`                         | -            | -      |

### Panel

| 参数        | 说明                                              | 类型                                                                                     | 默认值  | 版本                        |
| ----------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------- | --------------------------- |
| collapsible | 快速折叠                                          | `boolean \| { start?: boolean; end?: boolean; showCollapsibleIcon?: boolean \| 'auto' }` | `false` | showCollapsibleIcon: 5.27.0 |
| defaultSize | 初始面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string`                                                                       | -       | -                           |
| max         | 最大阈值，支持数字 px 或者文字 '百分比%' 类型     | `number \| string`                                                                       | -       | -                           |
| min         | 最小阈值，支持数字 px 或者文字 '百分比%' 类型     | `number \| string`                                                                       | -       | -                           |
| resizable   | 是否开启拖拽伸缩                                  | `boolean`                                                                                | `true`  | -                           |
| size        | 受控面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string`                                                                       | -       | -                           |
