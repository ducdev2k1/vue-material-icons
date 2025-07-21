import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsGTVIcon',
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
              fill: 'url(#pattern0_28_23)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_23',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_23',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_23',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABJxJREFUSEu1lWFMU1cUx/+vr0ALhSL1rbSvMCyF2QkWugoIJWDULVsmLjGGLWEftmYRt7EYP3TRDBeJRghhjk2FZXWyTFwWDciXuQ9jmw5BmCFUCWItMdVn4VkttKXtq4XHUqbLYnB9WbL78d7/Ob9zzj3nXgL/8yLi+dfpdBtZlnUEAoGHT2uNRuO20dHRfgChZ/mJC9BqtRvq6uq+aG9vf83n880+cWQ2m98uLS3d2dbW9gYA/j8DYobV1dW7Kioq3u3o6Njq9Xr9ZWVltTU1NU0tLS1l/4SuBImbAYCYRlpfX98lk8nUg4ODX9XW1nYeP378FYfDcQXAwr+VeUWASqXS19TUtNI0XZiWlqYWiUTiZznhOM7n8Xic4+PjvRcuXDj8tG5FQElJiaW7u9um0Wji9cDf511dXczu3buzBAPOnj1ry1YDvOsA+PsikLkNOBP8BY55Hi+ml8LpWouZSRZFMgKWNwvQ2dkpHGAymSznzp2zPa/yY/HaZiy6SIiNp9A4dwpX5nhUPrcdf1yrwNTQbby8SoQvDlbj2LFjTENDg7AMiouLLT09PTaFJhU/3evFXU6MV1Wb0TOWCNHMLMqzUlB68yKi7mkQuVrIanegvb2d2bNnjzDA+vXrLb29vTapagEfj9Zj2CdBs+EA3judgsTrLnywYTU+/PEIgteug6yuhPL7b3H06FFm7969wgAFBQWW8+fP27QUhWD/z1gAgZSyjeATL2MpEIVYuhZTYg5M0I+kRCXMmQa0trYyVqtVOCCWwZoQB+/WbeBEBBQnO5Ck2YlFJwcR9RE+z/Cjz30bGckb0VfRhCPNzcz+ffuEAfR6vaWvr8+Wl5WFhRs3wRMExNociBKmsMQtgkjIxAy5iNkoh0RRKnJlahw6dIhpbGwUBtDpdHVWq/U7hUIheA76+/tdJ06cyBE0BwDIzMxMM0VRLyUnJ6tJkkxdaZp5no9wHOcNBAJTLMsO+P3+W0IBgiOPJ1x+KqRSKS2VSuUkSSZ6PJ6xOEaiosIiy9j1MRuApZhWLpfnSqXSDIIgFiORyH2v18v8tS1XEDmanOpH/KOo2+2+TFN00T3PPbtcLtdGo9FQKBSaoShKFw6HffPz8w+USuU6juNChesK3xkYHGhSKpUvsCx7Q6FQ6ExGk3V8YvzrbE321qHhoRaT0fT+xOTED0RVZVXbxd8v7gcQiUVjMBh22e32M5Xmyk/CofDdq6NXT26q2nQ4HA4/mHRMdueuyd0hk8k0fr/fMeubvR2JRB5OT09fLS8r/3TwyuBBtVpdLpFI0imKMgwPDx8htFrt66mpqbTdbv/GXG4+QCaQySMjI5/l5+dvW52+Wj8yOtKUp817i4tyc2KxWMKy7LA+T2/hwYcvDVxqBuCPleoJAIBoy+YtX7oZ99DEzYnTy3eg0WiqCILgl5aWHjEMM0bTtDEYDE7Pzc1N0zRdHAwGZzLSMnRJkiRF+qr0fNdd168+n8+pUqlKnE7nbzFItjrbfMd9ZyDmT6fTbX+87xPyoy3febGhuD5WEkmCJGXy1mRPvO55ci4Y8Ngg4fEXudw9Qtaf2v3gr5sWtRgAAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
