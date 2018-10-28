var env = process.env.NODE_ENV || 'development';
if(env === 'production'){
  process.env.MONGODB_URI = 'mongodb://blaing:i57400GsKill16%40@ds243963.mlab.com:43963/todoapp';
}else if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://blaing:i57400GsKill16%40@ds243963.mlab.com:43963/todoapp';
}else if (env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://blaing:i57400GsKill16%40@ds243963.mlab.com:43963/todoapptest';
}
