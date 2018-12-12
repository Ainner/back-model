const express = require('express')
const router = express.Router()
const multer = require('multer') // 获取中间件
const upload = multer({ dest: 'uploads/' }) // 使用中间件
const indexModel = require('../model/index.js');

router.get('/', (req, res, next) => {
    indexModel.find({}, (err, index) => {    // { limit: 10 }, 限制查询个数
        if (err) {
          return res.status(500).send(err)
        }
        res.send(index);
      }).sort({ createdAt: -1 });
})

router.post('/', upload.array('file'), (req, res, next) => {
    let { content } = req.body;
    let index = {
        content,
        filename: req.file.filename
    };
    indexModel.create(index, (err, result) => {
        if (err) { return res.status(500).send(err) }
        res.send({ msg: 'succeed' });
    })
})

  module.exports = router;