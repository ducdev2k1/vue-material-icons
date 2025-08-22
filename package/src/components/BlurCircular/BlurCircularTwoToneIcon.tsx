import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlurCircularTwoToneIcon',
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
            tag: 'path',
            props: {
              d: 'M14 7.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '14',
              cy: '10',
              r: '1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '14',
              cy: '14',
              r: '1',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M10 16.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '10',
              cy: '10',
              r: '1',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8M7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '10',
              cy: '14',
              r: '1',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M10 7.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5m4 9c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5m3-7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5m0 4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
