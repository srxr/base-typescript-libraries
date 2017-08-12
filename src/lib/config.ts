const config: { [key: string]: string } = {
    baseURL: '//127.0.0.1'
};

export default {
  get(key: string) {
    return config[key];
  },

  set(key: string, value: string) {
    if (value) {
      config[key] = value;
    }
  }
};
