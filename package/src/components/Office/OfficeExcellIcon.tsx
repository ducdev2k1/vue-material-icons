import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'OfficeExcellIcon',
        props: {
          size: {
            type: [String, Number],
            default: 32,
          },
          color: String,
          viewBox: String,
        },
        setup(props: IIconProps, { attrs }) {
          return () =>
            useIconRender(
              [
  {
    'tag': 'g',
    'props': {
      'path': 'url(#clip0_12_29)'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M20 0H8C7.47005 0.00158273 6.96227 0.212805 6.58753 0.587535C6.2128 0.962265 6.00158 1.47005 6 2V8L20.002 16L26 19.936L32 16V8L20 0Z',
      'fill': '#21A366'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M32 16H6V24L20 26.8L32 24V16Z',
      'fill': '#107C41'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M6 24V30C6.00158 30.5299 6.2128 31.0377 6.58753 31.4125C6.96227 31.7872 7.47005 31.9984 8 32H30C30.5304 32 31.0391 31.7893 31.4142 31.4142C31.7893 31.0391 32 30.5304 32 30V24H6Z',
      'fill': '#185C37'
    }
  },
  {
    'tag': 'path',
    'props': {
      'opacity': '0.5',
      'd': 'M20 8H6V28H18C19.0609 28 20.0783 27.5786 20.8284 26.8284C21.5786 26.0783 22 25.0609 22 24V10C22 9.46957 21.7893 8.96086 21.4142 8.58579C21.0391 8.21071 20.5304 8 20 8Z',
      'fill': 'black'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M18 6H2C0.89543 6 0 6.89543 0 8V24C0 25.1046 0.89543 26 2 26H18C19.1046 26 20 25.1046 20 24V8C20 6.89543 19.1046 6 18 6Z',
      'fill': '#107C41'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M4.58398 22L8.46798 15.984L4.90998 10H7.77198L9.71398 13.824C9.89265 14.1867 10.0153 14.4573 10.082 14.636H10.108C10.236 14.3467 10.3693 14.0647 10.508 13.79L12.586 10H15.214L11.564 15.95L15.304 22H12.51L10.266 17.8C10.161 17.6216 10.0719 17.4342 9.99998 17.24H9.96798C9.90217 17.4299 9.81494 17.6118 9.70798 17.782L7.39598 22H4.58398Z',
      'fill': 'white'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M32 2V8H20V0H30C30.5299 0.00158273 31.0377 0.212805 31.4125 0.587535C31.7872 0.962265 31.9984 1.47005 32 2Z',
      'fill': '#33C481'
    }
  },
  {
    'tag': 'defs',
    'props': {}
  },
  {
    'tag': 'clipPath',
    'props': {
      'id': 'clip0_12_29'
    }
  },
  {
    'tag': 'rect',
    'props': {
      'width': '32',
      'height': '32',
      'fill': 'white'
    }
  }
],
              props,
              attrs
            );
        },
      });