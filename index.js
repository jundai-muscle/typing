
let typing=new Vue({
    el:'#app',
    data:{
        start:'click to enter',
        untyped:'',
        typed:'',
        remaintime:'00:30:00',
        words:[
            {word:'Hello'},{word:'literature'},{word:'novel'},{word:'judge'},{word:'notice'},
            {word:'check'},{word:'explain'},{word:'imagine'},{word:'expert'},{word:'professor'},
            {word:'extend'},{word:'strain'},{word:'apple'},{word:'orange'},{word:'prevail'},
            {word:'discipline'},{word:'function'},{word:'window'},{word:'neglect'},{word:'voluntary'},
            {word:'vote'},{word:'earn'},{word:'employ'},{word:'deliver'},{word:'spot'},
            {word:'substitute'},{word:'theory'},{word:'thick'},{word:'rescue'},{word:'devote'},
            {word:'issue'},{word:'expand'},{word:'assist'},{word:'vancacy'},{word:'vague'},
            {word:'vain'},{word:'valid'},{word:'vanish'},{word:'vocabulary'},{word:'volume'},
            {word:'ugly'},{word:'ultimately'},{word:'verbal'},{word:'vision'},{word:'back-ground'},
        ],
        time:30000,
        totaltype:'',
        totalcounter:0,
        misstype:'',
        misscounter:0
    },
    created: function(){
        window.addEventListener('keydown',this.inputkey);
    },
    methods:{
        inputkey:function(e){
            //console.log(e);
            let that=this;
            if(e.keyCode===27){
                window.location.reload();
            }
            if (e.key===" " && this.start!==''){
                date=new Date(
                console.log(date);
                this.start='';
                this.untyped='Hello';
                var set = setInterval(function(){
                    that.time-=10;
                    const m=parseInt((that.time/1000)/60);
                    const s=parseInt(((that.time)/1000)%60);
                    const ms=parseInt((that.time%1000)/10);
                    //console.log(ms);
                    that.remaintime=`0${m}:${('00'+s).slice(-2)}:${('00'+ms).slice(-2)}`;
                    //console.log(that.time);
                    if(that.time===0){
                        clearInterval(set);
                        that.totaltype=`総タイピング数${that.totalcounter}`;
                        that.misstype=`ミスタイピング数${that.misscounter}`;
                    }
                },10);

            }
            if (e.key !== this.untyped.substr(0,1)){
                if(e.keyCode>=65 && e.keyCode<=90){
                    this.misscounter++; 
                    this.totalcounter++; 
                }
                else{
                    return;
                }
            }
            else{
                if(e.keyCode>=65 && e.keyCode<=90){this.totalcounter++;}
                this.typed+=this.untyped.substr(0,1);
                this.untyped=this.untyped.substr(1);
            }
            if(this.untyped===''){
                index=Math.floor(Math.random()*Math.floor(this.words.length));
                this.typed='';
                this.untyped=this.words[index].word;
            }

        }
    }
});

