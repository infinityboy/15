"use strict";function getDatediff(e){var a,t=6e4,s=60*t,i=24*s,n=(new Date).getTime(),c=n-e;if(!(0>c)){var l=c/i,r=c/s,p=c/t;if(l>=1){var m=new Date(e);a=m.getMonth()+1+"-"+m.getDate()}else a=r>=1?""+parseInt(r)+"小时前":p>=1?""+parseInt(p)+"分钟前":"刚刚";return a}}function renderData(e){function a(e){e.length>0&&$.each(e,function(a,s){e.length>1&&e.length<4?r+='<div class="reviews-children"><p class="child-title clearfix">'+(a+1)+".&ensp;"+s.passport.nickname+'<a href="#" class="nickname-right"><img src="'+t(Jnapp.jn_getLikeStatus(s.comment_id))+'" alt=""></a></p><p class="child-content">'+s.content+"</p></div>":0==a?r+='<div class="reviews-children" ><p class="child-title">1.&ensp;'+s.passport.nickname+'<a href="#" class="nickname-right"><img src="'+t(Jnapp.jn_getLikeStatus(s.comment_id))+'" alt=""></a></p><p class="child-content">'+s.content+"</p></div>":a>0&&a<e.length-2?r+='<div><div class="reviews-children center-more" style="display: none" ><p class="child-title clearfix">'+(a+1)+".&nbsp;"+s.passport.nickname+'</p><p class="child-content">'+s.content+'</p></div><a href="#" class="show-all-reviews"><p>显示全部评论</p></a></div>':a==e.length-2?r+='<div class="reviews-children" ><p class="child-title clearfix">'+(e.length-1)+".&ensp;"+s.passport.nickname+'<a href="#" class="nickname-right"><img src="'+t(Jnapp.jn_getLikeStatus(s.comment_id))+'" alt=""></a></p><p class="child-content">'+s.content+"</p></div>":a==e.length-1&&(r+='<div class="reviews-children" ><p class="child-title clearfix">'+e.length+".&ensp;"+s.passport.nickname+'<a href="#" class="nickname-right"><img src="'+t(Jnapp.jn_getLikeStatus(s.comment_id))+'" alt=""></a></p><p class="child-content">'+s.content+"</p></div>")})}function t(e){var a;return"0"==e?a="images/review-zan_2x.png":"1"==e&&(a="images/review-click-zan_2x.png"),a}cacheData=e;var s=e.title?e.title:"",i=e.content?e.content:"",n=e.banner,c=e.avatar,l="",r="";renderRevData=function(e,s){e?(r+='<div class="list"><h3>竞猜评论</h3><ul id="news_list">',r+='<section class="hot-reviews">',e.hots.length>=5?$.each(e.hots,function(e,i){5>e&&(r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+s+'" data-comment="'+i.comment_id+'"><img src="'+t(Jnapp.jn_getLikeStatus(i.comment_id))+'" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',r+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",a(i.comments),r+='<p class="reviews-content">'+i.content+"</p></div></div>")}):0==e.hots.length?e.comments.length>0&&$.each(e.comments,function(e,i){5>e&&(r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+s+'" data-comment="'+i.comment_id+'"><img src="'+t(Jnapp.jn_getLikeStatus(hotContent.comment_id))+'" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',r+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",a(i.comments),r+='<p class="reviews-content">'+i.content+"</p></div></div>")}):e.hots.length>0&&e.hots.length<5&&($.each(e.hots,function(e,i){r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+s+'" data-comment="'+i.comment_id+'"><img src="'+t(Jnapp.jn_getLikeStatus(i.comment_id))+'" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',r+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",a(i.comments),r+='<p class="reviews-content">'+i.content+"</p></div></div>"}),e.comments.length>0&&$.each(e.comments,function(i,n){i<5-e.hots.length&&(r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+n.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<p class="clearfix"><span class="reviews-name">'+n.passport.nickname+'</span><span class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+s+' data-comment="'+n.comment_id+'"><img src="'+t(Jnapp.jn_getLikeStatus(hotContent.comment_id))+'" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',r+='<span class="reviews-time">'+getDatediff(n.create_time)+"</span>",a(n.comments),r+='<p class="reviews-content">'+n.content+"</p></div></div>")})),r+="</section></div>"):r+='<div class="reviews-box"><img src="images/picture_2x.png>" alt=""></div>',$(".reviews").html(r)},l+='<div class="allcontain detailWrap" style=""><div class="banner" style="background: url('+n+') no-repeat center top; background-size: auto 100%;"></div>',l+='<div class="container"><div class="wrap"><div class="left"><div class="details"><h1>'+s+'</h1><div class="detailsTit">',l+='<div class="pic"><img src="'+c+'"></div>',l+='<div class="ti">作者'+e.author+"</div>",e.time&&(l+='<span class="art-time"><i></i>'+time+"</span>"),l+="</div>",l+='<div class="indent">'+i+"</div>",l+="</div></div></div></div>",l+='<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>',l+='<div class="maintext-share"><a href="#" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="#" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="#" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /></a><a href="#" class="maintext-share-qq"><img src="images/qq_zone.png" /></a><a href="#" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a></div></div>',l+='<div class="reviews"></div>';try{Jnapp.jn_getComment("")}catch(p){}e.pastlist.length>0&&(l+='<div class="list"><h3>往期回顾</h3><ul id="news_list">',$.each(e.pastlist,function(e,a){l+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'"><div class="news-left"><p class="list-title">'+a.title+"</p>",a.tagColor&&a.tagName&&(l+='<span class="list-tag" style="color:'+a.tagColor+";border-Color:"+a.tagColor+';">'+a.tagName+"</span>"),l+=a.comments?'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;'+a.comments+"</span>":'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>',a.updateTime&&(l+='<span class="list-time">'+getDatediff(1e3*a.updateTime)+"</span>"),l+='</div><div class="news-right clearfix"><img class="fl" src="'+a.thumbnail+'"/></div></a></li>'}),l+="</ul></div>"),$("#content").html(l)}window.Jn={};var cacheData=null,renderRevData;Jn.setData=function(e){"topicInitDetail"==e.key&&renderData(e.content)},Jn.addComment=function(e){"10000"==e.code&&renderRevData(e.data)},$(function(){function e(e){try{var a=cacheData.thumbnail,t=cacheData.title,s=cacheData.excerpt,i=cacheData.shareUrl;Jnapp.jn_share(e,a,t,s,i)}catch(n){}}$(document).on("click",".detailsCon img",function(e){e.preventDefault();var a=$(this).attr("alt");a=a?a:"";try{Jnapp.jn_image($(this).attr("src"),a,"")}catch(e){}}),$(document).on("click",".maintext-share-weibo",function(a){a.preventDefault(),e(0)}),$(document).on("click",".maintext-share-weixin",function(a){a.preventDefault(),e(1)}),$(document).on("click",".maintext-share-frident",function(a){a.preventDefault(),e(2)}),$(document).on("click",".maintext-share-qq-space",function(a){a.preventDefault(),e(3)}),$(document).on("click",".maintext-share-qq",function(a){a.preventDefault(),e(4)}),$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(e){}}),$(document).on("click",".show-all-reviews",function(e){e.preventDefault(),$(this).hide(),$(".center-more").show()}),$(document).on("click",".nickname-right .reviews-replay",function(e){e.preventDefault();try{Jnapp.jn_showPage(202)}catch(e){}}),$(document).on("click",".nickname-right .reviews-zan",function(e){e.preventDefault();var a=$(this).data("topic"),t=$(this).data("comment");try{"images/review-zan_2x.png"==$(this).children().find("img").attr("src")&&(Jnapp.jn_clickLike(a+"",t+""),$(this).children().find("img").attr("src","images/review-click-zan_2x.png"))}catch(e){}})});