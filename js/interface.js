/**
 * REQUISITOS DO JOGO:
 * 
 * Criar uma table com as dicas/regras do jogo
 * Quando uma regra/dica não for mais necessária poderá ser marcada como "feita"
 * Criar a table que contém as casas e os atributos que precisam ser preenchidos de acordo com as regras
 * Colocar um select em cada coluna com as opções de resposta para os atributos da linha
 * Verificar se não existe mas de uma coluna na linha com o mesmo valor para o atributo
 * Quando todas as colunas estiverem preenchidas exibir botão para conferir com o gabarito
 * Quando clicar no botão exibe a table com o gabarito e marcar de amarelo as incorretas
 * Exibir percentual de acerto do jogador
 * Quando acertar 100% cada coluna da tabela deve ficar da cor do atributo COR e exibir botão de jogar novamente
 */


// Constantes para armazenzar os valores necessários dos atributos
const ATRIBUTOS = ["COR", "NACIONALIDADE", "ANIMAL", "ESPORTE"]
const CASAS = ["", "CASA-1", "CASA-2", "CASA-3", "CASA-4"]
const CORES = ["", "BRANCA", "AMARELA",	"PRETA", "VERMELHA"]
const NACIONALIDADE = ["", "ESPANHOL", "ALEMÃO", "FRANCÊS", "GREGO"]
const ANIMAL = ["", "CAVALOS", "CACHORRO", "TARTARUGAS", "BORBOLETAS"]
const ESPORTE = ["", "TÊNIS", "FUTEBOL", "SINUCA", "BASQUETE"]


// Função para ticar a dica quando ela não for mais necessária
function ticar_dica(numeroDica){
    let checkBox = document.getElementById(`ch-dica-${numeroDica}`);
    if (checkBox.checked){//alert(checkBox.checked)
        document.getElementById(`td-dica-${numeroDica}`).className = 'ticar-dica';
    } else {
        document.getElementById(`td-dica-${numeroDica}`).className = 'desmarcar-dica';
    }
}

// Função para disponibilizar opçõs de preenchimento na tabela do jogo
function carregar_opcoes_tabela(id_atributo, array_opcoes, casas){
    // Preenchendo as opções do select de acordo com o necessário para cada atritubo
    let opcoes = "";
    for (const opcao of array_opcoes) {
        opcoes += `<option style="font-weight: bold;" value="${opcao}">${opcao}</option>`;
    }
    // Criando as colunas da tabela, criando o select dentro da coluna e inserindo as opções dentro do select
    let colunas = "";
    for (let i = 1; i < array_opcoes.length; i++) {//-${casas[i]}
        colunas += `<td style="text-align: center;">
                    <select id="${id_atributo}-${casas[i]}" name="${id_atributo}">
                        ${opcoes}  
                    </select>
                  </td>`;
    }
    // Selecionando a tr (linha da coluna) por id e inserindo a td (colunas) gerada
    document.getElementById(id_atributo).innerHTML = `<td style="font-weight: bold;font-size: large; color: rgb(1, 19, 8);">
                                                        ${id_atributo}
                                                        </td>
                                                        ${colunas}`;
}

// Função para chamar funções de carregamento no arquivo index.html (tag script)
function carregar_tabela_pagina(){

    carregar_opcoes_tabela("COR", CORES, CASAS);
    carregar_opcoes_tabela("NACIONALIDADE", NACIONALIDADE, CASAS);
    carregar_opcoes_tabela("ANIMAL", ANIMAL, CASAS);
    carregar_opcoes_tabela("ESPORTE", ESPORTE, CASAS);

}