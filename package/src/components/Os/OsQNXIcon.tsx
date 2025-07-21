import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsQNXIcon',
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
              fill: 'url(#pattern0_17_213)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_213',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_213',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_213',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABHZJREFUWEfFl33Ml2MUxz8pUnknomFR0guN9eKlzIYVmz9oFVaTMS+T2SwttUqyacwMK8xG5Q+lWpkxlbG0aMikxKJV0wtN70ok2aedq13PtfvR7/dsONuzX933ua7re77X+Z5z7mb8z9askfN93rx4dwj4C/A3mX7HAPk+VX6NhtkYgFOAm4HjY6UHbwe+ATYAv8fzs4GeQLv4v4fvBFaG3/6jEVwFwIj6AEsqWPgeeBJ4I5i4BZgEdCsO+hl4BJgH/PZPIKoAtAaGAq9ULDRCD38gNn4wAMhYaa8DE4OJuq7gNOAJwM1LM5pXgUeB44BxwKgKvz+B54FngS31MuB9vgZcnS08GBF/CTwHfAhcADwGDM78zBVB/hDglkbing+0Kvz2Ca7qCk4FHgJyWtOm5oWba+cBNwKdswQ06dYDHwHrAIHL6DTg4gzAH8B3wJTGVHC05K3nfV/AfOhYsWhVCUAFtAWkLJmJd5iukGJ6fmaw4BpNP5naHFL0OrT7gQmZVHMcW0sA3tPtcQXJURp/AhYCswNIC+COSFSTUdPvF+ADYBbwYzx/EbgTOLFgYBswvQTgvb8ADKugaw3wOPAmcEYkoFovbQdwD/B2JKCK6pXVFJnZC6wAXioBnBURdK/Y2Ao4GXgZ8L1gBlb4mWB3BwvKsVRAYkqgh3IA/rsL8EUhGc8wB6TWKvg5cD3wVJThHIMl+hNgdPjlfaMycXMANp9L45DknHSttMyBxcABwMw2ShMxT0Dv/V1gWdBsQJcBVtfkZzDfAl97RSUD5oD6zgG4wNr+a/ZcbZ+T3WtSSvJLkY8E7otakJbvicPH2Nz+zTqgPC1Ag7Kuml/DCGBqUwAYfW+gU7abd2+SLg8p+kqlzAGuKeaFtGw4MKMpALxTe0C/DIB5Ya2YAcwMEFeGYsyr3LyC96OhbWgKgJuiIV1UkdbvAWOBr6L2DwBOz/yslBtDafaCBklYKZPioUqxqlndUmbnLg4g44FVQMuQcxrtTEyZsgilMt1glqsFgPf/cByS+7vhauBpYD4gzTVZvVdwctQAkzCZlW9rtFdnRmfHmq1eANIp9dKbzOidA/w7Qm2tCOoFUOu+NfsJwL8rQla2SGu+zWYBYDMp7VhABciG5fQqQMlZBS3VqQ3XBCJ9WDg8OnJ3CA07ZpnNt0YjcmP173eA92zXVF5q33zYBbQHPo0sPxdQkgZwA2Art3CpgrnAEGcBvy/SF9BnwO4YGp4Bro126nDSJpLMIcRK1xVwbnTAsOn0iK7orCiD5sEJIUXnwEXAdcBbwF3xvaEkHfsPCMADnHIdrx0ePo7xyunYMeySYMdovJb+wZT93MgF7q+sWfX8KjJSlXFhALg8qqJMC9xOusk7EoCRebD0OqVYRGwga2OS8f9OubfFrGekVjQPlWo/3zzYidm27aR8UgSiRFWHEft+SkxK7wC+O1KInOvsXk4rUigof000f33uMy19oLppGkj1k6G01sBco6XW7GxwbwTr7HjY/ksZJsU1qBV/A0EdItgeShHdAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
