# 获取主题
使用配置消费者 `n-config-consumer` 来获取当前位置上的主题。

```html
<div>
  <n-button @click="theme = 'dark'">深色</n-button>
  <n-button @click="theme = 'light'">浅色</n-button>
</div>
<n-config-provider :theme="theme">
  <n-card>
    <n-config-consumer
      @theme-change="handleThemeChange"
      v-slot="{ theme }"
    >
      <div>主题：{{ theme }}</div>
    </n-config-consumer>
  </n-card>
</n-config-provider>
```
```js
export default {
  data () {
    return {
      theme: 'dark'
    }
  },
  methods: {
    handleThemeChange (theme) {
      this.$NMessage.info(theme)
    }
  }
}
```
```css
.n-button {
  margin: 0 12px 8px 0;
}
```