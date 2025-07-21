import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsFIRIcon',
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
              fill: 'url(#pattern0_28_19)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_19',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_19',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_19',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA8BJREFUSEvt1W1oG3UcB/Df5aG7pHZd01yaxzq2VOtch21N46SbmdrNNaC2CJsg2BeCILI30oD4Qs06Nr3AQBStyDYr84Ww+dBtUsHdBPfQSddKk6wwG4+2edpicpfr5S6Xe5CbJunCpODou93L//3+/8/v++PPHQJr/CBrfD7cB1ad8B0jGnzIMLDXjb4oK4h0fJYZvbJUutpuXtc2lynGAEBc9bS7FFSAoY76oY93Nx2nizKVF2Rq+Hz+QLMBMX+yu+nYsVn20wM/5d64J4DYb7m0pVm3rXMssTHBQAYAEP8mY/9X/qZTR67m3/9wkjl8T0DkVes8LypC98n0IzUHqSmV/3O4ukfdrHMYwEq8ZLtYKCmC//vULvVFnIM0AGgcBsCKHNAZAMZsBJtYAI4CoLrN+i7Het3GCxnuQj4PWZcR7F2YwctLMndtqfjrLYDl24DdAK65l10LKzvkRJltGYtjvVbUe64fI4LXqEBohsGv77OR4Wzpd7YkFwY31e9X9+z6IdX9jN245+3OhqBWi+jUtRwv/TX0S3YfEed/VhOgT9vX7fziyeYveUkpvTmZfY2WNPRUmpvstaK+c89iRHCGCoTCDB4dsJHOet2DM1nhtyNhJqjIIOkQqDv5lOm7sXl29HA4984GfV3LWK/pNIZqLR3fxDdXblHUb4uxosJ7JlJbyml6zajvrA8jDkaoQOg6g0f9NlIDoG0/m2wDAF6t+9GHEW0N+nb3eKIVAErq2oDTMHjiCfOpt6Zzr1eAcJ8txkkK7zlfA2zHiINzVCB0g8GjfTayICrs40Tq0X+bQG76newiJy58Ti5/VG4Mq9Ngw22N751YWP6sCuxwxjhJ4j2XknckONNpIUb+yAVCfzJ4ZIedZEWF7bmcLAN1VF9rsSgrXEaQk7U3bSLDjVeBHhWQec9UogpsQH1ntlqIEZIOhJZoPNLjIFlJYXumEpUEi9tduXmudMM3k/Lc7SpXgQ5njJVl3htZATyA+sYfthCH4nQglKLx8LZ/AG+kAsDXbvO3exqNz++cTXVEBCFai1QBtzPGKjLvna8BXC3EoVtUIJSh8bDbQbKywnpjVaDLqO+eaLVdTotS8t0UPTxdKk1bNBrLCw2GgQ9uZkeqgFNNoPDeRLw6IhT1jVtaiCBNBY7SNB52OElWAdabWCqP6HbDzxmN/UdNplGrRussJ0jI0uIr6fRgBVgPYEIAFBogtyKm3g7QmAAoAEDhP2rK5brH9PqtDYquPquRchFBmAMA+f4fbdWP7JqP6G+Zd7uRM5JKOwAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
