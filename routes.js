const fs = require('fs');

const requestHandler = (req, res) => {
  // Event trigger function
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message: </title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    // Read the body of the request
    const body = [];

    req.on('data', (chunck) => {
      console.log(chunck);
      body.push(chunck);
    });

    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const message = parseBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  // This hard quit the event loop
  // process.exit();
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Jieqing Test</title></head>');
  res.write('<body><hi>Hi, there!</hi></body>');
  res.write('</html');
  res.end();
};

module.exports = requestHandler;
