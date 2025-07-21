import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsIPAIcon',
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
              fill: 'url(#pattern0_17_192)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_192',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_192',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_192',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAhVJREFUWEft1EvojmkYx/EPhqJMzudTSuSwcgpNk5UFSSkxZUFSmpo1FsLGgqaGjcMCWbAxC4shFiSnaWThfMgx5BwZZ6JfXe/uL8v/5rnrred9nuu+rt/9vX7X3UE7rw7tXF8joCHQEGgINARCIL8x+IzH6F/X8yc8xZsfXNc/oTcS/xL5PxA/4xUe4WPl6FXfvuIe/k/xjliG97iDJXhWwm7i7xL2PR09sADPcRIzMA3dqvBxHEEf/Ia+6ILb2NYSsLwIfMFGbKoNv2ILjmFCKbhem4dgNDqX6Cu4VM93cR6TMQKrMB2LsROdMBt/tASk4Ack+RpMLaXbcbUSp02Jf4JDmImxRecXHCzRQ7EW/1Vr92IPBmAWduAGcoDDSRg1+/G2UEXMX+hZQvYVskGVZDD+LSIpcg0rENSjqpXrq0hQH8Up/IO56Ff5Xod2WwL+xG68q+RRuxAv6oTjKnmEJO4cNlRszDisDQKJu1h+i9dCaTNWtyVgHeaUe+Pq9G4rTpTDR9Zpx8fFuIV5OIALWIqH9TyxUK/ElDJo8oRMfLGs5YHfy7GXC1MQBlHWcCxC1xqrmO5MjdOkGtWM3FmcrrZlChKf8Utr0oaYcT6610HuY1frJoxBMpvxQXr/AJmIrHgk71Ik37Mn8533Ga0gzd4Ua90D6XMK5RAxbeseyAimTYkPpdfNVdwQaAg0BBoC7U7gG7o2hnAEMbiOAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
