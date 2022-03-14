import { EventEmitter2 } from "eventemitter2";

export default class Hub {
  ID = 0;
  emitter = new EventEmitter2();
  onclose?: () => void;
  onmessage?: (json: any) => void;
  callBackMap = new Map<number, CallBack<any>>();
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
    const json = JSON.parse(e.data);
    console.log("Hub onMessage", json);
    switch (json.type) {
      case "functionReturn":
        if (this.callBackMap.has(json.id)) {
          const callBack = this.callBackMap.get(json.id);
          this.callBackMap.delete(json.id);
          const state: boolean = json.state;
          const stateCode: number = json.stateCode;
          const response: any = json.response;
          if (state) {
            callBack?.resolve(response);
          } else {
            callBack?.reject(response);
          }
        }
        break;
      case "error":
        console.error("##########################################");
        console.error("Hub server error:", json.message);
        console.error("##########################################");
        break;
      case "log":
        console.log("Hub server log:", json.message);
        break;
      case "alert":
        alert(json.message);
        break;
      case "eval":
        eval(json.message);
        break;
      // case "invoke":
      //   break;
      default:
        // console.error("Hub onMessage error", e);
        this.emitter.emit("MessageEvent." + json.type, json);
        return;
    }
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

  /** 调用函数 */
  invoke<T = any>(
    hubName: string,
    functionName: string,
    ...args: any[]
  ): Promise<T> {
    const ID = this.GetID();
    const promise = new Promise<T>((resolve, reject) => {
      this.callBackMap.set(ID, new CallBack<T>(resolve, reject));
      const data = {
        requestId: ID,
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
  /** 成功 */
  resolve: (value: T | PromiseLike<T>) => void;
  /** 错误 */
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
