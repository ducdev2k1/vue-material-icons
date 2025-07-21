import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CpuMipsIcon',
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
      'fill': 'url(#pattern0_16_171)'
    }
  },
  {
    'tag': 'defs',
    'props': {}
  },
  {
    'tag': 'pattern',
    'props': {
      'id': 'pattern0_16_171',
      'patternContentUnits': 'objectBoundingBox',
      'width': '1',
      'height': '1'
    }
  },
  {
    'tag': 'use',
    'props': {
      'href': '#image0_16_171',
      'transform': 'scale(0.03125)'
    }
  },
  {
    'tag': 'image',
    'props': {
      'id': 'image0_16_171',
      'width': '32',
      'height': '32',
      'preserveAspectRatio': 'none',
      'href': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEVMaXHjCofxW7bcAGhFS1DhAHzaAGP///8AAAEQGSHeAHH81e/nK5n+7Pmprq7xcL+Sm5nqN6Dzi8v/+///9f3uUa77zuzAw8f3q9v94fX1ntTlHZD5ueLsR6gECxI1ODzy8PKtsbJWWV2epKSpurT5weYABg3b4t/zR7LaAGB/kox1hoAtMDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjc3iAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAeRJREFUOI2FkVtz2jAQhY9k2cbYRfWlphRCmelM//8Pajtt6JBQAhjjiyzJch8CiR2mUz3ud/bsWS3wn0fgAgAc9zwEs+y9FmfAAgMApxDWUBDkZ7QaoJd+wkYDPt8qTCt+dagpvNrTPb6BoTtXjyUFwJxpnYqgHvU4AfBVNRQELuyG8v2k8gttP/OWEXTaUh3YOwuzpNRKh1lQBVpbVw4Y6rFYjyy4G6sjnQwzVwRaW5gFNQEAQ1tTm4ai8zpGYU6j2i4TpkC2aX8dC+3YiFB2XecIt0iErhaPaQXA0IuASePmq1wRfyJYkQhduvkyfxFQAFCTH0tH55KbZB+xSbO4v+uNYABU8LgqlLJNFR+ijO/u1svTxeF6rHE+20nGmzZ8Cg88v/uN55UvtwCqycMHR1eudUyO0SldLzDHQIDq00PohBXGf+Qx3aTr0SADAJQfn6JDXI2ZUs3qPqgTr+hnAIB0Gx2TI5e5dpa//OqtA1DyLNnHmc+UKhKpbwVoeET3TPiCqCsfjPDm3xRL9rYhcMtrkb72I/7u2Zr7ikr6wgcCA+HZm8InU/la7GeQbXryhAaKXlffAdil4otNdL/UD+lKgg6ffw56hg7owIf8jaADz/BvQYxbPthC61s+/If5LcdfYYHcrkfG2RUAAAAASUVORK5CYII='
    }
  }
],
              props,
              attrs
            );
        },
      });