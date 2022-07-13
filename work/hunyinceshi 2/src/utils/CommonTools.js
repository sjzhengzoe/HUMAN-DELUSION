'use strict'
// 统一工具类
/**
 *  CommonTools.enableDebug(); // 开启debug模式，debug模式会打印部分需要调试的内容
 *  CommonTools.initQueryParams(); // 初始化url参数，将产品定义参数和数据参数进行处理并保存，在提交订单，的时候进行参数读取，达到数据跟踪回传的作用
 *
 *  工具提供url query参数，fragment参数的读取，产品端可以直接使用
 *  CommonTools.getQuery(key) 直接读取url上query参数，支持fragment读取，如果不存在会返回null，业务端可以进行判断。
 *  该工具一般适用于产品首页，在首页初始化数据后，则在指定业务域名进行数据读取并提交，在部分外链或者内部产品跳转的时候，需要带参数进行跳转，使用link或者linkTo方法进行带参跳转。
 *  首页需要使用initParams，解析参数并保存作为流转，其他页面使用parseParams进行参数，但不进行保存流转
 */
const CommonTools = {
    debug: false,
    query: {},
    eventList: {
        DP: "purchase",
        RP: "repurchase",
    },
    // 定义类型
    define: [
        "PChan", "traceCode", "eventCode"
    ],
    enableDebug: function () {
        this.debug = true
        return this
    },
    dump: function (...value) {
        if (this.debug) {
            console.log(...value)
        }
    },
    // 初始化请求参数
    initParams: function () {
        this.parseParams()
        // 保存参数作为流转,仅有新数据的时候进行替换
        if (Object.keys(this.query).length !== 0) {
            this.setLocal('queryParams', JSON.stringify(this.query))
        }
    },
    // 解析url参数，不进行保存
    parseParams: function () {
        let urlQuery = window.location.search
        if (urlQuery.indexOf("?") !== -1) {
            let query = urlQuery.substring(1)
            let urlQueryParams = this.formatParam(query)
            this.dump('urlQuery数据初始化', urlQueryParams)
        } else {
            this.dump('urlQuery无数据，不需要初始化')
        }
        let urlFragment = window.location.hash
        if (urlFragment.indexOf("?") !== -1) {
            let fragment = urlFragment.substring(urlFragment.indexOf("?") + 1);
            let urlFragmentParams = this.formatParam(fragment)
            this.dump('urlFragment数据初始化', urlFragmentParams)
        } else {
            this.dump('urlFragment无数据，不需要初始化')
        }
        this.dump(JSON.stringify(this.query))
        this.dump('query参数初始化完成', this.query)
    },
    // 格式化参数
    formatParam: function (paramString) {
        let params = {};
        let vars = paramString.split("&")
        // 存在url参数，获取
        if (vars.length > 0) {
            for (let i = 0; i < vars.length; i++) {
                let pair = vars[i].split("=")
                params[pair[0]] = pair[1]
                // 定义数据不保存到query参数中，独立保存，URL优先级最高，一旦有URL定义参数，则直接改写本地
                if (this.define.indexOf(pair[0]) !== -1) {
                    this.setLocal(pair[0], pair[1])
                    continue
                }
                this.query[pair[0]] = pair[1]
            }
        }
        return params;
    },
    // 获取query参数
    getQuery: function (key) {
        return this.query[key] || null
    },
    // 获取行为代码
    getPChan: function () {
        let channel = this.getLocal('PChan')
        if (null === channel) {
            return ''
        }
        return channel
    },
    // 获取行为代码
    getEventCode: function () {
        let eventCode = this.getLocal('eventCode')
        if (null === eventCode) {
            // 默认是直购事件
            return this.eventList.DP
        }
        return eventCode
    },
    // 获取格式化后的数据
    getFormattedParams: function () {
        let value = localStorage.getItem('queryParams')
        if (value === null) {
            return ''
        }
        return value
    },
    // 获取追踪id代码
    getTraceCode: function () {
        let traceCode = '';
        if (null === (traceCode = this.getLocal('traceCode'))) {
            traceCode = Number(Math.random().toString().substr(2, 10) + Date.now()).toString(36)
            this.setLocal('traceCode', traceCode)
        }
        return traceCode
    },
    // 保存session
    setLocal: function (key, value) {
        if (value !== '') {
            localStorage.setItem(key, value)
        }
    },
    getLocal: function (key) {
        let value = localStorage.getItem(key)
        if (value !== null) {
            try {
                return JSON.parse(value);
            } catch(e) {
                return value;
            }
        }
        return null
    },
    transBirthday(ymd, h) {
      let hour = {
        "-1": "未知时",
        "0": "子时",
        "1": "丑时",
        "2": "丑时",
        "3": "寅时",
        "4": "寅时",
        "5": "卯时",
        "6": "卯时",
        "7": "辰时",
        "8": "辰时",
        "9": "巳时",
        "10": "巳时",
        "11": "午时",
        "12": "午时",
        "13": "未时",
        "14": "未时",
        "15": "申时",
        "16": "申时",
        "17": "酉时",
        "18": "酉时",
        "19": "戌时",
        "20": "戌时",
        "21": "亥时",
        "22": "亥时",
        "23": "子时",
      }
      let date = ymd.split('-')
      return date[0]+'年'+date[1]+'月'+date[2]+'日' + ' ' + hour[h]
    },
    // 创建参数链接
    link: function (link) {
        if (link.indexOf("?") === -1) {
            link += '?'
        } else {
            link += '&'
        }
        link += 'eventCode='+this.getEventCode() + '&traceCode='+this.getTraceCode() + '&PChan=' + this.getPChan();
        this.dump('link', link)
        return link
    },
    // 跳转
    linkTo: function (link) {
        window.location.href = this.link(link)
    }
};

export default CommonTools
