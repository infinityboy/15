"use strict";function renderData(a){var s=$(".wrap"),i="<section>";i+='<div class="popular-bg">',i+='<div class="mask">',i+='<div class="sale-describe">',i+='<div class="sale-left">',i+="<p>本期排行:"+a.period+"</p></div>",i+='<div class="sale-right">',i+='<p>距本期结束还有<em class="sale-time-describe">'+a.timeleft+"</em>天</p>",i+="<p>榜单每五分钟刷新一次</p></div></div>",i+='<div class="most-popular-players">',i+='<div class="popular-box" data-id="'+a.list[1].dataId+'" data-type="'+a.list[1].articleType+'">',i+='<div class="player-img"><img src="'+a.list[1].thumbnail+'" alt=""/></div>',i+='<div class="player-sec-box">',i+='<div class="player-sec-icon"><img src="images/Second_2x.png.png" alt=""/></div>',i+='<span class="player-pact">'+a.list[1].sname+"</span>",i+="<span>"+a.list[1].goods+"</span></div></div>",i+='<div class="popular-box first" data-id="'+a.list[0].dataId+'" data-type="'+a.list[0].articleType+'">',i+='<div class="player-img-first"><img src="'+a.list[0].thumbnail+'" alt=""/></div>',i+='<div class="player-sec-box">',i+='<div class="player-sec-icon"><img src="images/first_2x.png.png" alt=""/></div>',i+='<span class="player-pact">'+a.list[0].sname+"</span>",i+="<span>"+a.list[0].goods+"</span></div></div>",i+='<div class="popular-box" data-id="'+a.list[2].dataId+'" data-type="'+a.list[2].articleType+'">',i+='<div class="player-img"><img src="'+a.list[2].thumbnail+'" alt=""/></div>',i+='<div class="player-sec-box">',i+='<div class="player-sec-icon"><img src="images/Third_2x.png.png" alt=""/></div>',i+='<span class="player-pact">'+a.list[2].sname+"</span>",i+="<span>"+a.list[2].goods+"</span>",i+="</div></div></div></div></div></section>",i+='<section class="popular-players" >',a.list.length>0&&$.each(a.list,function(a,s){if(9>a)var l="0"+s.ranking;else l=s.ranking;a>=3&&(i+='<a class="popular-skip" data-id="'+s.dataId+'" data-type="'+s.articleType+'">',i+='<div class="popular-players-list">',i+='<div class="rank" ><span>'+l+"</span></div>",i+='<div class="rank-head"><img src="'+s.thumbnail+'" alt=""/></div>',i+='<div class="players-list-pact"><span>'+s.sname+"</span></div>",i+='<div class="grades"><span>'+s.goods+"</span></div></div></a>")}),i+="</section>",s.html(i)}window.Jn={},Jn.setData=function(a){"popularPlayer"==a.key?renderData(a.content):"popularTeam"==a.key&&renderData(a.content)},$(function(){$(document).on("click",".popular-box",function(a){a.preventDefault();try{var s,i=$(this).data("id"),l=$(this).data("type");13==l?s="player":14==l&&(s="team"),console.log(s,i),Jnapp.jn_openPage(s,i+"")}catch(a){}}),$(document).on("click",".popular-players a",function(a){a.preventDefault();try{var s,i=$(this).data("id"),l=$(this).data("type");13==l?s="player":14==l&&(s="team"),console.log(s,i),Jnapp.jn_openPage(s,i+"")}catch(a){}})});