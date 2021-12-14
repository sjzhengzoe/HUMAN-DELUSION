# BFC

## 什么是 BFC

BFC 是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发 BFC 的条件，则 BFC 中的元素布局不受外部影响。

## 创建 BFC 的条件

- 根元素 body
- 设置元素浮动 float 并且值不是 none
- 元素设置绝对定位 position 为 absolute 或 fixed
- display 值为 inline-block、table-cell、table-caption、flex 等
- overflow 值为 hidden、auto、scroll

## BFC 的应用场景

- 阻止 margin 重叠
- 清除内部浮动
- 设置 BFC 的元素不与浮动元素重叠
