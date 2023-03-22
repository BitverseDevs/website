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
    helper2: function(param1){

    },
    helper3: function(param1, param2){

    }
}

export default helpers;