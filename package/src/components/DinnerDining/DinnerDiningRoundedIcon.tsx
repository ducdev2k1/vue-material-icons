import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DinnerDiningRoundedIcon',
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
              d: 'm2.85 19.85 1 1q.15.15.36.15H19.8c.13 0 .26-.05.35-.15l1-1c.31-.31.09-.85-.35-.85H3.21c-.45 0-.67.54-.36.85M3 18h16.97c.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-.41-.23-.87-.38-1.35-.47V9h1.75C10.99 9 12 7.99 12 6.75h8.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H12C12 4.01 10.99 3 9.75 3h-6c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v.75h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H4v7.39c-.44.46-.78 1-1 1.61M8 4.5h2v.75H8zm0 2.25h2v.75H8zM5.5 4.5h1v.75h-1zm0 2.25h1v.75h-1zM5.5 9h1v6.06c-.35.06-.68.17-1 .3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
