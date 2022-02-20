export default class Hub {
  ID = 0;
  onclose?: () => void;
  callBackList: { [key: string]: CallBack<any> } = {};
  websocket: WebSocket = <any>{};
  url: string;
  constructor(wsUri: string) {
    this.url = wsUri;
  }

  open(): Promise<void> {
    this.websocket = new WebSocket(this.url);
    this.websocket.onmessage = this.MessageEvent.bind(this);
    return new Promise((resolve, reject) => {
      this.websocket.onopen = (e) => {
        resolve();
        this.websocket.onerror = this.ErrorEvent.bind(this);
        this.websocket.onclose = this.CloseEvent.bind(this);
        console.log("websocket open");
      };
      this.websocket.onclose = (e) => {
        reject();
      };
    });
  }
  private MessageEvent(e: MessageEvent) {
    console.error("Hub onMessage", e);
  }
  private ErrorEvent(e: Event) {
    console.error("Hub onError", e);
  }
  private CloseEvent(e: Event) {
    console.error("Hub onclose", e);
    if (this.onclose != null) {
      this.onclose();
    }
  }

  // onMessage(methodName: string, newMethod: (...args: any[]) => void) {}
  // on(methodName: string, newMethod: (...args: any[]) => void) {}

  invoke<T = any>(
    hubName: string,
    functionName: string,
    ...args: any[]
  ): Promise<T> {
    const ID = this.GetID;
    const promise = new Promise<T>((resolve, reject) => {
      this.callBackList[ID.toString()] = new CallBack<T>(resolve, reject);
      const data = {
        hubName: hubName,
        functionName: functionName,
        args: args,
        type: "call",
      };
      this.websocket.send(JSON.stringify(data));
      //TODO 超时机制
    });
    return promise;
  }
  private GetID = () => this.ID++;
}

class CallBack<T> {
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
  constructor(
    resolve: (value: T | PromiseLike<T>) => void,
    reject: (reason?: any) => void
  ) {
    this.resolve = resolve;
    this.reject = reject;
  }
}

//TODO 数据库自动种子
//TODO 动画效果
//https://www.npmjs.com/package/gsap
