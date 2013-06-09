#quiz-tribos

##English

This is a proof-of-concept project by [Guilherme Berger](https://github.com/gberger42) and [João Vicente](https://github.com/KoJoVe), PUC-Rio students. We are using [NodeJS](nodejs.org) to serve a [AngularJS](http://angularjs.org/) app that shows a quiz to the user. Upon finishing the quiz, the user is told which "urban tribe" he is part of, based on his answers; these answers, along with a [session.js](https://github.com/codejoust/session.js) dump, are stored in a [MongoDB](http://www.mongodb.org/) database. Later, the amassed results can be used to perform statistical analysis.

##Português

Este é um projeto ilustrativo feito por [Guilherme Berger](https://github.com/gberger42) e [João Vicente](https://github.com/KoJoVe), alunos da PUC-Rio. Estamos usando [NodeJS](nodejs.org) para servir um app [AngularJS](http://angularjs.org/) para mostrar um quiz ao usuário. Ao termianr o quiz, o usuário é dito a que "tribo urbana" ele pertence, baseado em suas respostas; essas respostas, assim como um [session.js](https://github.com/codejoust/session.js) dump, são salvas em um banco de dados NoSQL [MongoDB](http://www.mongodb.org/) . Mais tarde, os resultados adquiridos podem ser usados para analises estatísticas.

##(Default) Windows Installation

###NodeJS

[Download and install NodeJS](http://nodejs.org/)

###MongoDB

[Download MongoDB](http://www.mongodb.org/downloads), extract the contents to `C:\mongo`

Create folders `C:\mongo\log`, `C:\mongo\data`, and `C:\mongo\data\db`

Create file `C:\mongo\mongod.cfg`, and add this to it:

    logpath=C:\mongo\log\mongo.log 
    dbpath=C:\mongo\data\db

Install the MongoDB service

    C:\mongod\bin\mongod.exe --config C:\mongodb\mongod.cfg --install

As an admin, start the service

    net start MongoDB

Check mongo is running by executing the mongo shell

    C:\mongo\bin\mongo

###Project

Clone the project and install dependencies

    npm i

Start the server

    npm server


##ToDo
- [ ] Escrever Política de Privacidade