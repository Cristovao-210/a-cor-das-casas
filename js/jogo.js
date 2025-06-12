
//Falta implementar
/*
* Exibir percentual de acerto do jogador
* Quando acertar 100% cada coluna da tabela deve ficar da cor do atributo COR e exibir botão de jogar novamente
*/
const tabela_gabarito = `<h2>GABARITO</h2>
            <table id="gabarito-jogo">
                <tr>
                    <th>ATRIBUTOS</th>
                    <th>CASA 1</th>
                    <th>CASA 2</th>
                    <th>CASA 3</th>
                    <th>CASA 4</th>
                </tr>
                <tr id="COR" >
                    <td>COR</td>
                    <td>BRANCA</td>
                    <td>AMARELA</td>
                    <td>PRETA</td>
                    <td>VERMELHA</td>
                </tr>
                <tr id="NACIONALIDADE">
                    <td>NACIONALIDADE</td>
                    <td>ESPANHOL</td>
                    <td>ALEMÃO</td>
                    <td>FRANCÊS</td>
                    <td>GREGO</td>
                </tr>
                <tr id="ANIMAL">
                    <td>ANIMAL</td>
                    <td>CAVALOS</td>
                    <td>CACHORRO</td>
                    <td>TARTARUGAS</td>
                    <td>BORBOLETAS</td>
                </tr>
                <tr id="ESPORTE">
                    <td>ESPORTE</td>
                    <td>TÊNIS</td>
                    <td>FUTEBOL</td>
                    <td>SINUCA</td>
                    <td>BASQUETE</td>
                </tr>
            </table>

        </div>`;
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
                                // Escondendo a mensagem depois de um tempo da exibição (4 segundos)
                                setTimeout(() => {
                                    document.getElementById("mensagem-alerta").style.display = "none";
                                    // Limpando a variável (só pra garantir)
                                    mensage_de_alerta = "";
                                }, 4000);
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

// Criando a função que vai verificar o preenchimento e ser usada no evento de 'change'
function verifica_preenchimento_finalizado(){

    // Capturando elemento da tabela do jogo
    const tabela_jogo = document.getElementById("jogo");
    // Criando um array para armazenar os valores preenchidos
    let valores_colunas = new Array();
    // Percorrendo a árvore de elementos para acessar todas as colunas pertinentes
    for(let i = 1; i < 5; i++){
        for(let j = 1; j < 5; j++){
            let valor_coluna = tabela_jogo.children[0].children[i].children[j].children[0];
            // As colunas que tem algum valor preenchido tem esse valor armazenado no array
            if (valor_coluna.value){
                valores_colunas.push(valor_coluna.value);
                console.log(tabela_jogo.children[0].children[i].children[j].children[0].value);
            }
        } 
   }
   // O array precisa estar exatamente com 16 elementos para que se entenda que o preenchimento foi finalizado (4 linhas e 4 colunas 4 x 4 = 16)
    if(valores_colunas.length == 16){
            console.log("ARRAY COM TODOS OS VALORES PREENCHIDOS");
            console.log(valores_colunas);
            document.getElementById("gabarito").style.display = "block";
        } else {
            // Caso o array não venha exatamente com 16 elementos é zerado para ser preenchido do começo novamente. Isso é para evitar duplicidade.
            valores_colunas = [];
            const btn_conferir_resultado = document.getElementById("gabarito");
            if(btn_conferir_resultado){
                btn_conferir_resultado.style.display = "none";
            }
            
        }
}// Fim da função verifica_preenchimento_finalizado

// Desabilita os selects do jogo quando o usuário pede pra ver o gabarito
function desabilitar_selecao_jogo(){

    for (let i = 1; i < 5; i++) {
        // Usando os ids dos selects para desbilitar quando o gabarito aparece       
        document.querySelector(`#COR-CASA-${i}`).disabled = true;
        document.querySelector(`#NACIONALIDADE-CASA-${i}`).disabled = true;
        document.querySelector(`#ANIMAL-CASA-${i}`).disabled = true;
        document.querySelector(`#ESPORTE-CASA-${i}`).disabled = true;
    }
    
}        

// Essa função é chamada no evento de "onclick" do input-submit que fica na div#gabarito
function mostrar_gabarito(){
    const tab_gab = document.getElementById("gabarito-jogo");
    const btn_jogar_novamente = document.getElementById("btn-jogar-novamente")
    const botao_conferir_resultado = document.getElementById("btn-ver-gabarito")
    const tabela_dicas = document.getElementById("container-dicas")
    if (!tab_gab){
        const mostrar_gabarito = document.getElementById("mostrar-gabarito");
        mostrar_gabarito.innerHTML = tabela_gabarito;
        desabilitar_selecao_jogo();
        botao_conferir_resultado.style.display = "none";
        btn_jogar_novamente.style.display = "block";
        tabela_dicas.style.display = "none";
    } else {
        const mostrar_gabarito = document.getElementById("mostrar-gabarito");
        mostrar_gabarito.innerHTML = "";
    }
    
}//document.getElementById("gabarito-jogo").children[0].children[1].children[1]

// CONFERIR RESULTADOS DO JOGADOR
function conferir_resultado_jogador(){

    const preencimento_jogador = document.getElementById("jogo");
    const preenchimento_gabarito = document.getElementById("gabarito-jogo");
    let acertos = 0;
    preencimento_jogador.style.background = "yellow";
    for (let lin = 1; lin < 5; lin++){
        for (let col = 1; col < 5; col++){
            let valor_gabarito = preenchimento_gabarito.children[0].children[lin].children[col].textContent;
            let valor_jogador =  preencimento_jogador.children[0].children[lin].children[col].children[0].value
            if (valor_jogador == valor_gabarito){
                console.log("ACERTOU MISERAVÍ!");
                preencimento_jogador.children[0].children[lin].children[col].children[0].style.background = "green";
                acertos = acertos + 1
            } else {
                console.log("EROOOOUUU!!");
                preencimento_jogador.children[0].children[lin].children[col].children[0].style.background = "#fa2935";
            }
        }
    }// Fim do laço for 
    return acertos;
} 

function feedback_jogador(acertos){

    const maximo_acertos = 16;
    let percentual_acertos = 0;
    const p_acertos_jogador = document.getElementById("acertos-jogador")
    p_acertos_jogador.innerText = `VOCÊ ACERTOU ${acertos} RESPOSTAS.`
    p_acertos_jogador.style.background = "green";
    p_acertos_jogador.style.display = "block";
    const p_erros_jogador = document.getElementById("erros-jogador")
    p_erros_jogador.innerText = `VOCÊ ERROU ${maximo_acertos - acertos} RESPOSTAS.`
    p_erros_jogador.style.background = "#fa2935";
    p_erros_jogador.style.display = "block";
    const p_percentual_acertos_jogador = document.getElementById("percentual-acertos-jogador")
    percentual_acertos = (acertos * 100) / maximo_acertos;
    p_percentual_acertos_jogador.innerText = `O SEU PERCENTUAL DE ACERTOS FOI DE ${percentual_acertos}%`
    p_percentual_acertos_jogador.style.background = "yellow";
    p_percentual_acertos_jogador.style.display = "block";
    p_percentual_acertos_jogador.style.color = "black";

}