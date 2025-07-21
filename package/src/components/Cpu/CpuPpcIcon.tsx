import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuPpcIcon',
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
              fill: 'url(#pattern0_31_12)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_31_12',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_31_12',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_31_12',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACSklEQVRIie2VvUsrURDFf2t21Spro4IfZCsrBSOyoASMVbBQC1u/oqa0W0FsxMIqCAr+BdoFC0s7SSytAgFNF7QIWokg0YieVyjX7Ivdw+p54LIze/bOuffMwFqS+Em0/Gj1X4H/Q8D+fJpZPT8/J5/PA+A4DgMDA0xPT9Pe3k6pVOLk5OTjZC0txGIxZmdn6ejoMAWvrq64uLjg7u6Ot7c3kIQa4Pu+PgXNGh4eVq1W08rKShPX3d2t29tb1et1ra2tNfEhgXK5bIjW1tbQh6enp4pGowLkOE6I29/f1/r6euhdW1ubXNdVqAfHx8cmPjs7Y3V11eT5fJ7Hx0cAstksBwcHhqtUKhweHhpbj46OeHp64uHh4cui9/d3eZ4nQH19fXp+ftbQ0JAAdXV1KZVKCZBt27q/v9fc3JwARSIRpdNpua4r13W1u7vb6PiXRYVCwVxvYWFBIyMjJt/Y2JBt2wKUSqWMGKD5+XkFQaClpSWl02m9vr5+L5DJZMymxcVFEycSCe3t7Zl8eXnZxJ7n6ebmRpFIRID6+/v1N2yAl5cXcrkcAKOjo1iWRTKZZHJykiAISCaTAESjUXp6ehgfH8f3fTY3N7Es62McgWq1ys7ODq7rMjExQTwe/+hBLpcLTUQjrq+vDZfJZJpOWK/XmyYOULFY/LJoZmYm1MBGbG1tmU2FQqFJQJKCIAgVHxwcDFvk+z7xeJze3l46OzsbJxfP89je3sZxHBKJBN8hm80yNTXF5eUltVqNsbExw1n6/aP9Cvwr/gBe5stv8NCXbAAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
