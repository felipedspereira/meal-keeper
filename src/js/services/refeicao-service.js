angular.module('nutrikeeper').factory('RefeicaoService', ['$http', 'PersistenceService', 'ProdutoService', '$q', function ($http, PersistenceService, ProdutoService, $q) {
    const KEY_REFEICOES = 'nk-refeicoes';

    const refeicoes = [
        {
            "id": 1,
            "dsRefeicao": "Em jejum",
            "realizada": false,
            "itens": [
                {
                    "produto": {
                        "dsProduto": 'Clorofila ou couve',
                        "dsMedida": "2 colheres de sopa ou 1 folha",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Limão ou maçã',
                        "dsMedida": "1 unidade",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Maca peruana',
                        "dsMedida": "1 colher de café",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Própolis',
                        "dsMedida": "20 gotas",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Glutamina em pó',
                        "dsMedida": "1 medida",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Probiatop ou Simfort',
                        "dsMedida": "1 sachê",
                    }
                }
            ]
        },
        {
            "id": 2,
            "dsRefeicao": "Desjejum",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(14, 1), "nrPorcao": 1 }, //Pães e Similares
                { "produto": getProdutoPorPorcao(125, 0.5), "nrPorcao": 0.5 }, //Carnes
                { "produto": getProdutoPorPorcao(97, 1), "nrPorcao": 1 }, //Leite e derivados
                {
                    "produto": {
                        "dsProduto": 'Café',
                        "dsMedida": "1 xícara",
                    }
                },
                { "produto": getProdutoPorPorcao(92, 1), "nrPorcao": 1 } //Leite e derivados
            ]
        },
        {
            "id": 3,
            "dsRefeicao": "Colação",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(14, 0.5), "nrPorcao": 0.5 }, //Pães e Similares
                { "produto": getProdutoPorPorcao(105, 0.5), "nrPorcao": 0.5 }, //Carnes
                { "produto": getProdutoPorPorcao(141, 1), "nrPorcao": 1 } //Castanhas
            ]
        },
        {
            "id": 4,
            "dsRefeicao": "Almoço",
            "realizada": false,
            "itens": [
                {
                    "produto": {
                        "dsProduto": 'Salada crua e colorida',
                        "dsMedida": "à vontade",
                    }
                },
                { "produto": getProdutoPorPorcao(56, 1), "nrPorcao": 1 }, //Vegetal refogado, grelhado ou vapor
                { "produto": getProdutoPorPorcao(107, 1.5), "nrPorcao": 1.5 }, //Carnes
                { "produto": getProdutoPorPorcao(66, 0.5), "nrPorcao": 0.5 }, //Arroz
                { "produto": getProdutoPorPorcao(76, 0.5), "nrPorcao": 0.5 }, //Feijão
                {
                    "produto": {
                        "dsProduto": 'Vitamina C 1g+Ômega 3 1g',
                        "dsMedida": "1 cp/cada",
                    }
                }
            ]
        },

        {
            "id": 5,
            "dsRefeicao": "Lanche",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(30, 1), "nrPorcao": 1 }, //Fruta
                { "produto": getProdutoPorPorcao(90, 1), "nrPorcao": 1 }, //Leite e derivados
                { "produto": getProdutoPorPorcao(134, 2), "nrPorcao": 2 } //Castanhas
            ]
        },


        {
            "id": 6,
            "dsRefeicao": "Jantar",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(18, 0.5), "nrPorcao": 0.5 }, //Pães e Similares
                {
                    "produto": {
                        "dsProduto": 'Alface, rúcula, tomate',
                        "dsMedida": "à vontade",
                    }
                },
                { "produto": getProdutoPorPorcao(105, 1), "nrPorcao": 1 }, //Carnes
                { "produto": getProdutoPorPorcao(101, 1), "nrPorcao": 1 }, //Leite e derivados
                { "produto": getProdutoPorPorcao(135, 1), "nrPorcao": 1 } //Castanhas
            ]
        }
    ];

    const refeicoesFelipe = [
        {
            "id": 1,
            "dsCategoria": "Treino",
            "dsRefeicao": "Em jejum",
            "realizada": false,
            "itens": [
                {
                    "produto": {
                        "dsProduto": 'Clorofila ou couve',
                        "dsMedida": "2 colheres de sopa ou 1 folha",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Limão ou maçã',
                        "dsMedida": "1 unidade",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Maca peruana',
                        "dsMedida": "1 colher de café",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Própolis',
                        "dsMedida": "20 gotas",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Glutamina em pó',
                        "dsMedida": "1 medida",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Probiatop ou Simfort',
                        "dsMedida": "1 sachê",
                    }
                }
            ]
        },
        {
            "id": 2,
            "dsCategoria": "Treino",
            "dsRefeicao": "Desjejum",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(10, 1), "nrPorcao": 1 }, //Pães e Similares
                { "produto": getProdutoPorPorcao(140, 2), "nrPorcao": 2 }, //Castanhas
                { "produto": getProdutoPorPorcao(123, 0.5), "nrPorcao": 0.5 }, //Carnes
                { "produto": getProdutoPorPorcao(103, 1), "nrPorcao": 1 }, //Leite e derivados
                {
                    "produto": {
                        "dsProduto": 'Café',
                        "dsMedida": "1 xícara",
                    }
                },
                { "produto": getProdutoPorPorcao(92, 1), "nrPorcao": 1 }
            ]
        },
        {
            "id": 3,
            "dsCategoria": "Treino",
            "dsRefeicao": "Colação",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(14, 0.5), "nrPorcao": 0.5 }, //Pães e Similares
                { "produto": getProdutoPorPorcao(105, 0.5), "nrPorcao": 0.5 }, //Carnes
                { "produto": getProdutoPorPorcao(141, 1), "nrPorcao": 1 } //Castanhas
            ]
        },
        {
            "id": 4,
            "dsCategoria": "Treino",
            "dsRefeicao": "Almoço",
            "realizada": false,
            "itens": [
                {
                    "produto": {
                        "dsProduto": 'Salada crua e colorida',
                        "dsMedida": "à vontade",
                    }
                },
                { "produto": getProdutoPorPorcao(56, 1), "nrPorcao": 1 }, //Vegetal refogado, grelhado ou vapor
                { "produto": getProdutoPorPorcao(107, 1.5), "nrPorcao": 1.5 }, //Carnes
                { "produto": getProdutoPorPorcao(66, 1), "nrPorcao": 1 }, //Arroz
                { "produto": getProdutoPorPorcao(76, 0.5), "nrPorcao": 0.5 }, //Feijão
                {
                    "produto": {
                        "dsProduto": 'Vitamina C 1g+Ômega 3 1g',
                        "dsMedida": "1 cp/cada",
                    }
                }
            ]
        },

        {
            "id": 5,
            "dsCategoria": "Treino",
            "dsRefeicao": "Lanche",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(30, 1), "nrPorcao": 1 }, //Fruta
                { "produto": getProdutoPorPorcao(90, 1), "nrPorcao": 1 }, //Leite e derivados
                { "produto": getProdutoPorPorcao(134, 4), "nrPorcao": 4 }, //Castanhas
                {
                    "produto": {
                        "dsProduto": 'Salpicar:Cacau+Chia+Canela',
                        "dsMedida": "1 col(chá)/cada",
                    }
                }
            ]
        },


        {
            "id": 6,
            "dsCategoria": "Treino",
            "dsRefeicao": "Jantar",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(18, 0.5), "nrPorcao": 0.5 }, //Pães e Similares
                {
                    "produto": {
                        "dsProduto": 'Alface, rúcula, tomate',
                        "dsMedida": "à vontade",
                    }
                },
                { "produto": getProdutoPorPorcao(105, 1), "nrPorcao": 1 }, //Carnes
                { "produto": getProdutoPorPorcao(101, 1), "nrPorcao": 1 }, //Leite e derivados
                { "produto": getProdutoPorPorcao(135, 1), "nrPorcao": 1 } //Castanhas
            ]
        },

        {
            "id": 7,
            "dsCategoria": "Sem treino",
            "dsRefeicao": "Em jejum",
            "realizada": false,
            "itens": [
                {
                    "produto": {
                        "dsProduto": 'Clorofila ou couve',
                        "dsMedida": "2 colheres de sopa ou 1 folha",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Limão ou maçã',
                        "dsMedida": "1 unidade",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Maca peruana',
                        "dsMedida": "1 colher de café",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Própolis',
                        "dsMedida": "20 gotas",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Glutamina em pó',
                        "dsMedida": "1 medida",
                    }
                },
                {
                    "produto": {
                        "dsProduto": 'Probiatop ou Simfort',
                        "dsMedida": "1 sachê",
                    }
                }
            ]
        },
        {
            "id": 8,
            "dsCategoria": "Sem treino",
            "dsRefeicao": "Desjejum",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(10, 1), "nrPorcao": 1 }, //Pães e Similares
                { "produto": getProdutoPorPorcao(140, 1), "nrPorcao": 1 }, //Castanhas
                { "produto": getProdutoPorPorcao(123, 1), "nrPorcao": 1 }, //Carnes
                {
                    "produto": {
                        "dsProduto": 'Café',
                        "dsMedida": "1 xícara",
                    }
                },
                { "produto": getProdutoPorPorcao(92, 1), "nrPorcao": 1 } //Leite e derivados
            ]
        },
        {
            "id": 9,
            "dsCategoria": "Sem treino",
            "dsRefeicao": "Colação",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(30, 1), "nrPorcao": 1 }, //Fruta
                { "produto": getProdutoPorPorcao(90, 1), "nrPorcao": 1 }, //Leite e derivados
                {
                    "produto": {
                        "dsProduto": 'Salpicar:Cacau+Chia+Canela',
                        "dsMedida": "1 col(chá)/cada",
                    }
                }
            ]
        },
        {
            "id": 10,
            "dsCategoria": "Sem treino",
            "dsRefeicao": "Almoço",
            "realizada": false,
            "itens": [
                {
                    "produto": {
                        "dsProduto": 'Salada crua e colorida',
                        "dsMedida": "à vontade",
                    }
                },
                { "produto": getProdutoPorPorcao(56, 1), "nrPorcao": 1 }, //Vegetal refogado, grelhado ou vapor
                { "produto": getProdutoPorPorcao(107, 1.5), "nrPorcao": 1.5 }, //Carnes
                { "produto": getProdutoPorPorcao(66, 0.5), "nrPorcao": 0.5 }, //Arroz
                { "produto": getProdutoPorPorcao(76, 0.5), "nrPorcao": 0.5 }, //Feijão
                {
                    "produto": {
                        "dsProduto": 'Vitamina C 1g+Ômega 3 1g',
                        "dsMedida": "1 cp/cada",
                    }
                }
            ]
        },

        {
            "id": 11,
            "dsCategoria": "Sem treino",
            "dsRefeicao": "Lanche",
            "realizada": false,
            "itens": [
                { "produto": getProdutoPorPorcao(18, 0.5), "nrPorcao": 0.5 }, //Pães e Similares
                { "produto": getProdutoPorPorcao(105, 0.5), "nrPorcao": 0.5 }, //Carnes
                { "produto": getProdutoPorPorcao(101, 1), "nrPorcao": 1 }, //Leite e derivados
                {
                    "produto": {
                        "dsProduto": 'Café',
                        "dsMedida": "1 xícara",
                    }
                }
            ]
        },


        {
            "id": 12,
            "dsCategoria": "Sem treino",
            "dsRefeicao": "Jantar",
            "realizada": false,
            "itens": [
                {
                    "produto": {
                        "dsProduto": 'Vegetal cru ou cozido',
                        "dsMedida": "à vontade",
                    }
                },
                { "produto": getProdutoPorPorcao(56, 1), "nrPorcao": 1 }, //Vegetal refogado, grelhado ou vapor
                { "produto": getProdutoPorPorcao(107, 1.5), "nrPorcao": 1.5 }, //Carnes
                { "produto": getProdutoPorPorcao(66, 0.5), "nrPorcao": 0.5 }, //Arroz
                { "produto": getProdutoPorPorcao(135, 1), "nrPorcao": 1 } //Castanhas
            ]
        }
    ];

    let refeicaoSelecionada = null;

    let _getRefeicoes = () => {
        return PersistenceService.list(KEY_REFEICOES);
    };

    let _getRefeicao = (idRefeicao) => {
        let refeicoesList = _getRefeicoes();

        refeicaoSelecionada = refeicoesList.find(refeicao => {
            return refeicao.id == idRefeicao;
        });
        return refeicaoSelecionada;
    };

    /**
     * Substitui um dos itens da refeição pelo novo produto passado
     */
    let _trocaItemDaRefeicao = (produtoAntigo, produtoNovo) => {
        let nrPorcao = 0;
        let posicao = refeicaoSelecionada.itens.findIndex(function (item) {
            if (item.produto.dsProduto == produtoAntigo.dsProduto) {
                nrPorcao = item.nrPorcao;
            }
            return item.produto.dsProduto == produtoAntigo.dsProduto;
        });
        refeicaoSelecionada.itens[posicao] = {
            "produto": getProdutoPorPorcao(produtoNovo.id, nrPorcao),
            "nrPorcao": nrPorcao
        };

        PersistenceService.save(refeicaoSelecionada, KEY_REFEICOES);

        return refeicaoSelecionada.produtos;
    }

    let _confirmaRefeicaoRealizada = (refeicao) => {
        refeicao.realizada = true;

        PersistenceService.save(refeicao, KEY_REFEICOES);

        // TODO: implementar baixa no estoque dos produtos ;)
        return $q.when();
    };


    //Esta função retorna o produto com os atributos nrGrama e nrMedida já calculados de acordo com a porção recebida.
    function getProdutoPorPorcao(idProduto, nrPorcao) {
        var produto = ProdutoService.getProduto(idProduto);
        if (nrPorcao < 1 || nrPorcao > 1) {
            produto.nrGrama = nrPorcao * produto.nrGrama;
            produto.nrMedida = nrPorcao * produto.nrMedida;

        }
        produto.dsMedida = produto.nrMedida + " " + produto.dsMedida
            + (produto.nrGrama != null && produto.nrGrama != "" ? " ou " + produto.nrGrama + produto.unidade : "");

        return produto;
    };

    let isRefeicaoRealizada = (refeicao) => {
        let refeicoesRealizadas = PersistenceService.list(KEY_REFEICOES);

        return refeicoesRealizadas.some(ref => {
            if (refeicao.id == ref.id) {
                return ref.realizada;
            }

            return false;
        });
    };

    let _initDatabase = () => {
        console.log('inicializando o banco de refeicoes');

        let refeicoesList = PersistenceService.list(KEY_REFEICOES);

        if (!(refeicoesList.length > 0)) {

            PersistenceService.initDb(refeicoes, KEY_REFEICOES);
        }
    };

    _initDatabase();

    return {
        getRefeicao: _getRefeicao,
        trocaItemDaRefeicao: _trocaItemDaRefeicao,
        confirmaRefeicao: _confirmaRefeicaoRealizada
    }
}]);