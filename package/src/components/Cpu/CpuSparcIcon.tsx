import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuSparcIcon',
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
              fill: 'url(#pattern0_16_174)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_16_174',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_16_174',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_16_174',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEVMaXEmJia/v7+QkJA9PT0LCwvJycn///8AAAB+fn78/Pxvb29dXV3g4OBNTU2fn5+3t7etra3w8PCIiIgVFRX19fUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6OOjgAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAOhJREFUOI3tkMFOAzEMBSdOdrPptsD//2WF1GadOObQLRKoKhdOiHeJFY3G8oP//E7C7TmUM6dLaSyqkDrQCmPZLN6ApMPWqY46GqG00sFD7d4k3EVzjCquzKlZ6hH6lKulIjcgZlkUIEFJx9QAWM30vuKk1STgr1qb6wjCiGpv09gNYaxMBUyVNIc5OdDxi98NYytmMDwiydLINuJ6aXnaDSLFWQBaSl36pg6EGLbdsPRucwOLSIxm4rkz+VTbfmb2cg28WLUZdQnje5P5S7122D5nedT/8Z3nwDW+PAc4nX8Atoe/fzkfaYtsdzif3LAAAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
