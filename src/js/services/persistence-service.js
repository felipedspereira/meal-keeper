angular.module('nutrikeeper').factory('PersistenceService', [function () {
    let refeicoes = [
        {
            "id": 1,
            "dsRefeicao": "Em jejum",
            "produtos": [
                {
                    "dsProduto": 'Clorofila ou couve',
                    "dsMedidaCaseira": "2 colheres de sopa ou 1 folha",
                    "dsPorcao": '',
                    "dsCategoria": ''
                }, {
                    "dsProduto": 'Limão ou maçã',
                    "dsMedidaCaseira": "1 unidade",
                    "dsPorcao": '',
                    "dsCategoria": ''
                }, {
                    "dsProduto": 'Maca peruana',
                    "dsMedidaCaseira": "1 colher de café",
                    "dsPorcao": '',
                    "dsCategoria": ''
                }, {
                    "dsProduto": 'Própolis',
                    "dsMedidaCaseira": "20 gotas",
                    "dsPorcao": '',
                    "dsCategoria": ''
                }, {
                    "dsProduto": 'Glutamina em pó',
                    "dsMedidaCaseira": "1 medida",
                    "dsPorcao": 5,
                    "dsCategoria": ''
                }, {
                    "dsProduto": 'Probiatop ou Simfort',
                    "dsMedidaCaseira": "1 sachê",
                    "dsPorcao": '',
                    "dsCategoria": ''
                }
            ]
        },
        {
            "id": 2,
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
        },


        {
            "id": 3,
            "dsRefeicao": "Colação",
            "produtos": [
                {
                    "dsProduto": 'Pão de forma 100% integral',
                    "dsMedidaCaseira": "1 fatia",
                    "dsPorcao": 25,
                    "dsCategoria": 'Pães e Similares'
                }, {
                    "dsProduto": 'Atum ao natural (sem óleo)',
                    "dsMedidaCaseira": "2 colheres de sopa",
                    "dsPorcao": 40,
                    "dsCategoria": 'Carnes'
                }, {
                    "dsProduto": 'Queijo Minas, Frescal ou Búfala',
                    "dsMedidaCaseira": "2-3 fatias pequenas",
                    "dsPorcao": 40,
                    "dsCategoria": 'Leite e derivados'
                }, {
                    "dsProduto": 'Farinha de Linhaça Dourada',
                    "dsMedidaCaseira": "1 colher de chá",
                    "dsPorcao": 3,
                    "dsCategoria": 'Castanhas'
                }
            ]
        },


        {
            "id": 4,
            "dsRefeicao": "Almoço",
            "produtos": [
                {
                    "dsProduto": 'Salada crua e colorida',
                    "dsMedidaCaseira": "à vontade",
                    "dsPorcao": '',
                    "dsCategoria": 'Vegetal cru ou cozido'
                }, {
                    "dsProduto": 'Vagem refogada',
                    "dsMedidaCaseira": "4 colheres de sopa",
                    "dsPorcao": 100,
                    "dsCategoria": 'Vegetal refogado, grelhado ou a vapor'
                }, {
                    "dsProduto": 'Bife grelhado',
                    "dsMedidaCaseira": "1,5 unidade pequena",
                    "dsPorcao": 90,
                    "dsCategoria": 'Carnes'
                }, {
                    "dsProduto": 'Espaguete integral cozido',
                    "dsMedidaCaseira": "0,5 pegador",
                    "dsPorcao": 37.5,
                    "dsCategoria": 'Arroz'
                }, {
                    "dsProduto": 'Feijão marrom',
                    "dsMedidaCaseira": "0,5 concha média",
                    "dsPorcao": 25,
                    "dsCategoria": 'Feijão'
                }, {
                    "dsProduto": 'Vitamina C 1g + Ômega 3 1g',
                    "dsMedidaCaseira": "",
                    "dsPorcao": '',
                    "dsCategoria": 'Suplemento'
                }
            ]
        },

        {
            "id": 5,
            "dsRefeicao": "Lanche",
            "produtos": [
                {
                    "dsProduto": 'Morango',
                    "dsMedidaCaseira": "10 unidades",
                    "dsPorcao": '150',
                    "dsCategoria": 'Frutas'
                }, {
                    "dsProduto": 'Iogurte',
                    "dsMedidaCaseira": "1 unidade",
                    "dsPorcao": 180,
                    "dsCategoria": 'Leite e derivados'
                }, {
                    "dsProduto": 'Castanha do Brasil s/ sal',
                    "dsMedidaCaseira": "2 unidades",
                    "dsPorcao": 8,
                    "dsCategoria": 'Castanhas'
                }
            ]
        },


        {
            "id": 6,
            "dsRefeicao": "Jantar",
            "produtos": [
                {
                    "dsProduto": 'Rap 10 fit ou integral',
                    "dsMedidaCaseira": "1 unidade",
                    "dsPorcao": '',
                    "dsCategoria": 'Pães e Similares'
                }, {
                    "dsProduto": 'Alface, tomate, rúcula',
                    "dsMedidaCaseira": "à vontade",
                    "dsPorcao": '',
                    "dsCategoria": 'Vegetal cru ou cozido'
                }, {
                    "dsProduto": 'Atum ao natural (s/ óleo)',
                    "dsMedidaCaseira": "4 colheres de sopa",
                    "dsPorcao": 80,
                    "dsCategoria": 'Carnes'
                }, {
                    "dsProduto": 'Creme de ricota',
                    "dsMedidaCaseira": "1 colher de sopa",
                    "dsPorcao": 35,
                    "dsCategoria": 'Leite e derivados'
                }, {
                    "dsProduto": 'Gergelim',
                    "dsMedidaCaseira": "1 colher de sobremesa",
                    "dsPorcao": 3,
                    "dsCategoria": 'Castanhas'
                }
            ]
        }
    ];

    let produtos = [
        {"id": 1,"dsCategoria": "Pão e similares","dsProduto":"Amaranto","nrGrama": 30,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa"},
        {"id": 2,"dsCategoria": "Pão e similares","dsProduto":"Ativo fibras","nrGrama": 40,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa cheia"},
        {"id": 3,"dsCategoria": "Pão e similares","dsProduto":"Batata doce cozida","nrGrama": 110,"unidade": "g","nrMedida": 3,"dsMedida": "fatias grossas"},
        {"id": 4,"dsCategoria": "Pão e similares","dsProduto":"Biscoito de arroz (grande)","nrGrama": 40,"unidade": "g","nrMedida": 4,"dsMedida": "unidades grandes"},
        {"id": 5,"dsCategoria": "Pão e similares","dsProduto":"Biscoito de arroz ou tapioca/quinoa(peq)","nrGrama": 40,"unidade": "g","nrMedida": 17,"dsMedida": "unidades pequenas"},
        {"id": 6,"dsCategoria": "Pão e similares","dsProduto":"Biscoito tipo palito s/ gluten Leve Crock","nrGrama": 25,"unidade": "g","nrMedida": 20,"dsMedida": "unidades"},
        {"id": 7,"dsCategoria": "Pão e similares","dsProduto":"Cará roxo cozido","nrGrama": 105,"unidade": "g","nrMedida": 1,"dsMedida": "unidade pequena"},
        {"id": 8,"dsCategoria": "Pão e similares","dsProduto":"Cuscuz cozido","nrGrama": 50,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa"},
        {"id": 9,"dsCategoria": "Pão e similares","dsProduto":"Farelo de aveia","nrGrama": 30,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sobremesa"},
        {"id": 10,"dsCategoria": "Pão e similares","dsProduto":"Goma de tapioca","nrGrama": 40,"unidade": "g","nrMedida": 3,"dsMedida": "colheres de sopa"},
        {"id": 11,"dsCategoria": "Pão e similares","dsProduto":"Granola sem açúcar","nrGrama": 40,"unidade": "g","nrMedida": 0.5,"dsMedida": "xícara"},
        {"id": 12,"dsCategoria": "Pão e similares","dsProduto":"Macaxeira cozida","nrGrama": 65,"unidade": "g","nrMedida": 2,"dsMedida": "fatias"},
        {"id": 13,"dsCategoria": "Pão e similares","dsProduto":"Milho cozido","nrGrama": 20,"unidade": "cm","nrMedida": 1,"dsMedida": "espiga grande"},
        {"id": 14,"dsCategoria": "Pão e similares","dsProduto":"Pão de forma 100% integral Fit","nrGrama": 50,"unidade": "g","nrMedida": 2,"dsMedida": "fatias médias"},
        {"id": 15,"dsCategoria": "Pão e similares","dsProduto":"Pão de forma integral s/ glúten","nrGrama": 50,"unidade": "g","nrMedida": 2,"dsMedida": "fatias médias"},
        {"id": 16,"dsCategoria": "Pão e similares","dsProduto":"Pão francês 5 grãos","nrGrama": 50,"unidade": "g","nrMedida": 1,"dsMedida": "unidade"},
        {"id": 17,"dsCategoria": "Pão e similares","dsProduto":"Pizza de frigideira integral - Massa leve","nrGrama": 40,"unidade": "g","nrMedida": 1.5,"dsMedida": "unidade"},
        {"id": 18,"dsCategoria": "Pão e similares","dsProduto":"Rap 10 Fit ou Integral","nrGrama": 40,"unidade": "g","nrMedida": 1,"dsMedida": "unidade"},
        {"id": 19,"dsCategoria": "Pão e similares","dsProduto":"Trato trio ou mix","nrGrama": 40,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa cheia"},
        
        {"id": 20,"dsCategoria": "Fruta","dsProduto":"Abacate","nrGrama": 160,"unidade": "g","nrMedida": 1,"dsMedida": "xícara rasa"},
        {"id": 21,"dsCategoria": "Fruta","dsProduto":"Abacaxi","nrGrama": 80,"unidade": "g","nrMedida": 2,"dsMedida": "fatias finas"},
        {"id": 22,"dsCategoria": "Fruta","dsProduto":"Ameixa vermelha","nrGrama": 75,"unidade": "g","nrMedida": 2,"dsMedida": "unidades pequenas s/ caroço"},
        {"id": 23,"dsCategoria": "Fruta","dsProduto":"Amora","nrGrama": 100,"unidade": "g","nrMedida": 10,"dsMedida": "unidades"},
        {"id": 24,"dsCategoria": "Fruta","dsProduto":"Banana maçã","nrGrama": 50,"unidade": "g","nrMedida": 0.5,"dsMedida": "unidade"},
        {"id": 25,"dsCategoria": "Fruta","dsProduto":"Caju","nrGrama": 100,"unidade": "g","nrMedida": 1,"dsMedida": "unidade"},
        {"id": 26,"dsCategoria": "Fruta","dsProduto":"Cereja","nrGrama": 70,"unidade": "g","nrMedida": 7,"dsMedida": "unidades"},
        {"id": 27,"dsCategoria": "Fruta","dsProduto":"Coco ralado fresco","nrGrama": 45,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa"},
        {"id": 28,"dsCategoria": "Fruta","dsProduto":"Cranberry desidratado","nrGrama": 15,"unidade": "g","nrMedida": 1,"dsMedida": "colher de sopa cheia"},
        {"id": 29,"dsCategoria": "Fruta","dsProduto":"Cupuaçu","nrGrama": 100,"unidade": "g","nrMedida": 0.25,"dsMedida": "xícara"},
        {"id": 30,"dsCategoria": "Fruta","dsProduto":"Damasco seco","nrGrama": 25,"unidade": "g","nrMedida": 3,"dsMedida": "unidades"},
        {"id": 31,"dsCategoria": "Fruta","dsProduto":"Frutas vermelhas congeladas","nrGrama": 125,"unidade": "g","nrMedida": 4,"dsMedida": "colheres de sopa"},
        {"id": 32,"dsCategoria": "Fruta","dsProduto":"Goiaba com casca","nrGrama": 75,"unidade": "g","nrMedida": 1,"dsMedida": "unidade grande"},
        {"id": 33,"dsCategoria": "Fruta","dsProduto":"Goji berry desidratado","nrGrama": 15,"unidade": "g","nrMedida": 2.5,"dsMedida": "colher de sopa"},
        {"id": 34,"dsCategoria": "Fruta","dsProduto":"Kiwi","nrGrama": 85,"unidade": "g","nrMedida": 1,"dsMedida": "unidade"},
        {"id": 35,"dsCategoria": "Fruta","dsProduto":"Laranja com bagaço","nrGrama": 85,"unidade": "g","nrMedida": 1,"dsMedida": "unidade pequena"},
        {"id": 36,"dsCategoria": "Fruta","dsProduto":"Limão","nrGrama": 100,"unidade": "g","nrMedida": 3,"dsMedida": "unidades grandes"},
        {"id": 37,"dsCategoria": "Fruta","dsProduto":"Maçã","nrGrama": 70,"unidade": "g","nrMedida": 1,"dsMedida": "unidade pequena"},
        {"id": 38,"dsCategoria": "Fruta","dsProduto":"Mamão papaya","nrGrama": 100,"unidade": "g","nrMedida": 2,"dsMedida": "fts finas"},
        {"id": 39,"dsCategoria": "Fruta","dsProduto":"Manga","nrGrama": 80,"unidade": "g","nrMedida": 0.5,"dsMedida": "unidade média"},
        {"id": 40,"dsCategoria": "Fruta","dsProduto":"Maracujá","nrGrama": 80,"unidade": "g","nrMedida": 1,"dsMedida": "xícara rasa da polpa"},
        {"id": 41,"dsCategoria": "Fruta","dsProduto":"Melancia","nrGrama": 120,"unidade": "g","nrMedida": 10,"dsMedida": "cubos"},
        {"id": 42,"dsCategoria": "Fruta","dsProduto":"Melão (casca amarela)","nrGrama": 130,"unidade": "g","nrMedida": 2,"dsMedida": "fatias finas"},
        {"id": 43,"dsCategoria": "Fruta","dsProduto":"Morango","nrGrama": 150,"unidade": "g","nrMedida": 10,"dsMedida": "unidades"},
        {"id": 44,"dsCategoria": "Fruta","dsProduto":"Pêra","nrGrama": 70,"unidade": "g","nrMedida": 1,"dsMedida": "unidade"},
        {"id": 45,"dsCategoria": "Fruta","dsProduto":"Pêssego","nrGrama": 100,"unidade": "g","nrMedida": 1,"dsMedida": "unidade grande"},
        {"id": 46,"dsCategoria": "Fruta","dsProduto":"Pupunha","nrGrama": 30,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa"},
        {"id": 47, "dsCategoria": "Fruta", "dsProduto":"Tangerina poncã","nrGrama": 100,"unidade": "g","nrMedida": 1,"dsMedida": "unidade"},
        {"id": 48,"dsCategoria": "Fruta","dsProduto":"Tucumã","nrGrama": 160,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa"},
        
        {"id": 49,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Abóbora cozida","nrGrama": 85,"unidade": "g","nrMedida": 3,"dsMedida": "colheres de sopa (rasa)"},
        {"id": 50,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Abobrinha cozida","nrGrama": 100,"unidade": "g","nrMedida": 4,"dsMedida": "colheres de sopa"},
        {"id": 51,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Berinjela cozida","nrGrama": 100,"unidade": "g","nrMedida": 4,"dsMedida": "colheres de sopa"},
        {"id": 52,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Brócolis cozido","nrGrama": 115,"unidade": "g","nrMedida": 8,"dsMedida": "colheres de sopa"},
        {"id": 53,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Broto de feijão (Moyashi)","nrGrama": 65,"unidade": "g","nrMedida": 1,"dsMedida": "xícara"},
        {"id": 54,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Cenoura cozida","nrGrama": 75,"unidade": "g","nrMedida": 3,"dsMedida": "colheres de sopa"},
        {"id": 55,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Chuchu cozido","nrGrama": 100,"unidade": "g","nrMedida": 4,"dsMedida": "colheres de sopa"},
        {"id": 56,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Couve refogada s/ óleo","nrGrama": 120,"unidade": "g","nrMedida": 6,"dsMedida": "colheres de sopa"},
        {"id": 57,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Couve flor cozida","nrGrama": 130,"unidade": "g","nrMedida": 9,"dsMedida": "colheres de sopa"},
        {"id": 58,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Espinafre refogado s/ óleo","nrGrama": 120,"unidade": "g","nrMedida": 5,"dsMedida": "colheres de sopa"},
        {"id": 59,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Maxixe cru","nrGrama": 185,"unidade": "g","nrMedida": 5,"dsMedida": "colheres de sopa"},
        {"id": 60,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Palmito de pupunha cru","nrGrama": 90,"unidade": "g","nrMedida": 1.5,"dsMedida": "xícara"},
        {"id": 61,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Pimentão cru","nrGrama": 90,"unidade": "g","nrMedida": 4,"dsMedida": "colheres de sopa"},
        {"id": 62,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Repolho refogado s/ óleo","nrGrama": 65,"unidade": "g","nrMedida": 4,"dsMedida": "colheres de sopa (rasa)"},
        {"id": 63,"dsCategoria": "Vegetal refogado, grelhado ou vapor","dsProduto":"Vagem crua","nrGrama": 100,"unidade": "g","nrMedida": 4,"dsMedida": "colheres de sopa"},

        {"id": 64,"dsCategoria": "Arroz","dsProduto":"Arroz multigrãos cozido","nrGrama": 75,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de servir (rasa)"},
        {"id": 65,"dsCategoria": "Arroz","dsProduto":"Batata doce cozida","nrGrama": 110,"unidade": "g","nrMedida": 4,"dsMedida": "fatias médias"},
        {"id": 66,"dsCategoria": "Arroz","dsProduto":"Espaguete integral cozido","nrGrama": 75,"unidade": "g","nrMedida": 1,"dsMedida": "pegador"},
        {"id": 67,"dsCategoria": "Arroz","dsProduto":"Farofa de soja","nrGrama": 30,"unidade": "g","nrMedida": 1,"dsMedida": "colheres de servir"},
        {"id": 68,"dsCategoria": "Arroz","dsProduto":"Inhame cru","nrGrama": 85,"unidade": "g","nrMedida": 3,"dsMedida": "fatias médias"},
        {"id": 69,"dsCategoria": "Arroz","dsProduto":"Macaxeira cozida","nrGrama": 65,"unidade": "g","nrMedida": 2,"dsMedida": "fatias grossas"},
        {"id": 70,"dsCategoria": "Arroz","dsProduto":"Milho verde cozido/refogado","nrGrama": 135,"unidade": "g","nrMedida": 3,"dsMedida": "colheres de servir"},
        {"id": 71,"dsCategoria": "Arroz","dsProduto":"Purê de batata doce","nrGrama": 110,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de servir rasa"},
        {"id": 72,"dsCategoria": "Arroz","dsProduto":"Purê de macaxeira","nrGrama": 65,"unidade": "g","nrMedida": 1,"dsMedida": "colheres de servir rasa"},
        {"id": 73,"dsCategoria": "Arroz","dsProduto":"Quinoa em grãos crua","nrGrama": 30,"unidade": "g","nrMedida": 0.25,"dsMedida": "xícara"},

        {"id": 74,"dsCategoria": "Feijão","dsProduto":"Ervilha (congelada ou fresca)","nrGrama": 60,"unidade": "g","nrMedida": 1,"dsMedida": "colher de servir rasa"},
        {"id": 75,"dsCategoria": "Feijão","dsProduto":"Feijão branco","nrGrama": 50,"unidade": "g","nrMedida": 1,"dsMedida": "concha média"},
        {"id": 76,"dsCategoria": "Feijão","dsProduto":"Feijão marrom","nrGrama": 50,"unidade": "g","nrMedida": 1,"dsMedida": "concha média"},
        {"id": 77,"dsCategoria": "Feijão","dsProduto":"Feijão preto","nrGrama": 50,"unidade": "g","nrMedida": 1,"dsMedida": "concha média"},
        {"id": 78,"dsCategoria": "Feijão","dsProduto":"Grão de bico","nrGrama": 65,"unidade": "g","nrMedida": 1,"dsMedida": "concha grande"},
        {"id": 79,"dsCategoria": "Feijão","dsProduto":"Lentilha","nrGrama": 80,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa"},
        {"id": 80,"dsCategoria": "Feijão","dsProduto":"Homus - Pasta de grão de bico","nrGrama": 50,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa"},

        {"id": 81,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 20,"unidade": "g","nrMedida": 1,"dsMedida": "medida"},
        {"id": 82,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 150,"unidade": "ml","nrMedida": 1,"dsMedida": "xícara de chá"},
        {"id": 83,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 150,"unidade": "ml","nrMedida": 1,"dsMedida": "xícara de chá"},
        {"id": 84,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 180,"unidade": "g","nrMedida": 1,"dsMedida": "copo pequeno"},
        {"id": 85,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 180,"unidade": "g","nrMedida": 1,"dsMedida": "copo pequeno"},
        {"id": 86,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 62.5,"unidade": "g","nrMedida": 0.5,"dsMedida": "unidade"},
        {"id": 87,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 180,"unidade": "g","nrMedida": 1,"dsMedida": "copo pequeno"},
        {"id": 88,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 180,"unidade": "g","nrMedida": 1,"dsMedida": "copo pequeno"},
        {"id": 89,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 180,"unidade": "g","nrMedida": 1,"dsMedida": "copo pequeno"},
        {"id": 90,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 180,"unidade": "g","nrMedida": 1,"dsMedida": "copo pequeno"},
        {"id": 91,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 65,"unidade": "g","nrMedida": 0.5,"dsMedida": "copo pequeno"},
        {"id": 92,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 20,"unidade": "g","nrMedida": 2,"dsMedida": "col (sobremesa)"},
        {"id": 93,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 150,"unidade": "ml","nrMedida": 1,"dsMedida": "xícara de chá"},
        {"id": 94,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 20,"unidade": "g","nrMedida": 1,"dsMedida": "unidade"},
        {"id": 95,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 125,"unidade": "g","nrMedida": 0.5,"dsMedida": "unidade"},
        {"id": 96,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 40,"unidade": "g","nrMedida": 2,"dsMedida": "col (sobremesa)"},
        {"id": 97,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 40,"unidade": "g","nrMedida": 2,"dsMedida": "fatias médias"},
        {"id": 98,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 40,"unidade": "g","nrMedida": 2,"dsMedida": "fatias médias"},
        {"id": 99,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 40,"unidade": "g","nrMedida": 2,"dsMedida": "unidades"},
        {"id": 100,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 50,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de sopa"},
        {"id": 101,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 40,"unidade": "g","nrMedida": 2,"dsMedida": "col (sobremesa) cheia"},
        {"id": 102,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 30,"unidade": "g","nrMedida": 1,"dsMedida": "fatia média"},
        {"id": 103,"dsCategoria": "Leite e derivados","dsProduto":"Lentilha","nrGrama": 35,"unidade": "g","nrMedida": 2,"dsMedida": "col (sobremesa) rasa"},

        {"id": 104,"dsCategoria": "Carnes","dsProduto":"Almondegas assada","nrGrama": 60,"unidade": "g","nrMedida": 2,"dsMedida": "unidades pequenas"},
        {"id": 105,"dsCategoria": "Carnes","dsProduto":"Atum ao natural (em conserva de água)","nrGrama": 80,"unidade": "g","nrMedida": 4,"dsMedida": "colheres de sopa"},
        {"id": 106,"dsCategoria": "Carnes","dsProduto":"Bacalhau cozido ou assado","nrGrama": 100,"unidade": "g","nrMedida": 1,"dsMedida": "posta média"},
        {"id": 107,"dsCategoria": "Carnes","dsProduto":"Bife grelhado","nrGrama": 60,"unidade": "g","nrMedida": 1,"dsMedida": "unidade pequena"},
        {"id": 108,"dsCategoria": "Carnes","dsProduto":"Caranguejo cozido","nrGrama": 110,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de servir (rasa)"},
        {"id": 109,"dsCategoria": "Carnes","dsProduto":"Carne assada s/ gordura","nrGrama": 70,"unidade": "g","nrMedida": 1,"dsMedida": "fatia pequena"},
        {"id": 110,"dsCategoria": "Carnes","dsProduto":"Carne moída magra","nrGrama": 60,"unidade": "g","nrMedida": 1,"dsMedida": "colheres de servir"},
        {"id": 111,"dsCategoria": "Carnes","dsProduto":"Coração de frango cozido","nrGrama": 120,"unidade": "g","nrMedida": 15,"dsMedida": "unidades grandes"},
        {"id": 112,"dsCategoria": "Carnes","dsProduto":"Filé de peixe cru","nrGrama": 110,"unidade": "g","nrMedida": 1,"dsMedida": "filé grande"},
        {"id": 113,"dsCategoria": "Carnes","dsProduto":"Frango assado s/ pele","nrGrama": 65,"unidade": "g","nrMedida": 1,"dsMedida": "peito pequeno"},
        {"id": 114,"dsCategoria": "Carnes","dsProduto":"Frango desfiado s/ pele","nrGrama": 65,"unidade": "g","nrMedida": 1,"dsMedida": "colher de servir"},
        {"id": 115,"dsCategoria": "Carnes","dsProduto":"Frango grelhado s/ pele","nrGrama": 65,"unidade": "g","nrMedida": 1,"dsMedida": "filé médio"},
        {"id": 116,"dsCategoria": "Carnes","dsProduto":"Fricassé de frango c/ ricota ou req.light","nrGrama": 65,"unidade": "g","nrMedida": 1,"dsMedida": "colher de servir"},
        {"id": 117,"dsCategoria": "Carnes","dsProduto":"Hamburguer caseiro magro","nrGrama": 60,"unidade": "g","nrMedida": 1,"dsMedida": "unidade pequena"},
        {"id": 118,"dsCategoria": "Carnes","dsProduto":"Lagarto cozido s/ gordura","nrGrama": 65,"unidade": "g","nrMedida": 1,"dsMedida": "fatia média"},
        {"id": 119,"dsCategoria": "Carnes","dsProduto":"Lombo de peixe assado","nrGrama": 80,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de servir (rasa)"},
        {"id": 120,"dsCategoria": "Carnes","dsProduto":"Lombo de porco assado","nrGrama": 60,"unidade": "g","nrMedida": 1,"dsMedida": "fatia média"},
        {"id": 121,"dsCategoria": "Carnes","dsProduto":"Moela de frango cozida","nrGrama": 150,"unidade": "g","nrMedida": 10,"dsMedida": "unidades"},
        {"id": 122,"dsCategoria": "Carnes","dsProduto":"Ovo de codorna cozido","nrGrama": 155,"unidade": "g","nrMedida": 17,"dsMedida": "unidades"},
        {"id": 123,"dsCategoria": "Carnes","dsProduto":"Ovo de galinha cozido","nrGrama": 145,"unidade": "g","nrMedida": 3,"dsMedida": "unidades"},
        {"id": 124,"dsCategoria": "Carnes","dsProduto":"Picadinho de peixe cru","nrGrama": 110,"unidade": "g","nrMedida": 2,"dsMedida": "colheres de servir (rasa)"},
        {"id": 125,"dsCategoria": "Carnes","dsProduto":"Presunto de peru","nrGrama": 112,"unidade": "g","nrMedida": 4,"dsMedida": "fatias"},
        {"id": 126,"dsCategoria": "Carnes","dsProduto":"Proteína texturizada de soja (desidratada)","nrGrama": 40,"unidade": "g","nrMedida": 0.5,"dsMedida": "xícara de chá"},
        {"id": 127,"dsCategoria": "Carnes","dsProduto":"Quibe assado","nrGrama": 150,"unidade": "g","nrMedida": 5,"dsMedida": "unidadades"},
        {"id": 128,"dsCategoria": "Carnes","dsProduto":"Salmão assado","nrGrama": 85,"unidade": "g","nrMedida": 1,"dsMedida": "filé pequeno"},
        {"id": 129,"dsCategoria": "Carnes","dsProduto":"Sashimi (peixe cru)","nrGrama": 85,"unidade": "g","nrMedida": 7,"dsMedida": "fatias"},
        
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Amêndoa","nrGrama": 2,"unidade": "g","nrMedida": 2,"dsMedida": "unidades"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Amendoim s/ sal","nrGrama": 2,"unidade": "g","nrMedida": 2,"dsMedida": "unidades"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Avelã","nrGrama": 2,"unidade": "g","nrMedida": 2,"dsMedida": "unidades"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Castanha de cajú s/ sal","nrGrama": 3,"unidade": "g","nrMedida": 2,"dsMedida": "unidades"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Castanha do Brasil s/ sal","nrGrama": 4,"unidade": "g","nrMedida": 1,"dsMedida": "unidade"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Gergelim","nrGrama": 3,"unidade": "g","nrMedida": 1,"dsMedida": "colher de chá (cheia)"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Macadamia","nrGrama": 2,"unidade": "g","nrMedida": 2,"dsMedida": "unidades"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Noz","nrGrama": 3,"unidade": "g","nrMedida": 2,"dsMedida": "unidades"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Pasta de castanha s/ açúcar","nrGrama": 5,"unidade": "g","nrMedida": 1,"dsMedida": "col (chá)"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Pistache s/ sal","nrGrama": 2,"unidade": "g","nrMedida": 3,"dsMedida": "unidades"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Semente de chia","nrGrama": 3,"unidade": "g","nrMedida": 1,"dsMedida": "colher de chá (cheia)"},
        {"id": 79,"dsCategoria": "Castanhas","dsProduto":"Semente de Linhaça","nrGrama": 3,"unidade": "g","nrMedida": 1,"dsMedida": "colher de chá (cheia)"}
    ];

    let _saveList = (data, key) => {
        let lista = _getList(key);

        data = lista.map(refeicao => {
            if (refeicao.id == data.id) {
                return data;
            }

            return refeicao;
        });

        localStorage.setItem(key, JSON.stringify(data));
    }

    let _getList = (key) => {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    return {
        save: _saveList,
        list: _getList
    }
}]);