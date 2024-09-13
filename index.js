const { select } = require('@inquirer/prompts')

const start = async () => {
   
    while(true){

        const opcao = await select({
            message : "menu >", 
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "Cadastrar"
                },
                {
                    name:"listar metas",
                    value:"Listar"
                }, 
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })



        switch(opcao){
            case "cadastra":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Até a próxima")
                return

        }
    }
}

start()