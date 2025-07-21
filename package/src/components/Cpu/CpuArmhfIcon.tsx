import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuArmhfIcon',
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
              fill: 'url(#pattern0_31_6)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_31_6',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_31_6',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_31_6',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC80lEQVRIie2UT2jbdhTHP7Zlu1bjZDRY66wtS3Jol6hhZIyCkkOz4AaW7RAQIz6N9eAcethl0OMgpefQXuNjKIGBwEP3UMogGAIao92Mycza/Gkiu8Rx5dpJaqsHxXJFKTsVxsi7fPV+v/f7ft974r2A4zgMDw87vCcLvi/i/4+A0Pl4oUxyoM7hRGJE90pEKtscX/iIi7l7QIC9uR8JvazRHBilHYkhr/zMq3g/1avfEDw5ovGpgvDiOR+s/4o9MkHzk8+IVLZcAXt0gsr1G4Tqh8QfPaQpX+Lwi5luGgFoDI4BEPvnEUK9imBXsUdUGoNXCDVsev5ap/b5V1jf3kSoVTxfAHh+LU3w5IiB7E8e57PvbtGUL/nKjW0VuJi76/ntqAhAcvUOQq1COxzFHp1Avn+b4NFLjvuTp/8gECT67G8fmVj6/a1+hg/2/AeBgAutExfbLR+GGvapgNPm6MNB39vGgPImk5uxEPYLOO74OELExWDIF+eEBLdFFx7+QuX6D2x/f4eewjrNjy/TGBjt8rj8tMQ+H3/7XI+PuCXGT/Nx826d73MF4o9/wxHCHKhzHH75NZHKNvE/HvCqL+HGOw6xp38S2yr4BKJ7JU56+wkeNwGIbRdxQmGvZbEnjwmcrYr/nkA2m2VxcREAWZbJ5/Pk83my2aznLy0tAWAYBoZhkMlkMAzD40ilUqytrZHJZLq7qHOhqioAy8vLSJJEIpFgZWUFTdNYWFggkUgwOTlJKpVCURTK5TK9vb0MDQ2xurpKsVgkmUwiSRLVatVfwezsLJZlAZBOp99Zdr1eZ35+nnK57Du3bRtN09jd3aVer7O5udkVkGWZmZkZJEkCYGpqynuoaRqWZZHL5QDY399HVVVKpZJPtFAoIIoitVoNANM0uwLpdBpRFNF1HV3XURSFsTF3g+q6jiRJTE9PA7CxsQFAsVh8Z5Ud8wZNlmUkScI0TQDGx8cxTdOHlmV5MbIss7Oz8xZ24jv+2ST/q70GI+ozEEKhbIsAAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
