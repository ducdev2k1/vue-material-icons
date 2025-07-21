import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsHARIcon',
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
              fill: 'url(#pattern0_28_25)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_25',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_25',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_25',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAArpJREFUSEutljtIm1EUx395aOMjS6i4lCi0XUvUDrWN4gMEnaRCCUQHxYDVDj4GHbLESVQooaUgOEkjbbE0UxSHQkAHKUWCEFAkqItIiItSaRKxnKufRGs0n+RAhvvdc/+/c885994Y+N8MgAUw3TB316e/QCrTScQ0MwPvLn6P71LKMp8EfgJe4Lf4aACJ9hvw+p7C15fJTkQrpAHeAp/yJK7JJIAnGiACPMszQOQ8GkAKIzXIt73XAGfXlQcGBigpKWFycpL6+no8Hg9dXV3KbXp6GrPZzODgoBr7/X7S6TQjIyPXZfxZAWNjY5SWluL1emlpaWFoaIjW1lYlMDs7S2dnJ3V1dWq8srJCIBCgp6dHH2B0dJTDw0OKioqIRCJXAKlUiqqqKgwGA+vr6xQWFuoH2Gw2fD4fTU1N9Pf3XwGEw2Ha2tpUxKFQiMbGRv2A21IkgIWFBbWDjo4O/YDy8nKMRiP7+/tYrVbKysqIxWIqYrvdzvHxsUqfmOxUgtnb28u9Bnnq1+xdJIUdHx9X+d/a2kK6and395JbU1PD1NSUSpHMra2t3RRTdsDMzAzJZFKJNDc3Mzw8jMPh4PT0VAkFg0GWl5fZ3NykoKCApaUlfYCDgwMqKys5OTlRC1dXV+nr62NjY0ON29vb1QFbXFxkYmKCnZ0dfYDt7W2VHimcyWQiGo2qA6elqaKigqOjI3p7e3G5XFRXV+sDdHd3q9M7NzdHQ0MD8Xhc9fnZ2fmtIimS3SUSCZU6p9OpD2Awmqh96VTiUuTgj++kU/KenFtxcTFutxuLxcL8/LwC3WCXRZZZW6bDQ/tzXrz5cPkpGv5I7FdAb/f6tMvuM+DWuzoH/1oN8PTiDbXmsChXF3mCXZmP/ivgC/AoV4Vb/L4Ccnf/yQSo2kmLAw7gwT1AcUBOnPyjUO32DxJ0ADOLYgSMAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
