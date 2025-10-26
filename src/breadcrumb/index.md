---
category: Components
group: 导航
title: Breadcrumb
subtitle: 面包屑
description: 显示当前页面在系统层级结构中的位置，并能向上返回。
demo:
  cols: 2
---

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 代码演示

<code src="./带有图标的.vue">带有图标的</code>
<code src="./带下拉的菜单面板.vue">带下拉的菜单面板</code>
<code src="./自定义语义结构.vue">自定义语义结构</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

### Breadcrumb

| 参数       | 说明                                               | 类型                                                                                                           | 默认值 | 版本  |
| ---------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------ | ----- |
| classNames | 为组件内部各语义结构自定义类名，支持对象或函数     | [Record<SemanticDOM, string> \| (info: { props }) => Record<SemanticDOM, string>](#semantic-dom)               | -      |       |
| itemRender | 自定义链接函数，和 react-router 配置使用           | (route, params, routes, paths) => VNode                                                                    | -      |       |
| params     | 路由的参数                                         | object                                                                                                         | -      |       |
| items      | 路由栈信息                                         | [items\[\]](#itemtype)                                                                                         | -      | 5.3.0 |
| separator  | 分隔符自定义                                       | VNode                                                                                                      | `/`    |       |
| styles     | 为组件内部各语义结构自定义内联样式，支持对象或函数 | [Record<SemanticDOM, CSSProperties> \| (info: { props }) => Record<SemanticDOM, CSSProperties>](#semantic-dom) | -      |       |

### ItemType

> type ItemType = Omit<[RouteItemType](#routeitemtype), 'title' | 'path'> | [SeparatorType](#separatortype)

### RouteItemType

| 参数          | 说明                                                           | 类型                                  | 默认值 | 版本   |
| ------------- | -------------------------------------------------------------- | ------------------------------------- | ------ | ------ |
| className     | 自定义类名                                                     | string                                | -      |        |
| dropdownProps | 弹出下拉菜单的自定义配置                                       | [Dropdown](/components/dropdown-cn)   | -      |        |
| href          | 链接的目的地，不能和 `path` 共用                               | string                                | -      |        |
| path          | 拼接路径，每一层都会拼接前一个 `path` 信息。不能和 `href` 共用 | string                                | -      |        |
| menu          | 菜单配置项                                                     | [MenuProps](/components/menu-cn/#api) | -      | 4.24.0 |
| onClick       | 单击事件                                                       | (e:MouseEvent) => void                | -      |        |
| title         | 名称                                                           | VNode                             | -      | 5.3.0  |

### SeparatorType

```ts
const item = {
  type: 'separator', // Must have
  separator: '/',
};
```

| 参数      | 说明           | 类型        | 默认值 | 版本  |
| --------- | -------------- | ----------- | ------ | ----- |
| type      | 标记为分隔符   | `separator` |        | 5.3.0 |
| separator | 要显示的分隔符 | VNode   | `/`    | 5.3.0 |
