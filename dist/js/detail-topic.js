"use strict";function getDatediff(e){var a,t=6e4,s=60*t,i=24*s,n=(new Date).getTime(),c=n-e;if(!(0>c)){var r=c/i,l=c/s,p=c/t;if(r>=1){var o=new Date(e);a=o.getMonth()+1+"-"+o.getDate()}else a=l>=1?""+parseInt(l)+"小时前":p>=1?""+parseInt(p)+"分钟前":"刚刚";return a}}function renderData(e){function a(e,a){e.length>0&&$.each(e,function(s,i){e.length>1&&e.length<4?l+='<div class="reviews-children"><p class="child-title clearfix">'+(s+1)+".&ensp;"+i.passport.nickname+'<span class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+a+'" data-comment="'+i.comment_id+'">'+i.support_count+'<img src="'+t(Jnapp.jn_getLikeStatus(i.comment_id))+'" alt=""></a></span></p><p class="child-content">'+i.content+"</p></div>":0==s?l+='<div class="reviews-children" ><p class="child-title">1.&ensp;'+i.passport.nickname+'<span  class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+a+'" data-comment="'+i.comment_id+'">'+i.support_count+'<img src="'+t(Jnapp.jn_getLikeStatus(i.comment_id))+'" alt=""></a></span></p><p class="child-content">'+i.content+"</p></div>":s>0&&s<e.length-2?l+='<div><div class="reviews-children center-more" style="display: none" ><p class="child-title clearfix">'+(s+1)+".&nbsp;"+i.passport.nickname+'</p><p class="child-content">'+i.content+'</p></div><a href="#" class="show-all-reviews"><p>显示全部评论</p></a></div>':s==e.length-2?l+='<div class="reviews-children" ><p class="child-title clearfix">'+(e.length-1)+".&ensp;"+i.passport.nickname+'<span  class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+a+'" data-comment="'+i.comment_id+'">'+i.support_count+'<img src="'+t(Jnapp.jn_getLikeStatus(i.comment_id))+'" alt=""></a></span></p><p class="child-content">'+i.content+"</p></div>":s==e.length-1&&(l+='<div class="reviews-children" ><p class="child-title clearfix">'+e.length+".&ensp;"+i.passport.nickname+'<span  class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+a+'" data-comment="'+i.comment_id+'">'+i.support_count+'<img src="'+t(Jnapp.jn_getLikeStatus(i.comment_id))+'" alt=""></a></span></p><p class="child-content">'+i.content+"</p></div>")})}function t(e){var a;return"0"==e?a="images/review-zan_2x.png":"1"==e&&($(".nickname-right .reviews-zan").addClass("reviewed"),a="images/review-click-zan_2x.png"),a}cacheData=e;var s=e.title?e.title:"",i=e.content?e.content:"",n=e.banner,c=e.avatar,r="",l="";renderRevData=function(e,s){e?(l+='<div class="list"><h3>竞猜评论</h3><ul id="news_list">',l+='<section class="hot-reviews">',e.hots.length>=5?$.each(e.hots,function(e,i){5>e&&(l+='<div class="reviews-box">',l+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',l+='<div class="reviews-right">',l+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+s+'" data-comment="'+i.comment_id+'">'+i.support_count+'<img src="'+t(Jnapp.jn_getLikeStatus(i.comment_id))+'" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',l+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",a(i.comments,s),l+='<p class="reviews-content">'+i.content+"</p></div></div>")}):0==e.hots.length?e.comments.length>0&&$.each(e.comments,function(e,i){5>e&&(l+='<div class="reviews-box">',l+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',l+='<div class="reviews-right">',l+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+s+'" data-comment="'+i.comment_id+'">'+i.support_count+'<img src="'+t(Jnapp.jn_getLikeStatus(i.comment_id))+'" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',l+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",a(hotContent.comments,s),l+='<p class="reviews-content">'+i.content+"</p></div></div>")}):e.hots.length>0&&e.hots.length<5&&($.each(e.hots,function(e,i){l+='<div class="reviews-box">',l+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',l+='<div class="reviews-right">',l+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+s+'" data-comment="'+i.comment_id+'">'+i.support_count+'<img src="'+t(Jnapp.jn_getLikeStatus(i.comment_id))+'" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',l+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",a(i.comments,s),l+='<p class="reviews-content">'+i.content+"</p></div></div>"}),e.comments.length>0&&$.each(e.comments,function(i,n){i<5-e.hots.length&&(l+='<div class="reviews-box">',l+='<div class="reviews-header"><img src="'+n.passport.img_url+'" alt=""/></div>',l+='<div class="reviews-right">',l+='<p class="clearfix"><span class="reviews-name">'+n.passport.nickname+'</span><span class="nickname-right"><a href="#" class="reviews-zan" data-topic="'+s+' data-comment="'+n.comment_id+'">'+n.support_count+'<img src="'+t(Jnapp.jn_getLikeStatus(n.comment_id))+'" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',l+='<span class="reviews-time">'+getDatediff(n.create_time)+"</span>",a(hotContent.comments,s),l+='<p class="reviews-content">'+n.content+"</p></div></div>")})),l+='</section><a href="#" class="get_more-review"><p>显示全部评论</p></a></div>'):l+='<div class="reviews-box"><img src="images/picture_2x.png>" alt=""></div>',$(".reviews").html(l)},r+='<div class="allcontain detailWrap" style=""><div class="banner" style="background: url('+n+') no-repeat center top; background-size: auto 100%;"></div>',r+='<div class="container"><div class="wrap"><div class="left"><div class="details"><h1>'+s+'</h1><div class="detailsTit">',r+='<div class="pic"><img src="'+c+'"></div>',r+='<div class="ti">作者'+e.author+"</div>",e.time&&(r+='<span class="art-time"><i></i>'+time+"</span>"),r+="</div>",r+='<div class="indent">'+i+"</div>",r+="</div></div></div></div>",r+='<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>',r+='<div class="maintext-share"><a href="#" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="#" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="#" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /></a><a href="#" class="maintext-share-qq"><img src="images/qq_zone.png" /></a><a href="#" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a></div></div>',r+='<div class="reviews"></div>';try{Jnapp.jn_getComment("","")}catch(p){}e.pastlist.length>0&&(r+='<div class="list"><h3>往期回顾</h3><ul id="news_list">',$.each(e.pastlist,function(e,a){r+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'"><div class="news-left"><p class="list-title">'+a.title+"</p>",a.tagColor&&a.tagName&&(r+='<span class="list-tag" style="color:'+a.tagColor+";border-Color:"+a.tagColor+';">'+a.tagName+"</span>"),r+=a.comments?'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;'+a.comments+"</span>":'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>',a.updateTime&&(r+='<span class="list-time">'+getDatediff(1e3*a.updateTime)+"</span>"),r+='</div><div class="news-right clearfix"><img class="fl" src="'+a.thumbnail+'"/></div></a></li>'}),r+="</ul></div>"),$("#content").html(r)}window.Jn={};var cacheData=null,renderRevData;Jn.setData=function(e){"topicInitDetail"==e.key&&renderData(e.content)},Jn.addComment=function(e){"10000"==e.code&&renderRevData(e.data,e.data.topic_id)},$(function(){function e(e){try{var a=cacheData.thumbnail,t=cacheData.title,s=cacheData.excerpt,i=cacheData.shareUrl;Jnapp.jn_share(e,a,t,s,i)}catch(n){}}$(document).on("click",".detailsCon img",function(e){e.preventDefault();var a=$(this).attr("alt");a=a?a:"";try{Jnapp.jn_image($(this).attr("src"),a,"")}catch(e){}}),$(document).on("click",".maintext-share-weibo",function(a){a.preventDefault(),e(0)}),$(document).on("click",".maintext-share-weixin",function(a){a.preventDefault(),e(1)}),$(document).on("click",".maintext-share-frident",function(a){a.preventDefault(),e(2)}),$(document).on("click",".maintext-share-qq-space",function(a){a.preventDefault(),e(3)}),$(document).on("click",".maintext-share-qq",function(a){a.preventDefault(),e(4)}),$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(e){}}),$(document).on("click",".show-all-reviews",function(e){e.preventDefault(),$(this).hide(),$(".center-more").show()}),$(document).on("click",".nickname-right .reviews-replay,.get_more-review",function(e){e.preventDefault();try{Jnapp.jn_showPage(202)}catch(e){}}),$(document).on("click",".nickname-right .reviews-zan",function(e){e.preventDefault();var a=$(this).data("topic"),t=$(this).data("comment"),s=$(this).text();try{"images/review-zan_2x.png"==$(this).children().find("img").attr("src")&&(Jnapp.jn_clickLike(a+"",t+""),$(this).addClass("reviewed"),$(this).children().find("img").attr("src","images/review-click-zan_2x.png"),$(this).text(s+1))}catch(e){}})});