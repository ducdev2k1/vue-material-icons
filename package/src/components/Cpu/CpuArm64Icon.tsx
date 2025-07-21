import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuArm64Icon',
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
              width: '24',
              height: '24',
              fill: 'url(#pattern0_31_5)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_31_5',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_31_5',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_31_5',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAADDElEQVRIic2WT2gjdRTHPzOZTEwytWroJO5obCmtTf9QRmRpIyiSIhj3MAiFitTeN6xQDB7FyPY2Bz3PUUQvgXropTRF9NC9VWSr1WD804aWJdI2m9n822Q8TDfr0IK9RHyXN78vbz7v/X7z3o8R5ubmnFqtRj9MURSEkZERpy/0cxPD4XDf4OFwGLFv9HOTAO5PvcLJvIEjBwkcl5Arh7SeeZbY+meAwLHxPr4HVRrxSbpyEO3zj3g4EOH0+luI7Sb1F6aQ7v/FUztfU0skaTw/gVw5IP7dV0in49epvPYuPvuMgbvf0tDGOXvpjcclCFAfngEg+PtdJPsUqXZKLTFPfXgaX72G8tMO1dnXuXfjJlK10lv/duMW0tH824jtJnHrgx7zaPFDGtq4Z6vBg31i65/21t1ACIBrX95Gqlbo+gPUJpNoX3yC2HxAK3KNVnQY0RFEAke/emCh0vcXztJ/cuwVBMF1nbbrux2P99Xd1hcFp0szOux5tx6f+ifJrVjyexM4bnc7kux60eeJc3wSAFLszjrlV9/h8L3bKPs7NJ57kXp88jHH5dMJDXr43ScUD7gTGjivx23MTniQrj+A9PTPd2h0upzMG5y9/CZy5ZCBH77h4eCQG+84BP/8keDBvidB4LhE+8kIYqsBQPDwFxyfv3dkwT/2kJs2wvT0tGPbNv2w/2TQ/l8JFhcXsSyLhYWFC5qmaVdPoGkauq4DoOs6mqahaRrZbJZYLMbW1lYvLpvNkkqlUFX16gnS6TT5fB7Lssjn8ywtLWGaJkNDQ6iqSi6XA8A0Tf7tNpYuEy3LIpFIYBgGhUKB7e1tMpkMe3t7ACwvL1OtVpmZmWFzcxPDMIhEIlffAcDY2BgAo6OjPa1YLFIsFgHIZDKEQiEMwwBgbW3tUo5PVdWP2+22R8zlciSTSUzTJJVKoSgK5XKZdDrNxMQEhUKBlZUVNjY2aLVazM7Osrq6SqlU8nBkWb580B51RLlc9jw/+vC7u7ueeF3XL2jgDlr/J7lfcADbtpGi0Sj9/G35G4d6G92sllYIAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
