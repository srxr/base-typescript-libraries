const getBrowserInfo = () => {
  const ua: string = navigator.userAgent.toLowerCase();
  let M: any = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  let tem: any = M;

  let os: string = 'Windows';

  switch (true) {
    case ua.indexOf('Win') > -1:
      os = 'Windows';
      break;
    case ua.indexOf('Mac') > -1:
      os = 'MacOS';
      break;
    case ua.indexOf('X11') > -1:
      os = 'UNIX';
      break;
    case ua.indexOf('Linux') > -1:
      os = 'Linux';
      break;
  }

  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {
      name: 'IE ',
      version: (tem[1] || ''),
      os: os
    };
  }

  if (M[1] === 'chrome') {
    tem = ua.match(/\bOPR\/(\d+)/);
    if (tem !== null) {
      return {
        name: 'Opera',
        version: tem[1],
        os: os
      };
    }
  }

  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) !== null) {
    M.splice(1, 1, tem[1]);
  }

  return {
    name: M[0],
    version: M[1],
    os: os
  };
};

const browser = getBrowserInfo();
const name = browser.name.toLowerCase();
const version = browser.version;
const os = browser.os

export default {
  name,
  version,
  os
};
