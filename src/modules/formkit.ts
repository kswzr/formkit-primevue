import type { UserModule } from '@/types';

import { plugin, defaultConfig } from '@formkit/vue';

import { de, en } from '@formkit/i18n'
import {
  primeCheckBoxDefinition, primeDropdownDefinition,
  primeEditorDefinition, primeInputSwitchDefinition,
  primeInputTextAreaDefinition,
  primeInputTextDefinition, primePasswordDefinition
} from "@/formkit";



export const install: UserModule = ({ app, router, isClient }) => {
  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'de',
    inputs: {
      primeInputText: primeInputTextDefinition,
      primePassword: primePasswordDefinition,
      primeCheckBox: primeCheckBoxDefinition,
      primeInputSwitch: primeInputSwitchDefinition,
      primeInputTextArea: primeInputTextAreaDefinition,
      primeEditor: primeEditorDefinition,
      primeDropdown: primeDropdownDefinition
    },
  }));
};

export { }

