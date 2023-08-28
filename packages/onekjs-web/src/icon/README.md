## 图标

使用

```
import icons from "@onekjs/icons";
import '@onekjs/icons/style.css'

app.use(icons);

or

import { IconAdd } from '@onekjs/icons';
// template
<o-icon-add />
```

<demo src="./basic.vue"
title="图标类型"
desc="这是图标演示"
importMap="{'vue-typical': 'https://github.com/onekjs/onek-ui/tree/main/packages/components/src/icon/__demo__/icon.vue'}">
</demo>

雪碧图加载

```
import { loadSprites } from '@onekjs/icons';

// 加载雪碧图
loadSprites();
// template
<o-icon name='add' />
```

<demo src="./all.vue"
title="图标类型"
desc="这是雪碧图加载图标演示"
importMap="{'vue-typical': 'https://github.com/onekjs/onek-ui/tree/main/packages/components/src/icon/__demo__/all.vue'}">
</demo>
