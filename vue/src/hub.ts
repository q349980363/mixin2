class Hub {
  //   [key: string]: Promise<any>
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

  // onConnection() {}
  onError(e:Event) {
    console.error("Hub onError",e)}
  onClose(e:Event) {
    console.error("Hub onclose",e)
  }



  
  onMessage(methodName: string, newMethod: (...args: any[]) => void) {}
  on(methodName: string, newMethod: (...args: any[]) => void) {}
  invoke<T = any>(methodName: string, ...args: any[]): Promise<T> {
    //  new Promise();

    return new Promise((resolve, reject) => {});
  }
}

var hub = new Hub("");
hub.on("a", (a: string) => {});

//TODO 数据库自动种子
