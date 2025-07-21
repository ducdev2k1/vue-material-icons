import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserWebIcon',
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
              fill: 'url(#pattern0_26_194)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_194',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_194',
              transform: 'scale(0.04)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_194',
              width: '25',
              height: '25',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMlSURBVHgBzZa7TxRBHMd/M7vcIcfpIlIa1g47CguVZq+0MIFYEQsgRluJ/wBQGOzQKMEOLCw11Fjc/QdQSaKFSyLvx7329jWzM87sceft3gMuJMZvMrmZ2Znf5/vbeewB/AOhywx6/nt59LTEDYzxMCn1a14+vYMwFOiRlvv2NLN1Jcir/ZVpBsrUYZkafsDDPlJKi3I9rPNAAfdk0ASCFnIzD9a6gszur+iKoq5yzo1TKwDLZ/VnjRCpwE2CfzYgqyYwnhEwMx4PxzvGt5f03SLPFh1qWB6LAFpJ6fUAJ3ygbq/ung1l7y9u6x0hEoAhkWWc63mbwdFeP1C7Dzhr/VZlf2BfA+b3hNlxhnWuJptAasQVSi6BAIQBqAJeuf/8yYBwSwAhFkL9/I1wPWSpCSlBrS1AvaviN9OUyZPv78cFYLzWDtxrEdfSbeAlBUQ6T0QAocGk15ijcW/xp9EEEVZeNk6SC9qNsEqjUFWdi0DGN5c0SW8cxGJOL4T0kFgPN4ylTa0OAVUdjU/ipAe6ozTvQsvtH61DMKou9lWEEG/uU5Auf8PdRcoaoNiJIfWdFRW1UkAqqZbPnKIVafPz5M4haeEkehZoG4gE0DYQt3QQaQe0ml3oX0uLKyGmVul3EmctXhdmZh0yMgJbqhIbpFDoRgGJ7i4Zjap0qw6ZH5gopPogF2EkCXQFoQHEKDnzbaZQh0hpKbrQmE3zvu8s4niRNuP0Xa0eWe1nm1+zeyfYCI0wDN7hUHgoA3FmGEmImSDusyAsCGNQkwnoEQVhBIXdIzGH1QjrPz6MTdTiRi7I25o3U3GS2WIF6zJfCfBOB8WV9tcLsS3wK05Y98qVatYqFmOp2CzyxTCTcDTbGDdyOubvTJr6gJdJq8j0jm8JzsVfZ/FhA6eUB98uA/Ud0/fLmV/LYzttIVJv7k6aN3tZRutzTUX1QU1ZHSEicJgF9So5u3CUMT8+MuNjOlp9/Hlj2naUOdce1KlX/eTKU+2WqmDfLgFxrVzgVNYOvkx9ahfnUv9WHr7eGLUsxfBJn0bsyrB7elikQWAy6uaO119swf+gP/aSkFIXWG37AAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
