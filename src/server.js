//dados
const proffys = [
    { 
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "11987456219", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
    },
    { 
        name: "Juan Vieira Prado",
        avatar: "https://avatars3.githubusercontent.com/u/20159595?s=460&u=352d696225f03d057646c2cf1b34373d077f1440&v=4",
        whatsapp: "11997532091", 
        bio: "Entusiasta das melhores tecnologias.<br><br>Apaixonado pelo desenvolvimento de softwares, Juan se aperfeiçoou suas habilidades em Desenvolvimento Web.", 
        subject: "Desenvolvedor de Software", 
        cost: "15", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return  subjects[position]
} 

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    console.log(data)

    //se tiver data, adicionar, se n tiver, n adicionar
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        //adicionar data a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    
    return res.render("give-classes.html",{ subjects, weekdays })
}

//servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e config do server
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do server
.listen(5500)

