const Database = require('./db')
const createProffy = require('./createProffy')


Database.then((db) => {
    //inserir dados

    proffyValue = {
        name: "Juan Vieira Prado",
        avatar: "https://avatars3.githubusercontent.com/u/20159595?s=460&u=352d696225f03d057646c2cf1b34373d077f1440&v=4",
        whatsapp: "11997532091", 
        bio: "Entusiasta das melhores tecnologias.<br><br>Apaixonado pelo desenvolvimento de softwares, Juan se aperfeiçoou suas habilidades em Desenvolvimento Web.", 
        
    }

    classValue = {
        subject: "Desenvolvedor de Software", 
        cost: "15"
        //proffy_id vira do banco
    }

    classScheduleValue = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //createProffy(db, {proffyValue, classValue, classScheduleValue})

    //consultar dados inseridos
})