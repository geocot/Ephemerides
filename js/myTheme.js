define([
    "dojox/charting/SimpleTheme",
    "dojox/charting/themes/common"
], function(Theme, themes){
     
    themes.Ephemerides = new Theme({
        colors: [
            "#FFD700",
            "#00008B"
          
        ]
    });
    return themes.Ephemerides;
});