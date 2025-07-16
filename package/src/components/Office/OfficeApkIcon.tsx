import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'OfficeApkIcon',
        props: {
          size: {
            type: [String, Number],
            default: 32,
          },
          color: String,
          viewBox: String,
        },
        setup(props: IIconProps, { attrs }) {
          return () =>
            useIconRender(
              [
  {
    'tag': 'g',
    'props': {
      'path': 'url(#clip0_11_13)'
    }
  },
  {
    'tag': 'rect',
    'props': {
      'width': '32',
      'height': '32',
      'fill': 'url(#pattern0_11_13)'
    }
  },
  {
    'tag': 'defs',
    'props': {}
  },
  {
    'tag': 'pattern',
    'props': {
      'id': 'pattern0_11_13',
      'patternContentUnits': 'objectBoundingBox',
      'width': '1',
      'height': '1'
    }
  },
  {
    'tag': 'use',
    'props': {
      'href': '#image0_11_13',
      'transform': 'scale(0.00390625)'
    }
  },
  {
    'tag': 'clipPath',
    'props': {
      'id': 'clip0_11_13'
    }
  },
  {
    'tag': 'rect',
    'props': {
      'width': '32',
      'height': '32',
      'fill': 'white'
    }
  },
  {
    'tag': 'image',
    'props': {
      'id': 'image0_11_13',
      'width': '256',
      'height': '256',
      'preserveAspectRatio': 'none',
      'href': 'data:image/png;base64,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'
    }
  }
],
              props,
              attrs
            );
        },
      });