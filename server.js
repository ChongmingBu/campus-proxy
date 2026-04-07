const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 核心代理接口，解决跨域
app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('缺少url参数');
  try {尝试 {
    const response = await fetch(targetUrl);
    const data = await response.text();
    res.send(data);回复.发送(数据);
  } catch (err) {} 捕获 (错误) {
    res.status(500).send('请求失败：' + err.message);
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`服务已启动在端口 ${PORT}`);
});
