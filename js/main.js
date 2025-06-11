 // Carregando as opções do jogo dinamicamente (interface.js)
carregar_tabela_pagina()
// Iterando na constante ATRIBUTOS (interface.js) para passar os argumentos para as funções
for (atributo of ATRIBUTOS){
    // Verificar se existe maIs de uma coluna na linha com o mesmo valor para o atributo (jogo.js)
    verifica_repeticao_atributos(atributo);
}
// Verificando se o preenchimento da tabela foi finalizado
if (tabela_jogo){
    tabela_jogo.addEventListener("change", verifica_preenchimento_finalizado)
}