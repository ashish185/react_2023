const express = require('express');

const app = express();
const PORT = 3010;

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy',
  "default-src 'self';" /* Only it means only form default source*/
    + "script-src 'self' 'nonce-nounceKEY1' 'unsafe-inline' http://unsecure.com;" /* White listing the domain */
  );
  next();
})

/* Exposing the public folder unless we need to write as public/index.html */
app.use(express.static('public'));

app.get('/', (req,res)=>{
  res.sendFile(__dirname + 'index.html');
});

app.listen(PORT,()=>{
  console.log('Server started at' + `http://localhost:${PORT}`);
})