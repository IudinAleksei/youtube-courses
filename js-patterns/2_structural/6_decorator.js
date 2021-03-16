class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };
  return server;
}

const s1 = aws(new Server('12.34.56.78', 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());
