define(function(){

    APP =  !window.APP ? {
      use: function(name, cb) {
        console.log(name + ' is loading');
        window[name] = {
          name: name
        };
        setTimeout(function() {
          cb();
        }, 0);
      }
    } : APP;

    return{
        load : function(name, req, onLoad, config){
            if(config.isBuild){
                onLoad(null); //avoid errors on the optimizer
            }else{
                loadFromCDN(name);
            }
            function loadFromCDN(name) {
              APP.use(name, function() {
                onLoad();
              });
            }
        }
    };
});

