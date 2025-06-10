// Objeto com o gabarito
const GABARITO = {
    "COR": {
        "CASA-1": "BRANCA",
        "CASA-2": "AMARELA",
        "CASA-3": "PRETA",
        "CASA-4": "VERMELHA"
    },
    "NACIONALIDADE": {
        "CASA-1": "ESPANHOL",
        "CASA-2": "ALEMÃO",
        "CASA-3": "FRANCÊS",
        "CASA-4": "GREGO"
    },
    "ANIMAL": {
        "CASA-1": "CAVALOS",
        "CASA-2": "CACHORRO",
        "CASA-3": "TARTARUGAS",
        "CASA-4": "BORBOLETAS"
    },
    "ESPORTE": {
        "CASA-1": "TÊNIS",
        "CASA-2": "FUTEBOL",
        "CASA-3": "SINUCA",
        "CASA-4": "BASQUETE"
    }
}
//Falta implementar
/*

* Quando todas as colunas estiverem preenchidas exibir botão para conferir com o gabarito
* Quando clicar no botão exibe a table com o gabarito e marcar de amarelo as incorretas
* Exibir percentual de acerto do jogador
* Quando acertar 100% cada coluna da tabela deve ficar da cor do atributo COR e exibir botão de jogar novamente

*/

// Verificar se existe maIs de uma coluna na linha com o mesmo valor para o atributo
function verifica_repeticao_atributos(atributo_id){
    // Selecionando todos os elementos selects que tem o mesmo atributo 'name'
    const selects_jogo = document.getElementsByName(atributo_id);
    // Verificando se o elemento foi encontrado antes de ser usado
    if(selects_jogo){
        // Iterando para trabalhar com os 'selects' encontrados de forma separada
        selects_jogo.forEach(select => {

            // Monitorando o elemento para saber toda vez que ele for modificado (receber uma nova opção)
            select.addEventListener("change", () => {
                // Criando uma função anonima para verificar se existem repetições na linha de cada atributo (cor, nacionalidade, animal, esporte)
                const compara_valor_colunas = ((pula_casa) => {
                    // Para gravar mensagem de alerta sobre a mesma opção estar selecionada em outra coluna (caso necessário)
                    let mensage_de_alerta = "";
                    // Iterando em todos os 'selects' da linha para comparar os valores que estão selecionados, caso tenha
                    for (let i = 0; i < 4; i++) {
                            // O parametro  'pula_casa' é para o 'select' não se compare com ele mesmo
                        if (i === pula_casa) {
                            continue;
                        }

                        // id_casa pega o texto do id do elemento que tem o padrão 'NOME_DO_ATRIBUTO-CASA-NUMERO_DA_CASA'
                        let id_casa = selects_jogo[i].id;
                        // Pegando só a parte que tem o nome e número da casa
                        let casa_coluna = id_casa.slice(-6);
                        
                        // Caso o valor que estiver sendo selecionado no momento seja igual a algum dos outros já selecionados gera uma ação para alertar o usuário
                        if (select.value && selects_jogo[i].value == select.value){
                                console.log(`${atributo_id} IGUAL NA: `, selects_jogo[i].id); // só pra debugar
                                // Inserindo os valores na mensagem que vai aparecer 
                                mensage_de_alerta += `ATENÇÃO! - ${atributo_id} '${select.value}' JÁ FOI SELECIONADO(A) NA ${casa_coluna}\n`;                       
                            
                        } else {
                                // Talvez eu deixe essa parte só para fins didáticos
                                console.log(`${atributo_id} '${select.value}' AINDA NÃO FOI USADO(A) NA`, casa_coluna); // só pra debugar
                        }

                        // Verifica se a variável está vazia, caso não esteja entra para procedimentos para exibir a mensagem
                        if(mensage_de_alerta){
                                // Torna o elemento visível
                                document.getElementById("mensagem-alerta").style.display = "block";
                                // Insere o texto da mensagem no elemento
                                document.getElementById("mensagem-alerta").innerText = mensage_de_alerta;
                                // Escondendo a mensagem depois de um tempo da exibição (6 segundos)
                                setTimeout(() => {
                                    document.getElementById("mensagem-alerta").style.display = "none";
                                    // Limpando a variável (só pra garantir)
                                    mensage_de_alerta = "";
                                }, 6000);
                        }
                    }// Fim do for

                });// Fim compara_valor_colunas

                // De acordo com o id do elemento select que está sendo iterado ele faz as verificações necessárias
                switch (select.id){
                    case `${atributo_id}-CASA-1`:
                        console.log(select.id, " - ", select.value);
                        compara_valor_colunas(0);
                        break;
                    case `${atributo_id}-CASA-2`:
                        console.log(select.id, " - ", select.value);
                        compara_valor_colunas(1);
                        break;
                    case `${atributo_id}-CASA-3`:
                        console.log(select.id, " - ", select.value);
                        compara_valor_colunas(2);
                        break;
                    case `${atributo_id}-CASA-4`:
                        console.log(select.id, " - ", select.value);
                        compara_valor_colunas(3);
                        break;        
                    default:
                        console.log("Provavelmente nunca vai ser usado. Vou deixar aqui só pro switch ficar completo");
                        break;

                }//fim do switch
            
            });// Fim EventListener 

        });//fim forEach

    }// fim primeiro IF

}// Fim da Função verifica_repeticao_atributos()

