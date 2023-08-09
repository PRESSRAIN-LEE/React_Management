const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
	res.send([
		{
			'id': 1,
			'image': 'https://placekitten.com/64/64',
			'name': '홍길동',
			'birthday': '20000101',
			'gender': '남자',
			'job': '대학생'
		  },
		  {
			'id': 2,
			'image': 'https://picsum.photos/64/64',
			'name': '김길동',
			'birthday': '20110101',
			'gender': '남자',
			'job': '직장인'
		  },
		  {
			'id': 3,
			'image': 'https://loremflickr.com/64/64',
			'name': '이길동',
			'birthday': '20020101',
			'gender': '여자',
			'job': '개발자'
		  }
	]);
});

app.listen(port, () => console.log(`listening on port ${port}`));
