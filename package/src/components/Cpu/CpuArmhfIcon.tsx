import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuArmhfIcon',
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
              fill: 'url(#pattern0_26_288)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_288',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_288',
              transform: 'scale(0.0138889)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_288',
              width: '72',
              height: '72',
              preserveAspectRatio: 'none',
              href: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEA2ADYAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCABIAEgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+QlVLDIx+JA/nQJtJ21v5K/5CH5CORntgg07en3oSmnfR6d00Kyr97I3HqBzSs7MFJt7O3noRqoXjIyfcf54qYJ2fr/X9eQ+ZPa/3P/IkZWC/w4b0IJ/LNX/W5UZqzVn9zQwLgcY/Eipd9LW87i/rZjscZyPzGatpaWaemuor62s/udvvGkDg5Ge2TUtOzta/qhSk1bR+dlcQqWGGx+HP+NOKb9S9LXW/psdR4D+G/jH4sXa2fhyweWBgjNNG7JtWRto5x689a9rhbhLPuN66w+V4OU6bUW6sJONlN2XTQ+W4+8S+DfCbCSxnEWYwpV4ucYUakIz5nSjzSVm77aP8T13xP+xz8UfCSQsLC5u5Zto2NOzFdw74B6Zr7jOPADjPIVDlw9bEus0mvauSi5a/1p9x+O8NfTM8LOL6laM8bhsFTw6k+dYeMOZR+etzy7xN8KfFXw/todQ8R20lqt0dsaM5bnOOhAA5P9K+NzjgrOeFqFKvm1KVFVnaPNNy62e9up+o8L+LXCniDi6+X8N4mni3hY805wpqHTm3jvp+HU0tI+BnjvxRZR6to2ny3NtKEcMsjD5ZDgHAGO/f867sB4bcR51h4Y/LsNOvQmoyuptaTdk7Jf8AAPOzfx24D4Ux1TJ87x9LC4mk5xalSjL3qau1dv8Arodrr37JnxB8F+HG8Y67DcW9nGglZXuCygMMj5SK+gzPwQ4o4fyief5hSq06FOKm4uq2kpK/w+Vj4nIvpdeH/GnEtPg3I6lDEYyrN0oThh1GUpRdn7yvr5nA+Hvg1418d2qap4fsZLm2eU2/ySMo3A46AYr5XJ+AOI+JqCxmWYaVWk6jpXjJx1T7W3tc/QuJfGfgngTEzyviHHU8JioUViLTpRleMknu2n1PQtT/AGQ/ibo3h5vFEllcMsQJMDTsRlQSRtxzzX0+N8CuMcDlbzeWGqtQTfs3UdrrfT9N/kfnmVfTC8L86z6PCtPHYeLqtJYpYeKl7z357/0jO8Bfsr/E34oxzyW+mXFoYN+Ak7JuMefYfy/SubhfwV4x4whUlTwlWg6XNblqOF+U9Hj/AOlT4YeF08PTrZnQx3t3C7lQjUcVUttZvY868c/DfxX8KdQfTPEVm8QQOwlkdnJEbbSckev15zzXyvEfCWdcEYuWEzSjKHLzPmlJyuoPl3/M/RuAfEnhbxawEMy4dxcKspuEXSpwjTSdSPNHZt/r0P161n/hF/2PPhxqW20t1150lgt3vLeNHVreJnTDIpIO7Bz2r+7M0nk3gPwrinChR/tCSnTpyrUoRlelByVmle92j/H3JY8WfTB8SMvpTxWJeSwnSrYiGFxFWceTEVIwneM5cvw3SPkP4Mft1+Jdf+J2l2njeOwn0nU5nNsrhpFAD4QBXBB49QOnFfhvh79JPN8x4vwmG4jp4ergcZVcaSkpSjFty5I+8mk7Rdl5PzP7C8Z/oHcNcPeGWZ4/gqpj6ObZTSh9clFxg5Pk5puTg099z3D/AIKI3Njq3hLwvrGkQW8NrcQwyAW8KRDfKyP/AAAZ5PvkcV+gfSpr4PG5Hk2NwlOnChUjCa9nCMVebjLdJfK9j8T/AGdeHxWX8ZcU5TmVWtVxGHlVg3WqznZUYzhtJtLb/I9W/Z28U6X4P/Z0l13ULW1mng0jchlgR2DwoZFO4gsCCBz+dfceFeb4LIPCuWZ1qNGcqWB5o89KMnzQg5LW190j8i+kTw5mHGX0io5DgMRiaVLEZu6c1SrzilCtUUJWjdR2bR+b/wAX/wBszxt8R59X8HbbaLQzGkcaxF1YKjbfu9BweeK/lDjvx+4h4slmGRQVGGXSioRUeZaQaTSWiuk196P9IfB76GfBPh1RyXjJvFVM8jUnOcqqhJc0482ru3vsfol+zpq2j/Dz9nrUNeltbaW5jsPtsJmgjYiYwliQ20kcnqOf51/U3hRj8Fwt4V4jMp0aUq0MN9ZjKpSi/fdO972vuf53fSOy3NfEP6RGC4fjicRTw9bHRwFRUq84xdFV+X4eZRvypHlv7MX7VOtfFr4ma34J1+3s5NBiuZRHGI/M+TzGX7jjb0+lfG+EHjRmXHHF2YcPZnSoPLY1JumuXmTgqkoX5ZJrdNdtOx+q/Sb+ihkXhF4Z5HxrkOIxdPPK2FpupN1PZ/vPZKXxwfM9balb9pn9qy9+BPxRsPDfgK1s4LSWeBbgeWYTtlcK2VjXHfHPrzT8WvGHGeHnFuHyvhqGHo0XUpqtHkUOZSklJ2ikmvw7F/Ri+ijgvHbwzzPibjjFY2viaFCvPCv2vtrOlByh71WXMnp0Z0X7S1vpnxG+C2g+Nr63hTVb20zK8cCKSZo0kY7sbjyx713+L2HwfFnh1lnEtelTjjsRQ/eOnTirupGM3d25t3pc+c+jPi828OPG3PuCsBia0srweMtSp1a9SVlQqypR9zm5fhVrW/4HbftE+HD+1B8O7/X/AArPBLcWjXNwIWlS4dhJC23CR5PJ46V9B4rZSvGPhPE4/IqlOpVoe2qqm5xrSfPTfL7sLvVrpv06HxP0eeJ6n0YfEzAZPxbh69HC4tYahOvGlLDxi4VlzPnqpKyV+unY/Mf4D/szfFDWfin4fs9W0xLOz0eZlM0lrJECEk4wzIoyevU+tfx74ceEPF+P4xyzD4rA/V6WAqtzqVYyUbQcrLWnBXbk3zSd0tN22f6gePH0nvCzKfCviLE5VmdTGY3PKUJU6NLFUqrTnCzvCMm9+ltz7u/4KCaS/hfwL4Q0EvFK8UFqGMbqwDR7FYHaTjBB47V/SP0ocEsq4YyLLpSjKpThRXuyT1hyxffqfwd+z2zRZ7x/xdnPJOnCvPEy9+Di7VfaTWr02Z0nw+0m4m/ZZuJw0fl/2RIxUkZ/1DcbevNe5wrhKtXwUrVG4KKwEnZyX/Pt9P6+8+U8Qsxw1D6VmHglUu84pq6i7L9/Hrtp5f8ABPxqv0RPEepqsKBlQ5YKP+en0/8A11/n/ilTWb4uKhFNLVpW3k/6Z/tBl8qlTh7KZe1m4zmvdcnb+GvP7z9mvAelXNx+y3fTgxlF0cFlZ1zj7P02n/6/Ff6CcMYSrU8GcU/c5Fl99Wm7eyR/i14i5nhsP9KfL6KjP2n9tcrlGLtd131XofHv7Btmlx8bPEMVukSyrcSqSwVefMYdTj+f9K/n76NNH2niHmsIKCnGtNJuy+29n63fq33P7P8Ap64n2Xghw5VnVqyi8NRaim5aezWlrvZeRgft26cbP48aas6RyM13adArDmRe+CP881w/SRpSpeJGDhVteVaje1mvjW/4HsfQNx7xHgPmsqE6kOXC4u6blFv3HfTQ+1fjBY3EP7NHhaVTEsTWUGFVlz/x7x9VH4da/objzCypeD+TTi48rw8LRjL/AKdR6H8S+EGNoVvpNcUxmqjqLG17uUZdMRPZtfcfAXwN/aN8W/Bmf7LJNJe6S6RLNarCZVZY23NnJxgr6+tfy/4ceLOdeHmIVOdWWJwM4whOioOaahK73vutD/QTxy+jbwp404b6xRpQwWb051Z0cS6ypSi6kbR2XR/ke/eL/wDgozol3e20fhrTU0nVw6GQpZKGduhGFA6mv1zPfpO08TOniMmyyWBrxcXOpGhZya1e3ftdH808J/s+q+CjWw/FHEEM0wclKNGhLGNxp3fu2TutF8z52+OH7TsnxR02xg8VXK2z2h8xZZoTESpbf1+buPT8q/JuOfFHG+IWFw1HH3dTDu6lKnyXV7/P+tbn9H+En0eso8FcyxuLymUVSxsOVxjWVVXUXG9kl0Zp+Fv2woLX4fS/D3T7tLi1e1NuXS3LDYUKZ8w47H0r08B4w4zLOF5cLQi3RnRdHSk3o48vxX03/rU8HO/ou5Xn3iBT8RZVorEU8THFez+sKLbjLn+C3lt20PmEavouoaxctBfxSXdx8piUncDuzjHA6n1+lfj08PCtiK2Kekqqtb532P6joYx0MBhsuitMM7rr9nl1f/A/yPqPTv2v4/CXgef4Z3FykQntPsxV7diduzZnfk4HvX7Hl/jLjcs4XqcLxpt0qlFUJNUrpLl5VeXnb5n8tZ59FnK888QKHiLVrRWKoYr62ofWEm3zufwW6XPMvgz8arT4T+M7zxJpNylxeai5lEKIZWO9tw+XjHPv9K+M4F4uq8BZ5iM+oR5pYmTnK0efVu+3q9D9P8X/AAzw3jHwnguEMVUVOngacacZe09npFKPxdfuLXxt+JknxQ8Tw+NNbP2N7eSOTMieVjyyGHy5PpWfHXFVTj/PaWe4hck6M4Tj7vJ8LvtrvY7PB/w4w3g1whiOD8HNVKWKp1Kbkqntf4qcfi+bPR9U/amuPG3gHT/Atu32i006NYVkSAgfKioPn7/d9PWvsc38W8Zm/DeF4YlBunhYKCfsmk0ko/F129T8t4Z+jJlvDPHmYcfQqxdfMasqrj9YUmnOcp/BZW+I+VfE+uf2ULK1iga6u73U7HTkgi/1pN7cJApAPU5bjn05r8llCNRWf/B/A/pVSlCSlS+Lz1+Z/RZ4V/4ICeN9f/YS1v8AbH+138Fxp2gT69BoskOn/aJbWCNC8yKZDceSssiRlwu3exHJBFQqFNd36/n/AF+eprPF16iSm46dkeI/8EX/APgllb/8FIfFXifSPGslzolj4Z1i8sL2We2t5litrISebM6zZyP3ZwqAkn5VBYgG1SjT95at9DGc5VFaWy6r5/1+h9w/ttf8G1fir4cazFq3wK1658Q+H7PWV0/URo1rYzLCocI6zCBiUYEEFWAweDg8UvZQb5nvuWqs6a5Y2s12W3p/TMv9qv8A4N5/FP7Pv7GbfH6wfUrzxXZaRbaheadHZ2AuUkuIi6rII2MyF+Su4DOCRnirSsY8qcnLr+BhfsEf8G93ib9qX9lKP9oXxdcahpGqT3FykOnXdrYGaWG1RWlkjErea6x703lQdoYE8Zxm6UJPme/4GirVV7unLa1v6/q5W+NH/BvP8StH/Z18afFD4a22u614g8M3GppFZ6Xp9pNO8VjDJIuPKJkG4pgcc81coqceWWxMG6cuaO7PyX/4Jxf8E0v2jP21vjlH8F/FHhrxT4WksZruHU7rVLGOFVNqfnMguiiIq4JLEgYXdkClGEYrlWw5zlUalLdbW66dfyOy/wCCqX7CE/8AwTT+IqfD++unv7l9IbUlkdIYxIVZUG02xKMrluGBwQQQcHNTGmoTc11NJYipOPI7cq27nlH/AATR/ZW1r9tz9tDwV4C0u2tLvwv9q8PanctqUTyWoUapDyWTgEAEk9APwrQxP9WmT9n/AMI+H/2YP+GXYtR8NQ2t1on/AAjs1i2pQ2sL2822V2+yzyx3OxiiDy/LwflbvQB+K3/BMj9iPxF+yp+118XfAto2n6N4J1tdZlhu9HmazZvtSXGGt3yDLO27EexiSduTzkAHvn7VGp+Ov2E9K1HTfBt/L4/0nxx4k+2TSatfG4utOF1cGYxyxyySmF03lceg3KSpBIB9V61qL/Hb4K/Cbwb49l0ddP8AidaQw3mmX2q2/wBljQKoVZYfM4AB2gY49scgGxq2jR/s/wDgVP2ePhmdGstM+xtKsen38UMUX2lV8xfJd/NjJKr5i4XJVSQdowAeDeLvjv4w/Y0+AWu+KLnS9H8U2Oqag9nc6ddahbyRE3O5JWeGRyDlHIYEYYZHXFAHZfsmeDfBmqHwb+0V4I8H+B/D3iPxy8l1fW+mzW1rOvnRu0qyFXVPnywYcDGepOaAP4Kv+DjP4seIPiz+3D4k8K+J2Ik03TdYtoikyzwpFHqDIoiaMkAL5fyKvQAegoA+C/2Kv20vE3/BO3xWPHvgjTJdR1qOxTT4J4bT7a0ZhYtE+wcnY5Bzn1xQB7f4o/4LVftv+LvjK3xsPxD1KGwe7F6dA/s6dMENu2+T5mMYG3Hf1oA+oPEH/Bxz+0TrFu1zpWl3um+JpLKO0fVxojqxljj8tpgQ4bkjOc/4UAeVS/8ABeP4/eIfDl7oXxN0+78ZXlzcfaLa7m0hz9nbOQQXYkYyBgHtQBjeJf8AguL+0lrkfhq40e4vNKj8G+X/AGTbLpUq+SIz0UBwGyMdBQBtab/wXt/abuNWn8S6897d6nJCsKytpM27CKQOC544yOvY+tAHFfEn/gtd+0H8a/DVx4E8TW93Nos10boLJpUsaBuw8wtjPtgk8d+gB1vwx/4L0ftI/CLSdG8KaTb3i6V4b3JZKmkSyIFYFflO8A8H8xzzQB8B/tDfHbXP2r/iZffGPxXG0et6nHPHMZITbP8A6TIZ3Hlls43E9wfYZoA8rYY4IU/UA/zFAACF6KnpjYuP5UAIAoOdif8AfC/4f/r70AGFznYmf9xcfy/z9KAFUIuTsXPb5Fx+I6fpQAjbWOSifgigfkBQA8EhCAkYXocIgP54zQAM+8bWWPH/AFzXP54zQAwADoMfSgD/2Q==',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
