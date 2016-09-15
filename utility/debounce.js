var Timer = function(dely){
    this.tid = undefined;
    this.delay = dely || 5000;
    this.cancel = function(){
        clearTimeout(this.tid);
        this.tid = undefined;
    };
    this.kick = function(fun){
        if(!this.tid){
            this.tid = setTimeout(function(){
                this.cancel();
                if(typeof fun === 'function')   
                    fun();
            }.bind(this), this.delay);
        }
        else{
            this.cancel();
            this.kick();
        }
    };
};