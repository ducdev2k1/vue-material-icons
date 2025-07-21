import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserChromiumIcon',
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
              fill: 'url(#pattern0_26_187)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_187',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_187',
              transform: 'scale(0.04)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_187',
              width: '25',
              height: '25',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMaSURBVHgBzZZdSJNRGMf/57z7cFPm/CBNs5QEg0QdaOKF5W7EwBuNvDbQ6k4x6S7Mm6ALQ++iKXrbRXSbdqEgIVIw+wCjD3xFaIvQTdOZ0/ecztnUue195/Qi+sPY2dmz53eej/PsBf6BSDpGhV0fmwhYDVFItfzMgSA0vszBFvyjrplTQ5y9Xqc9ZOrh4L3CygljqZxh0O+pmjgRpLjbW8Oo8lIsS5G+VE40t/+pSz0WEgEQZfqY0xspuMc09y+Pa8EQUnjXW0qY4j0lwBAUBzl758MSjkmRzUphtyipTKBQoi6Ht13BYVcwDtI9ttk599k3vrqxnfSjy+cyMNhRhErx7rAr2N3j8AU5Fn0MoR2uC+KMD96otz6UaxoLiQ5UFOUmGXc05OBFfznmVKD+0RqK+3+i8fEqxt5soaFcwYV8qgshlPTEfAt1eX43USqKLfT2qw/+wFbky5I8M14/qEDz0CpWAlqSo5IcBVN9eXi3pGE9lByRBs19s842s38MUnOYmvP5MCnR7XutBRia3NQFSMl9z+wWqkr0a0S1qN+IN0JixbZbzbhYGG2ulmoHJj/tIJVGZ0PItuvfaWqi1TEISFzLlgmIhMkiG0VxoI1tDnPqZotCxOgIHt00i3TJtG2ENDhsNKUDWZddg3OIcbMeg3CoiQaFOZnwrxN0NdqQSi2VVvgCzADC1EOI+LigZ/R8PozuxszIafUk9/uas7D4Qx/ClKjfI5dxK5BYGyl5F9rrzHgytYlXoglkjRwZFN1XbSLKTMx/17D5R+dCEqjttZYyuTQd7jGMiLgGEm3nvmn44mdoddlw/3qWGCkEoTDHyhrHs+kwipwENktyd8nxH+Ptq3M84LQwqxcnGO/lBTTyShWF1KHFxK2cINdYW2KnGUmeXhcgpjDZ1dxHN+KsPLezFsTfqjsdUPkZAwAPu9sabKoh5ACkUOoSSxUGKnAQFOcm1EGkKAK4kpXUqSkfJOT4l9MZCXW6dkk5Wmwx9PkINVmG21xENwNpPa3IKS2HqEJoab6TZNeWKmCcvWfifskpi/9BfwHZDBwcGAxvywAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
