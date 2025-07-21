import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CpuArm64Icon',
        props: {
          size: {
            type: [String, Number],
            default: 32,
          },
          color: String,
          viewBox: {
          type: String,
          default: '0 0 32 32',},
        },
        setup(props: IIconProps, { attrs }) {
          return () =>
            useIconRender(
              [
  {
    'tag': 'rect',
    'props': {
      'width': '24',
      'height': '24',
      'fill': 'url(#pattern0_16_166)'
    }
  },
  {
    'tag': 'defs',
    'props': {}
  },
  {
    'tag': 'pattern',
    'props': {
      'id': 'pattern0_16_166',
      'patternContentUnits': 'objectBoundingBox',
      'width': '1',
      'height': '1'
    }
  },
  {
    'tag': 'use',
    'props': {
      'href': '#image0_16_166',
      'transform': 'scale(0.03125)'
    }
  },
  {
    'tag': 'image',
    'props': {
      'id': 'image0_16_166',
      'width': '32',
      'height': '32',
      'preserveAspectRatio': 'none',
      'href': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFklEQVRYhe2XTUhjVxSAv5gYY6KTGGpjG9p5/bE/ZoQE7Y8VKUNEupgy2YRiiwwDLlIouMhKNxE3UoguZiUEumgWUoNTpwuHtpqC4IDt4JDWVNtay1SdmcSfRpPnX0xeFzGJMzETmSKZRc/m3Xfuved893DOue/JJEmiqalJisViFEMUAKFQqCjOAUoANBpNcQGKKf8DKI6/bJutiLUNxHUGSrfCVE1/TVxnYO+F16n8ZQrV6u8kVRo23v8IWfwA1f0/2TZbSajPoVpZoPrbL4i92cTueRPld38lXmUgVvceiugm+qkRlGvLbFz8hJ3zdcj3RCrmbyGTJIn6+nppyXqVnZfNeUn1UyNoZ7/jUFvN8tX+nHn1Xz9juHGN0OUudl6qP8GChFzcJqHR5kYg8mpjxnnV9CgVCzOpk178mL3nawEo2d9J7UgmAAmQUbp5j2cmvkSSK1Cur6TW7UYBkB0eYLhxDUUsQujDz4jra0hotOinvkK9FCDy7mVib7yTyoHNumYAzgV+QPfTTRTRTZRryzw38jlyMXLCaWQAPHvTg+reIuXLC8h3041MytgqX16g9J8HVM5NAaDcWEU7+z2lkTC6mW9SwAD7uhoAKuZvnRjafCIXt/LCKbY3sppEPEeHTJ4FQEpRk0zmmksk8gJIckX+OcWxuZKUM+nomRqXZAHKIqlWLL72Vo6hXeFCXifIHlfFsjzjtEqWBdDPTwOw1fgB0QstSAolCY2O8KVPiWurH+Pkv4sCQLd4m41XGth9sY711iust17JWZgsUwOPhlGesy5dZklV9n5JHI0PK/XZvfLSLABAzfVBIm9fQqxt4FBbjSK6SdX0dQ4r9ewZaykL3wWg5GCXit9+TI3TpXlM1EsBSuL7lN1fyujKHiyhWZxFGf47o5PvbKH543a2EYmimC9KZypP113wJGKxWGhsbCQSieDz+R6as9vt6HQ6PB7P2QEMDAwgCAL9/Q/fD62trbhcLtRqNePj46yurj4ZgNPpxGg04vV6CYfDOJ1OotEoLpeLwcFBBEFgcnIy55Q9PT2o1eqCByiYA4FAgLa2Nvr6+nC73dhsNubm5rDb7dhsNgCsVit+vx+j0QiQAZuZmSkIUDACExMTjI6O0tHRAYDX68Xn8zE8PAxAMBgEwGQy4Xa78fv92Gw2xsbGCjqHU1bByspKzthgMADgcDhwOBwZXXt7OwBms5nm5tQt29vbm9d2wQgYjUY6OztZW1tDFEW6uroYHx8nFAohCAJutzuzNhQKcfz/4jRf2wUbkcfjwWq1ZrK8u7ubYDCIw+FgaGgIk8kEkNEdz3a/348gCLS0tOStgoIA6cRKG3j03WKxAHDnzp28+/M5PxXAWUvRW/HTAVCs8MNRGRoMBor1e/4vQU2hcNc7rrgAAAAASUVORK5CYII='
    }
  }
],
              props,
              attrs
            );
        },
      });