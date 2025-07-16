import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PsychologyAltTwoToneIcon',
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
    'tag': 'path',
    'props': {
      'd': 'M13 5c-2.65 0-4.79 2.06-4.97 4.67L6.7 12H8v4h3v3h3v-3.95l.89-.42C16.71 13.88 18 12.09 18 10c0-2.76-2.24-5-5-5m-.5 9c-.41 0-.74-.33-.74-.74s.33-.73.74-.73.73.32.73.73-.31.74-.73.74m1.76-4.32c-.44.65-.86.85-1.09 1.27-.09.17-.13.28-.13.82h-1.06c0-.29-.04-.75.18-1.16.28-.51.83-.81 1.14-1.26.33-.47.15-1.36-.8-1.36-.62 0-.92.47-1.05.86l-.96-.4c.27-.78.97-1.45 2.01-1.45.86 0 1.45.39 1.75.88.26.43.41 1.22.01 1.8',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });