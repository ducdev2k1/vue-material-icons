import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsNDSIcon',
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
              fill: 'url(#pattern0_17_205)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_205',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_205',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_205',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArZJREFUWEftlTloVEEYx38z79rd7BpdY2IiHtE1noUGg4WNrY2lhUcRsFBstBNBEAstLMRGYhVQEZREMSqCWyiIB1GCd0JiYjxYosYzyb7dfcfIG8W7kpg0+6rHg5n5fb//N98TTPIjJvl8ygBlA2UDZQPawBZi9QETPxNyGHmxD+QiUi02mBM9Fe+i7omrYNYzfdRGORrAMDCqqxDT0wgpx41JeR5hbojw8wgopffN4nX8AiBiMey1azDnzwXxH/ozCCnd7MR73ANB8BuAIR171QrimzfgPepGpqfhP3yCrKkmoifw8bv7NLmIOYhUEuUWUKNjf7Ukp6Qw6ufgDzxHjYxizK7DWr4UWZVm5OBhwjfDvwI4iZhTsXM7weALvM4uKo8ewm3vwKirJRx6A4bEu3sPbAs5bSpyRpXeOHjxivDjJ2R6KiIeJ3z3HqSBMasWe3Ujpc4ugtwQEVDQP0hyzy7cU20Ur98iGxR/ROAkE07qwF4KJ04T5l3S547jnjyD1dSI1/VAx+L3DehojMx81IcPyFm1hLnXePcfYTWtJHw7rI1ElfrdvdpAZLB46QpyZjX5llbizZsI+p/hnr1I1nd/AojZTrx5IzKZpNB+gcSOrRTazhNbvw7/6QBmpl5vqoolzIUL8J8NYs6bixKCoKcXoyFD0NePSCQwlzboNdF7ZCKKEtOkeO0Gqf27GTtyTBeVDX8yYEvhmAvmkWjehPJ9kILg+UuMmTWoUknrVWN5UCEiEUflXbAshON8/W6bUCjpqKLDhGNDqDSwiMd0v4hkBerTZ8ZaWnV8f9yCaKG1OIO5bAnCslDjeRFCBXmX0u07BFFPKfUXgG/9LKIKkhUwnnPA91CjeQjD77dGG1AgLlO5zUBN+CS8jT+gJddBYjL+BSnwxzPlfxrbZYCygbKBsoEvnFAt3iFavO8AAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
