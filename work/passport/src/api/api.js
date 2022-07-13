import initAxios from './index.js';
const axios = initAxios();

// 地区列表
export const getRegion = () => axios.get(`/common/region`);

// 文件类型
export const getDoc = (params) => axios.get('/common/doc', { params });

// 图片上传验证码
export const getValidCode = () => axios.get(`/doc/check`);

// 图片上传
export const postUpload = (data) => axios.post('/doc/upload', data);

// 获取支付相关数据
export const getPayInfo = ({ payToken }) => axios.get(`/pay/paypal/${payToken}`);

// 下载页获取照片
export const getDownloadInfo = ({ payToken }) => axios.get(`/doc/find/pt/${payToken}`);

// 找回页
export const getFindInfo = (params) => axios.get(`/doc/find`, { params });

// 找回页验证码
export const getFindValidCode = () => axios.get(`/doc/find/check`);

// 获取优惠券
export const getCoupon = ({ payToken, num }) =>
  axios.get(`/pay/coupon/${payToken}`, { params: { num } });

// 发送邮件
export const sendEmail = ({ payToken, email }) =>
  axios.get(`/doc/mail/${payToken}`, { params: { email } });

// 推广链接
export const getLinkInfo = ({ code }) => axios.get(`/common/link`, { params: { code } });

// 热门文件
export const getHotInfo = () => axios.get(`/common/doc/hot`);

// 文件详情
export const getDocInfo = ({ photoTypeId }) => axios.get(`/common/doc/${photoTypeId}`);
