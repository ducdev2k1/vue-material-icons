import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BedroomBabyRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8 15.99c-2.37 0-4.61-.83-6.4-2.35-.33-.28-.35-.8-.04-1.11.27-.27.71-.29 1.01-.04.19.16.39.31.6.46L8 13.49V9.5l-1 .65c-.32.21-.73.16-.99-.12L6 10.01c-.29-.3-.3-.77-.03-1.08.3-.33.65-.74.86-.98.09-.11.07-.28-.04-.36 0 0-.81-.31-.79-.57 0-.11 3.36-.03 3.36-.03.18 0 .34.1.43.25l1.44 2.5c.09.15.25.25.43.25h4.83c.28 0 .5.22.5.5s-.22.5-.5.5H16v2.5l.84 1.46c.2-.15.4-.3.6-.46.3-.25.73-.23 1.01.04.31.31.29.82-.04 1.11-1.8 1.52-4.04 2.35-6.41 2.35',
        props,
        attrs
      );
  },
});