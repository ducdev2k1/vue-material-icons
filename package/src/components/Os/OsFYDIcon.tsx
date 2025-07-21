import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsFYDIcon',
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
              fill: 'url(#pattern0_28_21)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_21',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_21',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_21',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWxJREFUSEvt1L1LlWEcxvHPMUmzwUBoKYksGoWCFheFhv4AIYWWoKajqZBS4RDpYC1SLU1hBCK0VELDoRoEKRBxUCfFNzj4EkJkUaSlccN9lgfl2ODU80zPy/W7rt/9vX/PnXHAV+aA/aUBRQmniPaNqBSnsITfu1Qdje9/FXVMCAp78AjV6ML8LiY9mMbLxLdQ0xdrR3EfZ9GPHXSHgNDdOAazauaGrefyNk7gGLZxGWfwBmO4him8wid04mM0DyQOYRav8TMEHMYInlxUub1iayPvRzNyuI2buIvn8bkbrRhCFnVxVcfxAU1R+xltBURvY1Ho+AWO4A6u4jp6sYAHGEAJhvEMF/Adl4IhrmATLahNBiziHd7jcVzZBOpxD41YjwNxAw3owCTOx4ZuoQKn8bQQUIWv+BNNA6JllEVhuN9CmKJzWMOXiKYSJzETNcEzbPQ3rCb/5HK04+G/juNe+vSoKEoyRfQfIPoLR3xSbxc8teEAAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
