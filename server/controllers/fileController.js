var multer = require('multer')

const downloadPath = 'sz/';
let fileName = '';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, downloadPath)
  },
  filename: function (req, file, cb) {
    fileName = file.originalname;
    cb(null, file.originalname)
  }
});

var upload = multer({ storage: storage }).single('file')

const fileModel = require('../models/file');

const fileManager = new fileModel.FileManager();

exports.getSharedZone = (req, res) => {
  fileManager.getFilesAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    })
};

exports.addFile = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }

    const path = downloadPath + fileName;

    fileManager.addFile(req.body, path)
      .catch((err) => {
        res.send(err);
        return res.status(500).json(err)
      })

    return res.status(200).send(req. file);
  })
};
