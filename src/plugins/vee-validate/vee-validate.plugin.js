// eslint-disable
import { configure, defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import fa from "@vee-validate/i18n/dist/locale/fa.json";
import customRules  from "./rules";

// eslint-disable-next-line
export default function veeValidate(app) {
  //register all rules
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

  //register custom rules
  for (const [ruleName, ruleFunction] of Object.entries(customRules)) {
    defineRule(ruleName, ruleFunction);
  }

  configure({
    generateMessage: localize({
      fa,
    }),
    validateOnBlur: false,
    validateOnChange: false,
    validateOnInput: true,
  });

  setLocale("fa");
}
