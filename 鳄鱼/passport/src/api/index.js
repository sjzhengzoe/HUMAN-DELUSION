import axios from 'axios';
// 接口域名设置
const DOMAIN = 'http://test.zhaopianhuandise.com';

// 检查token
async function checkToken(token) {
  const { data: res } = await axios.get(`${DOMAIN}/auth/check`, { params: { jwt: token } });
  return res.data;
}

// 获取token
async function getToken() {
  const { data: res } = await axios.get(`${DOMAIN}/auth/token`);
  localStorage.setItem('token', res.data.jwt);
  return res.data.jwt;
}

// 初始化
function initAxios() {
  const instance = axios.create();

  // 添加请求拦截器
  instance.interceptors.request.use(
    async function (config) {
      let token = localStorage.getItem('token');
      if (token) {
        const isValid = await checkToken(token);
        if (!isValid) {
          token = getToken();
        }
      } else {
        token = getToken();
      }

      config = {
        ...config,
        baseURL: DOMAIN,
        timeout: 30000,
        headers: {
          jwt: token,
          'Content-Type': 'multipart/form-data;charset=UTF-8',
        },
      };

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
}

export default initAxios;
