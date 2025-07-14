import { h } from 'vue';

export interface IIconProps {
  size?: number | string;
  color?: string;
  viewBox?: string;
}

export const useIconRender = (
  d: string,
  props: IIconProps = {},
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
