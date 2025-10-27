---
category: Components
group: 数据录入
title: InputNumber
subtitle: 数字输入框
description: 通过鼠标或键盘，输入范围内的数值。
demo:
  cols: 2
---

## 何时使用

当需要获取标准数值时。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.vue">基本</code>
<code src="./demo/size.vue">三种大小</code>
<code src="./demo/addon.vue">前置/后置标签</code>
<code src="./demo/disabled.vue">不可用</code>
<code src="./demo/digit.vue">高精度小数</code>
<code src="./demo/formatter.vue">格式化展示</code>
<code src="./demo/keyboard.vue">键盘行为</code>
<code src="./demo/change-on-wheel.vue" version="5.14.0">鼠标滚轮</code>
<code src="./demo/variant.vue" version="5.13.0">形态变体</code>
<code src="./demo/out-of-range.vue">超出边界</code>
<code src="./demo/presuffix.vue">前缀/后缀</code>
<code src="./demo/status.vue">自定义状态</code>
<code src="./demo/focus.vue" version="5.22.0">聚焦</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | ReactNode | - | 4.17.0 |
| addonBefore | 带标签的 input，设置前置标签 | ReactNode | - | 4.17.0 |
| autoFocus | 自动获取焦点 | boolean | false | - |
| changeOnBlur | 是否在失去焦点时，触发 `onChange` 事件（例如值超出范围时，重新限制回范围并触发事件） | boolean | true | 5.11.0 |
| changeOnWheel | 允许鼠标滚轮改变数值 | boolean | - | 5.14.0 |
| controls | 是否显示增减按钮，也可设置自定义箭头图标 | boolean \| { upIcon?: React.ReactNode; downIcon?: React.ReactNode; } | - | 4.19.0 |
| decimalSeparator | 小数点 | string | - | - |
| placeholder | 占位符 | string | - |  |
| defaultValue | 初始值 | number | - | - |
| disabled | 禁用 | boolean | false | - |
| formatter | 指定输入框展示值的格式 | function(value: number \| string, info: { userTyping: boolean, input: string }): string | - | info: 4.17.0 |
| keyboard | 是否启用键盘快捷行为 | boolean | true | 4.12.0 |
| max | 最大值 | number | [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) | - |
| min | 最小值 | number | [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) | - |
| parser | 指定从 `formatter` 里转换回数字的方式，和 `formatter` 搭配使用 | function(string): number | - | - |
| precision | 数值精度，配置 `formatter` 时会以 `formatter` 为准 | number | - | - |
| readOnly | 只读 | boolean | false | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| prefix | 带有前缀图标的 input | ReactNode | - | 4.17.0 |
| suffix | 带有后缀图标的 input | ReactNode | - | 5.20.0 |
| size | 输入框大小 | `large` \| `middle` \| `small` | - | - |
| step | 每次改变步数，可以为小数 | number \| string | 1 | - |
| stringMode | 字符值模式，开启后支持高精度小数。同时 `onChange` 将返回 string 类型 | boolean | false | 4.13.0 |
| value | 当前值 | number | - | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onChange | 变化回调 | function(value: number \| string \| null) | - | - |
| onPressEnter | 按下回车的回调 | function(e) | - | - |
| onStep | 点击上下箭头的回调 | (value: number, info: { offset: number, type: 'up' \| 'down' }) => void | - | 4.7.0 |

## Ref

| 名称 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| blur() | 移除焦点 | - |  |
| focus() | 获取焦点 | (option?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' }) | cursor - 5.22.0 |
| nativeElement | 获取原生 DOM 元素 | - | 5.17.3 |

