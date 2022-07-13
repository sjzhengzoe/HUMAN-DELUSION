var tools = {
  //19901010-->1990年10月10日
  ToYMD(date) {
    return date.substr(0, 4) + '年' + date.substr(4, 2) + '月' + date.substr(6, 2) + '日';
  },

  //1994-->一九九四
  ToYear(date) {
    let str1 = String(date).substr(0, 1);
    let str2 = String(date).substr(1, 1);
    let str3 = String(date).substr(2, 1);
    let str4 = String(date).substr(3, 1);
    switch (Number(str1)) {
      case 1:
        {
          str1 = '一';
        }
        break;
      case 2:
        {
          str1 = '二';
        }
        break;
      case 3:
        {
          str1 = '三';
        }
        break;
      case 4:
        {
          str1 = '四';
        }
        break;
      case 5:
        {
          str1 = '五';
        }
        break;
      case 6:
        {
          str1 = '六';
        }
        break;
      case 7:
        {
          str1 = '七';
        }
        break;
      case 8:
        {
          str1 = '八';
        }
        break;
      case 9:
        {
          str1 = '九';
        }
        break;
      default:
        break;
    }
    switch (Number(str2)) {
      case 0:
        {
          str2 = '零';
        }
        break;
      case 1:
        {
          str2 = '一';
        }
        break;
      case 2:
        {
          str2 = '二';
        }
        break;
      case 3:
        {
          str2 = '三';
        }
        break;
      case 4:
        {
          str2 = '四';
        }
        break;
      case 5:
        {
          str2 = '五';
        }
        break;
      case 6:
        {
          str2 = '六';
        }
        break;
      case 7:
        {
          str2 = '七';
        }
        break;
      case 8:
        {
          str2 = '八';
        }
        break;
      case 9:
        {
          str2 = '九';
        }
        break;
      default:
        break;
    }
    switch (Number(str3)) {
      case 0:
        {
          str3 = '零';
        }
        break;
      case 1:
        {
          str3 = '一';
        }
        break;
      case 2:
        {
          str3 = '二';
        }
        break;
      case 3:
        {
          str3 = '三';
        }
        break;
      case 4:
        {
          str3 = '四';
        }
        break;
      case 5:
        {
          str3 = '五';
        }
        break;
      case 6:
        {
          str3 = '六';
        }
        break;
      case 7:
        {
          str3 = '七';
        }
        break;
      case 8:
        {
          str3 = '八';
        }
        break;
      case 9:
        {
          str3 = '九';
        }
        break;
      default:
        break;
    }
    switch (Number(str4)) {
      case 0:
        {
          str4 = '零';
        }
        break;
      case 1:
        {
          str4 = '一';
        }
        break;
      case 2:
        {
          str4 = '二';
        }
        break;
      case 3:
        {
          str4 = '三';
        }
        break;
      case 4:
        {
          str4 = '四';
        }
        break;
      case 5:
        {
          str4 = '五';
        }
        break;
      case 6:
        {
          str4 = '六';
        }
        break;
      case 7:
        {
          str4 = '七';
        }
        break;
      case 8:
        {
          str4 = '八';
        }
        break;
      case 9:
        {
          str4 = '九';
        }
        break;
      default:
        break;
    }
    return `${str1}${str2}${str3}${str4}`;
  },
};
export default tools;
