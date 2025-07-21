import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuIrix64Icon',
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
              fill: 'url(#pattern0_16_170)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_16_170',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_16_170',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_16_170',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEVMaXGjlcjp5/BXPZtoUaVeRp8hISH///9HK5H49/rj3u5PNJbw7vaVhL+MerrRyuS7sdfIyMjZ1OlwWqmpnMy1qtNISEivr6+dj8WYmJiBbrRlZWXY2NjKwt91YK2GhoZ2dnYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0hN6lAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAa5JREFUOI2Vkl1z2jAQRY+0kg3GBUoCDfz/31ZmSEiBBGN7JbkPfAQKeeh90czukebq7hrIeaSsWqygwT7oyVCh8huAB4DN08cMFtkeAAM5WNFz3xvVyWcCYBC3OECeVyFMtwmsSwFGO2YGdgexYKA8eGkF32LVoZ7gU7+GJvNVwkLfR2OLmMHAqXVtdDVNGwD1YOGNqbJ3FXQUET9CSP7iGUa89y0pwY5PIGCuPwWHAbXNBw/jOuZQNTG21RCGlICj+wdImc0nfCjvVIrfEq8AdzzqOsnw0LMQOwm9dPPCjyBAB5goImS9BIz4dRwMOEK/G7dU0rhR7VJIACbuSyUi4FViV1MGjPVYyWN3fFulixjIfanbmaywJ/da1oAIITWnaZ40kCpmWdtqdnbZHD2cpUZDamMZ83CqxLuFMRa2yG1QX2qjaB5d2H8HpDjpYje5yunW5L0eb/WN/huwhQJa2O+AmV8A833vDhg/68sL42UBTPTrxgXY6XwZbcfvVVGsHwWVzOv8tbf5OaPnp4nsXL8Mwnbj5Yy9VdLmpn7xwNuiXT+t/yx2Ik9U5/pfRg24ONonstUAAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
