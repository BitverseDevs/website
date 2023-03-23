const helpers = {
    websiteBreakpoints: function(screenWidth){
        if (screenWidth < 575 && screenWidth < 767){
            return 'BP_1'
        } else if (screenWidth >= 575 && screenWidth < 767){
            return 'BP_2'
        } else if (screenWidth >= 767 && screenWidth < 991){
            return 'BP_3'
        } else if (screenWidth >= 991 && screenWidth < 1200){
            return 'BP_4'
        } else if (screenWidth >= 1200){
            return 'BP_5'
        }
    },
    breakpointRender: function(key){
        const keyProcessor = {
            'BP_1': false,
            'BP_2': false,
            'BP_3': false,
            'BP_4': true,
            'BP_5': true,
            'default': true
        };
        return keyProcessor[key] ?? keyProcessor['default'];
    },
    helper3: function(param1, param2){

    }
}

export default helpers;