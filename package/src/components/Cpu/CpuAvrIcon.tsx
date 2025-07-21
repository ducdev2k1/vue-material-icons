import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuAvrIcon',
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
              fill: 'url(#pattern0_31_7)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_31_7',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_31_7',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_31_7',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACUklEQVRIie2VPUiqYRiGr+/zo//SBoNAyiWJfsaiMZyUmqKltRCJaAnaGtpCCIqguWiIGpKGFl2UjktLBzwNJ1JOoKOD8oFDofcZDn6RnZxqOD83PMMLz/tc9w3vjyGJz5T5qdP/A/4dgD6iHn88Kn5xoWKx+OrcW09PT1SrVUzTpLe3l0qlAkBfXx+m+StgrVbDtm0APB4P5XLZGeB2u7Ftm7u7b9x/v6etrQ2fz/dCWFtbEyDDMJTL5eT3+wXo/PxcDR0cHAjQ5OSk0un0K+cDAwNKJpP6enurzJeM8vm8JNEo3G6307yxsaHd3V0BCgaDkqR6va5AICBAR0dHWlxcFKClpSUtLCwI0NTUlCSpUqk0PL0AAM3MzAiQx+NRoVBQV1eXAD08PCiRSDhO8/m8XC6XOjo6VCqVdHp6KkATExNq0mvA5eWlgsGgAB0eHioajQrQ5uam5ufnBWh7e1tbW1sC1NnZqfHxcZmmKUDHx8fvAyzL0tnZmVZXVwVodHRU2WxWgPr7+2UYhtrb21UoFOT1ep00gMbGxnRzc9M8/G2C5kokEpqdnXXWy8vLOjk5EaChoSFlMhkBGhwcVK1Waw3Y29tTKpVSKpXSysqKAM3NzSkejzuAbDar6elpAdrZ2dHz87O6u7sF6Pr6uiXAWl9fx+VyARAIBPD5fJimSSgUYnh4mJGREfx+P+FwmHA4TCQSwbIs9vf3KRaL1Ov1FvcY+B2+oVgspqurq1Yt78lJYEjvf2m2bdPT04NhGK1dvpWzwWgx/0P0dzzXfzbgJ0qtMSRAxZZAAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
