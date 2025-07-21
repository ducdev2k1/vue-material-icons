import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsCAIIcon',
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
              fill: 'url(#pattern0_17_259)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_259',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_259',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_259',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,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',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
