class Hub {

    //   [key: string]: Promise<any> 

  Connection() {}
  onconnection() {}
  onerror() {}
  onclose() {}
  on(methodName: string, newMethod: (...args: any[]) => void){}
  Call() {}
}


var hub=new Hub()
// hub.on("a",(a:)=>{})