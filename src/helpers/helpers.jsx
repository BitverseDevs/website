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
    breakpointRender: function(key, opt){
        //Single Value Customize Value TODO: Convert to accepting multiple customization
        const nullCheckVal = opt ? Object.values(opt) : '';
        const nullCheckKey = opt ? Object.keys(opt) : 'default';
        const optProcessor = {
            'BP_1': nullCheckVal,
            'BP_2': nullCheckVal,
            'BP_3': nullCheckVal,
            'BP_4': nullCheckVal,
            'BP_5': nullCheckVal,
            'default': null,
        };
        const keyProcessor = {
            'BP_1': nullCheckKey.toString() === 'BP_1' ? (optProcessor[nullCheckKey] ?? false) : false,
            'BP_2': nullCheckKey.toString() === 'BP_2' ? (optProcessor[nullCheckKey] ?? false) : false,
            'BP_3': nullCheckKey.toString() === 'BP_3' ? (optProcessor[nullCheckKey] ?? false) : false,
            'BP_4': nullCheckKey.toString() === 'BP_4' ? (optProcessor[nullCheckKey] ?? true) : true,
            'BP_5': nullCheckKey.toString() === 'BP_5' ? (optProcessor[nullCheckKey] ?? true) : true,
            'default': true
        };
        return keyProcessor[key] ?? keyProcessor['default'];
    },
    helper3: function(param1, param2){

    }
}

export default helpers;