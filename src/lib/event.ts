const listen = (args: any = {}) => {
  const element = args.element || {};
  const eventName = args.eventName || {};
  const callback = args.callback || {};
  const capture = args.capture || false;
  eventName.split(' ').forEach((e: any) => element.addEventListener((e), (callback), (capture)));
};

export default listen;
