import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsMAGIcon',
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
              fill: 'url(#pattern0_28_36)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_36',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_36',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_36',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAa1JREFUSEvtlLtOG0EUhmfOsOP1+jLs+oYtIyfpECmiSJFSJcobUESKZJKGgsIFz4J4ACQjaHiGIKGQFtGQSxOJBMhFjr279q69Hu/soLVkyxXLFlR4mjMj/f/5R9/RDEb3vPA990fzgEjCc0QxEDGmI9u2EEIy0hVDMJ2B9uTZC6xmsu7Xk6MY/kjpNIC9qW9i4fvWp8PdSFcMwTggs1hcI0bZEObf1sjnptczP8focas0DFBZvvph0LVPAEaexpbWOv8utpmx9FZikkxQrTbk/Z9S+HYgpUcWlJIUgRMEok8UpSjFqBcEaDDZh2kAhEgMmvC832FAYtFYXrc6l2M0ucKjrXbrYierV9e75tVBVi+/75p/9rN6pQ6AFat9vacXag0Z+I7Vvm7qxVqDAM3xoftDSn+AMdEAYCHUsUJ1Y4yIGZV3CCADmKicO99du/2RptOr3HG+zFbw/R5N5V6Htx553TOayr2iSvKxY101ARL5ft8+TRqll4K7PTXBnvOh+2v2JacQQgIh5N2VP6XpFUrVkuP8P5546PLKU3757Xxynn8VkTTniB4Aohs0cKiL2woiwgAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
