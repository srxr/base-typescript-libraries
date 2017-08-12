import '../polyfill/object-assign';

const storage = {
  set: (obj: any = {}) => {
    /* 格式: {key1: value1, key2: {k: v}} */
    if (!obj) {
      console.warn('object invalid');
      return;
    }

    for (let key in obj) {
      let value: string = obj[key];

      if (!key) {
        console.warn('key invalid');
        return;
      }

      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }

      if (obj.hasOwnProperty(key) && typeof value !== 'function') {
        localStorage.setItem(key, value);
      }
    }
  },

  get: (key: string) => {
    try {
      let result: any = localStorage.getItem(key);
      if (result && result[0] === "{") {
        result = JSON.parse(result);
      }
      return result;
    } catch(e) {
      console.warn('not found value');
      console.error(e);
    }
  },

  del: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch(e) {
      console.warn('can not remove item');
      console.error(e);
    }
  },

  append: (key: string, target?: any) => {
    let source: object = storage.get(key);

    if (source === null) {
      source = {};
    }

    return storage.set({ [key]: Object.assign(target, source) });
  }
};

export default storage;
