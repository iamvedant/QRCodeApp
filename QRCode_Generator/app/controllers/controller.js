const PDFDocument = require("pdfkit");
const fs = require("fs");
const QRCode = require("qrcode");
const controllers = () => {
  return {
    sendQr: async (req, res) => {
      
      const { urls } = req.body;
      const returnQR = {};

      let urlString = "";
      let errors = []
      const keys = Object.keys(urls)
      for(let url of keys) {
        urlString = url;
        const qrCodePromise = new Promise((resolve, reject) => {
          QRCode.toDataURL(urlString, function (err, code) {
            resolve(code);
            reject(err);
          });
        });
  
        try {
          const qr = await qrCodePromise;
          returnQR[url] = qr;
          
        } catch (err) {
          errors.push(err);
        }
      };
      
      if(errors.length===0)
        return res.status(202).json({success: true, payload: returnQR})
      else
        return res.json({success: false, payload: errors});
      
    },
  };
};

module.exports = controllers;
