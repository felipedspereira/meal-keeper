angular.module('nutrikeeper').factory('PersistenceService', [function () {

    let _initDb = (data, key) => {
        localStorage.setItem(key, JSON.stringify(data));
    }

    let _save = (data, key) => {
        let lista = _getList(key);

        data = lista.map(filter => {
            if (filter.id == data.id) {
                return data;
            }

            return filter;
        });

        localStorage.setItem(key, JSON.stringify(data));
    }

    let _getList = (key) => {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    return {
        save: _save,
        list: _getList,
        initDb: _initDb
    }
}]);