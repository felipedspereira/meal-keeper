angular.module('meal-keeper').factory('ProdutoService', [function ($http) {
    var _getProduto = (idProduto) => {
        return {
            "dsProduto": 'Amaranto',
            "dsMedidaCaseira": "2 colher(es) de sopa",
            "dsPorcao": 30,
            "dsCategoria": 'Pães e Similares'

        };
    };
    return {
        getProduto: _getProduto
    }
}]);