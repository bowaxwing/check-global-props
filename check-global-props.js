var globalProps = Object.getOwnPropertyNames(window);

window.addEventListener('load', function() {
    function getGlobalProperty() {
        var currentPropList = Object.getOwnPropertyNames(window);

        return currentPropList.filter(duplicateProperty);
    }

    function duplicateProperty(propName) {
        return globalProps.indexOf(propName) === -1;
    }
    console.log(getGlobalProperty());
}, false);
