"use strict";function renderData(e){var t='<header><section class="header-scores">';t+='<div><img class="header-scores-logo1eft" src="'+e.teamA.logo+'"/></div>',t+='<div class="game-score"><span><b>'+e.teamA.score+"</b> </span><span><b>:</b></span>",t+=" <span><b>"+e.teamB.score+"</b></span></div> ",t+='<div><img class="header-scores-logoright" src="'+e.teamB.logo+'"/></div>',t+="</section>",t+='<section class="header-teams">',t+='<div class="header-teams-left">'+e.teamA.name+"</div> ",t+='<div class="header-teams-middle"><span>'+e.gameTime+" "+e.gameType+"</span></div> ",t+='<div class="header-teams-right">'+e.teamB.name+'</div> </section> <section class="ProgressBar clearFix"> ';var a=Math.max(50*e.teamA.score,5),s=Math.max(50*e.teamB.score,5);if(t+='<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:'+a+'px"></div></div>',t+='<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:'+s+'px"></div></div> </section>',t+='<section class="supporters"><a href="##" class="sp sp-left" data-id="'+e.dataId+'" data-team="'+e.teamA.teamId+'"><img class="supporters-leftlogo" src="images/matchdetail_ic_support.png"/>',t+='<span class="supporters-leftNumber supp" id="supporters-leftNumber"> '+e.teamA.support_numbber+"</span></a>",t+='<div class="space-holder"></div>',t+='<a href="##" class="sp sp-right" data-id="'+e.dataId+'" data-team="'+e.teamB.teamId+'">',t+='<img class="supporters-rightlogo" src="images/matchdetail_ic_support.png"/><span class="supporters-rightNumber supp"id="supporters-rightNumber">'+e.teamB.support_numbber+"</span></a></section> ",t+="</header>",t+='</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">直播</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">新闻</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">视频</div></a></li></ul><div class="outContainer ">',e.gameContent.length>0){t+='<div class="live" data-id="0">',t+='<section class="game-data clearFix">',t+='<div  class="clearFix" id="roundlist">';var i=e.gameContent.length,l=document.documentElement.clientWidth,r=l/i;$.each(e.gameContent,function(e,a){t+=0===e?'<a href="##" class="roundspan3 on" data-id="'+e+'" style="width:'+r+'px" >'+a.title+"</a>":'<a href="##" class="roundspan3" data-id="'+e+'" style="width:'+r+'px" >'+a.title+"</a>"}),t+="</div>",t+='<div class="data-details">',$.each(e.gameContent,function(e,a){t+=0===e?'<div class="data-content-item">':'<div class="data-content-item" style="display: none">';var s=a.dataList.list;$.each(s,function(e,a){if(0===a.listType){t+='<section class="game-data-select">',t+='<div class="img-left">';var i=a.fieldData[0];$.each(i,function(e,a){t+='<img class="game-data-select-logo1eft" src="'+a+'"/>'}),t+="</div>",t+='<p class="game-data-select-word">'+s[0].fieldName+"</p>";var l=a.fieldData[1];t+='<div class="img-right">',$.each(l,function(e,a){t+='<img class="game-data-select-logo1eft" src="'+a+'"/>'}),t+="</div>",t+=" </section>"}else if(1===a.listType){var r,c,n=parseInt(a.fieldData[0]),d=parseInt(a.fieldData[1]);n+d>100?(r=100*n/(n+d),c=100*d/(n+d)):(r=n,c=d)}}),t+="</div>"}),t+="</div></section>"}else t+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:block;background-color: #ffffff;">';e.relateArticle.length>0?(t+='<section class="live-byword-listbox selected"> <ul>',$.each(e.relateArticle,function(a,s){t+='<li> <div class="innerbox"><div class="live-byword-list clearfix"> ',t+='<a href="##" class="live-byword-listimg"><img src="'+s.avatar+'"/> </a>',t+='<div class="fl live-byword-list-games"> ',t+='<p class="live-byword-list-name">'+s.author+"</p> ",t+='<p class="live-byword-list-time">'+s.round+"<span>&nbsp;"+s.time+"</span></p></div></div> ",t+='<div class="live-byword-list-words"> ',t+="<p>"+s.content+"</p>";var i=e.relateArticle[a];i.images.length>0&&(t+='<div class="clearFix live-byword-list-words-images">',$.each(i.images,function(e,a){t+='<img class="fl" src="'+a+'"/>'}),t+="</div> "),t+="</div></div></li>"}),t+="</ul> </section>",t+="</section></div>"):t+=e.gameContent.length>0?'<section class="live-byword-listbox selected"><p style="text-align: center">当前比赛场次还没有图文直播哦!</p></section></div>':'<section class="live-byword-listbox selected"><p style="text-align: center;">当前比赛场次还没有图文直播哦!</p></section></div>',e.recomendVideos.length>0?(t+='<div class="news" data-id="1">',t+='<section class="list"><ul>',$.each(e.recomendVideos,function(e,a){t+='<li class="clearfix"><a href="##" class="list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'">',t+='<img class="fl" src="'+a.thumbnail+'"/>',t+='<p class="list-title">'+a.title+"</p>",a.tagColor&&a.tagName&&(t+='<span class="list-tag" style="color:'+a.tagColor+";border-color:"+a.tagColor+';">'+a.tagName+"</span>");var s,i=new Date;a.updateTime&&(i=new Date(1e3*a.updateTime)),s=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),t+='<span class="list-time">'+s+"</span>",t+="</a></li> "}),t+=" </ul></section></div>"):t+='<div class="news" data-id="1" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:none;background-color: #ffffff;">暂无新闻数据</div>',e.originSrc&&e.cover?e.relateVideos.length>0&&(t+='<div class="video" data-id="2"> ',t+='<section class="list"> <ul> ',$.each(e.relateVideos,function(e,a){t+='<li class="clearfix"><a href="##" class="list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'"><img class="fl" src="'+a.thumbnail+'"/>',t+='<p class="list-title">'+a.title+"</p> ",a.tagColor&&a.tagName&&(t+='<span class="list-tag" style="color:'+a.tagColor+";border-color:"+a.tagColor+';">'+a.tagName+"</span>");var s,i=new Date;a.updateTime&&(i=new Date(1e3*a.updateTime)),s=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),t+='<span class="list-time">'+s+"</span>",t+="</a></li>"}),t+="</ul></section></div>"):t+='<div class="video" data-id="2" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;display:none;background-color: #ffffff;">暂无视频数据</div>',$("#box").html(t)}var cacheData=null;window.Jn={setCookie:function(e,t,a){var s=new Date;s.setDate(s.getDate()+a),document.cookie=e+"="+t+";expires="+s},getCookie:function(e){for(var t=document.cookie.split("; "),a=0;a<t.length;a++){var s=t[a].split("=");if(s[0]==e)return s[1]}return""}},Jn.setData=function(e){"gameInitDetail"==e.key&&renderData(e.content)},$(function(){$(document).on("click",".live-byword-list-words-images img",function(e){e.preventDefault();var t=$(this).attr("alt");t=t?t:"";try{Jnapp.jn_image($(this).attr("src"),t,"")}catch(e){}}),$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(t){}}),$(document).on("click",".sp-left",function(e){e.preventDefault();var t=$("#supporters-leftNumber"),a=parseInt(t.html()),s=$(this).data("id"),i=$(this).data("team");if(!Jn.getCookie("sp-"+s))try{a++,t.html(a),$(this).find("img").attr("src","images/matchdetail_ic_support_red.png"),Jn.setCookie("sp-"+s,a,365),Jnapp.jn_agree(7,s,i)}catch(e){}}),$(document).on("click",".sp-right",function(e){e.preventDefault();var t=$("#supporters-rightNumber"),a=$(this).data("id"),s=$(this).data("team"),i=parseInt(t.html());if(!Jn.getCookie("sp-"+a))try{i++,t.html(i),$(this).find("img").attr("src","images/matchdetail_ic_support_blue.png"),Jn.setCookie("sp-"+a,i,365),Jnapp.jn_agree(7,a,s)}catch(e){}}),$(document).on("click",".outer .outList",function(e){if(e.preventDefault(),!$(this).hasClass("selected")){var t=$(this).data("id"),a=$(".outContainer");$(this).addClass("selected").siblings().removeClass("selected"),a.children().eq(t)&&a.children().eq(t).show().siblings().hide()}}),$(document).on("click","a.roundspan3",function(e){if(e.preventDefault(),!$(this).hasClass("on")){var t=$(this).data("id");$(this).addClass("on").siblings("a").removeClass("on"),$(".data-details > .data-content-item").eq(t).show().siblings().hide()}}),$(document).on("click",".play-icon",function(){try{Jnapp.jn_related(5,$(this).data("url"))}catch(e){}})});