<h1 align="center">use-state-call</h1>

<div align="center">
  
设置 useState 回调函数并获取更新后 state。

[NPM][npm-url]&nbsp;&nbsp;&nbsp;&nbsp;[Github][github-url]

[npm-url]: https://www.npmjs.com/package/use-state-call
[github-url]: https://github.com/lwq0615/use-state-call.git
  
</div>

> 基于 useState 与 useEffect 封装的 hook，为 setState 提供回调函数，并保证可以在任何位置获取到更新后的 state。

## ✨ 特性

- 🌍 适用于任何版本的 React。
- 🌈 通过 getState 函数获取 state。
- 📦 使用 TypeScript 开发，提供完整的类型定义文件。

## ⚙️ 如何使用

- 安装依赖

```bash
npm install use-state-call
```

- 示例

```javascript
import useStateCall from 'use-state-call'

export default function App(props) {

  // 注意：与传统useState不同的是，useStateCall返回数组的第一个参数为一个函数，函数的返回值为state的值
  const [getCount, setCount] = useStateCall(0);

  const logCount = () => {
    // use-state-call可以允许在任何位置获取到最新（通过setState函数更新后）的state
    // 因此在这里将会打印count+1后的值
    console.log(getCount())
  }

  const update = () => {
    // count加1
    setCount(getCount() + 1, logCount)
  }

  return (
    <div>
      <span>count：{getCount()}</span>
      <button onClick={update}>更新值</button>
    </div>
  )
}

```
