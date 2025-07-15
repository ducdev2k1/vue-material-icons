# Vue Material Icons

---

## English

> A lightweight Vue 3 icon library with 2000+ Material Icons rendered as inline SVG components. Includes full TypeScript support, auto-import capability, and optimized tree-shaking for fast and scalable development.

---

## ✨ Features

- 2000+ Material Icons as Vue 3 components (SVG-based)
- Tree-shakable & optimized for performance
- Auto-import support with `unplugin-vue-components`
- Full TypeScript support
- Customizable via props (size, color, class, etc.)
- Works great with Vite, Nuxt 3, Vue CLI

---

## 📦 Installation

```bash
npm i @ducdev2k1/vue-material-icons
# or
yarn add @ducdev2k1/vue-material-icons
```

---

## 🚀 Usage

### Global Registration

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import MaterialIcons from '@ducdev2k1/vue-material-icons';

const app = createApp(App);
app.use(MaterialIcons);
app.mount('#app');
```

### Local Import

```ts
import { HomeIcon, AddIcon } from '@ducdev2k1/vue-material-icons';

export default {
  components: {
    HomeIcon,
    AddIcon,
  },
};
```

### Auto Import (with unplugin-vue-components)

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';

export default {
  plugins: [
    Components({
      resolvers: [
        (name) => {
          if (name.endsWith('Icon')) {
            return {
              importName: name,
              path: 'vue-material-icons',
            };
          }
        },
      ],
    }),
  ],
};
```

---

## 🧩 Props

| Prop  | Type   | Description                      | Default   |
|-------|--------|----------------------------------|-----------|
| size  | string | Icon size (e.g. `24px`, `1rem`)  | `24px`    |
| color | string | Icon color                       | `inherit` |
| class | string | Custom CSS or Tailwind classes   | —         |

```vue
<AddIcon size="32px" color="red" class="ml-2" />
```

---

## 📁 Icon List

All icons follow PascalCase + `Icon` suffix naming convention.

| Material Name        | Component Name        |
|----------------------|-----------------------|
| `home`               | `HomeIcon`            |
| `search`             | `SearchIcon`          |
| `add_circle_outline` | `AddCircleOutlineIcon`|

> Browse icons at: [https://fonts.google.com/icons](https://fonts.google.com/icons)

---

## 🛠 Development

```bash
npm install
npm run dev
```

To build:

```bash
npm run build
```

---

## 📄 License

MIT © [DucDev](https://github.com/ducdev2k1)

---

## 🇻🇳 Tiếng Việt

> Thư viện biểu tượng nhẹ dành cho Vue 3, với hơn 2000+ Material Icons được hiển thị dưới dạng component SVG. Hỗ trợ đầy đủ TypeScript, auto-import và tối ưu tree-shaking để phát triển nhanh chóng, hiệu quả và linh hoạt.

---

## ✨ Tính năng nổi bật

- Hơn 2000+ biểu tượng Material dưới dạng component Vue (dựa trên SVG)
- Tối ưu hiệu suất với khả năng tree-shaking
- Hỗ trợ auto-import qua `unplugin-vue-components`
- Tích hợp đầy đủ TypeScript
- Tuỳ chỉnh dễ dàng qua props (kích thước, màu sắc, class,...)
- Hoạt động tốt với Vite, Nuxt 3, Vue CLI

---

## 📦 Cài đặt

```bash
npm i @ducdev2k1/vue-material-icons
# hoặc
yarn add @ducdev2k1/vue-material-icons
```

---

## 🚀 Cách sử dụng

### Đăng ký toàn cục

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import MaterialIcons from '@ducdev2k1/vue-material-icons';

const app = createApp(App);
app.use(MaterialIcons);
app.mount('#app');
```

### Import từng icon

```ts
import { HomeIcon, AddIcon } from '@ducdev2k1/vue-material-icons';

export default {
  components: {
    HomeIcon,
    AddIcon,
  },
};
```

### Tự động import với `unplugin-vue-components`

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';

export default {
  plugins: [
    Components({
      resolvers: [
        (name) => {
          if (name.endsWith('Icon')) {
            return {
              importName: name,
              path: 'vue-material-icons',
            };
          }
        },
      ],
    }),
  ],
};
```

---

## 🧩 Thuộc tính (props)

| Prop  | Kiểu      | Mô tả                            | Mặc định  |
|-------|-----------|----------------------------------|-----------|
| size  | string    | Kích thước icon (vd: `24px`)     | `24px`    |
| color | string    | Màu biểu tượng (vd: `#000`, `red`)| `inherit` |
| class | string    | Class CSS tùy chỉnh              | —         |

```vue
<AddIcon size="32px" color="red" class="ml-2" />
```

---

## 📁 Danh sách biểu tượng

Tất cả biểu tượng được đặt tên theo quy tắc PascalCase và hậu tố `Icon`.

| Tên gốc Material      | Tên component Vue       |
|------------------------|-------------------------|
| `home`                 | `HomeIcon`              |
| `search`               | `SearchIcon`            |
| `add_circle_outline`   | `AddCircleOutlineIcon`  |

> Xem danh sách icon tại: [https://fonts.google.com/icons](https://fonts.google.com/icons)

## 📄 Giấy phép

MIT © [DucDev](https://github.com/ducdev2k1)
