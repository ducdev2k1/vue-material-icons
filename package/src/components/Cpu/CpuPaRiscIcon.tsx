import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuPaRiscIcon',
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
              fill: 'url(#pattern0_31_11)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_31_11',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_31_11',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_31_11',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAADdElEQVRIib2VX0xbZRjGf6dQ04MsnJbpaJuOlo2wkIzOoU62RaZZwsWWmJAsumUxOGOmSzSL0cQ/Wbwz80KHeqGXkpgZ2EhQ0xnHugmzW+ICK3+KFCgtMiiF9Q8I7QHOzvHCpKzSbk0Un+RcnDfP9zzf+37f+36CpmlsJHQbqv5/GBTmiGet2/FvL+Aa8j9UdKuxhL5333ygQVYsyDLzspz+d5iMOK1lGEWRWDLFz8OjyIrCgmxIc/I2uJNYYCAcwSaV8FrdUxzdXcO2UlMGJxSL80zz1xmxvAy6AyHeuPg97x2s58TTu9EXFDAvy3SOjDE6F0XVNJ6wmtlr38r+inJ6JqfzN/AEJzjX5cF96lU2P1pEm3eAb37r5dpYkHuqmsE9XF3F7akwhbq1u/NAg0RK5spIgItNR2nzDvK+6zIC0FhTzVvP7mXH45spMRgIxuJ83PkLP/iGASg3SmkNIUejaQDRpSQATd+1k0jJfHCwnoYdlegEYd0CRVUxf3SW6FKScqNE8Mw7D88gtapwpOU8p+v38eKundxTVdyjAVw+Pz13ppmIx9EJOurKbZxpeI5lRVmnkdNgWVH48NJlWl9+CVNREWfd3TR3eViQl6mxlFH5WCl2k0T/9Ayt3gF+HBomubKav4F3aoYvGg/TFQjxelsHTquZr468QENVJUWP6DO4zd03eLvjUladnAZP2iyc7nAxGJ7lp5NNOC1luaic2reH+dRaA5aIa42GpmnrPlVVtZNtHdqX129q/xZZb1Grd0DbUlzMge2OnLvOF1kNrowEtEKdDkGA/Y5yoskUi8vLVNw3GkKxOKFYAgC7SUrHJVHEOxVOx7OewSfubo7VOjnf08fnjYf49NqvRP5cpP2VY9wMTaZ5Lbd6sZuMwP2ZJmi51YskGqjfVpH7PRAEOLGnllAswchcFEEQ+KzLk8FxWs2ZB/oPSKIhe4mujo5rz1dWAH8Pujq7DX1BAa4hP4eqqwDwToWRRAOJlEwolkiXSRIN6dJJoiF7BpOJec513QDg7lKSC32D9E/PUGuz0t7vo73fh6jXIysKnuAf7LRsYZfVjHs0wPXxCQ5sd7C4ssJQZDa7wXg0hqVkEwCheJzkyiqRxUXKNhXj8vnp9I/hKDUST6boDgTT6wbDEX6PzALgn53DP3s357D7z7Dhj/5fAce1kq6/o68AAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
