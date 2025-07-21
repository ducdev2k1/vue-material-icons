import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuArmhfIcon',
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
            tag: 'rect',
            props: {
              width: '24',
              height: '24',
              fill: 'url(#pattern0_16_167)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_16_167',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_16_167',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_16_167',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEVElEQVRYhe2WT0wUZxjGfzO76y47LMuKxOgmhonYWLekLpJikLGpJQ0ljVpSjlyabA81XjCN156w9eDNixeTTdODHCRiVi9gYhsKlgTMYlBg3W2AsI5UkN0d0P3z9TAysCyYpmnChTeZzMzzPt/7Pu/7/ZmRVFUV7KDJO5l8V8CuAAD72sPrhlYytSfIefbiTMbxjtzDqD1B3u1h78Nb2FZSrBw6RvpYE8755xRcblJ1nyLlshzo+Rnp7Sp/f97JnoU55NUMS5+0IeWyVI7cQ3n2iMWmdjIfNCBl31A+8QeVf0bWBSTbu1g5dMxSZRw+jnH4uPVe+egutpUUq/4jpI+eJH30ZFEV8psVsr79JTjAyy++ZfHkOXIVVRa2eKodSRTwjtzHnvrotJV8X3+YssQ4OW81+pffkVe8AEj5PAC21YwVxDfYi2tmAgmQcm/Ju8rXfUN3UJ4Os3jqazJHGshVVFHxeICK0X6Wgy0sf/wZqUAz3pH7yKm602aVw314og+xp17hmn3GgVs/bTtvzuRzKh/dxTUfwzkfe4ea55k99YrKoTs4ll5QOXzXLCD7hqoHv5rY0B0A8u4Ks3tZ334Ayp8OFSVxvH6JzVjeUoBjMVmCSe/u9uWFdVCWSzqH7d2yk0zf+i4oFEozFfJbCkCybY0DyOs+IZfyLEyY+WTHK7Ma48iJImK+zEO+3Lc5szlWktjOtvywvIcve578BmBuk9p6hN1Bdu9Bkt/8sO2g/9PsnuhD0h82sXqwFv2r77ckCZvZtrxLMe8lnYGCfQ9A0XYTa9gG/toUFJxuAGw+n+9Hz5PfQbaRL/OAzYEz+ZyqB79gW81gf72AEhtFzr4FuwMh23D/NY4zGd8k0k5B8VI2M0HZzISVLF/uwzU3hTv+2CRKMjnvPpwv4iixMaTd/4GdFmDfDPj9ftra2ohEIszNzQEQCoUs/xoeDAZpaGhgaWmJnp6eIl4kEqGpqQnA8q1ZR0cH09PTjI6OmoCqqmLjFQ6HhRBChMNhoaqqaG5uFhstk8mI7u5ucfv2bSGEELquC1VVRSgUsjjd3d0iHo+LeDz+3tiqqoqSKWhtbQVA07QifHh4mCtXrpDJZDh79qyFK4pCS0sLmqZhGEbRGEVRGBgYoK+vD7/fb8XeaEUCQqEQ1dXV9Pb2UlNTQ0dHh+Wbn58nHje3XjqdtvBoNIqmadTX1xONRksEjI2NEQgEuHTpErquAzA7O7u1gDNnzmAYhjX37e3tlu/8+fPcuHEDXde5evWqhU9OTqJpGoFAgMnJySIBuq7T1dVFIpEAYGpqCjDXSImAYDBIY2MjbrebCxcuAFBXV2cR+/v7MQyDdDq9voCA8fFxampqSCQSRZX9W7MEdHZ2AnD58mU0TeP69eu43W4uXrwIQCqV4ubNmzQ2NnLt2jUrwODgIIlEglgsxn+xopPQ7/db7d/4vhHf7nm7GJtts3/3KN4VsOMC/gEPZutK1Si5bQAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
