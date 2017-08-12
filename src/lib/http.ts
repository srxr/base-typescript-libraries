import Promise from 'ts-promise';

const HttpObj = {
  request: (args: any = {}) => {
    // {method, url, data, doneCallback, errorCallback, timeout = 30}
    let params: string = '';
    let uri: string = args.url || '';
    let data: object = args.data || '';
    let method: string = args.method || 'get';
    const doneCallback: any = args.doneCallback || (() => {});
    const errorCallback: any = args.errorCallback || (() => {});
    const timeout: string = args.timeout || '30';
    let options: object = {};

    method = method.toLowerCase();

    if (window.fetch) {
      // 支持fetch
      switch (method) {
        case 'post':
          // TODO:
          options = {
            mode: 'no-cors',
            method: 'post',
            credentials: 'include',
            headers: headers(),
            body: splitUrl(data)
          };
          break;
        default:
          params = typeof data === 'object' ? '?' + splitUrl(data) : '';
          uri = uri + params;
          options = {
            mode: 'no-cors',
            credentials: 'include',
          };
          break;
      }
      // 发起fetch请求
      fetch(uri, options)
        .then(HttpF.checkStatus)
        .then(HttpF.parseJson)
        .then(doneCallback)
        .catch(errorCallback);
    } else {
      // 不支持fetch
      switch (method) {
        case 'post':
          makeRequest({
            method: method,
            url: uri,
            params: data,
            headers: headers()
          })
          .then(doneCallback)
          .catch(errorCallback);
          break;
        default:
          params = typeof data === 'object' ? '?' + splitUrl(data) : '';
          uri = uri + params;
          makeRequest({
            method: method,
            url: uri,
            params: data,
            headers: headers()
          })
          .then(doneCallback)
          .catch(errorCallback);
          break;
      }
    }
  },

  get: (uri: string = '', doneCallback: any) => {
    if (typeof uri !== 'string') {
      return 'uri invalid';
    }

    if (window.fetch) {
      // 支持fetch
      const options: object = {
        mode: 'no-cors',
        credentials: 'include',
      };
      // 发起fetch请求
      fetch(uri, options)
        .then(HttpF.checkStatus)
        .then(HttpF.parseJson)
        .then(doneCallback)
        .catch((err) => {
          return err;
        });
    } else {
      // 不支持fetch
      makeRequest({
        method: 'get',
        url: uri,
        params: '',
        headers: headers()
      })
      .then(doneCallback)
      .catch((err) => {
        return err;
      });
    }
  },

  post: (args: any = {}) => {
    let params: string = '';
    let uri: string = args.url || '';
    let data: object = args.data || '';
    let method: string = args.method || 'get';
    const doneCallback: any = args.doneCallback || (() => {});
    const errorCallback: any = args.errorCallback || (() => {});
    const timeout: string = args.timeout || '30';
    let options: object = {};

    method = method.toLowerCase();

    if (window.fetch) {
      // 支持fetch
      options = {
        mode: 'no-cors',
        method: 'post',
        credentials: 'include',
        headers: headers(),
        body: splitUrl(data)
      };
      // 发起fetch请求
      fetch(uri, options)
        .then(HttpF.checkStatus)
        .then(HttpF.parseJson)
        .then(doneCallback)
        .catch(errorCallback);
    } else {
      // 不支持fetch
      makeRequest({
        method: method,
        url: uri,
        params: data,
        headers: headers()
      })
      .then(doneCallback)
      .catch(errorCallback);
    }
  }
};

/**
 * 处理请求参数
 *
 * @type {Object}
 */
const HttpF = {
  parseJson: (response: any) => {
    return response.json();
  },

  checkStatus: (response: any) => {
    if (response.ok) {
      return response;
    } else {
      let error: any = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}

/**
 * XMLHttpRequest请求，使用Promise特性
 */
function makeRequest(opts: any) {
  return new Promise(function(resolve: any, reject: any) {
    let xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url);
    xhr.onload = function(res: any) {
      if (res.status >= 200 && res.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: res.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function(res: any) {
      reject({
        status: res.status,
        statusText: xhr.statusText
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(function(key) {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }
    let params: object | string = opts.params;
    // 转换对象为字符串
    if (params && typeof params === 'object') {
      params = splitUrl(params);
    }
    xhr.send(params);
  });
}

// 拼接URI
function splitUrl(obj: any) {
  return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
}

function headers(): object {
  return {
    'Accept': 'application/json, text/plain, */*',
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  };
}

const http = {
  get: HttpObj.get,
  post: HttpObj.post,
  request: HttpObj.request
}

export default http;
