import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsMAGIcon',
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
              fill: 'url(#pattern0_17_200)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_200',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_200',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_200',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAwJJREFUWEftlMtqHEcUhv+q6q6+zHTP3TPSjHyRLcUGO0HYWTgmBHIh++ySl/AbZJGHyCo7b0IuZJVNIMYEvDPBBEwIjkZKrJHG6tFoLn2trqoO42AnW4ORvJizKwrO/9XHqUNwykVOOR9LgKWBpYGlgdfKAHW3PurE0+0I/f70pDbkfwauXzdL0n/fqDTz6S/f3j15gN5Np7Z+9hPWWmuPvv/uS2A3PQmI5waI073U5Zdvfmz6raejn+48QBQMTwqA1Gq9a9S230S5VifR8U4hC5YX2aNZsPcYgG1X2qs2oWqCZOprsyV5EcWj0RBolnyftJVCGEVBgGbT9TKsaE2nUXQ4AuB4jdVekc3GYRhOFmcASbmxclFGSZymk78WBmh9Zf22YfBHACOAKrQqbALdCPaTr0tVsQmNDnfLBje5H86CwDBsDWJMhAgNTliVWRYBJXu5kBUKlE3TsmSG35ilL0qZU4OZvszSh4qQNc5tW4g001o5zDR3ngG0um98EQz++ByAXmhv9Da7jLHPiji5o6DfVSJ7wN1KjzH61vQo+MGqeBtE44qQWV9KuV0p1a7lWthKpNNC0m2r7N7IRXLguP4tpfIBCnTSbHYPxN6wTH4unk2+Yk7hm7R8awFAas31Tyljh0dPH//cbrddBe8DCQWas1/B8c54+Oc3ze76JhQ2RsP+j63Vc1tSkMsgxYQa3OGGc0VD9EUSz4lpWBYvb8ksuk8MfjUXyRSM/B5HRwcWK7/NmOExy9qnhFkyT9eeDaHrNlcM13nPtj0GKIgkDpVQ9z0Pcaz5mclwd7dev+QDiT8eD/b8Xq9uJnC0xRkrzDOmwd2Csb+LJKKK6ho33Q91kd2VKp+FSZakx/sHgO+V1s7eoMnxrs2dEqPcFDIMX/wC1212/Ea7p1Qh0/mTJ/P5fDFEL13Vauc8IewqIXg4Hg8GAIp/m5y37Qu1drpTGQD35PPGr3wVV6vVap5zK4oOjwGI/71gkcUAvAhf3L1ygJdVtgRYGlgaWBo4dQP/ANGmQWYn6mZ9AAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
