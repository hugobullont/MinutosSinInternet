const { compile } = require('nexe')

compile({
  input: './index.js',
  build: true,
  target: 'windows',
  verbose: true //required to use patches
}).then((value) => {
    console.log(value);
  console.log('success')
}).catch((error)=>{console.log(error)});