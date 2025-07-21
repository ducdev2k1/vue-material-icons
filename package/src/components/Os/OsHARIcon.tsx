import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsHARIcon',
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
              fill: 'url(#pattern0_17_189)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_189',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_189',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_189',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABRVJREFUWEe9l31IlmcUxn+v32nzK80IJXF+1GYimihWkuuPdJH9EeREacNGE7EpktLY1FbBqhErVlGBA2fR/pEGUk0QRkU6S7Ry6UxJLVdOy8jmV36Nc/Jx5mf6bh54eN/3fp/7nOs+5zrXfd8mpjYTYDzTvDLn4RHAeMYmS5DxZgE4ApHAh4AnYDXnUJMnvALqgZ+BGqB3FIyu0jAJFAR8C3zwHwSdysUgUAjkAn8KCAOAfErwIuDd/yn4eLelQBLwlwHACfgJiFmA4EaIb4Acg2hRwK+jxFsoDM8BfwEgxPsa+GqhIo+Ls9kA8APw8VQA7O3tWbJkCR0dHfT19bFo0SKcnJzo7e3lxYsXOmXx4sU4Ozvr75cvX+qYyWTCw8NDvz99+pTBQeHfJPvMAPAjkDjxb3ESGhpKUlISZ86coa6ujsDAQLZs2cLt27e5cuWKTomMjGT79u3cuHGDy5cv093dzdKlS8nIyKCnp4ezZ8/S3t4+FYDUGQFYWFiwadMm9u/fT3p6OmVlZURFRbF7925KS0sVlNi2bdvIy8ujra2N3NxcqqqqSE5OZu/evQpU5ra0tMwfwLFjxzh16hT37t0jKCiImJgYioqK3gAgq/X29ub06dMKNDMzk+DgYMrLy8nKyjIPwPnz57l79y7Pnj3Dzc1N6y2AxmcgISGBgYEB5YijoyOPHz9WrnR2dmpWzM7AyZMnqa2tZfXq1cTGxk7KQGJiIsXFxYSFhbFhwwYOHDig5XJwcCAnJ8c8AG/DAQGQn5+vK5ZSXLt2Tcvg7u4+fwBGF+zYsUNra2QgLi6O6upqZbzYunXriI6OpqSkhJs3b46RbdeuXVqGgoKC+XWBeJJ6Ll++nEePHml7Sc9Li3V1dWl/iwknXF1dlSOGNsi4p6cnVlZWyodXr2RDnGQzt+ECKOPsACwtLVmxYgXr16/XeoqgVFRUcP/+fUZG5Hzxr/n5+RG5di3ubm40NDQoD54/F8mf1mYXolWrVpGWlqZpF4JJSUSWpa63bt0a8yzgRHACAgJUjl1cXDhx4gTXr1+fLv0yd2YAsgfs3LlTCXb8+HFaW1vx8fEhPj6e5uZmjhw5MlZzAXr06FEePnzIhQsXlBdC2qampun2gdkB+Pr6aguJE+nroaEh7OzsSElJITw8XMckiJisODU1VTVAgEr6L126NB37jczNnAF/f3/V+JqaGg4dOqSTZH+Q9tq4cSMHDx7kzp07Oi4t6+XlRUhIiIKLiIjg4sWLnDt3Tks3jc0MQLZT2XhE//fs2UNjYyOS6uzsbG3Dffv2aeuJSe23bt1KZWUlDx484PDhw1p7kWHJ4LwAWFtbs2bNGg0off7kyRMlozBbCHb16lWGh4fVt6xegq1cuVLTLtt2YWGhCpihF/PSAam5OBWNF0ESEKJ29fX1eigxTARHsiCquGzZMs2C8ED4INyZLQOysX861UvvuPnwfnQ6Hl7vYWtrR39/P60N5TT8VkBXR+MbU4QfsvnY2NgoOHkmasWEGMnGgeRz4LupANg6uOLuHYGNvevY371dbXS2VtPf/br+ZliEcSr2BarkeDfRmclkgYWlNZjk7PraRkaGGRka0E8z7Hcg3LgX2AJ5wBdmOJzLVCHFR3IRGn81cx8tw6TD6Vw8v8W7EvxL4HugZzwA+e4MfAJkjl5M38LfnF4R1ZI7yC+jF9Q3LqeGJym2cCEY8AOkPOba36O34j+APuNmLE7/AWvJJKJ3DJ2zAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
