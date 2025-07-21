import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsROKIcon',
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
              fill: 'url(#pattern0_17_218)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_218',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_218',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_218',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABKBJREFUWEft1VlsVFUYwPFz92X2Tmc60ynTFlJagRZECyQGW0nUQBSjCShKYoC4oYkxLIkBIj5UFonRhPhASCTRoAgpZY08YCpLALGUQhk6LW2Hlpl2ljtz79w7dz/3mhpRog++SHiZk5zn75d/Tr6DgEd8kEc8H5QB5QLlAuUC9wtgDywkGwBw/z70PTUFQNa0drxBEgwxNc2yEBsCU07lB0d/Gjx1C4CU/DAVSHv7drxR83A4SrsMqBR0S8vhKOmT9WKfahS/6bx5tBOAhPonAgcATNUypqz/B+wBAMmkxcRZUeW+D7nrlzqpipWqWbrWkzq1nrHp4aCnoTXgqm20bZvUoJRM5OM9F0YODb/z1BePoxY2n9ezmQnl3uXu2AHulXmbFvjpUANAAGroqkqRDqZkCLIm2ycOx7ZLb7Z2rGQIlyeR6xv5C4ChBDXMXd9/ZmD/hy/M+WBxrXf2z4Ypp+LpK1+72SBfwYbfognHDGDblmVDSVByJ0SD3xf1NL2IotjHvJL+daJ45xM37Sd8dHgjTTifkA3xvAk1p5sJzJd1IWsg2rM/XO0YX7NgZy9DOBtHctc7HyhA0KOF/oOj2d7PHqtuWx521X2uQ3U8wd08XuNtfJ7C2GDJ4M9atjlK487lOEoGeSWzlyGdbpb0rBfkzDVBy53xs+FFDOFapJnyuXv52G6WrlgZdk1frZhi3rKMtm97Ph1bu3BXjCHcTcPctcN/AzDKIenCoGWZNzCEeJIlHf5JKdGl6lJ2un/eJkUXb93OXNoiKdyNWdWLt1Y6atbySvo0tCH0saFlhqnlTMvQaJwNqIZ0MVkc3DESP3+xufmlHVXO6Lr/BqCUUzaEMWiZRTdd2aJDdexS4nhH1NtYU++fu03WhauXx09s4MTJ+JKGVZv9jsiGgpLungJUsKF2YFk6giAYgmBkXk6dTInj27qHDtx4uXnDnimACksF3bDaDvZuvbtu4e4YTbj+UQAl6DEh3gVs81jAUbeLxll3Tk4eFXWuv87X0mFCfTIpxL/k5WxffeXczV6m6rmimj0EbQt6mcBrsiYMlQx+0MeE5wEEcYtK4cikPL7HgdNrI56ZbyM2QOO5316XtKw2P7L0OwIjq+5wvT/+6xFCXdjidkbfr3LWbYM2zGekuydZ0l3joQNLTKiNWraVxVGi2bSMTEYe2xl0RJsonN1YkNNXksWBr7x0aEbIVf8uAoBH0AtHJoQ7I02B1vdwjI4oevEStE2cwtkGBKDk3Xz/KWQFWIFZLdEuDCOJsULs9OXEsb1P166orXBHPiJQarak5wcL8sSFab45rTiKL0IRjDKhMSTpheOpfOLM9GDzMgxFV4tqfoCX0vt4NZ9rCLasoglXuwYVOCmN/FLlnOZx4L42FCeDuqmmbGB32ZaOT4ijrj824TMzX23BLAqdlBO5/tS5cQDa8VnVeHXEFQ4apq4OpHvSQU8DVeOZFsEREi+WOO5Wqe9eNhuTFteuDlMEGlIgLxekYjKW7ZZmVrdXVjNVIZRkSUXkiryaLEUDLWGa8DoEJS3eLvYPQZhCK/E5/vJvWC5QLlAuUC7wO1qoewpJ+4SDAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
