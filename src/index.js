import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());


server.get('/dobro/:numero', (req, resp) => {
    let numero = Number(req.params.numero);
    let dobro = numero * 2;
    resp.send(String(dobro));
})

server.get('/soma', (req,resp) => {
	let a = Number(req.query.a);
	let b = Number(req.query.b);
	let x = a + b;

	resp.send({
	soma: x
	})
})

server.post('/somar', (req,resp) => {
	let a = req.body.a;
	let b = req.body.b;
	let x = a + b;

	resp.send({
	soma: x
	})
})

server.post('/media', (req,resp) => {
	let a =  req.body.a;
    let b =  req.body.b;
    let c =  req.body.c;
	let x = (a + b + c) / 3;

	resp.send({
	media: x
	})
})

server.post('/maiorNum', (req,resp) => {
	let num = [1,5,8,9 ];
	console.log(num)

	let a =  req.body.a;
    let b =  req.body.b;
    let c =  req.body.c;
	let x = a + b + c;

	resp.send({
	media: x
	})
})
server.post('/cinema', (req,resp) => {
	let a =  req.body.qtdI;
    let b =  req.body.qtdM;
    let c =  req.body.dia;
	let d =  req.body.nac;
    
	let x = (a*28.50)+(b*14.00);
	if( c == "quarta" )
	{
		let a = 28.50/2;
	}
	else if( d == "brasil")
	{
		let d = 5.00;
	}

	resp.send({
	cinema: x
	})
})
server.get('/cor', (req,resp) => {
	let cor = req.params.cor;
	if(cor == "amarelo" || "azul" || "vermelho"){
		 cor = true;
	}
	resp.send({
		cor: cor
	})
})


server.listen(process.env.PORT,
    () => console.log(`API online na porta ${process.env.PORT}`));