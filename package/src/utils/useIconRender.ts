import { h } from 'vue';

export interface IIconProps {
  size?: number | string;
  color?: string;
  viewBox?: string;
}

/**
 * @param tag - tag svg nội dung chính, mặc định là 'path'
 * @param tagProps - thuộc tính của phần tử chính SVG (d, cx, cy, r, ...)
 */
export const useIconRender = (
  elements: { tag: string; props: Record<string, any> }[],
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
    elements.map(({ tag, props }) => h(tag, props)),
  );
};
