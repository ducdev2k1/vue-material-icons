import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeMppIcon',
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
            tag: 'path',
            props: {
              d: 'M9.5 29h19c.275 0 .5-.225.5-.5V9h-4.5c-.827 0-1.5-.673-1.5-1.5V3H9.5c-.275 0-.5.225-.5.5v25c0 .275.225.5.5.5z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M28.293 8 24 3.707V7.5c0 .275.225.5.5.5h3.793z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              opacity: '.67',
              rule: 'evenodd',
              d: 'm29.56 7.854-5.414-5.415A1.51 1.51 0 0 0 23.086 2H9.5C8.673 2 8 2.673 8 3.5v25c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V8.914c0-.4-.156-.777-.44-1.06zM24 3.707 28.293 8H24.5a.501.501 0 0 1-.5-.5V3.707zM9.5 29h19c.275 0 .5-.225.5-.5V9h-4.5c-.827 0-1.5-.673-1.5-1.5V3H9.5c-.275 0-.5.225-.5.5v25c0 .276.224.5.5.5z',
              fill: '#605E5C',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M25.5 26.5h-13a1 1 0 0 1-1-1v-12h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z',
              stroke: '#C8C6C4',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M23.5 18h-8a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5zm.5 5.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v1zm2-4.5h-6.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H26v-2z',
              fill: '#8FCEAB',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3.5 25h11a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 2 12.5v11A1.5 1.5 0 0 0 3.5 25z',
              fill: '#107C41',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M11.639 14.813c-.49-.412-1.194-.618-2.115-.618H6.783v7.702h1.18v-2.723h1.465c.588 0 1.104-.11 1.55-.325.446-.217.79-.521 1.031-.911.242-.39.363-.835.363-1.337 0-.781-.245-1.377-.733-1.788zm-2.382 3.185H7.962v-2.77h1.343c.988 0 1.537.549 1.537 1.398 0 .437-.184.803-.442 1.03-.257.228-.639.342-1.143.342z',
              fill: '#fff',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
