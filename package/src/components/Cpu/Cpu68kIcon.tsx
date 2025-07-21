import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'Cpu68kIcon',
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
      'fill': 'url(#pattern0_16_164)'
    }
  },
  {
    'tag': 'defs',
    'props': {}
  },
  {
    'tag': 'pattern',
    'props': {
      'id': 'pattern0_16_164',
      'patternContentUnits': 'objectBoundingBox',
      'width': '1',
      'height': '1'
    }
  },
  {
    'tag': 'use',
    'props': {
      'href': '#image0_16_164',
      'transform': 'scale(0.03125)'
    }
  },
  {
    'tag': 'image',
    'props': {
      'id': 'image0_16_164',
      'width': '32',
      'height': '32',
      'preserveAspectRatio': 'none',
      'href': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEVMaXHq6urc3NxSUlKurq4VFRVFRUUAAAD///8JCQkvLy9lZWWgoKA5OTklJSXR0dGWlpaMjIyEhIT5+fl7e3vGxsa8vLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKyqflAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAYBJREFUOI2Fk9ty2zAMRA8BSpTsWGn+/xsznaZOY/HaB5C2JuNO+UJwF1wAOyT8ZzmWexy3JDefJze1/UnC9u4f91odB8WivSU5CktLCkBHN3+4bilTPijk6ABxzUgLZM1DYetqo53VdL9Gwv57FO4JP8+9wWglBr7X6gBEP0ySuSFwcXaqM7P5QQgGlYzAry4wg/mz0jNhRtjdqACvAvAJAytB+ZH7bJdEqg5mB7H2lKAMB1MB1gxLAqZqaBTCGB6sn9LrAbDovd7NA15biACXbK4mJVikyl6Vc3SNmH3qTajiLFrzijR31bmkaXqJvYniOBUAXuQDaFIleaD4NqaoYrZ/OcCdylIBPM0BZGEzF4JNeyWa7xcrsSlRAXY1wKlV5LMqgChhLjA7+mPpG+KzQIhiDtXcnXss/wb8wbEwxe/kWFoR4Povnpu9KF/kOT+5/mj9+pQ/Ze4/K+uT+xnuH8en9o2el+PHAXVlKQdacj892vNpOedQpYZ83lIe8F8Ph4hIee5x1QAAAABJRU5ErkJggg=='
    }
  }
],
              props,
              attrs
            );
        },
      });