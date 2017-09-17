angular.module('nutrikeeper').factory('PersistenceService', [function () {

    let _initDb = (data, key) => {
        localStorage.setItem(key, JSON.stringify(data));
    }

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
        list: _getList,
        initDb: _initDb
    }
}]);