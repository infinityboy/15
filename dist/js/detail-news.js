"use strict";function getDatediff(e){var s,a=6e4,t=60*a,n=24*t,i=(new Date).getTime(),c=i-e;if(!(0>c)){var r=c/n,l=c/t,p=c/a;if(r>=1){var o=new Date(e);s=o.getMonth()+1+"-"+o.getDate()}else s=l>=1?""+parseInt(l)+"小时前":p>=1?""+parseInt(p)+"分钟前":"刚刚";return s}}function renderData(e,s){function a(e,s){e.length>0&&$.each(e,function(a,n){e.length>1&&e.length<4?l+='<div class="reviews-children"><p class="child-title clearfix">'+(a+1)+".&ensp;"+n.passport.nickname+'<span class="nickname-right">'+t(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'</span></p><p class="child-content">'+n.content+"</p></div>":0==a?l+='<div class="reviews-children" ><p class="child-title">1.&ensp;'+n.passport.nickname+'<span  class="nickname-right">'+t(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'</span></p><p class="child-content">'+n.content+"</p></div>":a>0&&a<e.length-2?l+='<div><div class="reviews-children center-more" style="display: none" ><p class="child-title clearfix">'+(a+1)+".&nbsp;"+n.passport.nickname+'</p><p class="child-content">'+n.content+'</p></div><a href="#" class="show-all-reviews"><p>显示全部评论</p></a></div>':a==e.length-2?l+='<div class="reviews-children" ><p class="child-title clearfix">'+(e.length-1)+".&ensp;"+n.passport.nickname+'<span  class="nickname-right">'+t(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'</span></p><p class="child-content">'+n.content+"</p></div>":a==e.length-1&&(l+='<div class="reviews-children" ><p class="child-title clearfix">'+e.length+".&ensp;"+n.passport.nickname+'<span  class="nickname-right">'+t(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'</span></p><p class="child-content">'+n.content+"</p></div>")})}function t(e,s,a){var t;return"0"==s?t='<a href="#" class="reviews-zan" data-topic="'+a+'" data-comment="'+e.comment_id+'"><span>'+e.support_count+'</span><img src="images/review-zan_2x.png" alt=""></a>':"1"==s&&(t='<a href="#" class="reviews-zan reviewed" data-topic="'+a+'" data-comment="'+e.comment_id+'"><span>'+(1*e.support_count+1)+'</span><img src="images/review-click-zan_2x.png" alt=""></a>'),t}cacheData=e;var n=e.title?e.title:"",i=e.time?e.time:"",c=e.content?e.content:"",r="",l="";renderRevData=function(e,s){l+='<div class="list"><h3>精彩评论</h3><ul id="news_list">',e?(l+='<section class="hot-reviews">',e.hots.length>=5?($.each(e.hots,function(e,n){5>e&&(l+='<div class="reviews-box">',l+='<div class="reviews-header"><img src="'+n.passport.img_url+'" alt=""/></div>',l+='<div class="reviews-right">',l+='<p class="clearfix"><span class="reviews-name">'+n.passport.nickname+'</span><span class="nickname-right">'+t(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',l+='<span class="reviews-time">'+getDatediff(n.create_time)+"</span>",a(n.comments,s),l+='<p class="reviews-content">'+n.content+"</p></div></div>")}),l+='</section><a href="#" class="get_more-review"><p>显示全部评论</p></a></div>'):0==e.hots.length?e.comments.length>0?($.each(e.comments,function(e,n){5>e&&(l+='<div class="reviews-box">',l+='<div class="reviews-header"><img src="'+n.passport.img_url+'" alt=""/></div>',l+='<div class="reviews-right">',l+='<p class="clearfix"><span class="reviews-name">'+n.passport.nickname+'</span><span class="nickname-right">'+t(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',l+='<span class="reviews-time">'+getDatediff(n.create_time)+"</span>",a(n.comments,s),l+='<p class="reviews-content">'+n.content+"</p></div></div>")}),l+='</section><a href="#" class="get_more-review"><p>显示全部评论</p></a></div>'):l+='<div class="reviews-box" style="padding-bottom: 1rem"><img src="images/picture_2x.png" alt="" style="margin；0 auto;max-width: 100%;"/></div></div>':e.hots.length>0&&e.hots.length<5&&($.each(e.hots,function(e,n){l+='<div class="reviews-box">',l+='<div class="reviews-header"><img src="'+n.passport.img_url+'" alt=""/></div>',l+='<div class="reviews-right">',l+='<p class="clearfix"><span class="reviews-name">'+n.passport.nickname+'</span><span class="nickname-right">'+t(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',l+='<span class="reviews-time">'+getDatediff(n.create_time)+"</span>",a(n.comments,s),l+='<p class="reviews-content">'+n.content+"</p></div></div>"}),e.comments.length>0&&$.each(e.comments,function(n,i){n<5-e.hots.length&&(l+='<div class="reviews-box">',l+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',l+='<div class="reviews-right">',l+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right">'+t(i,Jnapp.jn_getLikeStatus(i.comment_id),s)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',l+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",a(i.comments,s),l+='<p class="reviews-content">'+i.content+"</p></div></div>")}),l+='</section><a href="#" class="get_more-review"><p>显示全部评论</p></a></div>')):l+='<div class="reviews-box"  style="padding-bottom: 1rem" ><img src="images/picture_2x.png" alt="" style="margin；0 auto;max-width: 100%;" /></div></div>',$(".reviews").html(l)},r+='<header><h1 class="title">'+n+"</h1>",r+='<div class="meta"><span class="date">'+i+'</span><span class="author color-blue ml5">',r+=e.author+"</span></div></header>",r+='<div class="indent flat-content">'+c+"</div>",r+='<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>',r+='<div class="maintext-share"><a href="#" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="#" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /></a><a href="#" class="maintext-share-qq"><img src="images/qq_zone.png" /></a><a href="#" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a></div></div>',r+='<div class="reviews"></div>';try{Jnapp.jn_getComment("","")}catch(p){}var o=e.relate_news;o.length>0&&(r+='<div class="list"><h3>相关新闻</h3><ul id="news_list">',$.each(o,function(e,s){r+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+s.articleType+'" data-id="'+s.extra+'"><div class="news-left"><p class="list-title">'+s.title+"</p>",s.tagColor&&s.tagName&&(r+='<span class="list-tag" style="color:'+s.tagColor+";border-Color:"+s.tagColor+';">'+s.tagName+"</span>"),r+=s.comments?'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;'+s.comments+"</span>":'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>',s.updateTime&&(r+='<span class="list-time">'+getDatediff(1e3*s.updateTime)+"</span>"),r+='</div><div class="news-right"><img class="fl" src="'+s.thumbnail+'"/></div></a></li>'}),r+='</ul></div><section class="line"></section>'),$("#newsDetail").html(r);var m=$(".indent p");1==s?m.css("font-size","89%"):2==s?m.css("font-size","114%"):3==s?m.css("font-size","160%"):4==s?m.css("font-size","180%"):5==s&&m.css("font-size","200%")}window.Jn={};var cacheData=null,renderRevData,font;Jn.setData=function(e){"newsInitDetail"==e.key&&renderData(e.content,e.fontSize)},Jn.addComment=function(e){"10000"==e.code&&renderRevData(e.data,e.data.topic_id)},Jn.changeFontSize=function(e){var s=$(".indent p");"1"==e?s.css("font-size","89%"):"2"==e?s.css("font-size","114%"):"3"==e?s.css("font-size","160%"):"4"==e?s.css("font-size","180%"):"5"==e&&s.css("font-size","200%")},$(function(){function e(e){try{var s=cacheData.thumbnail,a=cacheData.title,t=cacheData.excerpt,n=cacheData.shareUrl;Jnapp.jn_share(e,s,a,t,n)}catch(i){}}$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(e){}}),$(document).on("click",".flat-content img",function(e){e.preventDefault();var s=$(this).attr("alt");s=s?s:"";try{Jnapp.jn_image($(this).attr("src"),s,"")}catch(e){}}),$(document).on("click",".maintext-share-weibo",function(s){s.preventDefault(),e(0)}),$(document).on("click",".maintext-share-weixin",function(s){s.preventDefault(),e(1)}),$(document).on("click",".maintext-share-frident",function(s){s.preventDefault(),e(2)}),$(document).on("click",".maintext-share-qq-space",function(s){s.preventDefault(),e(3)}),$(document).on("click",".maintext-share-qq",function(s){s.preventDefault(),e(4)}),$(document).on("click",".show-all-reviews,.get_more-review",function(e){e.preventDefault(),$(this).hide(),$(".center-more").show()}),$(document).on("click",".nickname-right .reviews-replay,.get_more-review",function(e){e.preventDefault();try{Jnapp.jn_showPage(202)}catch(e){}}),$(document).on("click",".nickname-right .reviews-zan",function(e){e.preventDefault();var s=$(this).data("topic"),a=$(this).data("comment"),t=1*$(this).find("span").text()+1,n=$(".nickname-right a[data-comment='"+a+"']");try{"images/review-zan_2x.png"==$(this).find("img").attr("src")&&(Jnapp.jn_clickLike(s+"",a+""),$.each(n,function(e,s){$(s).addClass("reviewed"),$(s).find("img").attr("src","images/review-click-zan_2x.png"),$(s).find("span").text(t)}))}catch(e){}})});