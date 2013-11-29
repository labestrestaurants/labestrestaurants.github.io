YUI_config = {
    useBrowserConsole: true,
    filter: 'min',
    logExclude: {
    },
    debug: true,
    groups:{ 
        xstorm: {
                
        	filter:'min',
            combine: false,
            ext: false,
            base: 'build/',
            patterns: {
                'labr-': {}
            },
            logInclude: {
            }
        }
        
    },
    lang: 'es-VE',
};

