import { ipadFieldName, pcFieldName, mdFieldName, forFieldList } from '@/global/style'

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}



/**
 * 数组中单独判断
 * @param array 数组
 * @param checkAttribute  判断的属性
 * @param typeString 校验的属性
 * @param return  boolean
 */
export function checkArrayString(array, arrayType, typeString) {
  let index = -1;
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const type = arrayType.split('.').length < 2 ? (arrayType && array[i][arrayType] == typeString) || (!arrayType && array[i] == typeString) : getMultistage(array[i], arrayType) == typeString
      if (type) {
        index = i;
        break;
      }
    }
  } else {
    throw new Error('传入的类型错误');
  }
  return index;
}
export function checkArray(array) {
  return array && array.length > 0;
}

/**
 * 动态获取对象的值 如找到 user.admin.page 的值
 * @param {*} data 对象
 * @param {*} key user.admin.page
 */
export function getMultistage(data, key) {
  let temp = data;
  let path = key.split('.');
  if (path.length < 2) {
    return data[key]
  }
  for (let index = 0; index < path.length; index++) {
    if (temp[path[index]]) {
      temp = temp[path[index]]
    }
  }
  return temp
}


export function selectChoiceValue(arr, value) {
  return arr && arr[0] ? getMultistage(arr[0], value) : null
}

/**
 * 动态设置对象 如user.admin.page  转成对象
 * @param {*} data  设置的对象
 * @param {*} key   user.admin.page
 * @param {*} value  转换的值
 */
export function setMultistage(data, key, value) {
  let path = key.split('.')
  if (path.length < 2) {
    data[key] = value
    return data
  }
  path.push(value)
  return path.reverse().reduce((a, b) => {
    return { [b]: a }
  })
}

//对象转url 参数 特殊字符转义
export function filter(str) { // 特殊字符转义
  str += ''; // 隐式转换
  str = str.replace(/%/g, '%25');
  str = str.replace(/\+/g, '%2B');
  str = str.replace(/ /g, '%20');
  str = str.replace(/\//g, '%2F');
  str = str.replace(/\?/g, '%3F');
  str = str.replace(/&/g, '%26');
  str = str.replace(/\=/g, '%3D');
  str = str.replace(/#/g, '%23');
  return str;
}
//对象转url 参数
export function formateObjToParamStr(paramObj) {
  const sdata = [];
  for (let attr in paramObj) {
    sdata.push(`${attr}=${filter(paramObj[attr])}`);
  }
  return sdata.join('&');
};



export function sonsTree(arr) {
  const temp = [];
  const forFn = (list) => {
    list.forEach(item => {
      if (checkArray(item.children)) {
        forFn(item.children);
      } else {
        temp.push(item);
      }
    })
  };
  forFn(arr);
  return temp;
}

/**
 * 判断是否是栅栏
 * @param {*} dividend  被除数
 * @param {*} divisor   除数
 * @returns 
 */
export function isCol(dividend, divisor = 12) {
  return dividend != 1 && (divisor % dividend === 0)
}

//组件的样式
export function guideComponentStyleClass(value) {
  let list = [];
  if (value && value.styleClass) {
    const styleClass = value.styleClass;

    const fontWeight = judgeStyleClass(styleClass, "fontWeight");
    const textAlign = judgeStyleClass(styleClass, "textAlign");
    const textLimit = judgeStyleClass(styleClass, "textLimit", "limit-");
    const textTransform = judgeStyleClass(styleClass, "textTransform");

    const borderLeft = judgeStyleClass(
      styleClass,
      "borderLeft",
      "border-l-"
    );
    const borderTop = judgeStyleClass(styleClass, "borderTop", "border-t-");
    const borderRight = judgeStyleClass(
      styleClass,
      "borderRight",
      "border-r-"
    );
    const borderBottom = judgeStyleClass(
      styleClass,
      "borderBottom",
      "border-b-"
    );
    const borderStyle = judgeStyleClass(styleClass, "borderStyle");

    const roundedTl = judgeStyleClass(styleClass, "roundedTl");
    const roundedTr = judgeStyleClass(styleClass, "roundedTr");
    const roundedBl = judgeStyleClass(styleClass, "roundedBl");
    const roundedBr = judgeStyleClass(styleClass, "roundedBr");

    const opacity = judgeStyleClass(styleClass, "opacity");
    const shadow = judgeStyleClass(styleClass, "shadow");
    const textDecoration = judgeStyleClass(styleClass, "textDecoration");

    let gradient = judgeStyleClass(styleClass, "gradient");
    const overflow = judgeStyleClass(styleClass, "overflow");

    if(value.controlType === "container"){
      gradient = '';
    }

    if (value.controlType === "row") {
      const rowWidth = judgeStyleClass(styleClass, "rowWidth", "w-");
      const rowAttributeList = [
        { name: 'mobileFlexDirection', screensClassName: '', },
        { name: 'mdFlexDirection', screensClassName: mdFieldName },
        { name: 'desktopFlexDirection', screensClassName: pcFieldName },
        { name: 'mobileJustifyContent', screensClassName: '' },
        { name: 'mdJustifyContent', screensClassName: mdFieldName },
        { name: 'desktopJustifyContent', screensClassName: pcFieldName },

        { name: 'mobileItemsContent', screensClassName: '' },
        { name: 'mdItemsContent', screensClassName: mdFieldName },
        { name: 'desktopItemsContent', screensClassName: pcFieldName },

        { name: 'mobileFlexWrap', screensClassName: '' },
        { name: 'mdFlexWrap', screensClassName: mdFieldName },
        { name: 'desktopFlexWrap', screensClassName: pcFieldName },
        
        { name: 'mobileSpaceX', screensClassName: '', className: 'space-x-' },
        { name: 'mdSpaceX', screensClassName: mdFieldName, className: 'space-x-' },
        { name: 'desktopSpaceX', screensClassName: pcFieldName, className: 'space-x-' },
        { name: 'mobileSpaceY', screensClassName: '', className: 'space-y-' },
        { name: 'mdSpaceY', screensClassName: mdFieldName, className: 'space-y-' },
        { name: 'desktopSpaceY', screensClassName: pcFieldName, className: 'space-y-' },
      ]

      rowAttributeList.forEach(item => {
        let rowAttributeValue = styleClass[item.name]
        if (item.className) {
          rowAttributeValue = rowAttributeValue == -1 ? '' : item.screensClassName + item.className + rowAttributeValue
        } else {
          rowAttributeValue = item.screensClassName + rowAttributeValue
        }
        list.push(rowAttributeValue)
      })

      list.push(
        rowWidth,
      );
    }

    if (value.controlType === "col") {
      let mobileWidth = judgeStyleClass(styleClass, "mobileWidth", "w-");
      let mdWidth =
        mdFieldName + judgeStyleClass(styleClass, "mdWidth", "w-");
      let desktopWidth =
        pcFieldName +
        judgeStyleClass(styleClass, "desktopWidth", "w-");

      let mobileColFlex = judgeStyleClass(styleClass, "mobileColFlex");
      let desktopColFlex = judgeStyleClass(styleClass, "desktopColFlex");
      let mdColFlex = judgeStyleClass(styleClass, "mdColFlex");
      mdColFlex = mdColFlex ? mdFieldName + mdColFlex: mdColFlex;
      desktopColFlex = desktopColFlex ? pcFieldName + desktopColFlex: desktopColFlex;

      mobileWidth = mobileColFlex?mobileColFlex:mobileWidth
      mdWidth = mdColFlex?mdColFlex:mdWidth
      desktopWidth = desktopColFlex?desktopColFlex:desktopWidth
      list.push(
        mobileWidth,
        mdWidth,
        desktopWidth,
        // mobileColFlex,
        // mdColFlex,
        // desktopColFlex,
      );
    }

    list = [...list, ...judgeStyleClassLgXl(styleClass)];

    list.push(
      fontWeight,
      textAlign,
      textLimit,
      textTransform,
      borderLeft,
      borderTop,
      borderRight,
      borderBottom,
      borderStyle,
      roundedTl,
      roundedTr,
      roundedBl,
      roundedBr,
      opacity,
      shadow,
      textDecoration,
      gradient,
      overflow
    );
  }
  return list.join(" ");
}

/**
 * 判断styleClass
 * @param {*} value 数据
 * @param {*} fieldName  字段名称
 * @param {*} className  类的名称
 * @param {*} screensClassName 响应式类的名称
 * @returns 
 */
export function judgeStyleClass(value, fieldName, className = "", screensClassName = "") {
  let name = ''
  if (fieldName && value[fieldName]) {
    name = value[fieldName]
    //判断负数
    if (Math.sign(name) == -1 && name.toString().slice(0, 1) === '-') {
      name = screensClassName + '-' + className + parseInt(name.toString().substr(1))
    } else {
      name = screensClassName + className + name
    }
  }

  if (value[fieldName + 'Model']) {
    name = value[fieldName] && value[fieldName] != 12 ? screensClassName + className + value[fieldName] + "/12" : 'w-full';
  }
  return name
}

//判断lg 或者xl 的文本和间距样式
export function judgeStyleClassLgXl(styleClass) {
  const array = [];
  forFieldList.forEach(item => {
    let fontSize = judgeStyleClass(
      styleClass,
      item + "fontSize",
      "text-",
      item
    );
    //判断是否修改文字大小
    if (item) {
      fontSize = styleClass[item + "typeFontSize"] ? fontSize : "";
    }
    const paddingLeft = judgeStyleClass(
      styleClass,
      item + "paddingLeft",
      "pl-",
      item
    );
    const paddingTop = judgeStyleClass(
      styleClass,
      item + "paddingTop",
      "pt-",
      item
    );
    const paddingRight = judgeStyleClass(
      styleClass,
      item + "paddingRight",
      "pr-",
      item
    );
    const paddingBottom = judgeStyleClass(
      styleClass,
      item + "paddingBottom",
      "pb-",
      item
    );
    const marginLeft = judgeStyleClass(
      styleClass,
      item + "marginLeft",
      "ml-",
      item
    );
    const marginTop = judgeStyleClass(
      styleClass,
      item + "marginTop",
      "mt-",
      item
    );
    const marginRight = judgeStyleClass(
      styleClass,
      item + "marginRight",
      "mr-",
      item
    );
    const marginBottom = judgeStyleClass(
      styleClass,
      item + "marginBottom",
      "mb-",
      item
    );

    let show = judgeStyleClass(styleClass, item + "show");
    show = show ? item + show : show;
    array.push(
      fontSize,
      paddingLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      marginLeft,
      marginTop,
      marginRight,
      marginBottom,
      show
    );
  });
  return array;
}
