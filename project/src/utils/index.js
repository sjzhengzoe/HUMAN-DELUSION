// 获取url参数
export const urlParams = function getUrlParams() {
  const obj = new URLSearchParams(location.search).entries();
  const params = { channel: '', params: {} };
  for (const [key, value] of obj) {
    if (key == 'channel') {
      params[key] = value;
    } else {
      params.params[key] = value;
    }
  }
  return params;
};

// 获取本地数据
export const getLocal = () => {
  const localData = localStorage.getItem('marriageData');
  return localData ? JSON.parse(localData) : {};
};

// 存储本地数据
export const setLocal = (data) => {
  const marriageData = getLocal();
  localStorage.setItem('marriageData', JSON.stringify({ ...marriageData, ...data }));
};
