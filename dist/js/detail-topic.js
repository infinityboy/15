"use strict";function getDatediff(e){var s,t=6e4,a=60*t,i=24*a,n=(new Date).getTime(),c=n-e;if(!(0>c)){var l=c/i,r=c/a,p=c/t;if(l>=1){var o=new Date(e);s=o.getMonth()+1+"-"+o.getDate()}else s=r>=1?""+parseInt(r)+"小时前":p>=1?""+parseInt(p)+"分钟前":"刚刚";return s}}function renderData(e,s){function t(e,s){e.length>0&&$.each(e,function(t,i){e.length>1&&e.length<4?p+='<div class="reviews-children"><p class="child-title clearfix">'+(t+1)+"&ensp;"+i.passport.nickname+'<span class="nickname-right">'+a(i,Jnapp.jn_getLikeStatus(i.comment_id),s)+'</span></p><p class="child-content">'+i.content+"</p></div>":0==t?p+='<div class="reviews-children" ><p class="child-title">1&ensp;'+i.passport.nickname+'<span  class="nickname-right">'+a(i,Jnapp.jn_getLikeStatus(i.comment_id),s)+'</span></p><p class="child-content">'+i.content+"</p></div>":t>0&&t<e.length-2?p+='<div><div class="reviews-children center-more" style="display: none" ><p class="child-title clearfix">'+(t+1)+".&nbsp;"+i.passport.nickname+'</p><p class="child-content">'+i.content+'</p></div><a href="#" class="show-all-reviews"><p>显示全部评论</p></a></div>':t==e.length-2?p+='<div class="reviews-children" ><p class="child-title clearfix">'+(e.length-1)+"&ensp;"+i.passport.nickname+'<span  class="nickname-right">'+a(i,Jnapp.jn_getLikeStatus(i.comment_id),s)+'</span></p><p class="child-content">'+i.content+"</p></div>":t==e.length-1&&(p+='<div class="reviews-children" ><p class="child-title clearfix">'+e.length+"&ensp;"+i.passport.nickname+'<span  class="nickname-right">'+a(i,Jnapp.jn_getLikeStatus(i.comment_id),s)+'</span></p><p class="child-content">'+i.content+"</p></div>")})}function a(e,s,t){var a;return"0"==s?a='<a href="#" class="reviews-zan" data-topic="'+t+'" data-comment="'+e.comment_id+'"><span>'+e.support_count+'</span><img src="images/review-zan_2x.png" alt=""></a>':"1"==s&&(a='<a href="#" class="reviews-zan reviewed" data-topic="'+t+'" data-comment="'+e.comment_id+'"><span>'+e.support_count+'</span><img src="images/review-click-zan_2x.png" alt=""></a>'),a}cacheData=e;var i=e.title?e.title:"",n=e.content?e.content:"",c=e.banner,l=e.avatar,r="",p="";renderRevData=function(e,s){p+='<div class="list"><h3>精彩评论</h3><ul id="news_list">',e?(p+='<section class="hot-reviews">',e.hots.length>=5?($.each(e.hots,function(e,i){5>e&&(p+='<div class="reviews-box">',p+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',p+='<div class="reviews-right">',p+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right">'+a(i,Jnapp.jn_getLikeStatus(i.comment_id),s)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',p+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",t(i.comments,s),p+='<p class="reviews-content">'+i.content+"</p></div></div>")}),p+='</section><a href="#" class="get_more-review"><p>查看更多评论</p></a></div>'):0==e.hots.length?e.comments.length>0?($.each(e.comments,function(e,i){5>e&&(p+='<div class="reviews-box">',p+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',p+='<div class="reviews-right">',p+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right">'+a(i,Jnapp.jn_getLikeStatus(i.comment_id),s)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',p+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",t(i.comments,s),p+='<p class="reviews-content">'+i.content+"</p></div></div>")}),p+='</section><a href="#" class="get_more-review"><p>查看更多评论</p></a></div>'):p+='<div class="reviews-box"  style="padding-bottom: 1rem;display:flex;flex-direction:column;justifycontent:center;align-item:center;" ><img src="images/picture_2x.png" alt="" style="height: 6.25rem; margin:0 auto;display:block;" /><a style="display:block;"class="soft-t" href="##"><p class="soft" style="font-size:0.9rem;color:#999999;margin-top:0.75rem;text-align: center">快来抢沙发吧</p></a></div></div>':e.hots.length>0&&e.hots.length<5&&($.each(e.hots,function(e,i){p+='<div class="reviews-box">',p+='<div class="reviews-header"><img src="'+i.passport.img_url+'" alt=""/></div>',p+='<div class="reviews-right">',p+='<p class="clearfix"><span class="reviews-name">'+i.passport.nickname+'</span><span class="nickname-right">'+a(i,Jnapp.jn_getLikeStatus(i.comment_id),s)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',p+='<span class="reviews-time">'+getDatediff(i.create_time)+"</span>",t(i.comments,s),p+='<p class="reviews-content">'+i.content+"</p></div></div>"}),e.comments.length>0&&$.each(e.comments,function(i,n){i<5-e.hots.length&&(p+='<div class="reviews-box">',p+='<div class="reviews-header"><img src="'+n.passport.img_url+'" alt=""/></div>',p+='<div class="reviews-right">',p+='<p class="clearfix"><span class="reviews-name">'+n.passport.nickname+'</span><span class="nickname-right">'+a(n,Jnapp.jn_getLikeStatus(n.comment_id),s)+'<a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>',p+='<span class="reviews-time">'+getDatediff(n.create_time)+"</span>",t(n.comments,s),p+='<p class="reviews-content">'+n.content+"</p></div></div>")}),p+='</section><a href="#" class="get_more-review"><p>查看更多评论</p></a></div>')):p+='<div class="reviews-box"  style="padding-bottom: 1rem;display:flex;flex-direction:column;justifycontent:center;align-item:center;" ><img src="images/picture_2x.png" alt="" style="height: 6.25rem; margin:0 auto;display:block;" /><a style="display:block;"class="soft-t" href="##"><p class="soft" style="font-size:0.9rem;color:#999999;margin-top:0.75rem;text-align: center">快来抢沙发吧</p></a></div></div>',$(".reviews").html(p)},r+='<div class="allcontain detailWrap" style=""><div class="banner"><img src="'+c+'" alt=""></div>',r+='<div class="container"><div class="wrap"><div class="left"><div class="details"><h1>'+i+'</h1><div class="detailsTit">',r+='<div class="pic"><img src="'+l+'"></div>',r+='<div class="ti">作者'+e.author+"</div>",e.time&&(r+='<span class="art-time"><i></i>'+time+"</span>"),r+="</div>",r+='<div class="indent">'+n+"</div>",r+="</div></div></div></div>",r+='<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>',r+='<div class="maintext-share"><a href="#" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="#" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="#" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /></a><a href="#" class="maintext-share-qq"><img src="images/qq_zone.png" /></a><a href="#" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a></div></div>',r+='<div class="reviews"></div>';try{Jnapp.jn_getComment("","")}catch(o){}e.pastlist.length>0&&(r+='<div class="list"><h3>往期回顾</h3><ul id="news_list">',$.each(e.pastlist,function(e,s){r+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+s.articleType+'" data-id="'+s.extra+'"><div class="news-left"><p class="list-title">'+s.title+"</p>",r+=s.comments?'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;'+s.comments+"</span>":'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>',s.tagColor&&s.tagName&&(r+='<span class="list-tag">'+s.tagName+"</span>"),s.updateTime&&(r+='<span class="list-time">'+getDatediff(1e3*s.updateTime)+"</span>"),r+='</div><div class="news-right clearfix"><img class="fl" src="'+s.thumbnail+'"/></div></a></li>'}),r+="</ul></div>"),$("#content").html(r);var m=$(".indent p");1==s?m.css("font-size","89%"):2==s?m.css("font-size","130%"):3==s?m.css("font-size","160%"):4==s?m.css("font-size","180%"):5==s&&m.css("font-size","200%")}window.Jn={};var cacheData=null,renderRevData;Jn.setData=function(e){"topicInitDetail"==e.key&&renderData(e.content,e.fontSize)},Jn.addComment=function(e){"10000"==e.code&&renderRevData(e.data,e.data.topic_id)},Jn.changeFontSize=function(e){var s=$(".indent p");"1"==e?s.css("font-size","89%"):"2"==e?s.css("font-size","130%"):"3"==e?s.css("font-size","160%"):"4"==e?s.css("font-size","180%"):"5"==e&&s.css("font-size","200%")},$(function(){function e(e){try{var s=cacheData.thumbnail,t=cacheData.title,a=cacheData.excerpt,i=cacheData.shareUrl;Jnapp.jn_share(e,s,t,a,i)}catch(n){}}$(document).on("click",".detailsCon img",function(e){e.preventDefault();var s=$(this).attr("alt");s=s?s:"";try{Jnapp.jn_image($(this).attr("src"),s,"")}catch(e){}}),$(document).on("click",".maintext-share-weibo",function(s){s.preventDefault(),e(0)}),$(document).on("click",".maintext-share-weixin",function(s){s.preventDefault(),e(1)}),$(document).on("click",".maintext-share-frident",function(s){s.preventDefault(),e(2)}),$(document).on("click",".maintext-share-qq-space",function(s){s.preventDefault(),e(3)}),$(document).on("click",".maintext-share-qq",function(s){s.preventDefault(),e(4)}),$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(e){}}),$(document).on("click",".show-all-reviews",function(e){e.preventDefault(),$(this).hide(),$(".center-more").show()}),$(document).on("click",".nickname-right .reviews-replay,.get_more-review,.soft-t",function(e){e.preventDefault();try{Jnapp.jn_showPage(202)}catch(e){}}),$(document).on("click",".nickname-right .reviews-zan",function(e){e.preventDefault();var s=$(this).data("topic"),t=$(this).data("comment"),a=1*$(this).find("span").text()+1,i=$(".nickname-right a[data-comment='"+t+"']");try{"images/review-zan_2x.png"==$(this).find("img").attr("src")&&(Jnapp.jn_clickLike(s+"",t+""),$.each(i,function(e,s){$(s).addClass("reviewed"),$(s).find("img").attr("src","images/review-click-zan_2x.png"),$(s).find("span").text(a)}))}catch(e){}})});