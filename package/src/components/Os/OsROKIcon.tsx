import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsROKIcon',
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
              fill: 'url(#pattern0_28_54)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_54',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_54',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_54',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAoJJREFUSEtjZKAxYKSx+QyjFhAM4dEgIhxEfAx8QiKCclYglX8ZGP5/+P76+scfL+8R1EmkAkYpXmWrYP3So7/+/fjy99/v7xwsPCLnnu3uOnZvXQWRZuBVBrfg9pvTK3bcmBsXqld2UJxP0XLphTZdCS4pQwNp1yJWFnbeu28urDt6f22dqbxXiaKgvt+heyuzv396e8dWO2YBFyu38Jefnx7xsAko7ru9PPs745un3iq5G15/fXwO3YLoQN3CvTL86g6nn2xrNJHxrH/77enF999f3lQVNg678vLwTCYGJlYtceukHbfmhBhJu1eKcksb7r21OFFGUMNBQ9Q8cf2VCY5vf766m2Lc9ujpx1sH4Rb8+PP13c8/397zc4gqX31xdDY7O7eIiqBB4NarU3zuvb+yJ8t6ysf/DP//3Xp9ZqWWmGXCz7/f3rEzcwntvbMk6dqLI/Nd1RPn4bXgxZcHJ3/9+fFRTkDD7fCD1QWSPEo2KiLGIduvzwi48/bC7izrKR/+//v76/a7s6s0Ra0SP/18e5ePXVj51pszy3bemBPvqh4/S0PUMnHDtSnun769vhNn0ngXxQegODh6Y1VuqHnNRXYWLuFTjzbXWMoHdn36/vrOh19v7srza3lceLa3j42ZQwAURJuvTfPUlrDOVBLS97v95szS999e3jKT82589fXJBSZGRkYRLml9sAVCPBJatgph3U8/3D545sn2Lnl+dScDWbeyD99eXnv06cZ+AynnQlYmdp677y6sO/toR4+BjGu2vICm2/H7m6tefb1/3VEluo+PQ1jxwdvLGwW5JfXEeRWtP3x/ef3is70TZPg1XEaLCoJ5cTSIRkAQAQDKWTlVg7ZMwgAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
