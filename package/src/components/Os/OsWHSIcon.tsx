import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsWHSIcon',
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
              fill: 'url(#pattern0_28_75)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_75',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_75',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_75',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABDdJREFUSEvllWtMHFUUx8+9d2Zn2J1lYR+wtBSXhQK7pUkRU0QoEEtDGvFRtSU2DTYpGonxRdVq0vJobdSIQuRLrQkaY7W+22Jta4qipKWmIn0tguHZLmC7D577mH3MmFlZWCr1g4YvepL5MOeee35z/ufeMwiW2NAS54f/CCBHvTHazOapZvyTfovtuLMbun03SYdzUp/i9KxBFSQeYcx2dbxz9KD7r/Jm0zmZJWpN9DIWgAW788cZdBe3Kc4ozyxXUppCP/A2D3gOHxr9tA3mIajU/NoKmYx7kKW5u0UIeF1ex1Fe8Jw4Zal1hiEGMLApd1bl04h+mGViDRgwvnaj/RTarNv5Upai6FURIRAREnjEW046Pig/P3HkgrTZrCvi1hqfqIhhk/YSzCgln9vvHJzkx57/6Hz5UQAISr7bzZXrVhu2HiAkKgMAsOTrHzn+Htq5/OAlDZ2wehYAPPLaLs+07ztyvbFJCspeUZaSoS/do+fMj0ZK4vRc293St+ttu713WvLft+79htjotB0Ey0IfMQfYldg8rKJ0SfMA3nHFc/aNr0brX5eCctMez0hRFdTFc6YtkQC7q39/a0/DW9apjpBMZcUth6MY7QMY08ySALYUH/tEzsbfjxH5vwHykivTjdq8ujjOVLagB+6+V1p/bWwI9+AfS7TW+FhauqawJo4zbV1wityDe1t76hqvTl4e/1dNzkncvnKlvrg6XmnaFglwuAbq2n7b3zg0cWEiBNjQ8nGUTLtp4Sn6phm9mNjcF0PpUsLH1Id8EwPeS00fjtRUSxvzjU+mGdW5tTql6ZG/qQBtKzn9JU0p70GY0OG4gZET76CnE5p+0DOGgjBAwOCfFifP/OQ4VnUF/9y/XlNRqlev2SOT66QbOmf2wMi3w1Od+9ouvvtLYVZFYZK+uJ4iUSaE0NyE7hn+fDd6SPtMXTZXXB0GiBiBQEQXj3y9iLBTQSwsE+VcckCuoGF2ugsYYIbiZ/xE7EOYOANBXwJFWCNCeO4OAIB4zvJmAcpV3puxUb39HMGMKgQJARCIBIGAceg9yNDgZ6NAoKhQBT4awEuLEAxNnMVt2m09axk7VIKyIZtO122oWsXlSwMPzQMwCHgWSGEIMEzoCRIMHhmAnxJvmTwo8OMDo6c3t3fVfBfSa72yXJOoSHk5VX7Hc4AR/rOChQCBYPDJKN6tYMDHYOZW6YMCb7fe6Hi23/b1F0NDbd5wQ1BJ9I5YJasqTeayXuBobWYkIEAEl9P/+/dWvvdAUBEjV8eYKllFXC5gwobLQAC8Y7L35IRrsJ6/frGzw/qZR1pb8E8ugiIqdnmuyukeNNOUfA2hGKVf5EdF4uvSqlL7odvisRWtQtQ0q3C6hlNlQGciio7x8dM2Gqgugm+znun1uABqhQjwolIigNpZeK0UIClysyqRMYuthxL/AZ0RPNTVzwr2AAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
