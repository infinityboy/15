"use strict";function renderData(e){var s='<header><section class="header-scores">';s+='<div><img class="header-scores-logo1eft" src="'+e.teamA.logo+'"/></div>',s+='<div class="game-score"><span><b>'+e.teamA.score+"</b> </span><span><b>:</b></span>",s+=" <span><b>"+e.teamB.score+"</b></span></div> ",s+='<div><img class="header-scores-logoright" src="'+e.teamB.logo+'"/></div>',s+="</section>",s+='<section class="header-teams">',s+='<div class="header-teams-left">'+e.teamA.name+"</div> ",s+='<div class="header-teams-middle"><span>'+e.gameTime+" "+e.gameType+"</span></div> ",s+='<div class="header-teams-right">'+e.teamB.name+'</div> </section> <section class="ProgressBar clearFix"> ';var a=Math.max(50*e.teamA.score,5),t=Math.max(50*e.teamB.score,5);s+='<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:'+a+'px"></div></div>',s+='<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:'+t+'px"></div></div> </section>',s+='<section class="supporters"><a href="##" class="sp sp-left" data-id="'+e.dataId+'" data-team="'+e.teamA.teamId+'"><img class="supporters-leftlogo" src="images/matchdetail_ic_support.png"/>',s+='<span class="supporters-leftNumber supp" id="supporters-leftNumber"> '+e.teamA.support_numbber+"</span></a>",s+='<div class="space-holder"></div>',s+='<a href="##" class="sp sp-right" data-id="'+e.dataId+'" data-team="'+e.teamB.teamId+'">',s+='<img class="supporters-rightlogo" src="images/matchdetail_ic_support.png"/><span class="supporters-rightNumber supp"id="supporters-rightNumber">'+e.teamB.support_numbber+"</span></a></section> ",s+="</header>","1"==e.state?(s+='</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">直播</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">讨论</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">新闻</div></a></li></ul><div class="outContainer ">',s+='<div class="live" data-id="0">',s+='<p class="live-tip">请选择直播平台</p>',s+='<section class="live-list clearfix">',s+='<div class="live-wrap">',$.each(e.originSrc,function(e,a){s+='<div class="deck"><div class="deck-item">',s+='<div class="deck-img"><img src="'+a.logo+'" alt=""/></div>',s+='<span class="live-button select" data-url="'+a.link+'">观看直播</span></div></div>'}),s+="</div></section></div>"):"3"==e.state?(s+='</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">直播</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">讨论</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">新闻</div></a></li></ul><div class="outContainer ">',s+='<div class="live" data-id="0">',s+='<p class="live-tip">请选择直播平台</p>',s+='<section class="live-list clearfix">',s+='<div class="live-wrap">',$.each(e.originSrc,function(e,a){s+='<div class="deck no-select">',s+='<div class="deck-img"><img src="'+a.logo+'" alt=""/></div>',s+='<span class="live-button">即将开始</span></div>'}),s+="</div></section></div>"):"2"==e.state?(s+='</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">视频</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">讨论</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">新闻</div></a></li></ul><div class="outContainer ">',e.relateVideos.length>0?(s+='<div class="live" data-id="0">',s+='<section class="list"><ul> ',$.each(e.relateVideos,function(e,a){s+='<li class="clearfix"><a href="##" class="list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'"><img class="fl" src="'+a.thumbnail+'"/>',s+='<p class="list-title">'+a.title+"</p> ",a.tagColor&&a.tagName&&(s+='<span class="list-tag" style="color:'+a.tagColor+";border-color:"+a.tagColor+';">'+a.tagName+"</span>");var t,i=new Date;a.updateTime&&(i=new Date(1e3*a.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),s+='<span class="list-time">'+t+"</span>",s+="</a></li>"}),s+="</ul></section></div>"):s+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;display:none;background-color: #ffffff;">暂无视频数据</div>'):s+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:block;background-color: #ffffff;">',sourceId=e.changyanSid,sourceTitle=e.title;try{Jnapp.jn_getComment(sourceId,sourceTitle)}catch(i){}s+='<div class="reviews" data-id="1">',s+="</div>",e.recomendVideos.length>0?(s+='<div class="news" data-id="2">',s+='<section class="list"><ul>',$.each(e.recomendVideos,function(e,a){s+='<li class="clearfix"><a href="##" class="list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'">',s+='<img class="fl" src="'+a.thumbnail+'"/>',s+='<p class="list-title">'+a.title+"</p>",a.tagColor&&a.tagName&&(s+='<span class="list-tag" style="color:'+a.tagColor+";border-color:"+a.tagColor+';">'+a.tagName+"</span>");var t,i=new Date;a.updateTime&&(i=new Date(1e3*a.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),s+='<span class="list-time">'+t+"</span>",s+="</a></li> "}),s+=" </ul></section></div></div>"):s+='<div class="news" data-id="1" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:none;background-color: #ffffff;">暂无新闻数据</div>',$("#box").html(s)}function renderReviews(e,s){function a(e){var s=6e4,a=60*s,t=24*a,l=(new Date).getTime(),r=l-e;if(!(0>r)){var c=r/t,d=r/a,n=r/s;return i=c>=1?""+parseInt(c)+"天前":d>=1?""+parseInt(d)+"小时前":n>=1?""+parseInt(n)+"分钟前":"刚刚"}}var t,i,l=$(".new-reciews");if(topicId=e.topic_id,allpage=e.cmt_sum/30,0===parseInt(s)&&(t="<div>",t+='<section class="hot-reviews">',e.hots&&(a(e.hots.create_time),t+='<div class="reviews-title"><span>热门评论</span></div>',$.each(e.hots,function(e,s){t+='<div class="reviews-box">',t+='<div class="reviews-header"><img src="'+s.passport.img_url+'" alt=""/></div>',t+='<div class="reviews-right">',t+='<span class="reviews-name">'+s.passport.nickname+"</span>",t+='<span class="reviews-time">'+i+"</span>",t+='<p class="reviews-content">'+s.content+"</p></div></div>"})),t+="</section>",a(e.comments.create_time),t+='<section class="new-reciews">',t+='<div class="reviews-title"><span>最新评论</span></div>',$.each(e.comments,function(e,s){t+='<div class="reviews-box">',t+='<div class="reviews-header"><img src="'+s.passport.img_url+'" alt=""/></div>',t+='<div class="reviews-right">',t+='<span class="reviews-name">'+s.passport.nickname+"</span>",t+='<span class="reviews-time">'+i+"</span>",t+='<p class="reviews-content">'+s.content+"</p></div></div>"}),t+="</section>",t+="</div>",$(".reviews").html(t)),1===parseInt(s)){var r="<div>";a(e.comments.create_time),$.each(e.comments,function(e,s){r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+s.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<span class="reviews-name">'+s.passport.nickname+"</span>",r+='<span class="reviews-time">'+i+"</span>",r+='<p class="reviews-content">'+s.content+"</p></div></div>"}),r+="</div>",l.append(r)}}var cacheData=null,sourceId,sourceTitle,topicId,allpage,load=!1,pageTitle,isLoading=!1;window.Jn={setCookie:function(e,s,a){var t=new Date;t.setDate(t.getDate()+a),document.cookie=e+"="+s+";expires="+t},getCookie:function(e){for(var s=document.cookie.split("; "),a=0;a<s.length;a++){var t=s[a].split("=");if(t[0]==e)return t[1]}return""}},Jn.setData=function(e){"gameInitDetail"==e.key&&renderData(e.content)},Jn.addComment=function(e){isLoading=!1,"10000"==e.code&&renderReviews(e.data,e.type)},Jn.refreshComment=function(){load&&"讨论"==pageTitle&&!isLoading&&(isLoading=!0,Jnapp.jn_getComment(sourceId,sourceTitle))},$(function(){$(document).on("click",".select",function(e){e.preventDefault();var s=$(this).data("url");try{$(this).addClass("selected"),$(this).parent().addClass("selected"),Jnapp.jn_related("5",s+"")}catch(e){}}),$(document).on("click",".live-byword-list-words-images img",function(e){e.preventDefault();var s=$(this).attr("alt");s=s?s:"";try{Jnapp.jn_image($(this).attr("src"),s,"")}catch(e){}}),$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(s){}}),$(document).on("click",".sp-left",function(e){e.preventDefault();var s=$("#supporters-leftNumber"),a=parseInt(s.html()),t=$(this).data("id"),i=$(this).data("team");if(!Jn.getCookie("sp-"+t))try{a++,s.html(a),$(this).find("img").attr("src","images/matchdetail_ic_support_red.png"),Jn.setCookie("sp-"+t,a+"",365),Jnapp.jn_agree(7,t,i)}catch(e){}}),$(document).on("click",".sp-right",function(e){e.preventDefault();var s=$("#supporters-rightNumber"),a=$(this).data("id"),t=$(this).data("team"),i=parseInt(s.html());if(!Jn.getCookie("sp-"+a))try{i++,s.html(i),$(this).find("img").attr("src","images/matchdetail_ic_support_blue.png"),Jn.setCookie("sp-"+a,i+"",365),Jnapp.jn_agree(7,a,t)}catch(e){}}),$(document).on("click",".outer .outList",function(e){e.preventDefault();var s=1;if(pageTitle=$(this).text(),!$(this).hasClass("selected")){var a=$(this).data("id"),t=$(".outContainer");$(this).addClass("selected").siblings().removeClass("selected"),t.children().eq(a)&&t.children().eq(a).show().siblings().hide()}"讨论"==pageTitle&&(load=!0),$(document).on("scroll",function(e){e.preventDefault();var a=$(window).scrollTop(),t=$(document).height(),i=$(window).height(),l=a+i;if(l>=t&&(s++,allpage>=s))try{load&&"讨论"==pageTitle&&!isLoading&&(isLoading=!0,Jnapp.jn_getMoreComment(sourceId+"",s+"","30",topicId+""))}catch(e){}})}),$(document).on("click",".play-icon",function(){try{Jnapp.jn_related(5,$(this).data("url"))}catch(e){}})});