angular.module('nutrikeeper').factory('RefeicaoService', ['$http', 'PersistenceService', function ($http, PersistenceService) {
    const KEY_REFEICOES = 'nk-refeicoes';

    let refeicaoSelecionada = null;

    let _getRefeicao = (idRefeicao) => {
        refeicoes = PersistenceService.list(KEY_REFEICOES);

        refeicaoSelecionada = refeicoes.find(refeicao => {
            return refeicao.id == idRefeicao;
        });

        return refeicaoSelecionada;
    };

    /**
     * Substitui um dos itens da refeição pelo novo produto passado
     */
    let _trocaItemDaRefeicao = (produtoAntigo, produtoNovo) => {
        refeicaoSelecionada.produtos = refeicaoSelecionada.produtos.map((produto) => {
            if (produto.dsProduto == produtoAntigo.dsProduto) {
                return produtoNovo;
            }

            return produto;
        });

        PersistenceService.save(refeicaoSelecionada, KEY_REFEICOES);

        return refeicaoSelecionada.produtos;
    }

    return {
        getRefeicao: _getRefeicao,
        trocaItemDaRefeicao: _trocaItemDaRefeicao
    }
}]);