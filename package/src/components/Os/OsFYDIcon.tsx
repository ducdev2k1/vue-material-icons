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
              fill: 'url(#pattern0_17_185)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_185',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_185',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_185',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAl1JREFUWEft1UuIlnUUBvDf6JhMk2ZqOOWFxIUSblSUWigqSoZa0UJyIZqCLdy4ENwIguANSTAdQ0GEFgpCLVKkhRFpICkEJYUkOQami3CiRsm8JY+cD4aYaafj4nvhhff7X855Luecr8UAPy0DnF8TQFOBpgJNBZ4aBQZjJp7HBVz7nwn5EkbiF9zu59wzGIVW3MDf+JdHg+9FtNX6zYYCY3EYP+AIvusncM6/jdewB9f7OPcyZmMihuB3fIkuTMMChHAPDiVg3mXYO5i1S3T8PE7brU5dVzEaI5DvVzAMc/EqNhWzrD+oBHexBtNxsfZfx6/4ENuL/ZmKty3JB2Ez1g01aOcyHRc7tD+3y6UvsBRhFGUW4U9MQRLtw9QKlBg/FtvV+Byf9gLwETZiVRH+DN8HdEOBbGxpZfksI+/3uLvqgp6jxeZKqXAPJ/BW+XgOi4v5s8h7GWNwAN+UPUPxNT4uJXM/NRQLdjUARNZcmlyM9+IPdNR6LDqOY1iJ+fgNkferKsb4nYLLXsDnfJSKXZ+UZecRQKmF3djRF4B2vI/1iFRBvq465BTeqCBnMQ8/lTV/4Vu8g/HI/q0quqjXiXere9IVW2N9A0BQxrsNVaFzsB8fVNC06Jv4pyo7RRmJZ2BSMU37nq72W1hKpjYC4mQV4nu1nrx3cLDRhvEv3qVV8h3Jw2RFeZW+jh3ZS8Bc7q7fmQvp8bRkVMgzvBLFlsyU2JlOiboTepHo7msS5lAqPl5lJjzWpy8AGRIv4H4hf+IAHmvC/wZ/av6Mnijr3smaCjQVaCow4Ao8BF0TiTJ+yAY/AAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
