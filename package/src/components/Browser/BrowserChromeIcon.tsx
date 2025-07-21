import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserChromeIcon',
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
              fill: 'url(#pattern0_26_186)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_186',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_186',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_186',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARLSURBVHgBlVVvaFtVFD/nviRNV9sm1iprqr5aJ60MmjkZtrKROCcKoq2I84Mi+6QijOkXnTBWhX0Q0XY4HILQIoOJfrBjiH8mbUTtlAlLcOjoWpvIUNsylnVtlybNPTvnvveypmu77oTLu/e9e3+/c3/nTxDWaOMxOwS5YEjmTb+eTa/1HK728dyDLTGfhU8DqE6l0JbtiEAoT4UpniexqLobhk9nborgr2iL7fdBn0IVE0BGFQMmcQ8h8ZJJlHnPi360qLth8Hqi6whGovdHLaUHSUGYjwt2icAZAN4cyt+li2B1NSZOJRfjqXLwDVGlikOsQXh5J8hZEpA7EwByt9k+1IMT8S1tyxKILHznr4ioVk7iNVxayoXeJzLmvjfbwog68V8sansnfN4ktaFq/wNjl23ZLIdQlQjQqq6Bym2PgL8hAr7wAtDMH0gXvhZQEyIoUZCcDim/7oMExEsuRY922tXz9PdHn4xg1bx29ZXrIa2LP4r1+w7Ab5MVMDyWN2AdzQFoj/wPevRN0lPHjWYiGoeLSGvn8lrH/TsWEuYGFqj9sxUE32yug2eHp0par4ttx/zeHnjuyDScHJsrCfUhzEJ7czX0Pn8E18OLQFPHebsExmSwcxvEToCFhBMDTVHSBF88dBtM1fjIpCHvqXvjLXj9cwHPw1KTd3v4m9VyGDAQFk3BGZYRjjP4qVKQNVCb3FC0P/TYeiObeH9qrn5Z8MUkJzOVgHVPGkENgQjLRaFBNdFQKKSifZ02e2/ANY8zkUozKu5rLWm+mpk9QXsRuGIUKUALIJCrNTcQcJFIAiV5d3DH7WXJeUNDpyK4sk36CYlXASq5ayBNDrAZkmkTVT78rHHWZMuNzOzJnRdZQDzn4Tw5pfDhXMa9gWYSDZ5M8jx68XfaeGeBs2VlkvZmP6frJNDklwLK2WOZIBt5QKXMDcxOggHjvKbSmL4yg3t//AB6dtYsSyLgvTtrITv6rgPOMSA3DrJWYJmeZOqAFvAYod5jWoybTcL6w/gvPD0AB194Gf+ZDJcV2sbGAvT+tA/eDn4vAZbQmb5I4JzNa3zHhMfzqPXTJ4YYP+b1FhMTl1Ae2+0OaK27xxw/Pz0BJ8Z/ho/vGqUtt1xxCowldsC0SNHv2/bvrjKClsOP25y+pzkGtVITjnISFK99Gt/cG2rqunUO37MvyAepSzcDtUzThSLGK+Pp9LUYsJ199dt0UUOM91wycJK2bn04w8TIXQPujlw2+S75T26Rcf1mdRG7PPAyArGRV75LMUicvc54wJrk5/ZlNxF2N8xQJCA9UbkBtqT5ZC3wxwLx9Mp/OGLnXjuRLGAhzmj92gUVmaRLMhVEAkV46Y558ZxMSkpxASYKlm8Tbh1JLcVb9U/f7onZXJjd7EYbFbkhMt/7987RM/V50TzDmXcMCjDg33omsRLGqgRLrelQx91/btYYDOayuCmZXcuZq0+RMQq/8fZzAAAAAElFTkSuQmCC',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
