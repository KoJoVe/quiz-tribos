#quiz-tribos

##English

This is a proof-of-concept project by [Guilherme Berger](https://github.com/gberger42) and [João Vicente](https://github.com/KoJoVe), PUC-Rio students. We are using [NodeJS](nodejs.org) to serve a [AngularJS](http://angularjs.org/) app that shows a quiz to the user. Upon finishing the quiz, the user is told which "urban tribe" he is part of, based on his answers; these answers, along with a [session.js](https://github.com/codejoust/session.js) dump, are sent to a [MongoDB](http://www.mongodb.org/) NoSQL database hosted by [MongoLab](https://mongolab.com/home). Later, the amassed results can be used to perform statistical analysis.

##Português

Este é um projeto ilustrativo feito por [Guilherme Berger](https://github.com/gberger42) e [João Vicente](https://github.com/KoJoVe), alunos da PUC-Rio. Estamos usando [NodeJS](nodejs.org) para servir um app [AngularJS](http://angularjs.org/) para mostrar um quiz ao usuário. Ao termianr o quiz, o usuário é dito a que "tribo urbana" ele pertence, baseado em suas respostas; essas respostas, assim como um [session.js](https://github.com/codejoust/session.js) dump, são enviados para um banco de dados NoSQL [MongoDB](http://www.mongodb.org/) hospedado no [MongoLab](https://mongolab.com/home). Mais tarde, os resultados adquiridos podem ser usados para analises estatísticas.

##ToDo
- [ ] Separar o Angular app em views
- [ ] Implementar design
- [ ] Envolver o MongoLab em NodeJS 
- [x] Servir Perguntas e Tribos pelo NodeJS
- [ ] Escrever Política de Privacidade