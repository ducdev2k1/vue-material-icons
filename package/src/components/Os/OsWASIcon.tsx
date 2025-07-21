import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsWASIcon',
  props: {
    size: {
      type: [String, Number],
      default: 32,
    },
    color: String,
    viewBox: {
      type: String,
      default: '0 0 32 32',
    },
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
              fill: 'url(#pattern0_17_237)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_237',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_237',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_237',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAACHlJREFUWEetV2tMVOkZfs7c78xdhtsAclMwWli1kEph3K3+MG3QlcomNFm1/jCim002Qf84xsSo1bQsdrelrmFDsrtdalgvKFuv1IqmOlXwsgoKDgwDA4PD3G9n5jTnsyBXNcb3z0m+2/u8z/u873c+Cm9gZrOZ8/jxY7VGoylZVlj4wdIlS4rS0tIyJRKJGhTFiUajXofDYfvp4cN7Fovland39wWVSmVraGigATCvckG9atJsNgsAZGZlZW1eVVpapdPpUhjmleeBoiiEQiGf5fbtH2/evHmsr6/PcuLECd98QOYEwEYc4fMX5KWmflRuMn2q0WiSXud4rkBomg7/q739G6vVerSrq6u7oaEhOnPdLABms5lnNBoXpaam7i0uKVkP4JUsvS6DLCMD/f2P7ty581lra+uVpqYm/9Q90w5nnWdnZxfm5OR8nl9QsPJtop4PkMfjGbt08eInHR0dP3zxxRdsSohNAmBpNxqN+QUFBX9bnJ+/8nWRvc28z+t1Xb58eVtHR8eZ+vr68DQAe/bsMZhMpvqSkpINbxp5nGEQZwAORYEzI1HP/VHIhFwIeJxpWEccjv5/XrhQOTQ0dMtsNsfJNlbtmZmZNRs2bPgDA1CxOEOooSiAjjPgczmIxxlST+yXHRNwORgPRjHup6GVC6AQcxGhX1SIgEfh2xt2rMhUIlktgpDHAXcKwtu3b58/ffr0744ePeqcAJC3ZcuWS2q1Ool17vRFEabjkIm4eDoSwCKDDK5AFOycOxhFIByHVsbHqDeCR0M+FKUnQCUVYNQTJiBT1SKcuTuCTL0EUiEXCWI+MrXiSTYYgDnx1Veba2pqvqbY3GdlZR2sWL/+M5Z61kmfM4D/9ruxUCfFhYdO/CpfS5xJBVzYXCHCAGsKMQ8ufxQ5C6QYcocIK6wlqUToeOpCokIIQ4KInLVpeRJ0cratvLBnfX139+3bV0ZVVVVpDx48eEej1aZMTDp9EfzdMohsvQx0jIErEIFUyMN7RiV6nX64A1H4wjEoJXyI+FyI+Rx4QjRy9VIsUIgQomNotthhytUhSy/Fn6/24cOfGaBXCCcBsNTX1tauo3bs2PHrQ4cPn5oqPJbmH7qGCWUr01U4/9MIFmokUIr56LR7kK6WwBOKQiniIxJnkCDiET2oJHxIBFwohDxc7nZidY6OsPjltT6sX2qAXv4SAIvkx7a2Jur48eP1m6qqdkyVKpv/RyM+cugSgwKddjfSVBIizAcOL4mYz+FggVyIMX8EChGPaMbpjyAaZ5Crk8E2HkSBQUHWXOwexfJUJVk31cbGxgao+/fv30rPyHhvZl3HGAZs22dLbcgbxrAvhGA0RpbppEIYlRKiCaIHBqAZBk/GfBj1R0hZCrgUMlQS6GVCxOMAj0ORqpphDBUKh700TcvmaiwhOo77Ix5cs45h0BOa7FpsKlakKLE8SUXSEIjGcGvQhRs2F3whmgCgmTiSFSK8v1CPhSopATDLKAoUwzCMPxCYNcdWQ89zH5ruDZDIf56shk4ihDdCo9PhxvNQBOuyF2BVmhaPx3z47oENEh4XK5JUUAj5sHtDuPRsBHlaOT4qSIFa/LICpjp7AcA/7X4g854IjdNPhnBtYAwV2QaY0nUQcDiE6nsjHjQ/skEpEmDT4hQ8dHrR0m3Hb7IN+CBdDz6HQiQWx/neEQKUHScA5rjK5wUw7A+h/m4vof3ToiyoRS8jYFloeWKHZWQcVbkppHc09wwiRS7GqmQtjAoJNP9PTZCOQyMWEFBz2bwABnxBHLJ0I0UmRm1RzrS9bBs62zeEs8+GUZmdgqWaBFyxjeI/Iy4iNJ1YAK1YCKNcQuZUQj7RxUxjr2qqp6fnlsFgmFUFNn8Qh+52I1kqQu2y3NkArMNo7R9CZWYKTMk6jIUieOYNwOYLwh4IYsAfQihGI0+lwIcZSVALZ2sgFAqNU3V1dbu2bt36p5k3oCMYwpeP+hBj4tiVnw3tlAM8URotVjvuudyoTE9BrlJG6l/O54E9xx2hCaBW2xB6PD7sys/CogT5LBYsFssFqrq6OqOurq5LIBBMK0UfTaNt0IGLDgfWJRuwJikRfIoC2x/uusbRbLUhUSxCZVoqHnu9ZOz9RD3yExSTjpp6rbjiGMUnednIVyrAnZIGlv4jR45sp7Zt28bfuHHjt8XFxRum8sw2oGeBAL6x9sMZDmOJMgEGsQjuKI0HbjcR3rqkJKzUqHHH5UKLbRBiHhdFKhWUAgFGw2FcH3VCyuXh9wszyd6pKvB4PI7a2toicu3v37//lzt37mzjcrnTmnWUYdDr9+HfTie6/V5E4nHwKA5SRGIUqzXIT0iAlMtFIBZDp3scN56PYSQcIizxKQ5SxRKUanXIkclI654wNvozp04dPtnSsoeA2rx5s7yioqKurLz847lasoeOwkPToONxQq+Mx0MCj0/6woSF43GMR6Pwx2jSvlmgMh4XSr4AvBkVMGS395w8eXLt7t27eydYoY4dO7a4fPXqf6SlpubNWbDvaDAWi4Wbv//+48HBwWaz2UxPpoXVQmlp6Zpyk6lRoVBo3pG/WZdP69mz+9va2v7Y2Ng4zk5O6w7V1dXSNWvWVJhMps/lcrnqHYNgzp07V9fZ2Xn4wIEDwxMvpVntafv27bKSkpK1xcXFR/V6fdq7AMHS3tbWdqirq+svU53PYmDCWU1NjbCgoGBZbm7u3qKiorVv+zpi1W6323va29v3Xr9+/XxjY6N75htx3mcX+7Pq9XrVRqNxXXl5+a6MjIxlb/peYB273W5He3v711ar9a/hcLifFdycl9HrKGYYhqqsrFQkJib+oqys7LeFhYVl2hc/sNPAs06DweD4wwcPbl1tb295+vTp6WAwONzc3PziN2oe+x+8ctgbnMJqHAAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
