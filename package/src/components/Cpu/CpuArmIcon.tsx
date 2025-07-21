import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuArmIcon',
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
              fill: 'url(#pattern0_31_4)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_31_4',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_31_4',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_31_4',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVRIie2WPYsTURSGn5m5mTiZxKhBEjcakya6SUQQWZIVFBtB3CIIFiL4AwRtBEsL2R+gtaWIlvEfiBbZUmTVKBg/EkmQSD52ZmeSbGYsZsk62DrY5DSHczn3ec89HA5XKpfLrmEYBGHRaBQpl8u5gdB3TdZ1PTC4ruvIgdF3bSHw/wUEwFbxHP1KFVfVCHebqL02k0NHSNUeARLd6h2U7RF2poCjaqSf3GcnlmCwcgV5OsY6XkRs/eJA/QXG8ir2sZOovRaZ188Rg/wKvQs3UMwhsc1X2Ok8wzOX9kqQwMqeAkD7uokwBwhjgLFcwcqWUCyD6Ic6o9MX+bl2CzHqzeMva7cRncpV5OmYzOO7c2bn2j3sdN73VK3VIFV7OI+dcASApWfriFEPJxTGKKySfvoAebzNJLHEJJlFdiWZcOezDxZpvvmrl6F+138gSZ6bTT3vzHxesbz1I0uuwziZ9d21MsU/SV7FIuQXcL0N4wrV87Liy3MVAYBIbdT4cf467ZvrRBt17KMnsDKFPY7HZxaJ+/jOvqgPPIvEduvxBnOmx3FCYcTBjxvYM4d+pcrw7GXUXpvY25fsxA97+a6L9v09WqvhEwh3m0z3J5AnNgBa+xOuEpq3TPv2DnVsIpVKJdc0TYKwxbJbCPwjgaBGFMA0TUQymSTIb8tv2mOzuPJiURUAAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
