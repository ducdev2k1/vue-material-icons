import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuIrix64Icon',
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
              fill: 'url(#pattern0_31_9)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_31_9',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_31_9',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_31_9',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVRIic2Vf0yUdRzHX3eeIAfEz2NcwPRYRIgmJEVuV4jZ2HS2dv1wy9EfBYRbWoGLuZzDWi5trFld5tC2kNoyJ09NdAomUCHnMFDAUzwORI/wOfn13Al3SXz7AwRRJKB/em/P9jzffT6f9+f9/ny/3wchBGPPf8LZ6nbx0oqvhaW6/e5l1MwRVcdaeXfDIb79/AwAao0aH18NarVqcuC9CpT+IeG42ieGh/++r8uRESG6rvWLH785JzIS94gdm4+Kjis374sb6BsSdVV2IYRAc4fI6xlmV8EJak+1ARASpuW9j1bz1LOLAGhtvsEn75+gq7MfgMCgBby9bSWhOn++23uWE2UtAGRveYZHFuvouNJDapphwqIjJQ3UnmpjfVYKhV+uQx8TRPGnvwLgdnn54K2f8Hpus2Xn82zcmobXc5uP848D8PiTUSxO0iN3ufAM3kYfHcT6rBSACQV3OnvlzeUEBPqSYlyI0jcEwB+1nbgGPGzcmsbqFxIAsFllKiQrN2+4WZoSRfd1hapjrffNalxBUmoMAAVvHKH8UBODLi+hOv9R+4aGAdD6+4wn+gf4AjAw1sSDME7w3LrH2LQ9HaXPwxcfnua19ANIpY0AzNOMhnm9w+OJf429awN8mA6auz/WvrqUNS8v4VJTN3t3VrNvVw2pKw0kPx2Dj6+Gn78/jyEuDKXfQ/XxVmLjw9FHB81MQfO5Ls78YkelVpGwTM+LmUkIAVev9BASriUuMYLOtl7yXz/Mjs1H0ekD2fbZmolKY9t/RIipFRw013HpQjfvFK5CFxmIVHoetVrFokfD6XYoXGzoIivfSMKySBb4zSc2PhzVXYcqamEwAKfLL5OaZiA41G/U3sLCQgCWPPFwoaW6g+OHW6iQrLgGvGzank5SagzlPzTRUHeNUJ0/3dcV7JdvYrM6CQnT8lDwaCFdZCA98i1+O2nD1e9hxapYgB0qMSFJiBHB1bZe3IqX2Pjw8QG2NPxJWUkDv1fa8PP3YenyKDrbeulx3mKftAF9zMQc3C4vvr4a5vvMGzVuppfdpQvdIiNxjzhZdlEIIURfz6DISNwjpNLG6dIm76LpEBKmRaVWUVdlZ2FcGI111wAmdT8VJln0byQVkpWDX9Uhd7kICdOSvjae7C3GScO+t/6sCOYA1Zz/BzPF/4vA6XSSk5ODJEnja5IkUVBQMHsCp9OJ2WympaUFs9mM0+lk//79WK1W4uLiALBYLOTl5WGz2WZPoNPpUBSF3NxcFEXBbrdTXFxMREQEubm5dHR0sHv3brKzs6dVPa1F0dHROBwOEhIScLvdJCcnU1RUhMPhIDMzE1mWqa+vR5ZlLBbL1EUedJKbm5uF0WgUZWVlwmg0ipqaGmEymYTBYBAmk0m0t7eLyspKUVJSIkwmk5BlecqT/A/GCqeVPmgtPwAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
