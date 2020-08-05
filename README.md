# htmlGenerator
html模板编辑器

## 新增组件：
在elementLib.js -> elementLib[] 里新增组件对象
```
// 格式参考：
{
  id: "组件id",
  content: function () {
    var ele = new ElementObj("组件id", "组件名称", "组件html", "组件style");
    return ele;
  }()
}
```

## 模板导出：
点击保存模板后，模板内容会打印在浏览器控制台
