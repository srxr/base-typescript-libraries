interface Utils {
  foo: string;
  bar: number;
}

class SomeUtils implements Utils {
  private options: any;
  private params: any;
  foo: string;
  bar: number;

  constructor(options: any = {}) {
    this.foo = options;
    this.params = options.params || {};
  }

  init(options?: any): { options: any } {
    console.log(this.foo);
    return options;
  }

  mainFunction(params: object = {}): any {
    // console.log(params)
    console.log('mainFunction');
    return params;
  }

  someFunction(): void {
    console.log('someFunction');
  }
}

// 内部API
class otherUtils {
  static Foo = {};
  static Bar = 0;

  foo: object;
  bar: number;

  constructor(params: Utils) {
    this.foo = params.foo || otherUtils.Foo;
    this.bar = params.bar || otherUtils.Bar;
    console.log('Print otherUtils class constructor function: ');
    console.log(params);
  }

  init(options?: any): { options: any } {
    console.log('Print otherUtils class init function: ');
    console.log(`foo object: ${this.foo}`);
    console.log(`bar object: ${this.bar}`);
    return options;
  }
}

var o = new otherUtils({ foo: 'foo value', bar: 1 });
o.init();

const utils = SomeUtils;

export = utils;
