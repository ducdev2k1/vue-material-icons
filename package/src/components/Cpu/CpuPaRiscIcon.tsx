import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CpuPaRiscIcon',
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
      'fill': 'url(#pattern0_16_172)'
    }
  },
  {
    'tag': 'defs',
    'props': {}
  },
  {
    'tag': 'pattern',
    'props': {
      'id': 'pattern0_16_172',
      'patternContentUnits': 'objectBoundingBox',
      'width': '1',
      'height': '1'
    }
  },
  {
    'tag': 'use',
    'props': {
      'href': '#image0_16_172',
      'transform': 'scale(0.03125)'
    }
  },
  {
    'tag': 'image',
    'props': {
      'id': 'image0_16_172',
      'width': '32',
      'height': '32',
      'preserveAspectRatio': 'none',
      'href': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEVMaXE5kJjP5Obf7e5wr7W/296w09f///8BcXuAub2QwsYfgoqfys1OnKPv9vf4/PxdpaumztEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAZwjdAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAW1JREFUOI3Fksly3DAMRB8Bkloc+/8/M5WkbEnEksPMOJIT+5q+gGQ30WAX4f+jTLdq/VYHAFLu9E69r17ebvW2N33vIJxvarN5v1o8BAG7DDv0rfu/BBrNu9frACeBlziEKWXpnlwEFcCXYuR0SG5UZo+TQCusR/qaxE7V3KsF8RjNqTDvalH2J0nc6VbPDgjg2fA+7u97uj6zwqalJ0z600Fj+kuwfhcjp4Naz8m8W1i+1DhktLJEFGX7KNDMRan9iNdSYtMrT5kYC+NPNj4B8UhipzKW6HYKxi4NUJaDD2cnOPK8yac0gI76Fe3I2nvQFGA0iSQHIhKESDPQGEX6L0vJFB/PR0lxtWyZgUei+bKZ5bfmQOlbKclaHM2kZCa6DMmothUpOamS3XcRIcmqlu/f/hPsiAgmMljHSKIFJjKz6mCIzqCEEKMWlmqlxmz+VIptDST0NZFUos2Ovu7CQCg/MhEPrNK+9L/hNxihvJi4ONB4AAAAAElFTkSuQmCC'
    }
  }
],
              props,
              attrs
            );
        },
      });