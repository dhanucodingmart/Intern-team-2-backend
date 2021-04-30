const express = require('express')
const path = require("path")
const dotenv = require("dotenv")
const connectDB = require("./config/dbConnect")
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express();

process.env.NODE_ENV == 'production' ? console.log("Production Mode") : dotenv.config({ path: './config/config.env' });
connectDB();


// app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:3000/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// #dist to get images, documents
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static('./Imageuploads'));


//routes
app.get('/',(req, res) => {
    res.send('App Is Working..Congrats...!')
  });
  app.use('/auth', require('./routes/auth'));
  app.use('/course', require('./routes/course'));

//PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Running on port", PORT, "mode", process.env.NODE_ENV));