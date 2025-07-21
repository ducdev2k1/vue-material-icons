import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuPpcIcon',
  props: {
    size: {
      type: [String, Number],
      default: 32,
    },
    color: String,
    viewBox: {
      type: String,
      default: '0 0 32 32',
    },
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
              fill: 'url(#pattern0_16_173)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_16_173',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_16_173',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_16_173',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEVMaXGDg4P8/PzIyMhfX18/Pz8YGBgAAAD////w8PCcnJyRkZHT09MnJycNDQ339/cyMjJNTU2np6dxcXG3t7fh4eHs7OwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEb4m9AAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAQhJREFUOI3t0Utu6zAUA9CjT+z8g3b/iyxQI40lS3qDuPO3gHLEi0uAIMkf/gvBEWXGOmEuGPuzzGRw2nBNddM7Rg2TcjqMTpIxb2i1PZYBIT3qfR0buyCvu18u8c3W8NxZhBnbFa8z58PAOaIc7vckK1vQ85JYMX3H4DI2cuylJNmjkG816PdqHnEwXmP08GvxxewrcHvyjI3pNMZ4h01yODZl6jSdrWNdU4xz3wWxsqFd0mZq0XxuI1DSblEZseQttx+WuaTj4oJLa5Hko3BreSSnwscrj5VXpIVQk+QnMTrvtPVdz73AhOi6T+EzcNhnWi4TFiQphNQg9BDWtCtqP/bQfq8/+Afr73mrQR9DaQAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
