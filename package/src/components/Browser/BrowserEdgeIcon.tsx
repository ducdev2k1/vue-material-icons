import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserEdgeIcon',
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
              fill: 'url(#pattern0_26_189)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_189',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_189',
              transform: 'scale(0.04)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_189',
              width: '25',
              height: '25',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVlSURBVHgBjVZNbFRVFD7nvp+ZQpEiREkgOpqYECXpYOqCuGkTFyYuqBs3LmgTdy5AjQlKCMWFMS4I3bhwYUuMKxNTogskkRlCIixMWoW0yo+dJkUQpfM605nOe/fde/zum462lAqvc9997917z3fOd75zb5ke4dpzabKgtNfPSvewtHqIEmIxU8aLK9Mvvzb1sPW80UCxNNtDnh0yZA8QmX5iS5YMRowQx1iYEEmLmXUl8JrlkOonLu8frjwySLF0G17bMRguwLAIGXYg6DtNiBxQzEotU+AtUhg0JOcvj5JdPlHe90602p66H6DvYvW454XnFQUFFp8Uh5jkgx6v3ShrcC50DeOKPMXkK8uK08P5XDr56sxIYUOQvouLx+HwCAtYyIw543jOjKv2dMl6aS/Fd0Xi4dW1wDPkeWkhH3BpcOZIYR1IX6naz1ZGsFp4NZPS6fDOvPK5PYaJ7odoLCllAWQpRAsc0GYaW5eTly4szMJeweqEqr/eoKRWpySqkQp98gKm/K4d0rVrG6vukESQFzbAXKauoEq5YIHyYQ19nfJBg0I/BlCCeXb4y90nx30H8GJpfkgnjcK9Kzcpmr1NqqubOMyT2vSEIN2cpqkkNxd48WqFNj/7uHS/sIuRKrjoRJEiPkudRiuR+Z5TohzHbTyLZO+565O3SjO9qfaZu7eRQqwqzIFv5Th3NQF7sVCzytKokvJasn3gKfZyGt4vwnvXXCQNtCaeY6gtyQDh34C3pzRZuDf15yfNBjzfupOp6zHhIEfOOrv8u95DwC6y3KYL4OC0jZOI4vqe3E4Fr1vieS3kI2ZPJdBdinVO5vgD/8byz37tj7h38a4vassOtjAGBtiyCFTJ7kYWVdGskV34ezj69JXTnRzKu18NdT8nY7KlxdYmZG2KZinFfLBFkrblIlZ6VHRDirJpu9MHJrXRxfWYaAyqvFGnVmnizGoAd907+eY4e80JoVisjeFxStqkADECikATUYq04D1SielmpGrFsDggwbzMK0li0pfPgpLcA/cnv6s+xbLExrRgEM1qAKSsjZYk1ZRAqWmqp3ymoOoMolxJ2RVZO025Cpi/iXDAXa776QeBKK4X4SvmakSSkEo1azzDSzaeRtnK3Pd7Py8r8DlHHYrERWMzqqwDnL9O7OdYBfnB+wH6Lh89wFQfZEIt8RJZswR6m2TSJqJqktatuVgnA5kzxjdlyaRAWU6sbfeiYzipsXMEmOX1bHnji4OrQdg05oiiCnNNHBCzA6mBsiUHUm614oHyvvFKmxpc3tHpEmLBdo6dKlMuBpImBb+UhPNbIWGUvLWRtlJsffPW3JqILg31syS9aNuwLjKcTv20f6K8xqHsfuTqkFI81tmelCvCpEHBlbKo/BZmz20lrqKlYih+vfH12w89qNaDuIcPpmcRSCGLxv0ghHDyrKigi9nPU5YosIjqhxJo3Fo92phYD9bTP9JD+VyR9HJv9MNHo+6b3xnEpjeMEjyvFOygDt1WZLfvZlW9Az7D//Zdl0iSIYR3cOvgZ6BOpiCYSLl9y5oCHClSiiOa7cC6SLLrw+lD8PgUZ6FA1XqZwt9+FOXlkPvARcPtiDIZYlb27GjMVMnZd5yiunkiOndspGN27cn48fOjcHbEVX2mtqCLzJPPMKVNsKR5Lc0uYPcpM91WCzknzOHVAOsj6VzHrvZyyhNYV3Br/TvXKLj7O2W54SA7qNoRWM4070QhtgLdD0ffvV+mjRL/wAuqY48OgbmiSvEPw+0b4i/cwtaAY9dp3QGJwKg5E3373qmNzPw/yL9gMwXP10Vhv6BYeoK/ZiOu1yrh/LVyVB6JHrb8HwNP+ywYgcn0AAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
