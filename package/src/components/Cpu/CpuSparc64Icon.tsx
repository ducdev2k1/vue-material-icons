import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuSparc64Icon',
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
              fill: 'url(#pattern0_26_296)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_296',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_296',
              transform: 'scale(0.0138889)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_296',
              width: '72',
              height: '72',
              preserveAspectRatio: 'none',
              href: 'data:image/jpeg;base64,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',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
