import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsREXIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'rect',
            props: {
              width: '24',
              height: '24',
              fill: 'url(#pattern0_28_52)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_52',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_52',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_52',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkZJREFUSEtjZKAxYKSx+QyjFhAM4dEgGiRBVOXFVCrAxSQCc86P3ww/nrz/f1NFjFEf2Yk///z7VrvhXwcDA8NPQUEG/jJnlvLVp/8sPveQ4Tour4Aj+UYLy60lJ/7N332deReI76z5102Wn0liwQnGRcgam/3/tb3+zPAyevbflF1FzFtef2Z4ET37bzwDA8N/ghasOftvyb7rTHtACp00/7mI8DCKLD7+dxlM44cfDG+efWV4fSCP6QgrMxPTq8//Xzl0//UA+cZeg8Ey2pw57s0nxldV6/90pNkxhxnJM5j27vrbB/fBpaf/L19/yng11/l/8f4bDFt3XGVYoyD0XwdmwdUXjBeWnfi7rjeMqS3dnrGyduP/7P5d/6YxMDBw7Clm3uDS+9ffX5/FwUSZwdJBlcEmYfGfxLvPGF7BLWjc9Kd++SmG5U1+TDW+hgyhho3/jBkYGP4gez3Omjm8zZ9hYtUGhpyeUIZZcXMZg26//nOt0Y+5J2b23zhZEQapJh+m1gVH/s0q8GAumXOYcRaSBf/rl5/6uxzkopstzFd2X2Ncw876T4yRAVJeMTEyMHrrM/mFz/rjdeA6w4lQE2a/SZEMc916/9oWezLnvXjP+F5D6r/61N1/+4PNWUI5mP9zLz/FuAysWUGUQeLXa4ZPzxgYvoH4AgIMAhx/GFhZORhYOf8jCsQvvxh+PvvM8AbmK0UxBvH3vxh+fvjA8FFBlEEcZoY4AwM3Cy8Dx9PPDG9Hi4pBUlQQdAYFCkYjmWDgAQBi6+H6cCAKKwAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
