import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CpuSparc64Icon',
        props: {
          size: {
            type: [String, Number],
            default: 32,
          },
          color: String,
          viewBox: {
          type: String,
          default: '0 0 32 32',},
        },
        setup(props: IIconProps, { attrs }) {
          return () =>
            useIconRender(
              [
  {
    'tag': 'rect',
    'props': {
      'width': '24',
      'height': '24',
      'fill': 'url(#pattern0_16_175)'
    }
  },
  {
    'tag': 'defs',
    'props': {}
  },
  {
    'tag': 'pattern',
    'props': {
      'id': 'pattern0_16_175',
      'patternContentUnits': 'objectBoundingBox',
      'width': '1',
      'height': '1'
    }
  },
  {
    'tag': 'use',
    'props': {
      'href': '#image0_16_175',
      'transform': 'scale(0.03125)'
    }
  },
  {
    'tag': 'image',
    'props': {
      'id': 'image0_16_175',
      'width': '32',
      'height': '32',
      'preserveAspectRatio': 'none',
      'href': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEVMaXGrq6tCQkKbm5smJib09PR9fX3///8AAABXV1fDw8P6+vre3t6fn5/S0tKPj4+Li4sdHR1gYGBqamrt7e23t7cTExM1NTWkpKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrvxriAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVNJREFUOI3Fks1uGzEMhIcUtb/dtZ1L3//9WqCpkc1KosgcYrnJwmiB9tABBFHAhxmCFPD/FW73TE5fiz2NdYbIyUTkaRgrhG/AwGd8W+IWz3lF3jKAvEWN3hyGXcPpCipWSzBGZ5BqYG4Ou5T1CgCOaZfTu3Nal7E5nEvIhYjclKb4PLObVMr5HlE97l1lstXj/hoodSp1KlRbROwLYQHk59jpANPegDL7pTlctnNZUyXylPuozmlCDS8zN4DG70vO0sEmSa+BUmVmd/ygG9B/nJ50u7X6IQCl5gzGIw2Q3wN6n88v8rPM/wDovXoc8UF/C/RhAYDQ33/U516Wa00E5GB+cMiKqAEuFwaW8CAi6uYlv+A6Am6EY0RwCaNZsOLZawT82EMNqh4JnX9x5WJ6iOjjjJWzj45nipBjhEGzV512x+DulQMf1m38fmLi9vxnvQHE8J2LhY79sQAAAABJRU5ErkJggg=='
    }
  }
],
              props,
              attrs
            );
        },
      });