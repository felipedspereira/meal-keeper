angular.module('meal-keeper').factory('MessageService', ['$timeout', '$rootScope', function ($timeout, $rootScope) {

    let _success = (message, delay = 2000) => {
        $rootScope.successMessage = message;
        $timeout(() => {
            $rootScope.successMessage = undefined;
        }, delay);
    }

    let _warning = (message, delay = 2000) => {
        $rootScope.warningMessage = message;
        $timeout(() => {
            $rootScope.warningMessage = undefined;
        }, delay);
    }

    return {
        success: _success,
        warning: _warning
    }
}]);