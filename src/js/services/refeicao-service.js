angular.module('meal-keeper').factory('RefeicaoService', [function ($http) {
    let refeicoes = {
        // "dsRefeicao": "Em jejum",
        // "produtos": [
        //     {
        //         "dsProduto": 'Clorofila ou couve',
        //         "dsMedidaCaseira": "2 colheres de sopa ou 1 folha",
        //         "dsPorcao": '',
        //         "dsCategoria": ''
        //     }, {
        //         "dsProduto": 'Limão ou maçã',
        //         "dsMedidaCaseira": "1 unidade",
        //         "dsPorcao": '',
        //         "dsCategoria": ''
        //     }, {
        //         "dsProduto": 'Maca peruana',
        //         "dsMedidaCaseira": "1 colher de café",
        //         "dsPorcao": '',
        //         "dsCategoria": ''
        //     }, {
        //         "dsProduto": 'Própolis',
        //         "dsMedidaCaseira": "20 gotas",
        //         "dsPorcao": '',
        //         "dsCategoria": ''
        //     }, {
        //         "dsProduto": 'Glutamina em pó',
        //         "dsMedidaCaseira": "1 medida",
        //         "dsPorcao": 5,
        //         "dsCategoria": ''
        //     }, {
        //         "dsProduto": 'Probiatop ou Simfort',
        //         "dsMedidaCaseira": "1 sachê",
        //         "dsPorcao": '',
        //         "dsCategoria": ''
        //     }
        // ]

        
        "dsRefeicao": "Desjejum",
        "produtos": [
            {
                "dsProduto": 'Pão de forma 100% integral',
                "dsMedidaCaseira": "2 fatias",
                "dsPorcao": 50,
                "dsCategoria": 'Pães e Similares'
            }, {
                "dsProduto": 'Presunto de Peru',
                "dsMedidaCaseira": "2 fatias",
                "dsPorcao": 56,
                "dsCategoria": 'Carnes'
            }, {
                "dsProduto": 'Queijo Minas, Frescal ou Búfala',
                "dsMedidaCaseira": "2-3 fatias pequenas",
                "dsPorcao": 40,
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
        ]



        // "dsRefeicao": "Colação",
        // "produtos": [
        //     {
        //         "dsProduto": 'Pão de forma 100% integral',
        //         "dsMedidaCaseira": "1 fatia",
        //         "dsPorcao": 25,
        //         "dsCategoria": 'Pães e Similares'
        //     }, {
        //         "dsProduto": 'Atum ao natural (sem óleo)',
        //         "dsMedidaCaseira": "2 colheres de sopa",
        //         "dsPorcao": 40,
        //         "dsCategoria": 'Carnes'
        //     }, {
        //         "dsProduto": 'Queijo Minas, Frescal ou Búfala',
        //         "dsMedidaCaseira": "2-3 fatias pequenas",
        //         "dsPorcao": 40,
        //         "dsCategoria": 'Leite e derivados'
        //     }, {
        //         "dsProduto": 'Farinha de Linhaça Dourada',
        //         "dsMedidaCaseira": "1 colher de chá",
        //         "dsPorcao": 3,
        //         "dsCategoria": 'Castanhas'
        //     }
        // ]



        // "dsRefeicao": "Almoço",
        // "produtos": [
        //     {
        //         "dsProduto": 'Salada crua e colorida',
        //         "dsMedidaCaseira": "à vontade",
        //         "dsPorcao": '',
        //         "dsCategoria": 'Vegetal cru ou cozido'
        //     }, {
        //         "dsProduto": 'Vagem refogada',
        //         "dsMedidaCaseira": "4 colheres de sopa",
        //         "dsPorcao": 100,
        //         "dsCategoria": 'Vegetal refogado, grelhado ou a vapor'
        //     }, {
        //         "dsProduto": 'Bife grelhado',
        //         "dsMedidaCaseira": "1,5 unidade pequena",
        //         "dsPorcao": 90,
        //         "dsCategoria": 'Carnes'
        //     }, {
        //         "dsProduto": 'Espaguete integral cozido',
        //         "dsMedidaCaseira": "0,5 pegador",
        //         "dsPorcao": 37.5,
        //         "dsCategoria": 'Arroz'
        //     }, {
        //         "dsProduto": 'Feijão marrom',
        //         "dsMedidaCaseira": "0,5 concha média",
        //         "dsPorcao": 25,
        //         "dsCategoria": 'Feijão'
        //     }, {
        //         "dsProduto": 'Vitamina C 1g + Ômega 3 1g',
        //         "dsMedidaCaseira": "",
        //         "dsPorcao": '',
        //         "dsCategoria": 'Suplemento'
        //     }
        // ]


        // "dsRefeicao": "Lanche",
        // "produtos": [
        //     {
        //         "dsProduto": 'Morango',
        //         "dsMedidaCaseira": "10 unidades",
        //         "dsPorcao": '150',
        //         "dsCategoria": 'Frutas'
        //     }, {
        //         "dsProduto": 'Iogurte',
        //         "dsMedidaCaseira": "1 unidade",
        //         "dsPorcao": 180,
        //         "dsCategoria": 'Leite e derivados'
        //     }, {
        //         "dsProduto": 'Castanha do Brasil s/ sal',
        //         "dsMedidaCaseira": "2 unidades",
        //         "dsPorcao": 8,
        //         "dsCategoria": 'Castanhas'
        //     }
        // ]


        // "dsRefeicao": "Jantar",
        // "produtos": [
        //     {
        //         "dsProduto": 'Rap 10 fit ou integral',
        //         "dsMedidaCaseira": "1 unidade",
        //         "dsPorcao": '',
        //         "dsCategoria": 'Pães e Similares'
        //     }, {
        //         "dsProduto": 'Alface, tomate, rúcula',
        //         "dsMedidaCaseira": "à vontade",
        //         "dsPorcao": '',
        //         "dsCategoria": 'Vegetal cru ou cozido'
        //     }, {
        //         "dsProduto": 'Atum ao natural (s/ óleo)',
        //         "dsMedidaCaseira": "4 colheres de sopa",
        //         "dsPorcao": 80,
        //         "dsCategoria": 'Carnes'
        //     }, {
        //         "dsProduto": 'Creme de ricota',
        //         "dsMedidaCaseira": "1 colher de sopa",
        //         "dsPorcao": 35,
        //         "dsCategoria": 'Leite e derivados'
        //     }, {
        //         "dsProduto": 'Gergelim',
        //         "dsMedidaCaseira": "1 colher de sobremesa",
        //         "dsPorcao": 3,
        //         "dsCategoria": 'Castanhas'
        //     }
        // ]
    };

    let _getRefeicao = (idRefeicao) => {
        return refeicoes;
    };

    let _trocaItemDaRefeicao = (produtoAntigo, produtoNovo) => {
        refeicoes.produtos = refeicoes.produtos.map((produto) => {
            if (produto.dsProduto == produtoAntigo.dsProduto) {
                return produtoNovo;
            }

            return produto;
        });

        return refeicoes.produtos;
    }

    return {
        getRefeicao: _getRefeicao,
        trocaItemDaRefeicao: _trocaItemDaRefeicao
    }
}]);