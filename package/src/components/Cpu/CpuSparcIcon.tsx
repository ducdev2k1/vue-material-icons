import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuSparcIcon',
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
              fill: 'url(#pattern0_31_13)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_31_13',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_31_13',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_31_13',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACHElEQVRIie2UsUvqURzFz5WGjEjCxcHAhFBJQwRBcRCqzUElwgYJBRddXHSVnIKWCEUUpKUtKTf9E0RFQ0gdpUGEcDHxN4nnTcl7vF/xwNfyXgfucu+59/C533u/giS+UoovPf074D8OaLVaPDo64sHBAfP5PF9fX+nz+XhycsJ0Os23tzcC4M3NDZ+fnwmAAFiv1+nz+Xh6espkMsmXlxeC/H1YLBaGQiHe398zl8txMBgQAFOpFHd3dxkKhShJEjUaDQOBAN9VLpcJgJVKhQ6Hg3a7nbIE8/kcw+EQVqsV0Wh0Oe/3+2Gz2TAYDFAoFDCbzVAqldDr9X7Zf3h4CJ1OByEEZAlqtRr39vYohGAikVgS7OzscGNjg4+Pj9RoNLy8vKTX611SvBMIIeh0Otnv9+WviCQXiwUvLi4IgO12mwBYLBY5Ho95fX1NtVrN6XTKWq1GIQS73e4yIBaLUa/XU5IkCrleFIlEaDab0el08PDwgGazCaPRiKenJxgMBuj1eng8Hmi1WgBANpvF8fExzs7O4Pf7MZlMYDKZcH5+jjW5GlgsFtze3mJ9fR2lUgnb29vwer1QqVRoNBpwuVy4urqC1WrF5uYmgsEgFAoFtFot4vE4tra2cHd3h2q1Kl8D/qEymQzdbvennpUCJEni/v7+p56VfrJSqUQ4HMZoNPrYtAoBSU6nU7ZarQ/XZV/R39Q/2k2/A37WD0ctN8ZO00VoAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
