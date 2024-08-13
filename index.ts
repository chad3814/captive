import { createServer, IncomingMessage, ServerResponse } from "http";
import { AddressInfo } from "net";

function handler(req: IncomingMessage, res: ServerResponse) {
    const addr = req.socket.address() as AddressInfo;
    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({
        address: addr.address,
        ms: Date.now(),
    }));
}

const server = createServer(handler);

let port = 80;
if (process.argv.length > 2) {
    port = parseInt(process.argv[2], 10);
    if (isNaN(port)) {
        throw new Error('Bad Port');
    }
}

server.listen(port, '0.0.0.0', () => {
    const addr = server.address() as AddressInfo;
    console.log(`listening on http://${addr.address}:${addr.port}`);
});
