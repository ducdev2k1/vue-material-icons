import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsIPAIcon',
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
              fill: 'url(#pattern0_28_28)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_28',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_28',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_28',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUBJREFUSEvt0ztLHVEUxfGfEcT4ALWySRBiZWMlWmgKCRYGEXyBhZ2KYuoQiWBjYdBSkkIwHyBFsFEMiKhYaKH4/AA2SlCw0yYoR7ZwuSC3CBcs7sBh5gxrz3/ttecUyfNVlOfvKwByJlyI6GVElObQij1U4R7X+PeMvVeowRWPv3kdbnEZ+mK8w1/cJEEJ5rCBRZyhFm0hyuZU4jw0KygP4G9MYydgDRhNgDKs4xtG8BGpcDWeq/ETu3E/Qhc+YRjteIL24Bc+RFelCVCBCwxhHssYxACa8Br9OMAp/mALs3iLiWjxGGNojPp6jGcDJjGFE3SjM7pJhfvxPgG20YfvaMEbbKIjVoJ/TrPIjOgrejMcJfcLOIyMZ7AU++TuPb5E53eR/xp+oDkNOHVUOMkv4yTndPE/gsKQc6aX94geADlJPqaGQjZEAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
