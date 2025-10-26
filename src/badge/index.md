---
category: Components
title: Badge
subtitle: 徽标数
description: 图标右上角的圆形徽标数字。
demo:
  cols: 2
group: 数据展示
---

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

<code src="./基本.vue">基本</code>
<code src="./独立使用.vue">独立使用</code>
<code src="./动态.vue">动态</code>
<code src="./封顶数字.vue">封顶数字</code>
<code src="./小红点.vue">小红点</code>
<code src="./状态点.vue">状态点</code>
<code src="./绸带.vue">绸带</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

### Badge

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 自定义小圆点的颜色 | string | - |  |
| count | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | VNode | - |  |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.7.0 |
| dot | 不展示数字，只有一个小红点 | boolean | false |  |
| offset | 设置状态点的位置偏移 | \[number, number] | - |  |
| overflowCount | 展示封顶的数字值 | number | 99 |  |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | false |  |
| size | 在设置了 `count` 的前提下有效，设置小圆点的大小 | `default` \| `small` | - | - |
| status | 设置 Badge 为状态点 | `success` \| `processing` \| `default` \| `error` \| `warning` | - |  |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.7.0 |
| text | 在设置了 `status` 的前提下有效，设置状态点的文本 | VNode | - |  |
| title | 设置鼠标放在状态点上时显示的文字 | string | - |  |

### Badge.Ribbon

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 自定义缎带的颜色 | string | - |  |
| placement | 缎带的位置，`start` 和 `end` 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end` |  |
| text | 缎带中填入的内容 | VNode | - |  |