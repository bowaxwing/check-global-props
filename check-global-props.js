!(function() {
    'use strict';

    var globalProps = Object.getOwnPropertyNames(window);

    window.addEventListener('load', function() {
        function duplicateProperty(propName) {
            return globalProps.indexOf(propName) === -1;
        }

        globalProps = (function() {
            var currentPropList = Object.getOwnPropertyNames(window);

            return currentPropList.filter(duplicateProperty);
        }());

        console.log(globalProps);
    }, false);
}());
