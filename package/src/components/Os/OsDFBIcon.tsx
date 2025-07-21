import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsDFBIcon',
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
              fill: 'url(#pattern0_17_181)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_181',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_181',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_181',
              width: '32',
              height: '32',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABt9JREFUWEfFlntsU+cZxn/H9vEtsUOcmx0cA3HShCSwlHAJLagENFDJSAdlakKZ1FZ0iE2aRDWmCW0TEv1nV62bxkqragypiEHHEOXSJGwUGCVKoCmYm5MwnHuwYzsQEx/bcTx9zLB2JFyGpnzS0ZHO+d7vfb7nvTyvxCQvaZL98zQAhK0KUAMJIA6MPemF/hcAwqkxZ5o+S6Mjf2xszDaWICarEzciwViXz0cQiCZBPRLPkwKQLVZtoSGNdVl2zXp7sXaaaYqK+Cj4+0djve7YuUD/6B9GArFPQiH8j8PIRABUFosl1Ww2qzwezx0gBsiWbM1ce5l267NVhuqKhTop0ywx4Imh1kB6rkzvwBinj4wMX24Kv+Pti74b9tOXZMI4depUQ29vbwiIfJmWcQGUl5dPMZlMdRUVFTlqtfpMU1PT5S+unMkomJOy9bmVxtrnF8nYUhMYpAStTRFkWaK0QstwXEWnH47tHwl9fjL8Y9/1yF/q6t5IMRqNiyKRSMnJkyf3trW1tQKj90CMC6CmpiZ33rx5v9m4ceNat9s92NjYeLj12slhTZb7zVW1KkOxNYExPkZ3R4z6fQqyTmLVqwayp2u4OaLinDtB4x75Uoam8vii5xYvrK6uLlcUJb5t27bX9+3bdzCZI3cxTBQC7aZNm5bV1tb+fv78+TOi0ShnWz7F3XcQW56LYvtNJEXh6hcxLu8Jo01VMfc1A44CmYBi5prHTiS4iCULXqGwoIhAIBDbsWPHEZfL9d0DBw70PzIEYkN6enra2rVr6zZs2LDZ6XTmWywWTTDo58rVRuAoeq2LC7s8+P54G0UrUbQlm4LlhQSGKrHnvozT+TXUajV9fX2hhoaGs4cOHfrR4cOHLyTL9T6Gh1aBxWIxL126dOXq1as3zHA6FmZnW4w6rYmh4CAXL9TDXz+msMHFsMlE75rFZH9jDU7nHGStiuE7QXzeWz1/P36ivqGh4XfNzc2Xvxz7h+bAfxWvOjMzc/HsSttvX6qbPWtGdi5Z5jRiQyq6D14ievAEOpsNw/qlZM7LYJQRBoJ+Wi5ep/HQ1Z0dLt/b4XC4Z6KGMB4DaovFYisrK3MUFRWlifLx+/1ORdP57TlLpFl56WDWJBi6Pkrs41ukn+tHZTTi+7oV/VIdqRY1waiKC5ej3Gw37zHrHA2xWCzQ2dkZamlp8XV3d3cAykQMSOvWrXNUVlZusVqts/R6fY7BYDDJspyi02mNGlktq1TS3cYb8A/Sc+oMyvG/IU+bhvWbNWTlT0eWZRIJGI3HiUXjI5FI5I6iKCFFUQLRaLRz165duwcHB4+eP39e9JYHqkBVV1c3s6qq6k9VVVVlDodDp9Vq77MnqsHrG6Dn5hUG/C1EPzxK8Z9bGczPYfA7K7AufIGsKWXk5TpJSUlBkv5DsNfrpb29vXf79u2/cLvdOz0ez10WHghBbm6usaSkpGr9+vXP2+32mUCeJEmGRCIRjkaj3lZXc4q7r+HZ3JndJofrNuW7h/EVyrS+bCKgtkKwvGvurOVtthybXpKkdEmShFB5w+Fwe319feuxY8eOdHR09N7TiomqQHw35OTk5JeWlualpaUZgsHgiNvt9gWHfamOUu2KGSWaxem98aIFzYrFm6uOna/Q9ytK4uKNS9H6Qc9Ya1FRqX769OlT4vG4uLm3p6enPRQKPaAPwpEZmAPcAkSdPkpShU2GRk9pmaRavTyaqO3T4N0vSWcjypiwPw20iZ6/ECw1MHsIopdg4Fswswk6nwF7EMLvwTlxWCGwLGmUBXdVTEiqHhgGbMkkuAlMSWawsFOWwIJa2NwGt34NHwKi3FKBz0TDWQ72F2FxMeSNgq8Lhpvg3Gqo/QecWgk54qDZyecU8HOgOQkgExCPaJ05SYA3gHmAULV/lsGyDVBzDWLvwkeAG0gDwoLJZTD6OszNh+JeOB0AbSpErTBnL/zkLXhPAJgFvApcAuxJBsRN73bk5KEiGYW0CmZKARfgccArtVDVBdG98AFwXch2cs/FGkhshloTWD3wWRo8MwK3C6AsAEf6QXMvB4qSqIeSI1ZKctxyAvnJjG1IvoUDESalFKrfhO+PgusH8DNAhEmEoBL4vA5uvQX5OtD3QSgFjD4YXgBZXRB+H248TAvErCeYsCSHCFE6Yu67vwrghZfg7Qz4dOu/AYjQCDvBnBhkRCgeup50JPvKYRkwfwVst8GJX8EvxxOb/ysALZS9AT/NhzM/hHce5Wy8/0/FAOBcBVuyofUD2DkZAKZWwPfMcO0E7J4MABkl8JoBus7D/skAoDfDGg0EAvDJZAAQOSRattCPr8z7jwvmaZPwcf1MuG/SAfwLHvGSyOvvVfYAAAAASUVORK5CYII=',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
