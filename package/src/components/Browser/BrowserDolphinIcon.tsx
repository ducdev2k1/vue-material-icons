import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserDolphinIcon',
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
              x: '0.5',
              width: '24',
              height: '24',
              fill: 'url(#pattern0_26_188)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_188',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_188',
              transform: 'scale(0.04)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_188',
              width: '25',
              height: '25',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMjSURBVHgBtVVbSBRRGP7mzHHXvLVp2cUeulh2ISuzMgzbVUNN8CnowYIICkEiqpdACMMuUNCDUYFBUSEVPVUPaWqG20OhoGEXNHrIxEzTzMs6u3Oc0z9jbGhu7WZ+h/9hZs783/n+21Fwo9TBo9QNmCGI4bEWzqOwgamoxwyBBLgY54Cq6CEZI7u8MQc2NvbXvRxeEIcGRVEQKvIXrIKmj6Dk3RNIGXif5BKMQ4AzPaBB8ULCA6lo/ndhqsA8ewSKV+yATQz+8X9TBOdcI0fMz2xqGvQN4fCyLBxLysfCcIf/m9cQcH9th8MWAUZLoVWffQKZ7gsIKIZ8c1MJfkbLK0ZQmXYcufHJloPJsJPu7Pg1E96tjUmAHaMQijo1iRQULlISxnzQRC/6Cm4iL379lAQBD0rrU34FUmIclp/JZhaWlROP6EF/wf2QnE/Go/SzSJ+TQHnQJhqGwToHWvAl/8G0CEwwqtDKLacwW5Xk3PfLSIQipXTSnnpJqavqceNgcyliVDuOrDiA7bEb4ZM61kcnkRMWFBn5w8LqDMTaYsefDcPFNKGh6Xsr5j/ejOaBV+jMeYptcck43VaO3Y3FKGw6ikXVaTjz/kpQJGbPvci4QyrMRhXjShbXpDpnKfb69qzn1Fjn8LC7FjxApfSNdqEj73VQZCtr0xHJI00tLlaSWIy2TDeW16WgqrcGNoopY2KCGdSIRUsL8TGvFcHidmq59S+NSLCiJfuxtG414mxRlrypbFj00YF0fNa64RnzoF/vx5uhtzCkEZBkq2MTlZJ3PFxp7jQnRTLkKWz2u3OuE2VJZQGLYt2zZETxSBez5LDQDTSXGvprUdFxFTLAUDGTb/q3xsp0euRu13U4wqKxZ9G+CX50Q0c0t1MJmyTcTM70GvFax0XochR7Ew75iRq+1UA1FRtUSFa4pmmAD7c6L+H8h5P+0GXF7YJBgxNcjM+uf8nJbzlSfKjtu4edLxP9CjmTVnVxi8kIbmQEBYpWbmMiNMMDuzKL1CjWJKZ7ReB/I0INg5UKwyAldD0yqJgpKJyUhPPwFiE0F2YIdCm2/AB+Lmz7ACqU5QAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
