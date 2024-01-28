module.exports = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const accessToken = req.headers.authorization || 'N/A';
  
    const logMessage = `[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`;
    console.log(logMessage);
  
    next();
  };