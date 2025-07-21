import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CpuAvrIcon',
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
      'fill': 'url(#pattern0_16_168)'
    }
  },
  {
    'tag': 'defs',
    'props': {}
  },
  {
    'tag': 'pattern',
    'props': {
      'id': 'pattern0_16_168',
      'patternContentUnits': 'objectBoundingBox',
      'width': '1',
      'height': '1'
    }
  },
  {
    'tag': 'use',
    'props': {
      'href': '#image0_16_168',
      'transform': 'scale(0.03125)'
    }
  },
  {
    'tag': 'image',
    'props': {
      'id': 'image0_16_168',
      'width': '32',
      'height': '32',
      'preserveAspectRatio': 'none',
      'href': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEVMaXE8PDzIx8fu7u4rKytvb2/Y2NgAAAD///8bGxutra16enpnZ2eamZnBwcH39/dNTU3j4+NbW1uDg4ONjY22trbLy8sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABdhWSKAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAPNJREFUOI3tkcFOw0AMBWfXu5ukSQXl/7+RokKhcbw2l3JopUrc4V3H0rPewH9+lTQ+ZgpF82Pu6TAbUsA9atQtSDBo1Fi+IupehktYpBHKBkKnGlTFUwJAzHg6SmEDWKVnN0Ezc3LaTlmriFmGHSitTXBgL8ynDd2OP59IQXNOiZY8jHdBB2eJnnlWwKQ0Z7bJbFs0SmIqFpjnPJ8BLFPgdfyA9gYGJ3c0k9v5WhEdxDL4goMOmtmHh3QATF4UH0tJTmwJDgbzF0H268GlWtB7W4vuqnWbeppWLem6sd240Cp+t/flxkWb7zncyvp8rO6v5xsX9Xhtq6EhAQAAAABJRU5ErkJggg=='
    }
  }
],
              props,
              attrs
            );
        },
      });