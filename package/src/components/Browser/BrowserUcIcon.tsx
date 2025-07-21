import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserUcIcon',
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
              fill: 'url(#pattern0_26_193)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_193',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_193',
              transform: 'scale(0.04)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_193',
              width: '25',
              height: '25',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARbSURBVHgBbVZdaFxFFP7OdauiZjeV+tskTV7Uui1dpWiTgoJSWw3SjQ9WEBSV4JNKsIKVKiIFX0QjiD+ltX1Qq1E0RaFUxD4o+pDaJrY+iELz05b+QLOblCaF3JmeM2funXt3c9nLzJ05P993zpkzS8g8dk9nKw8VFKI1MFiKCNZtGBCaHsNvxD9jYSJKx4I5Sk+P789KUsZBFRHt4ZWSLjQYJrcmo4XlCVGzjDfF7wSMHaDnxodTJ84B4fug5IzY1LSsU8aEOHI/apT3NhmF7vWJI3Xy+YoTPHRmDNqU5Q1tqnrxZB4rNYyLsQZqHJ2ugt3VXmVqnUhjwM+SIqH8ArDqeeDqYnByZBD471s4WUMJO+tyRplQyl7k5iUs2EqBJ2u8VxdktLRZ9A4Rj3l0wuiB99hpC3B8t2KyPmxeFciE23g9E1UiLPCGEVlBx+M9A4R/h4DZk1j0uXcATk5fcizCN1JbsdV1mFLkVrMCh9jIyPvAF+uA0382O5HwXddGzpC81zPDR3YhB1QcJ3MmEZgYzzzOODx/fHE2l2sB6bK7ga6NwI1lpGvGeJY6j1zsbGLYKBp4lMtWNTs4xezm6uR0JD+dG3V9y0Hg4Q90TUFqQfCk4FasL13NmVbGfVsJy7sbGMwAP7+iQJb3EDYMcoG0h/27ngTm68Bvb3l74k3MCfqUppJA1ybC/a/mHcxMAd89AdQngdu6CbczgPpUM9OV7KjQoidNDuSCaciJvFKqGz7MKx7ZCQz1wZW1OK/0A0VmcHSnxe61wD9fB9lrSrKnSY+NK+WCNjYKXaz7NRYshvDsf1YPwrqtKiPoD70JlLcAj+8lx/CbKvAHn6H2HtWbnmTgRg83h16ZSIikqpaUVDl5ft0u6Dk3rPz/AYuzXG3lp4D+wxq2Ay8po/6/gE3Mvq1HK3Su7quLaXC4fOJJE3VTOTg4xwb/3gdcy6zmZ4CE68inwGMfAQ/tAL7aDBz+DFj7InDzajgQco6kwqQAXCFx93dMIn9G5muhMZ45Bkd5rhZaOvkq/OUN4I5H1fhPzGbkE8tASMFkuqZ2a1/CsW+MFyby90PS7MjP/SXiwiHh6ljPn6x/YYp8u/eKPh+ucaaHESGWY/tUrtThS9pkepI7U8rQMa8nLcR3i0SW12J/HIy0FWNqumlU+eA2vgUY5QpG2b6eHIik5STNsNhBuGW1yqWlavOdI7EXwxXYmLYAj+AS52Bvr8Xol8Dmj5kRt/5YkPtGKtX0zI/K9s5e4OUx4MHXQ0tSOwEU4lGyb7e2ssAJXmpN85AEeGmHxa2MePx3cgUgOit79cCRv+Rqk9b1srPH8rryQTRB78x06fW7vaXKWz+kCW+8WnNXrA2XLRGFz6xwkn++49+dHY7c9o7ZYd7rY0bjaVytj3USAuvvCylhl+yGKyJJvisKM82zqjhA3q3HuU1YxZUM9sz/lCgL039Lrvgz4rmNpxFdNYq5whgN1mqJ5BWYXJRrqJFb9QAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
