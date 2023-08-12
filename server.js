const fs = require('fs');	//파일 접근 라이브러리(DB연결)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//DB연결 설정
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');	//mysql 라이브러리

const connection = mysql.createConnection({
	"host": conf.host,
	"user": conf.user,
	"password": conf.password,
	"port": conf.port,
	"database": conf.database
});
connection.connect();		//실제 연결

const multer = require('multer');		//multer객체 사용(라이브러리 불러옴)
const upload = multer({dest: './upload'});	//루트에 upload폴더

app.get('/api/customers', (req, res) => {
	connection.query(
		"SELECT * FROM CUSTOMER WHERE isDeleted = 0",
		(err, rows, fields) => {	//rows에 디비내용을 저장
			if(err){
				console.log("DB 실패");
				// console.log(err);
			}else{
				//console.log(fields);
				res.send(rows);
			};
		}
	);
});

//upload폴더를 사용자가 실제로 접근
//사용자에게는 "/image"경로로 보이지만 실제 서버는 "/upload"경로를 사용
//image와 upload폴더를 매핑
app.use('/image', express.static('./upload'));
app.post('/api/customers', upload.single('image'), (req, res) => {
	//let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
	let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
	let image = '/image/' + req.file.filename;
	let name = req.body.name;
	let birthday = req.body.birthday;
	let gender = req.body.gender;
	let job = req.body.job;
	//console.log(name);

	let params = [image, name, birthday, gender, job];
	connection.query(sql, params, 
		(err, rows, fields) => {
			res.send(rows);
			console.log(err);
			console.log(rows);
		});
});

//삭제
app.delete('/api/customers/:id', (req, res) => {
	let sql = "UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?";
	let params = [req.params.id];
	connection.query(sql, params,
		(err, rows, fields) => {
			res.send(rows);
		}
	)
});

app.listen(port, () => console.log(`listening on port ${port}`));
