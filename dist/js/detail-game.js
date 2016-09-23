"use strict";function renderData(e){var s='<header><section class="header-scores">';s+='<div><img class="header-scores-logo1eft" src="'+e.teamA.logo+'"/></div>',s+='<div class="game-score"><span><b>'+e.teamA.score+"</b> </span><span><b>:</b></span>",s+=" <span><b>"+e.teamB.score+"</b></span></div> ",s+='<div><img class="header-scores-logoright" src="'+e.teamB.logo+'"/></div>',s+="</section>",s+='<section class="header-teams">',s+='<div class="header-teams-left">'+e.teamA.name+"</div> ",s+='<div class="header-teams-middle"><span>'+e.gameTime+" "+e.gameType+"</span></div> ",s+='<div class="header-teams-right">'+e.teamB.name+'</div> </section> <section class="ProgressBar clearFix"> ';var a=Math.max(e.teamA.support_numbber,e.teamB.support_numbber),t=Math.max(e.teamA.support_numbber/a*80,5),i=Math.max(e.teamB.support_numbber/a*80,5);s+='<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:'+t+'%"></div></div>',s+='<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:'+i+'%"></div></div> </section>',s+='<section class="supporters"><a href="##" class="sp sp-left" data-id="'+e.dataId+'" data-team="'+e.teamA.teamId+'"><img class="supporters-leftlogo" src="images/matchdetail_ic_support.png"/>',s+='<span class="supporters-leftNumber supp" id="supporters-leftNumber"> '+e.teamA.support_numbber+"</span></a>",s+='<div class="space-holder"></div>',s+='<a href="##" class="sp sp-right" data-id="'+e.dataId+'" data-team="'+e.teamB.teamId+'">',s+='<img class="supporters-rightlogo" src="images/matchdetail_ic_support.png"/><span class="supporters-rightNumber supp" id="supporters-rightNumber">'+e.teamB.support_numbber+"</span></a></section> ",s+="</header>","1"==e.state?(s+='<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">讨论</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">',s+='<div class="live" data-id="0">',s+='<p class="live-tip">请选择直播平台</p>',s+='<section class="live-list clearfix">',s+='<div class="live-wrap">',$.each(e.originSrc,function(e,a){s+='<div class="deck select"><a href="###" data-url="'+a.link+'"><div class="deck-item">',s+='<div class="deck-img"><img src="'+a.logo+'" alt=""/></div>',s+='<span class="live-button">观看直播</span></div></a></div>'}),s+="</div></section></div>"):"3"==e.state?(s+='<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">讨论</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">',s+='<div class="live" data-id="0">',s+='<p class="live-tip">请选择直播平台</p>',s+='<section class="live-list clearfix">',s+='<div class="live-wrap">',$.each(e.originSrc,function(e,a){s+='<div class="deck no-select">',s+='<a href="###">',s+='<div class="deck-img"><img src="'+a.logo+'" alt=""/></div>',s+='<span class="live-button">即将开始</span>',s+="</a></div>"}),s+="</div></section></div>"):"2"==e.state?(s+='<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">视频</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">讨论</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">',e.relateVideos.length>0?(s+='<div class="live" data-id="0">',s+='<section class="list"><ul> ',$.each(e.relateVideos,function(e,a){s+='<li class="clearfix"><a href="##" class="list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'"><img class="fl" src="'+a.thumbnail+'"/>',s+='<p class="list-title">'+a.title+"</p> ",a.tagColor&&a.tagName&&(s+='<span class="list-tag" style="color:'+a.tagColor+";border-color:"+a.tagColor+';">'+a.tagName+"</span>");var t,i=new Date;a.updateTime&&(i=new Date(1e3*a.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),s+='<span class="list-time">'+t+"</span>",s+="</a></li>"}),s+="</ul></section></div>"):s+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;background-color: #ffffff;">暂无视频数据</div>'):s+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:block;background-color: #ffffff;">',sourceId=e.changyanSid,sourceTitle=e.title;try{Jnapp.jn_getComment(sourceId,sourceTitle)}catch(r){}s+='<div class="reviews" data-id="1">',s+="</div>",e.recomendVideos.length>0?(s+='<div class="news" data-id="2">',s+='<section class="list"><ul>',$.each(e.recomendVideos,function(e,a){s+='<li class="clearfix"><a href="##" class="list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'">',s+='<img class="fl" src="'+a.thumbnail+'"/>',s+='<p class="list-title">'+a.title+"</p>",a.tagColor&&a.tagName&&(s+='<span class="list-tag" style="color:'+a.tagColor+";border-color:"+a.tagColor+';">'+a.tagName+"</span>");var t,i=new Date;a.updateTime&&(i=new Date(1e3*a.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),s+='<span class="list-time">'+t+"</span>",s+="</a></li> "}),s+=" </ul></section></div></div>"):s+='<div class="news" data-id="1" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;background-color: #ffffff;">暂无新闻数据</div>',$("#box").html(s)}function renderReviews(e,s){function a(e){var s=6e4,a=60*s,t=24*a,r=(new Date).getTime(),l=r-e;if(!(0>l)){var c=l/t,n=l/a,d=l/s;return i=c>=1?""+parseInt(c)+"天前":n>=1?""+parseInt(n)+"小时前":d>=1?""+parseInt(d)+"分钟前":"刚刚"}}var t,i,r=$(".new-reciews");if(topicId=e.topic_id,allpage=e.cmt_sum/30,0===parseInt(s)&&(e.hots&&e.hots.length>0||e.comments&&e.comments.length>0?(t="<div>",e.hots&&e.hots.length>0&&(t+='<section class="hot-reviews">',a(e.hots.create_time),t+='<div class="reviews-title"><span>热门讨论</span></div>',$.each(e.hots,function(e,s){t+='<div class="reviews-box">',t+='<div class="reviews-header"><img src="'+s.passport.img_url+'" alt=""/></div>',t+='<div class="reviews-right">',t+='<span class="reviews-name">'+s.passport.nickname+"</span>",t+='<span class="reviews-time">'+i+"</span>",t+='<p class="reviews-content">'+s.content+"</p></div></div>"}),t+="</section>"),a(e.comments.create_time),t+='<section class="new-reciews">',t+='<div class="reviews-title"><span>最新讨论</span></div>',$.each(e.comments,function(e,s){t+='<div class="reviews-box">',t+='<div class="reviews-header"><img src="'+s.passport.img_url+'" alt=""/></div>',t+='<div class="reviews-right">',t+='<span class="reviews-name">'+s.passport.nickname+"</span>",t+='<span class="reviews-time">'+i+"</span>",t+='<p class="reviews-content">'+s.content+"</p></div></div>"}),t+="</section>",t+="</div>",$(".reviews").html(t)):$(".reviews").html('<div style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;background-color: #ffffff;">暂无讨论数据</div>')),1===parseInt(s)){var l="<div>";a(e.comments.create_time),$.each(e.comments,function(e,s){l+='<div class="reviews-box">',l+='<div class="reviews-header"><img src="'+s.passport.img_url+'" alt=""/></div>',l+='<div class="reviews-right">',l+='<span class="reviews-name">'+s.passport.nickname+"</span>",l+='<span class="reviews-time    ">'+i+"</span>",l+='<p class="reviews-content">'+s.content+"</p></div></div>",l+='<span class="reviews-name">'+s.passport.nickname+"</span>",l+='<span class="reviews-time">'+i+"</span>",l+='<p class="reviews-content">'+s.content+"</p></div></div>"}),l+="</div>",r.append(l)}}var cacheData=null,sourceId,sourceTitle,topicId,allpage,load=!1,pageTitle,isLoading=!1;window.Jn={setCookie:function(e,s,a){var t=new Date;t.setDate(t.getDate()+a),document.cookie=e+"="+s+";expires="+t},getCookie:function(e){for(var s=document.cookie.split("; "),a=0;a<s.length;a++){var t=s[a].split("=");if(t[0]==e)return t[1]}return""}},Jn.setData=function(e){"gameInitDetail"==e.key&&renderData(e.content)},Jn.addComment=function(e){isLoading=!1,"10000"==e.code&&renderReviews(e.data,e.type)},Jn.refreshComment=function(){load&&"讨论"==pageTitle&&!isLoading&&(isLoading=!0,Jnapp.jn_getComment(sourceId,sourceTitle))},$(function(){$(document).on("click",".deck>a",function(e){e.preventDefault();var s=$(this).data("url");try{$(this).addClass("selected"),$(this).parent().addClass("selected").siblings(".deck").removeClass("selected"),Jnapp.jn_related(5,s+"")}catch(e){}}),$(document).on("click",".live-byword-list-words-images img",function(e){e.preventDefault();var s=$(this).attr("alt");s=s?s:"";try{Jnapp.jn_image($(this).attr("src"),s,"")}catch(e){}}),$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(s){}}),$(document).on("click",".sp-left",function(e){e.preventDefault();var s=$("#supporters-leftNumber"),a=s.text(),t=$(this).data("id"),i=$(this).data("team");try{if(Jnapp.jn_getData("sp-"+t))return void window.alert("你已经支持过啦!");a++,s.html(a),$(this).find("img").attr("src","images/matchdetail_ic_support_red.png"),Jnapp.jn_setData("sp-"+t,a+""),Jnapp.jn_agree(7,t+"",i+"")}catch(e){}}),$(document).on("click",".sp-right",function(e){e.preventDefault();var s=$("#supporters-rightNumber"),a=$(this).data("id"),t=$(this).data("team"),i=s.text();try{if(Jnapp.jn_getData("sp-"+a))return void window.alert("你已经支持过啦!");i++,s.html(i),$(this).find("img").attr("src","images/matchdetail_ic_support_blue.png"),Jnapp.jn_setData("sp-"+a,i+""),Jnapp.jn_agree(7,a+"",t+"")}catch(e){}}),$(document).on("click",".outList a",function(e){e.preventDefault();var s=1;if(pageTitle=$(this).text(),!$(this).hasClass("selected")){var a=$(this).parent().data("id"),t=$(".outContainer");$(this).parent().addClass("selected").siblings().removeClass("selected"),t.children().eq(a)&&t.children().eq(a).show().siblings().hide()}"讨论"==pageTitle&&(load=!0),$(document).on("scroll",function(e){e.preventDefault();var a=$(window).scrollTop(),t=$(document).height(),i=$(window).height(),r=a+i;if(r>=t&&(s++,allpage>=s))try{load&&"讨论"==pageTitle&&!isLoading&&(isLoading=!0,Jnapp.jn_getMoreComment(sourceId+"",s+"","30",topicId+""))}catch(e){}})}),$(document).on("click",".play-icon",function(){try{Jnapp.jn_related(5,$(this).data("url"))}catch(e){}})});