"use strict";function isIOS(e){return e.indexOf("iPhone")>0}function getDatediff(e){var s,a=6e4,t=60*a,n=24*t,i=(new Date).getTime(),c=i-e;if(!(0>c)){var l=c/n,p=c/t,r=c/a;if(l>=1){var o=new Date(e);s=o.getMonth()+1+"-"+o.getDate()}else s=p>=1?""+parseInt(p)+"小时前":r>=1?""+parseInt(r)+"分钟前":"刚刚";return s}}function renderData(e){function s(e,s){e.length>0&&$.each(e,function(t,n){e.length>1&&e.length<4?r+='<div class="reviews-children"><p class="child-title clearfix">'+(t+1)+".&ensp;"+n.passport.nickname+'<span class="nickname-right">'+a(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'</span></p><p class="child-content">'+n.content+"</p></div>":0==t?r+='<div class="reviews-children" ><p class="child-title">1.&ensp;'+n.passport.nickname+'<span  class="nickname-right">'+a(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'</span></p><p class="child-content">'+n.content+"</p></div>":t>0&&t<e.length-2?r+='<div><div class="reviews-children center-more" style="display: none" ><p class="child-title clearfix">'+(t+1)+".&nbsp;"+n.passport.nickname+'</p><p class="child-content">'+n.content+'</p></div><a href="#" class="show-all-reviews"><p>显示全部评论</p></a></div>':t==e.length-2?r+='<div class="reviews-children" ><p class="child-title clearfix">'+(e.length-1)+".&ensp;"+n.passport.nickname+'<span  class="nickname-right">'+a(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'</span></p><p class="child-content">'+n.content+"</p></div>":t==e.length-1&&(r+='<div class="reviews-children" ><p class="child-title clearfix">'+e.length+".&ensp;"+n.passport.nickname+'<span  class="nickname-right">'+a(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'</span></p><p class="child-content">'+n.content+"</p></div>")})}function a(e,s,a){var t;return"0"==s?t='<a href="#" class="reviews-zan" data-topic="'+a+'" data-comment="'+e.comment_id+'"><span>'+e.support_count+'</span><img src="images/review-zan_2x.png" alt=""></a>':"1"==s&&(t='<a href="#" class="reviews-zan reviewed" data-topic="'+a+'" data-comment="'+e.comment_id+'"><span>'+(1*e.support_count+1)+'</span><img src="images/review-click-zan_2x.png" alt=""></a>'),t}var t=e;cacheData=t,voteId=t.voteId;var n=t.content?t.content:"",i=$(window).width(),c=i*defaultHeight/defaultWidth,l=window.navigator.userAgent,p="",r="";renderRevData=function(e,t){r+='<div class="list"><h3>精彩评论</h3><ul id="news_list">',e?(r+='<section class="hot-reviews">',e.hots.length>=5?($.each(e.hots,function(e,n){5>e&&(r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+n.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<p class="clearfix"><span class="reviews-name">'+n.passport.nickname+'</span><span class="nickname-right">'+a(n,Jnapp.jn_getLikeStatus(n.comment_id),t)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',r+='<span class="reviews-time">'+getDatediff(n.create_time)+"</span>",s(n.comments,t),r+='<p class="reviews-content">'+n.content+"</p></div></div>")}),r+='</section><a href="#" class="get_more-review"><p>显示全部评论</p></a></div>'):0==e.hots.length?e.comments.length>0?($.each(e.comments,function(e,n){5>e&&(r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+n.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<p class="clearfix"><span class="reviews-name">'+n.passport.nickname+'</span><span class="nickname-right">'+a(n,Jnapp.jn_getLikeStatus(n.comment_id),t)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',r+='<span class="reviews-time">'+getDatediff(n.create_time)+"</span>",s(n.comments,t),r+='<p class="reviews-content">'+n.content+"</p></div></div>")}),r+='</section><a href="#" class="get_more-review"><p>显示全部评论</p></a></div>'):r+='<div class="reviews-box" style="padding-bottom: 1rem"><img src="images/picture_2x.png" alt="" style="height: 1.25rem; margin:0 auto;"/></div></div>':e.hots.length>0&&e.hots.length<5&&($.each(e.hots,function(e,n){r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+n.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<p class="clearfix"><span class="reviews-name">'+n.passport.nickname+'</span><span class="nickname-right">'+a(n,Jnapp.jn_getLikeStatus(n.comment_id),t)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',r+='<span class="reviews-time">'+getDatediff(n.create_time)+"</span>",s(n.comments,t),r+='<p class="reviews-content">'+n.content+"</p></div></div>"}),e.comments.length>0&&$.each(e.comments,function(n,i){n<5-e.hots.length&&(r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right">'+a(i,Jnapp.jn_getLikeStatus(i.comment_id),t)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',r+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",s(i.comments,t),r+='<p class="reviews-content">'+i.content+"</p></div></div>")}),r+='</section><a href="#" class="get_more-review"><p>显示全部评论</p></a></div>')):r+='<div class="reviews-box"  style="padding-bottom: 1rem" ><img src="images/picture_2x.png" alt="" style="height: 1.25rem; margin:0 auto;" /></div></div>',$(".reviews").html(r)},1==t.videoType?(p+='<header class="header" style="height:'+c+'px;"><div class="player clearfix">'+n,isIOS(l)||(p+='<button class="video-button"></button>'),p+="</div></header>",p+='<div class="content" style="padding-top: '+c+'px">'):p+='<div class="content">',Jn.verticalHeight=c,p+='<div class="video-header">',p+='<h1 class="title">'+t.title+"</h1>",p+='<div class="video-meta clearfix">',t.views&&(p+='<span class="date"><em class="play-num"></em>'+t.views+"播放&ensp;</span>"),p+='<span class="author ml5">'+t.author+"</span>",p+="</div>",t.excerpt&&(p+='<div class="excerpt">'+t.excerpt+"</div>"),p+="</div>";var o={};try{o=Jnapp.jn_login_info()}catch(d){}"string"==typeof o&&(o=$.parseJSON(o)),p+='<div class="video-question""></div>',voteId&&"undefined"!==voteId&&$.getJSON("http://api.15w.com/client/app/jn/v1_4/vote/detail?dataId="+voteId+"&callback=?",function(e){if("10000"==e.code){var s=e.data,a=s.votes,t=s.excerpt,n=s.results,i=$(".video-question"),c=null;if(o.userid&&o.token)try{c=Jnapp.jn_getData(o.userid+"_"+voteId)}catch(l){}var p=[n.A,n.B,n.C,n.D],r=Math.max.apply(null,p),d=Math.max(1,p[0]/r*80),m=Math.max(1,p[1]/r*80),v=Math.max(1,p[2]/r*80),h=Math.max(1,p[3]/r*80),g='<p class="video-question-title">'+s.title+"</p>";c?(isVote=!0,g+='<a class="video-question-option" style="border: none"  data-id="0" data-elem="A" href="##"><span>A:</span><span class="val">'+a.A+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-a"  style="width:'+d+'%"></em><em class="num">'+n.A+"</em></div></a>",g+='<a class="video-question-option" style="border: none"  data-id="1" data-elem="B" href="##"><span>B:</span><span class="val">'+a.B+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-b"  style="width:'+m+'%"></em><em class="num">'+n.B+"</em></div></a>",g+='<a class="video-question-option" style="border: none"  data-id="2" data-elem="C" href="##"><span>C:</span><span class="val">'+a.C+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-c"  style="width:'+v+'%"></em><em class="num">'+n.C+"</em></div></a>",g+='<a class="video-question-option" style="border: none"  data-id="3" data-elem="D"  href="##"><span>D:</span><span class="val">'+a.D+'</span> <span class="selected"  style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-d"  style="width:'+h+'%"></em><em class="num">'+n.D+"</em></div></a>",g+="<p>"+t+"</p>"):(g+='<a class="video-question-option" data-id="0"  data-elem="A"  href="##"><span>A:</span><span class="val">'+a.A+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-a"  style="width:'+d+'%"></em><em class="num">'+n.A+"</em></div></a>",g+='<a class="video-question-option" data-id="1"  data-elem="B" href="##"><span>B:</span><span class="val">'+a.B+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-b"  style="width:'+m+'%"></em><em class="num">'+n.B+"</em></div></a>",g+='<a class="video-question-option" data-id="2"  data-elem="C"  href="##"><span>C:</span><span class="val">'+a.C+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-c"  style="width:'+v+'%"></em><em class="num">'+n.C+"</em></div></a>",g+='<a class="video-question-option" data-id="3"  data-elem="D" href="##"><span>D:</span><span class="val">'+a.D+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-d"  style="width:'+h+'%"></em><em class="num">'+n.D+"</em></div></a>",g+="<p>"+t+"</p>"),i.html(g)}}),p+='<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>',p+='<div class="maintext-share"><a href="#" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="#" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="#" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /></a><a href="#" class="maintext-share-qq"><img src="images/qq_zone.png" /></a><a href="#" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a></div></div>',p+='<div class="reviews"></div>';try{Jnapp.jn_getComment("","")}catch(m){}t.recomendVideos.length>0&&(p+='<section class="list"><h3>视频推荐</h3><ul> ',$.each(t.recomendVideos,function(e,s){p+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+s.articleType+'" data-id="'+s.extra+'"><div class="news-left"><p class="list-title">'+s.title+"</p>",s.tagColor&&s.tagName&&(p+='<span class="list-tag">'+s.tagName+"</span>"),p+=s.comments?'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;'+s.comments+"</span>":'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>',s.updateTime&&(p+='<span class="list-time">'+getDatediff(1e3*s.updateTime)+"</span>"),p+='</div><div class="news-right clearfix"><img class="fl" src="'+s.thumbnail+'"/><div class="look-time"><img src="images/video_2x.png" alt=""><span>'+s.time+"</span></div></div></a></li>"}),p+='</ul></section><section class="line"></section></div>'),$("#detail").html(p)}window.Jn={};var cacheData=null,voteId,defaultHeight=360,defaultWidth=640,isVote=!1,renderRevData;Jn.setData=function(e){"videoInitDetail"==e.key&&renderData(e.content)},Jn.addComment=function(e){"10000"==e.code&&renderRevData(e.data,e.data.topic_id)},$(function(){function e(e){try{var s=cacheData.thumbnail,a=cacheData.title,t=cacheData.excerpt,n=cacheData.shareUrl;Jnapp.jn_share(e,s,a,t,n)}catch(i){}}function s(){var e=[];$.each($(".num"),function(s,a){e.push(parseInt($(a).text()))});var s=Math.max.apply(null,e),a=[];a.push(Math.max(1,e[0]/s*80)),a.push(Math.max(1,e[1]/s*80)),a.push(Math.max(1,e[2]/s*80)),a.push(Math.max(1,e[3]/s*80));var t=$(".progress");$.each(t,function(e,s){$(s).css("width",a[e]+"%")})}$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(s){}}),$(document).on("click",".maintext-share-weibo",function(s){s.preventDefault(),e(0)}),$(document).on("click",".maintext-share-weixin",function(s){s.preventDefault(),e(1)}),$(document).on("click",".maintext-share-frident",function(s){s.preventDefault(),e(2)}),$(document).on("click",".maintext-share-qq-space",function(s){s.preventDefault(),e(3)}),$(document).on("click",".maintext-share-qq",function(s){s.preventDefault(),e(4)}),$(document).on("click",".show-all-reviews,.get_more-review",function(e){e.preventDefault(),$(this).hide(),$(".center-more").show()}),$(document).on("click",".nickname-right .reviews-replay,.get_more-review",function(e){e.preventDefault();try{Jnapp.jn_showPage(202)}catch(e){}}),$(document).on("click",".nickname-right .reviews-zan",function(e){e.preventDefault();var s=$(this).data("topic"),a=$(this).data("comment"),t=1*$(this).find("span").text()+1,n=$(".nickname-right a[data-comment='"+a+"']");try{"images/review-zan_2x.png"==$(this).find("img").attr("src")&&(Jnapp.jn_clickLike(s+"",a+""),$.each(n,function(e,s){$(s).addClass("reviewed"),$(s).find("img").attr("src","images/review-click-zan_2x.png"),$(s).find("span").text(t)}))}catch(e){}});var a=!1,t=($(".player"),$(".video-recommend .content"));$(document).on("click",".video-button",function(e){e.preventDefault();try{a=!a;var s=$(".header");a?(s.css({height:$(window).width()+"px"}),t.css("display","none"),$("body").css({height:"100%",overflow:"hidden"}),Jnapp.jn_setHorizontal(!0)):(s.css("height",Jn.verticalHeight+"px"),$("body").css({height:"auto",overflow:"auto"}),Jnapp.jn_setHorizontal(!1))}catch(e){}}),$(document).on("click",".video-question-option",function(e){if(e.preventDefault(),!isVote){var a=$(".video-question"),t=($(this).data("id"),parseInt($(this).find(".num").text())),n=$(this).data("elem"),i=$(this).find("span.val").text();try{var c=Jnapp.jn_login_info();"string"==typeof c&&(c=$.parseJSON(c));var l=c.userid,p=c.token;if(l&&p){$(this).find(".num").text(t+1),s(),a.find(".video-question-option").css("border-color","transparent"),a.find(".progress-bar").show(),$(this).find(".selected").show(),isVote=!0;var r="dataId="+voteId+"&uid="+l+"&token="+p+"&sign="+n+"&t="+(new Date).getTime()+"&callback=?";$.getJSON("http://api.15w.com/client/app/jn/v1_4/vote/vote?"+r,function(e){if("10000"==e.code)try{Jnapp.jn_setData(l+"_"+voteId,t+""),Jnapp.jn_comment(cacheData.changyanSid,"我选 "+n+" : "+i+", 求中奖")}catch(s){}})}else Jnapp.jn_login()}catch(o){window.alert("请下载电竞头条客户端进行投票!")}}})});