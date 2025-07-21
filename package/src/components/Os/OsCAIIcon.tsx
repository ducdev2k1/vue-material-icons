import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsCAIIcon',
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
              fill: 'url(#pattern0_28_11)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_11',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_11',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_11',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABkJJREFUSEuFlns4lFkYwN/vmysNRhmjVoRyeaik1OhCjMq1FimtpyRsNdld2mLZQtlsUS3adqO22raNVdFTkn3kVsmlbEIoJbkVM800wwwzxsw+38fIrd33n/Oc877n/X3v5ZzzIfD/ghjOszKfs8DauvT65UwAUAKAGtNg3szutuZWAFD8lwvkU0odHR2N1ZuDOWy/HSEMfQMTUCKyjcYU6ggAaEym7nwnH69punr6T29lXOK2NDZP5WtKgJ2Ht1dIXMovmjMYeqObJgBU6xjIIyI5VcR99y7vaHg0AEjGgiYCkK1RCYc3hOw9ACOa1oba6qr8nOy6qntFjZVllaoIJnwtwt598KA5e4N3xjcbPPidnR0q/TiA//7Dh7w4ETGYsqa0IPda6g9xTf9UVquMlzh5ulott3fMTo0/KhKJ+BNT4rbvWKKpo6f32cDVK8Q9Pd2YfhSw1Hm9e0R6Vm6/uFeYHr0n6P6trOsqB7PMzMyCvj9x0mbVGjcKAYDLF/CvpibE5J5PTQMA+RgQkZP5sFzW3y8+F8hmA8CQCqCWXt7SRKaqqR/ettappa6uDttEp9PpPmExMev8d4aiRAJJg4iCOZ0Aj3iDuM/Ol8/rLybsC3tSXFCogpgsX+sUcPpGYV7SXk7FlTO/4gD37RzO9gPHU+MDXB1ry0rvAwDBZduuYL+wmHia9nTGdAoKA3IlEBAEBzzmyYFBRYAvVYJcoYTqots3Lh+N3Nf+8uUrLCthufVNZCpNI9F5jhEOOHGn6nFDVdmD32LDw7D5rlNZWU7u633RkfiYaihYaRPhg0wJGiQEhpQAfYNKaBDIQarAjgXAC75EesRvJUvc3FDjGfVTqu2mnV9diw7wRXR1dZmnHrS0ha4wMuRyue8w4+CLRaXGi1j2ulQE6CQErxQKCBhrEgBbeyYYAuHg8PkSSBVwu7MPaj/IoCt2o+NAfUWJ7aaQEM+olPSa/MxLiC3bzcVl6+7Q+O2eHqo8YgCDhSx7bK5GBNCjovg4VmRDAMXdEijtluBpwqQrzhcHWK3x9tqUeDmb197ciKzZEhRM05xOz0lLOj4WYGjNsqcREegdVOIRaJEQYFIRICIATwRSyOsUgxCjIAjoqRHgnUQ+CrBc5+Oz+egf1wZl/X3IOv+du4Q9b7sqCm7eHAVcKCoxXMRyCDKlwHPhEJT3yEGuwH1BJU8MDR8GcNP52mSIXkCHq61iyH4jHgUs28LhuEccP60EpQyx9/b/gtfR0d5QhXcPLsEXikoMrFkOWJEdZ5LAUpsA518MQN8gwJ0uEXT3DwLHXBP8jKZBUBkPmkXDbatKkUdU8qmlm74MHRALBYiJzbLFNDWa5tOywuKPgMISIxs7BxaDCBZ0IqAAkNMmBW6/chTwM2sGbq5FRiGhVgiNWJFHasDJqqrWm2dl09VU8whrRJIt2439qDAvXwUIPPt3yVq2g4MOBYUqnhw8ZpPhYc/gJADmWIOEQuA8GkRVC6AzdqMjtaOpJqywjYuiRGJlZloy3umzjI0Nulpa2lSA1cGR363eFX0YJZBI2JrzZyR4ypePAyQumQ7H6oXwfmAI3ybrevWM92Og+8Db12/0zWwWrIs8llx8+kiM6qrAxuFeG76flDpGZmZuEUkn57Kc3YbPAQDWjaoaEFEEb88hsYgvuJoSK8pNPzPhXsJ9j7tN1U1tbek7YpIlD3OzPtxMS8H0pg6uLq7fHjs5Y/Zcc2yDCqBUKOR9d6+c4WYkxEFv7/vxp+Tj7CNAS0vbMKXsBYGmpYOFws9MihReS00aiYy8KjB8z6qgyJhiIdBbq+/dff97bLjsVWP9ZMcMmroOVVPCa++aFIGald1yZtTFfJSiroEp+8pvZ/Sci9wDQqEAm9P09Bhkw/mL+JUFBVM9POqm1rZEQwszUUHGnyr9pCeTZGS5UC/i3HUSQ98EczrUy+8WZJ9OEJVnXwAer3eqVJBNLKzoLsGh0tfPaoR557FajMonHn0GTXvrzmgt14CvUTJ1GmatkEolA00VxbKWZ0/kIi4XIVIoJKahEdVi8Uo5720b/9Kh/bI3zY0TP+CTfxXDp0hLW8vuc1+qtYMLZY6lNYGuwwQEQRSSPpGs82WjtKGitK8s56+pHKtA/wJptsIFfzL7WAAAAABJRU5ErkJggg==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
