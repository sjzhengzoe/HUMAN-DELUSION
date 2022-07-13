import VueI18n from 'vue-i18n';
import Vue from 'vue';
import language from './language';

const getI18n = () => {
  let messages = {};
  for (let key in language) {
    let keyData = language[key];
    for (let type in keyData) {
      if (keyData[type]) {
        if (!messages[type]) {
          messages[type] = {};
        }
        messages[type][key] = keyData[type];
      }
    }
  }

  Vue.use(VueI18n);
  const i18n = new VueI18n({
    locale: 'zh',
    messages,
  });

  window.i18n = i18n;
  return i18n;
};

export default getI18n;
