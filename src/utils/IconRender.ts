import { h } from 'vue';
import type { IconProps } from '@/interfaces';

export const useIconRender = (
  d: string,
  props: IconProps = {},
  attrs: Record<string, any> = {},
) => {
  const { size = 24, color = 'currentColor', viewBox = '0 0 24 24', ...rest } = props;

  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: color,
      width: size,
      height: size,
      viewBox,
      ...attrs,
      ...rest,
    },
    [h('path', { d })],
  );
};
