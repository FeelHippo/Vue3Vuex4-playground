# discos


### Compiles and hot-reloads for development
```
npm run  serve
```
if "serve" is terminated without logs: 
``` 
npm config set ignore-scripts false
```
### add TypeScript
from the prompt: 
$ vue add typescript

and then modify shims-vue.d.ts:

```javascript
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}
```
