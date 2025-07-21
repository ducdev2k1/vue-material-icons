import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cpu68kIcon',
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
              fill: 'url(#pattern0_31_3)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_31_3',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_31_3',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_31_3',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC30lEQVRIibWVPUtrSxSGlzuKwY3iJ0EUEZskICJGCdhoEZQklsaIohaKiggK/gCxtvIP7M5OYjASU0TY4AeCWliLEBECWoZAQNDnFLk390z2eK6cw1mwmvWu9T6zh9kzNYD8zagVkS8J2WxWzs7O5ObmRnK5nBSLRTFNU3p6eiQYDMrk5KREIpFf+dcImshkMoyOjvIP/Jc5NDREIpHQ2QCIA7C9vf0t4+pcXl7+f0AsFlOGTNPE4/FoDTs6OmhsbFRqExMTXwO2trYcJuFwmFQqpQUcHx87FiQiLC4uOgFXV1dak729PQBcLpdDAzg4ONDOpdNpFeDz+bSNmUwGgPHxcaU+PDwMwPX1tXauq6vrP8DFxYW2ye12UyqVANjf31e03d1dAD4+PmhubtbOn56elgGbm5vahmg0WtnIp6cnRXt4eKho8XhcO7+wsFAGBAIBbYNlWcpx8Hq9iAjd3d1K/ejoSDvv9/vLgPb2dm3D6+urYrSzs4OIsLq6qtQLhYJ2vrW1tQxoaGhwiCMjIwDk83ls2wbg8fEREeH+/h4A27Z5fn4GIBQKOTxM0ywD2traHGIqleLt7Y1/4eFwmPf3d6LRKMVisXL+6+rqyOVy2Lbt8GhpaSkDBgcHFcEwDF5eXggGg0p9aWkJgI2NDaXu8/nI5/NU74TX6y0D1tfXFWF2dpaTkxPHigzDIJvN0tTU5NASiQRra2tKbW5uDkCMmZkZ+TlisZjc3t5KdXx+fkooFJJCoeDQLi8vZWpqSqlVfAH6+voQEVwuF5Zl0d/frz0ZX2Vvby+WZVFfX4+I4PF41Kvi/Py8sg26e+c7aRgGtbW1iAjJZFIFAKysrPyWcXXG4/GffxNR3oNIJPJH5mNjY1SFOF603/2S+fn5ais9AMr3y8DAwLeM/X4/h4eHOhsAqSlj9JFMJiWdTsvd3Z3k83kplUridruls7NTAoGAhMNhmZ6e/mpcRKTmB4Go3t2kgorBAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
