angular.module('nutrikeeper').factory('ProdutoService', ['$http', 'PersistenceService', function ($http, PersistenceService) {
    const KEY_PRODUTOS = 'nk-produtos';

    const produtos = [
        { "id": 1, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Amaranto", "nrGrama": 30, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa" },
        { "id": 2, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Ativo fibras", "nrGrama": 40, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa cheia" },
        { "id": 3, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Batata doce cozida", "nrGrama": 110, "unidade": "g", "nrMedida": 3, "dsMedida": "fatias grossas" },
        { "id": 4, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Biscoito de arroz (grande)", "nrGrama": 40, "unidade": "g", "nrMedida": 4, "dsMedida": "unidades grandes" },
        { "id": 5, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Biscoito de arroz ou tapioca/quinoa(peq)", "nrGrama": 40, "unidade": "g", "nrMedida": 17, "dsMedida": "unidades pequenas" },
        { "id": 6, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Biscoito tipo palito s/ gluten Leve Crock", "nrGrama": 25, "unidade": "g", "nrMedida": 20, "dsMedida": "unidades" },
        { "id": 7, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Cará roxo cozido", "nrGrama": 105, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade pequena" },
        { "id": 8, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Cuscuz cozido", "nrGrama": 50, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa" },
        { "id": 9, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Farelo de aveia", "nrGrama": 30, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sobremesa" },
        { "id": 10, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Goma de tapioca", "nrGrama": 40, "unidade": "g", "nrMedida": 3, "dsMedida": "colheres de sopa" },
        { "id": 11, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Granola sem açúcar", "nrGrama": 40, "unidade": "g", "nrMedida": 0.5, "dsMedida": "xícara" },
        { "id": 12, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Macaxeira cozida", "nrGrama": 65, "unidade": "g", "nrMedida": 2, "dsMedida": "fatias" },
        { "id": 13, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Milho cozido", "nrGrama": 20, "unidade": "cm", "nrMedida": 1, "dsMedida": "espiga grande" },
        { "id": 14, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Pão de forma 100% integral Fit", "nrGrama": 50, "unidade": "g", "nrMedida": 2, "dsMedida": "fatias médias" },
        { "id": 15, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Pão de forma integral s/ glúten", "nrGrama": 50, "unidade": "g", "nrMedida": 2, "dsMedida": "fatias médias" },
        { "id": 16, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Pão francês 5 grãos", "nrGrama": 50, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade" },
        { "id": 17, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Pizza de frigideira integral - Massa leve", "nrGrama": 40, "unidade": "g", "nrMedida": 1.5, "dsMedida": "unidade" },
        { "id": 18, "qtdEstoque": "", "dsCategoria": "Pães e Similares", "dsProduto": "Rap 10 Fit ou Integral", "nrGrama": 40, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade" },
        { "id": 19, "qtdEstoque": "", "dsCategoria": "Pães e similares", "dsProduto": "Trato trio ou mix", "nrGrama": 40, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa cheia" },

        { "id": 20, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Abacate", "nrGrama": 160, "unidade": "g", "nrMedida": 1, "dsMedida": "xícara rasa" },
        { "id": 21, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Abacaxi", "nrGrama": 80, "unidade": "g", "nrMedida": 2, "dsMedida": "fatias finas" },
        { "id": 22, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Ameixa vermelha", "nrGrama": 75, "unidade": "g", "nrMedida": 2, "dsMedida": "unidades pequenas s/ caroço" },
        { "id": 23, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Amora", "nrGrama": 100, "unidade": "g", "nrMedida": 10, "dsMedida": "unidades" },
        { "id": 24, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Banana maçã", "nrGrama": 50, "unidade": "g", "nrMedida": 0.5, "dsMedida": "unidade" },
        { "id": 25, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Caju", "nrGrama": 100, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade" },
        { "id": 26, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Cereja", "nrGrama": 70, "unidade": "g", "nrMedida": 7, "dsMedida": "unidades" },
        { "id": 27, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Coco ralado fresco", "nrGrama": 45, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa" },
        { "id": 28, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Cranberry desidratado", "nrGrama": 15, "unidade": "g", "nrMedida": 1, "dsMedida": "colher de sopa cheia" },
        { "id": 29, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Cupuaçu", "nrGrama": 100, "unidade": "g", "nrMedida": 0.25, "dsMedida": "xícara" },
        { "id": 30, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Damasco seco", "nrGrama": 25, "unidade": "g", "nrMedida": 3, "dsMedida": "unidades" },
        { "id": 31, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Frutas vermelhas congeladas", "nrGrama": 125, "unidade": "g", "nrMedida": 4, "dsMedida": "colheres de sopa" },
        { "id": 32, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Goiaba com casca", "nrGrama": 75, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade grande" },
        { "id": 33, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Goji berry desidratado", "nrGrama": 15, "unidade": "g", "nrMedida": 2.5, "dsMedida": "colher de sopa" },
        { "id": 34, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Kiwi", "nrGrama": 85, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade" },
        { "id": 35, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Laranja com bagaço", "nrGrama": 85, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade pequena" },
        { "id": 36, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Limão", "nrGrama": 100, "unidade": "g", "nrMedida": 3, "dsMedida": "unidades grandes" },
        { "id": 37, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Maçã", "nrGrama": 70, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade pequena" },
        { "id": 38, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Mamão papaya", "nrGrama": 100, "unidade": "g", "nrMedida": 2, "dsMedida": "fts finas" },
        { "id": 39, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Manga", "nrGrama": 80, "unidade": "g", "nrMedida": 0.5, "dsMedida": "unidade média" },
        { "id": 40, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Maracujá", "nrGrama": 80, "unidade": "g", "nrMedida": 1, "dsMedida": "xícara rasa da polpa" },
        { "id": 41, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Melancia", "nrGrama": 120, "unidade": "g", "nrMedida": 10, "dsMedida": "cubos" },
        { "id": 42, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Melão (casca amarela)", "nrGrama": 130, "unidade": "g", "nrMedida": 2, "dsMedida": "fatias finas" },
        { "id": 43, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Morango", "nrGrama": 150, "unidade": "g", "nrMedida": 10, "dsMedida": "unidades" },
        { "id": 44, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Pêra", "nrGrama": 70, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade" },
        { "id": 45, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Pêssego", "nrGrama": 100, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade grande" },
        { "id": 46, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Pupunha", "nrGrama": 30, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa" },
        { "id": 47, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Tangerina poncã", "nrGrama": 100, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade" },
        { "id": 48, "qtdEstoque": "", "dsCategoria": "Fruta", "dsProduto": "Tucumã", "nrGrama": 160, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa" },

        { "id": 49, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Abóbora cozida", "nrGrama": 85, "unidade": "g", "nrMedida": 3, "dsMedida": "colheres de sopa (rasa)" },
        { "id": 50, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Abobrinha cozida", "nrGrama": 100, "unidade": "g", "nrMedida": 4, "dsMedida": "colheres de sopa" },
        { "id": 51, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Berinjela cozida", "nrGrama": 100, "unidade": "g", "nrMedida": 4, "dsMedida": "colheres de sopa" },
        { "id": 52, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Brócolis cozido", "nrGrama": 115, "unidade": "g", "nrMedida": 8, "dsMedida": "colheres de sopa" },
        { "id": 53, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Broto de feijão (Moyashi)", "nrGrama": 65, "unidade": "g", "nrMedida": 1, "dsMedida": "xícara" },
        { "id": 54, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Cenoura cozida", "nrGrama": 75, "unidade": "g", "nrMedida": 3, "dsMedida": "colheres de sopa" },
        { "id": 55, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Chuchu cozido", "nrGrama": 100, "unidade": "g", "nrMedida": 4, "dsMedida": "colheres de sopa" },
        { "id": 56, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Couve refogada s/ óleo", "nrGrama": 120, "unidade": "g", "nrMedida": 6, "dsMedida": "colheres de sopa" },
        { "id": 57, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Couve flor cozida", "nrGrama": 130, "unidade": "g", "nrMedida": 9, "dsMedida": "colheres de sopa" },
        { "id": 58, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Espinafre refogado s/ óleo", "nrGrama": 120, "unidade": "g", "nrMedida": 5, "dsMedida": "colheres de sopa" },
        { "id": 59, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Maxixe cru", "nrGrama": 185, "unidade": "g", "nrMedida": 5, "dsMedida": "colheres de sopa" },
        { "id": 60, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Palmito de pupunha cru", "nrGrama": 90, "unidade": "g", "nrMedida": 1.5, "dsMedida": "xícara" },
        { "id": 61, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Pimentão cru", "nrGrama": 90, "unidade": "g", "nrMedida": 4, "dsMedida": "colheres de sopa" },
        { "id": 62, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Repolho refogado s/ óleo", "nrGrama": 65, "unidade": "g", "nrMedida": 4, "dsMedida": "colheres de sopa (rasa)" },
        { "id": 63, "qtdEstoque": "", "dsCategoria": "Vegetal refogado, grelhado ou vapor", "dsProduto": "Vagem crua", "nrGrama": 100, "unidade": "g", "nrMedida": 4, "dsMedida": "colheres de sopa" },

        { "id": 64, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Arroz multigrãos cozido", "nrGrama": 75, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de servir (rasa)" },
        { "id": 65, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Batata doce cozida", "nrGrama": 110, "unidade": "g", "nrMedida": 4, "dsMedida": "fatias médias" },
        { "id": 66, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Espaguete integral cozido", "nrGrama": 75, "unidade": "g", "nrMedida": 1, "dsMedida": "pegador" },
        { "id": 67, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Farofa de soja", "nrGrama": 30, "unidade": "g", "nrMedida": 1, "dsMedida": "colheres de servir" },
        { "id": 68, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Inhame cru", "nrGrama": 85, "unidade": "g", "nrMedida": 3, "dsMedida": "fatias médias" },
        { "id": 69, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Macaxeira cozida", "nrGrama": 65, "unidade": "g", "nrMedida": 2, "dsMedida": "fatias grossas" },
        { "id": 70, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Milho verde cozido/refogado", "nrGrama": 135, "unidade": "g", "nrMedida": 3, "dsMedida": "colheres de servir" },
        { "id": 71, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Purê de batata doce", "nrGrama": 110, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de servir rasa" },
        { "id": 72, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Purê de macaxeira", "nrGrama": 65, "unidade": "g", "nrMedida": 1, "dsMedida": "colheres de servir rasa" },
        { "id": 73, "qtdEstoque": "", "dsCategoria": "Arroz", "dsProduto": "Quinoa em grãos crua", "nrGrama": 30, "unidade": "g", "nrMedida": 0.25, "dsMedida": "xícara" },

        { "id": 74, "qtdEstoque": "", "dsCategoria": "Feijão", "dsProduto": "Ervilha (congelada ou fresca)", "nrGrama": 60, "unidade": "g", "nrMedida": 1, "dsMedida": "colher de servir rasa" },
        { "id": 75, "qtdEstoque": "", "dsCategoria": "Feijão", "dsProduto": "Feijão branco", "nrGrama": 50, "unidade": "g", "nrMedida": 1, "dsMedida": "concha média" },
        { "id": 76, "qtdEstoque": "", "dsCategoria": "Feijão", "dsProduto": "Feijão marrom", "nrGrama": 50, "unidade": "g", "nrMedida": 1, "dsMedida": "concha média" },
        { "id": 77, "qtdEstoque": "", "dsCategoria": "Feijão", "dsProduto": "Feijão preto", "nrGrama": 50, "unidade": "g", "nrMedida": 1, "dsMedida": "concha média" },
        { "id": 78, "qtdEstoque": "", "dsCategoria": "Feijão", "dsProduto": "Grão de bico", "nrGrama": 65, "unidade": "g", "nrMedida": 1, "dsMedida": "concha grande" },
        { "id": 79, "qtdEstoque": "", "dsCategoria": "Feijão", "dsProduto": "Lentilha", "nrGrama": 80, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa" },
        { "id": 80, "qtdEstoque": "", "dsCategoria": "Feijão", "dsProduto": "Homus - Pasta de grão de bico", "nrGrama": 50, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa" },

        { "id": 81, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Bebida de arroz em pó sanavita", "nrGrama": 20, "unidade": "g", "nrMedida": 1, "dsMedida": "medida" },
        { "id": 82, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Bebida de arroz ou aveia líquida Jasmine", "nrGrama": 150, "unidade": "ml", "nrMedida": 1, "dsMedida": "xícara de chá" },
        { "id": 83, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Bebida de castanha-A tal da castanha", "nrGrama": 150, "unidade": "ml", "nrMedida": 1, "dsMedida": "xícara de chá" },
        { "id": 84, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Coalhada Lacfree - Verde Campo", "nrGrama": 180, "unidade": "g", "nrMedida": 1, "dsMedida": "copo pequeno" },
        { "id": 85, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Iogurte c/ fruta Lacfree - Verde Campo", "nrGrama": 180, "unidade": "g", "nrMedida": 1, "dsMedida": "copo pequeno" },
        { "id": 86, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Iogurte Danio natural (sem sabor)", "nrGrama": 62.5, "unidade": "g", "nrMedida": 0.5, "dsMedida": "unidade" },
        { "id": 87, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Iogurte Lacfree - Verde Campo", "nrGrama": 180, "unidade": "g", "nrMedida": 1, "dsMedida": "copo pequeno" },
        { "id": 88, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Iogurte light - Molico", "nrGrama": 180, "unidade": "g", "nrMedida": 1, "dsMedida": "copo pequeno" },
        { "id": 89, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Iogurte Natural Lacfree - Verde Campo", "nrGrama": 180, "unidade": "g", "nrMedida": 1, "dsMedida": "copo pequeno" },
        { "id": 90, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Iogurte zero gordura ou lactose - Activia", "nrGrama": 180, "unidade": "g", "nrMedida": 1, "dsMedida": "copo pequeno" },
        { "id": 91, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Iogurte moo protéico", "nrGrama": 65, "unidade": "g", "nrMedida": 0.5, "dsMedida": "copo pequeno" },
        { "id": 92, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Leite desnatado em pó", "nrGrama": 20, "unidade": "g", "nrMedida": 2, "dsMedida": "col (sobremesa)" },
        { "id": 93, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Leite desnatado líquido", "nrGrama": 150, "unidade": "ml", "nrMedida": 1, "dsMedida": "xícara de chá" },
        { "id": 94, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Mini queijo Babybel light", "nrGrama": 20, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade" },
        { "id": 95, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Natural Whey - Verde Campo", "nrGrama": 125, "unidade": "g", "nrMedida": 0.5, "dsMedida": "unidade" },
        { "id": 96, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Queijo árabe Chancliche", "nrGrama": 40, "unidade": "g", "nrMedida": 2, "dsMedida": "col (sobremesa)" },
        { "id": 97, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Queijo frescal ou minas de búfala", "nrGrama": 40, "unidade": "g", "nrMedida": 2, "dsMedida": "fatias médias" },
        { "id": 98, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Queijo minas", "nrGrama": 40, "unidade": "g", "nrMedida": 2, "dsMedida": "fatias médias" },
        { "id": 99, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Queijo polenguinho light", "nrGrama": 40, "unidade": "g", "nrMedida": 2, "dsMedida": "unidades" },
        { "id": 100, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Queijo tipo cottage", "nrGrama": 50, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de sopa" },
        { "id": 101, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Queijo tipo ricota", "nrGrama": 40, "unidade": "g", "nrMedida": 2, "dsMedida": "col (sobremesa) cheia" },
        { "id": 102, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Queijo tofu", "nrGrama": 30, "unidade": "g", "nrMedida": 1, "dsMedida": "fatia média" },
        { "id": 103, "qtdEstoque": "", "dsCategoria": "Leite e derivados", "dsProduto": "Requeijão light", "nrGrama": 35, "unidade": "g", "nrMedida": 2, "dsMedida": "col (sobremesa) rasa" },

        { "id": 104, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Almondegas assada", "nrGrama": 60, "unidade": "g", "nrMedida": 2, "dsMedida": "unidades pequenas" },
        { "id": 105, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Atum ao natural (em conserva de água)", "nrGrama": 80, "unidade": "g", "nrMedida": 4, "dsMedida": "colheres de sopa" },
        { "id": 106, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Bacalhau cozido ou assado", "nrGrama": 100, "unidade": "g", "nrMedida": 1, "dsMedida": "posta média" },
        { "id": 107, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Bife grelhado", "nrGrama": 60, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade pequena" },
        { "id": 108, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Caranguejo cozido", "nrGrama": 110, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de servir (rasa)" },
        { "id": 109, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Carne assada s/ gordura", "nrGrama": 70, "unidade": "g", "nrMedida": 1, "dsMedida": "fatia pequena" },
        { "id": 110, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Carne moída magra", "nrGrama": 60, "unidade": "g", "nrMedida": 1, "dsMedida": "colheres de servir" },
        { "id": 111, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Coração de frango cozido", "nrGrama": 120, "unidade": "g", "nrMedida": 15, "dsMedida": "unidades grandes" },
        { "id": 112, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Filé de peixe cru", "nrGrama": 110, "unidade": "g", "nrMedida": 1, "dsMedida": "filé grande" },
        { "id": 113, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Frango assado s/ pele", "nrGrama": 65, "unidade": "g", "nrMedida": 1, "dsMedida": "peito pequeno" },
        { "id": 114, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Frango desfiado s/ pele", "nrGrama": 65, "unidade": "g", "nrMedida": 1, "dsMedida": "colher de servir" },
        { "id": 115, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Frango grelhado s/ pele", "nrGrama": 65, "unidade": "g", "nrMedida": 1, "dsMedida": "filé médio" },
        { "id": 116, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Fricassé de frango c/ ricota ou req.light", "nrGrama": 65, "unidade": "g", "nrMedida": 1, "dsMedida": "colher de servir" },
        { "id": 117, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Hamburguer caseiro magro", "nrGrama": 60, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade pequena" },
        { "id": 118, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Lagarto cozido s/ gordura", "nrGrama": 65, "unidade": "g", "nrMedida": 1, "dsMedida": "fatia média" },
        { "id": 119, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Lombo de peixe assado", "nrGrama": 80, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de servir (rasa)" },
        { "id": 120, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Lombo de porco assado", "nrGrama": 60, "unidade": "g", "nrMedida": 1, "dsMedida": "fatia média" },
        { "id": 121, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Moela de frango cozida", "nrGrama": 150, "unidade": "g", "nrMedida": 10, "dsMedida": "unidades" },
        { "id": 122, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Ovo de codorna cozido", "nrGrama": 155, "unidade": "g", "nrMedida": 17, "dsMedida": "unidades" },
        { "id": 123, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Ovo de galinha cozido", "nrGrama": 145, "unidade": "g", "nrMedida": 3, "dsMedida": "unidades" },
        { "id": 124, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Picadinho de peixe cru", "nrGrama": 110, "unidade": "g", "nrMedida": 2, "dsMedida": "colheres de servir (rasa)" },
        { "id": 125, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Presunto de peru", "nrGrama": 112, "unidade": "g", "nrMedida": 4, "dsMedida": "fatias" },
        { "id": 126, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Proteína texturizada de soja (desidratada)", "nrGrama": 40, "unidade": "g", "nrMedida": 0.5, "dsMedida": "xícara de chá" },
        { "id": 127, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Quibe assado", "nrGrama": 150, "unidade": "g", "nrMedida": 5, "dsMedida": "unidadades" },
        { "id": 128, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Salmão assado", "nrGrama": 85, "unidade": "g", "nrMedida": 1, "dsMedida": "filé pequeno" },
        { "id": 129, "qtdEstoque": "", "dsCategoria": "Carnes", "dsProduto": "Sashimi (peixe cru)", "nrGrama": 85, "unidade": "g", "nrMedida": 7, "dsMedida": "fatias" },

        { "id": 130, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Amêndoa", "nrGrama": 2, "unidade": "g", "nrMedida": 2, "dsMedida": "unidades" },
        { "id": 131, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Amendoim s/ sal", "nrGrama": 2, "unidade": "g", "nrMedida": 2, "dsMedida": "unidades" },
        { "id": 132, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Avelã", "nrGrama": 2, "unidade": "g", "nrMedida": 2, "dsMedida": "unidades" },
        { "id": 133, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Castanha de cajú s/ sal", "nrGrama": 3, "unidade": "g", "nrMedida": 2, "dsMedida": "unidades" },
        { "id": 134, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Castanha do Brasil s/ sal", "nrGrama": 4, "unidade": "g", "nrMedida": 1, "dsMedida": "unidade" },
        { "id": 135, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Gergelim", "nrGrama": 3, "unidade": "g", "nrMedida": 1, "dsMedida": "colher de chá (cheia)" },
        { "id": 136, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Macadamia", "nrGrama": 2, "unidade": "g", "nrMedida": 2, "dsMedida": "unidades" },
        { "id": 137, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Noz", "nrGrama": 3, "unidade": "g", "nrMedida": 2, "dsMedida": "unidades" },
        { "id": 138, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Pasta de castanha s/ açúcar", "nrGrama": 5, "unidade": "g", "nrMedida": 1, "dsMedida": "col (chá)" },
        { "id": 139, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Pistache s/ sal", "nrGrama": 2, "unidade": "g", "nrMedida": 3, "dsMedida": "unidades" },
        { "id": 140, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Semente de chia", "nrGrama": 3, "unidade": "g", "nrMedida": 1, "dsMedida": "colher de chá (cheia)" },
        { "id": 141, "qtdEstoque": "", "dsCategoria": "Castanhas", "dsProduto": "Semente de Linhaça", "nrGrama": 3, "unidade": "g", "nrMedida": 1, "dsMedida": "colher de chá (cheia)" }
    ];

    let produtosSelecionados = null;

    let _getProduto = (idProduto) => {
        let produtosList = PersistenceService.list(KEY_PRODUTOS);
        produtoSelecionado = produtosList.find(produto => {
            return produto.id == idProduto;
        });
        return produtoSelecionado;
    };

    let _getProdutos = (dsCategoria) => {
        let produtosList = PersistenceService.list(KEY_PRODUTOS);
        produtosSelecionados = produtosList.filter(produto => {
            return produto.dsCategoria == dsCategoria;
        });
        return produtosSelecionados;
    };

    let _listProdutos = () => {
        let produtosList = PersistenceService.list(KEY_PRODUTOS);
        produtosList.sort(SortByDsProduto);
        return produtosList;
    };

    function SortByDsProduto(x, y) {
        return ((x.dsProduto == y.dsProduto) ? 0 : ((x.dsProduto > y.dsProduto) ? 1 : -1));
    }

    let _initDatabase = () => {
        console.log('inicializando o banco de produtos');

        let produtosList = PersistenceService.list(KEY_PRODUTOS);
        if (!(produtosList.length > 0)) {
            PersistenceService.initDb(produtos, KEY_PRODUTOS);
        }
    };

    let _atualizaEstoque = (produto) => {
        let produtosList = PersistenceService.list(KEY_PRODUTOS);
        produtoSelecionado = produtosList.find(filter => {
            return filter.id == produto.id;
        });

       produtoSelecionado = produto;

       PersistenceService.save(produtoSelecionado, KEY_PRODUTOS);
    }

    _initDatabase();

    return {
        getProduto: _getProduto,
        getProdutos: _getProdutos,
        listProdutos: _listProdutos,
        atualizaEstoque: _atualizaEstoque
    }
}]);