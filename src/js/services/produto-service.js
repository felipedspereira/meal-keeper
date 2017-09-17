angular.module('nutrikeeper').factory('ProdutoService', ['$http', 'PersistenceService', function ($http, PersistenceService) {
    const KEY_PRODUTOS = 'nk-produtos';

    let produtosSelecionados = null;

    let _getProduto = (idProduto) => {
        produtos = PersistenceService.list(KEY_PRODUTOS);
        produtoSelecionado = produtos.find(produto => {
            return produto.id == idProduto;
        });
        return produtoSelecionado;
    };

    let _getProdutos = (dsCategoria) => {
        produtos = PersistenceService.list(KEY_PRODUTOS);
        produtosSelecionados = produtos.filter(produto => {
            return produto.dsCategoria == dsCategoria;
        });
        return produtosSelecionados;
    };

    return {
        getProduto: _getProduto,
        getProdutos: _getProdutos
    }
}]);