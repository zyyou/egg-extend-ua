# egg UA扩展
plugin.js中配置
```
exports.useragent = {
  enable: true,
  package: 'egg-extend-ua'
};
```

# ctx公开对象
```
this.ctx.isMobile;
this.ctx.isIOS;
this.ctx.isAndroid;
```
