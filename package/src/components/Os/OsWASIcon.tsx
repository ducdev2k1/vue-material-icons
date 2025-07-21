import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsWASIcon',
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
              fill: 'url(#pattern0_28_73)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_73',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_73',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_73',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABWBJREFUSEulVktMG1cUPeOZsccf7JkA5hNKEoIJiUhTBMFRQN1AU0AorCCrVk0WoapkpCwCkbIOIsmiEl6RTaQuWiVUlWgR5OdKlXAbIyJVKKWuCaXlF2wCxh5/xvbMuJpxMIaGft9u7n1zz3n33nfPI/DmRVy+fJkSRbGiqqqqs6GhobmqqqrGwrKFyvbQ1ta6z+d7PjU15fL5fKMURf16584dEUB6bzhir6Grq0tbV1d37MSJE1cam5q6GIYx7UNCNQuCEHFPTo7Mzs5++uzZs19GRkaSuftzAQiHw5Fnt9vPNzY23rAWFZX/VeC9voDfv+h2u697PJ6vnU4nv32aLIDD4TCfOXPmw9a2tpsMwxj+TfDtvYIgxB5MTPQ/ffr0M6fTGVbsKoCSls7Ozu62trZhRq/fN7iczqRYQ+wcPJ6UQFMaUJqMTYjHYxMTEz2jo6P3lXQpVmJwcLDmwoULYwWF1vKkKIMmCSSlNLQkgYQoQ5TTKpNIQoIopVGQRyMlpkGRBGYWeZRwDDgjBaOOBEkQCAQCi/fu3eu4du3ac6Vb6PaOjuH3mpsvCikZvkAURWYd5gNR2IqMWAkKUOwK6dWgAIIgcNRqAC+IMOkozPmj4Iy0yr623ALWQKlkHrtcd8fHxnqIS5cuHbt1+/a00i3RpAT3i02V2cJ6DCfLzEiJMqQ0IMlpLGzEUPuWBZGECIueAkORmF7cQl05i99exVBdbEIZx4DUEGp39V29Wk8MDA729TocNxUGyvF/9kfw4/IWKgtNWOMFHMk3YGYlDDNDI56SYLMaoead1CDfqIXXz6O+nMPyVhxWkw5lbAZAWUNOZz/h+vbbh3a7/dx2J4QFEb71CA5xBngDPEwMhdWQgGKTDgxNQktpIEoyAtGkWh8lVF0Zi1hSgklHwsxQ2SbweDyPiKXl5RWO40pz21IQZXhf8fgpwENIZdgeYg14u9gMlqGxEIxhZi0EPilCaaySPAanD7KqL3cFg8FVIszzSY1Gk/VI6TR8GxF85V0Fq6VxmDViI57EMh9Xg7xTZMHYnB+heArHC/IgiBKmX26htdKK06UctKQmiyHLcooIh8O7ACIpCRMLa/BuRPDxqSMoNGhVpmPza/DHEjh7MB/fLa6jzKxHR0Ux9DSJqdUgOIbGUc4E7ev8KygqwNLS0q4UbQhJfO5bQh5N46PjO9PCvbqB79c20VSaj0A0gdkgj3y9FiVGBofNBtgsRjAk+ecUuVyuXUV+JSTxxYslsDoaH9h2AH7wb8Lt30DLQSvKjHrMh6JYicaxmUxC+eds8QE0FHK7QNQiDwwM9PX29qptqiw+JeKbpZdYicfxybEKGCkKCUnGw1U/5vkI3i0qUAdMqV4PC00jmEhi5PcVGCgSXYfLwGl3Cj00NNSfuWi3bqkXTQFQijwbCuPL5RVUmIyw5ZkQEATVdtLCopZj8djvVwf/Kc6iXsCJl2uoMVvwfkkRTBSVHeN9fX31mVHR3j7c0tJycfsUcUnCbDiMmXAIcVmCltDgiMGIWpaFmaYxx/Oqb0tMQemZQq0ODdwBFDNM9g48efLk7vj4eE922HV1d49ZrdZs0lOyjLAoIiFLoAgN8igK+tdFFNNp8GIKChEChMraSJLZ4MqwG7l/PzPstsd1R2dnd3tr6/B/1YJcTRh/8KBnLGdcqz5FcBoUwTl37v8JzqNH/VN7Bec1uiqZ9fX155uamm7kpmtXc+/zoaRlcnLy+vT09Jslc/u/bdGvrq6+0tjY+M9E3+0e8Xq9fyv6udyyz5bKyspOu93ebLPZaiwWS+bZEgqtz83NPfd4PK4Xs7OjlMGw77PlD3a4g/ew/4FVAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
