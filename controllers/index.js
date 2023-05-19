const get = async (req, res, next) => {
  res.json({'input': req.query.input})
}

const post = async (req, res, next) => {
  res.json({'input': req.body})
}

const put = async (req, res, next) => {
  res.json({'input': req.body})
}

const del = async (req, res, next) => {
  res.json({'input': req.query.input})
}

module.exports = {
  get,
  post,
  put,
  del
}