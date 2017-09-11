angular.module('meal-keeper').factory('RefeicaoService', [function ($http) {
    let produtos = [
        {
            "dsProduto": 'Goma de tapioca',
            "dsMedidaCaseira": "3 colher(es) de sopa",
            "dsPorcao": 40,
            "dsCategoria": 'Pães e Similares'
        }, {
            "dsProduto": 'Semente de chia',
            "dsMedidaCaseira": "1 colher(es) de sobremesa",
            "dsPorcao": 6,
            "dsCategoria": 'Castanhas'
        }, {
            "dsProduto": 'Ovo frito no microondas',
            "dsMedidaCaseira": "2 unidade(s)",
            "dsPorcao": '',
            "dsCategoria": 'Carnes'
        }, {
            "dsProduto": 'Queijo Minas, Frescal ou Búfala',
            "dsMedidaCaseira": "2 unidade(s)",
            "dsPorcao": '40',
            "dsCategoria": 'Leite e derivados'
        }, {
            "dsProduto": 'Café',
            "dsMedidaCaseira": "1 xícara",
            "dsPorcao": '',
            "dsCategoria": ''
        }, {
            "dsProduto": 'Leite desnatado em pó',
            "dsMedidaCaseira": "2 colher(es) de sobremesa",
            "dsPorcao": '20',
            "dsCategoria": 'Leite e derivados'
        }
    ];

    let _getRefeicao = (idRefeicao) => {
        return produtos;
    };

    let _trocaItemDaRefeicao = (produtoAntigo, produtoNovo) => {
        produtos = produtos.map((produto) => {
            if (produto.dsProduto == produtoAntigo.dsProduto) {
                return produtoNovo;
            }

            return produto;
        });

        return produtos;
    }

    return {
        getRefeicao: _getRefeicao,
        trocaItemDaRefeicao: _trocaItemDaRefeicao
    }
}]);