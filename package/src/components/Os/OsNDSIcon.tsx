import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsNDSIcon',
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
              fill: 'url(#pattern0_28_41)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_41',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_41',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_41',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAahJREFUSEvtlL1LW1EYxn/n5MZce5P4gaKCIAhOpYODHaqgg5MOZnNsXaygWJwcOggVSvEDB6WLf4KIQkuXDgoOgkHBSdoObVPTqKAmMZLE3HtOyYUSrJTApdIlZzkceJ/fc97nPRzBPS9xz3wqBmUTrkRUPqJ26HiGNVG20kNBDPVV9GD0rRHe+q2XLc2IcMgDDtAKJxaHXM7VR7F3SwbVJjUrcziJE/RF0puBFBiPHpLbeE9+88NtgweToxT2DzEjA9zs7GIODVDYOyC7/g4ZtPB3daJSaVQ8gf0thqyrRWezCMMg9GaG9NRLZFMjMhjEmhojOTJBtJArdRBaeEXm9RLhxVnso88E+ntdAD4D+9MXRCCArK1BnV+A4QNHIVuaEH6/e9ZXGZx4guvlVawXz8nMzrN3eV4y8D95jBkZJP9xm0L0gKrebsjn0VqjTs7cG6tkCl97G+r4J9q2kY0NoBSyvg6n2FVx//4Da3qS1NPxP2YAVPX1YA5HQEhvMwBU4pTrpbfo9NVdA8/UvwjdVwQEWqHhX8OLPBtuKn9R2WQrEf3/iH4BtjGgzXaWagMAAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
