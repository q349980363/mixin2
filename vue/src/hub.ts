export class Hub {
  ID = 0;
  callBackList: { [key: string]: CallBack<any> } = {};
  websocket: WebSocket = <any>{};
  url: string;
  constructor(wsUri: string) {
    this.url = wsUri;
  }

  open(): Promise<void> {
    this.websocket = new WebSocket(this.url);
    return new Promise((resolve, reject) => {
      this.websocket.onopen = (e) => {
        resolve();
        this.websocket.onerror = this.onError;
        this.websocket.onclose = this.onClose;
      };
      this.websocket.onclose = (e) => {
        reject();
      };
    });
  }

  onError(e: Event) {
    console.error("Hub onError", e);
  }

  onClose(e: Event) {
    console.error("Hub onclose", e);
  }

  onMessage(methodName: string, newMethod: (...args: any[]) => void) {}
  on(methodName: string, newMethod: (...args: any[]) => void) {}

  invoke<T = any>(
    hubName: string,
    methodName: string,
    ...args: any[]
  ): Promise<any> {
    var ID = this.GetID;
    var promise = new Promise<T>((resolve, reject) => {
      this.callBackList[ID.toString()] = new CallBack<T>(resolve, reject);
    });
    return promise;
  }

  GetID = () => this.ID++;
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