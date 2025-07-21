import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserYandexIcon',
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
              fill: 'url(#pattern0_26_195)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_195',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_195',
              transform: 'scale(0.04)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_195',
              width: '25',
              height: '25',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALjSURBVHgBvVZtaiJBEK0xJiQEkgmBQH6t/g0JiSdYsyfYPcHqCdYbqCdYPYHmBnuC1RtoUPztggiK4qCI4tfse+10nBk/cWEfjF3dXV2vq7qrWpH/AOMQpVqt9mmxWHyDyNbkWCAQsNCU0RYfHh7+HE1SqVSitm0nDcOI+ucwLhjX3SLkxOPj4/vBJKVSKRQMBnMQo3oMO5azszO5uLiQ+XyuvuFw6DVmGJnpdJqORCLWThISnJ6eFrDTEPuXl5dyd3cn5+fncnJy4tEl0WAwkHa7LZPJRBOVQPTFTWRs8OA3xDD79/f3cnt7K4eARPwcojJCF/mIglsRHiQ1QTgcPpiAoLf8CEThpVqt/lwjweB3TMa0BwyTQrG4n8HRIQk3xgsBWz94Kz0kQMLxZuVBPC7y+iry9radgHPUoa5D5Jydgeue+NDjWeC6LvDZvV7PViiVbNs0cVFl+eXz9ho4puepWyio4VarZdMWotODbTPg7P4zmbkD0zSXzC8vIoWCiO7HYl6PKHOMoA51o1HVvbm5US34rmHzOeh01E3gNfVAEzEclrU0ypZG/QTUdcCQc8MIlwHbYU1i8rBwfWUNfqLEKsybCDSYvMwj5lvAP7ER/tDtIfDZtLXVHn/G4/F2bRrL51f9XG4nAbJetfDkXZOowjYajZSLW3F9vZLdXvngrmnwpK5IYPiXHrQsS/4VSAPVwos6yktZkTjFrEi50+ns9mYPGCa9Ub41qnXNp7WSLnTHoNlsatFi2feQPD09FeFehnK32z2KiGtY+h2kEKE6BU9iIExp5EoU4jMWsPaoOsbkUgiFsDS1kh3Q+0aj4T7wLDad1Z1Nj5YJIiSAqPvJ15Cl5urqaq0i0Gi/31dnoM8RSZ3HYcfdelvfeBS4FBYk+ZZrMFn16+hks7jmLeinQZDx29r5R4LVGUb5R+IrutsSg1cpO5vNMv63/SASN/jPBWQh/fYzB+BNGYbL+9b+Ba5hluqNGw33AAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
