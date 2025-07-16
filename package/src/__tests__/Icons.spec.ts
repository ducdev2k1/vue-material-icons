import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import * as Icons from '../components';

const SHAPE_TAGS = ['path', 'circle', 'rect', 'polygon', 'line', 'polyline', 'ellipse', 'g', 'use'];

describe('All Icon Components', () => {
  it('should export at least one icon', () => {
    expect(Object.keys(Icons).length).toBeGreaterThan(0);
  });

  Object.entries(Icons).forEach(([iconName, IconComponent]) => {
    describe(`${iconName}`, () => {
      it('renders an <svg> element', () => {
        const wrapper = mount(IconComponent as any);
        const svg = wrapper.find('svg');
        expect(svg.exists()).toBe(true);
      });

      it('renders at least one valid shape tag', () => {
        const wrapper = mount(IconComponent as any);
        const svg = wrapper.find('svg');
        const hasShapeTag = SHAPE_TAGS.some((tag) => svg.find(tag).exists());
        expect(hasShapeTag).toBe(true);
      });

      it('applies props: size, color, viewBox correctly', () => {
        const wrapper = mount(IconComponent as any, {
          props: {
            size: 40,
            color: 'red',
            viewBox: '0 0 40 40',
          },
        });

        const svg = wrapper.find('svg');

        expect(svg.attributes('width')).toBe('40');
        expect(svg.attributes('height')).toBe('40');
        expect(svg.attributes('fill')).toBe('red');
        expect(svg.attributes('viewBox')).toBe('0 0 40 40');
      });

      it('applies additional attributes (e.g., data-testid)', () => {
        const wrapper = mount(IconComponent as any, {
          attrs: {
            'data-testid': 'icon',
          },
        });

        const svg = wrapper.find('svg');
        expect(svg.attributes('data-testid')).toBe('icon');
      });
    });
  });
});
