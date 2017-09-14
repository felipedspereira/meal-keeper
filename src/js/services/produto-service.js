angular.module('nutrikeeper').factory('ProdutoService', ['$http', function ($http) {
    let _getProduto = (idProduto) => {
        return {
            "dsProduto": 'Amaranto',
            "dsMedidaCaseira": "2 colher(es) de sopa",
            "dsPorcao": 30,
            "dsCategoria": 'Pães e Similares'

        };
    };

    let _getProdutos = (categoria) => {
        return [
            {
                "dsProduto": 'Amaranto',
                "dsMedidaCaseira": "2 colher(es) de sopa",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Ativo fibras',
                "dsMedidaCaseira": "2 colher(es) de sopa",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Batata doce cozida',
                "dsMedidaCaseira": "3 fatias grossas",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Biscoito de arroz (grande)',
                "dsMedidaCaseira": "4 unidades grandes",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Biscoito de arroz ou tapioca/quinoa(peq)',
                "dsMedidaCaseira": "17 unidades pequenas",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Biscoito tipo palito s/ gluten Leve Crock',
                "dsMedidaCaseira": "20 unidades",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Biscoito tipo palito',
                "dsMedidaCaseira": "2 colher(es) de sopa",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Cará roxo cozido',
                "dsMedidaCaseira": "2 colher(es) de sopa",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Ciabatta Rústica',
                "dsMedidaCaseira": "2 colher(es) de sopa",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Cuscuz cozido',
                "dsMedidaCaseira": "2 colher(es) de sopa",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Farelo de aveia',
                "dsMedidaCaseira": "2 colher(es) de sopa",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            },
            {
                "dsProduto": 'Goma de tapioca',
                "dsMedidaCaseira": "3 colher(es) de sopa",
                "dsPorcao": 30,
                "dsCategoria": 'Pães e Similares'
            }
        ];
    };

    return {
        getProduto: _getProduto,
        getProdutos: _getProdutos
    }
}]);