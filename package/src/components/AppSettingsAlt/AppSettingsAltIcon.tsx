import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppSettingsAltIcon',
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
              d: 'm21.81 12.74-.82-.63v-.22l.8-.63c.16-.12.2-.34.1-.51l-.85-1.48c-.07-.13-.21-.2-.35-.2q-.075 0-.15.03l-.95.38c-.08-.05-.11-.07-.19-.11l-.15-1.01c-.03-.21-.2-.36-.4-.36h-1.71c-.2 0-.37.15-.4.34l-.14 1.01c-.03.02-.07.03-.1.05l-.09.06-.95-.38q-.075-.03-.15-.03c-.14 0-.27.07-.35.2l-.85 1.48c-.1.17-.06.39.1.51l.8.63v.23l-.8.63c-.16.12-.2.34-.1.51l.85 1.48c.07.13.21.2.35.2q.075 0 .15-.03l.95-.37c.08.05.12.07.2.11l.15 1.01c.03.2.2.34.4.34h1.71c.2 0 .37-.15.4-.34l.15-1.01c.03-.02.07-.03.1-.05l.09-.06.95.38q.075.03.15.03c.14 0 .27-.07.35-.2l.85-1.48c.1-.17.06-.39-.1-.51M18 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M17 17h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v4h-2V6H7v12h10z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
