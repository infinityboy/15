/**
 * Created by admin on 2016/5/6.
 */
'use strict';
window.Jn = {};
var cacheData = null;
var htmlRev;
Jn.setData = function (data) {
    if (data.key == 'newsInitDetail') {
        renderData(data.content);
    }
};
Jn.addComment = function(reviewsData){
    isLoading = false;
    if (reviewsData.code == '10000') {
        renderData(reviewsData.data);
    }
};
Jn.changeFontSize = function(fontStype){
    var indent = $('.indent p');
    if(fontStype == 1){
        indent.css('font-size','76%');
    }else if(fontStype == 2){
    }else if(fontStype == 3){
        indent.css('font-size','124%');
    }else if(fontStype == 4){
        indent.css('font-size','136%');
    }else if(fontStype == 5){
        indent.css('font-size','148%');
    }
}

function getDatediff(timeStamp) {
    var result;
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var now = new Date().getTime();
    var diffValue = now - timeStamp;
    if (diffValue < 0) {
        return;
    }
    var dayBefore = diffValue / day;
    var hourBefore = diffValue / hour;
    var minBefore = diffValue / minute;
    if (dayBefore >= 1) {
        var date = new Date(timeStamp);
        result =  (date.getMonth() + 1) + '-' + date.getDate();
    }
    else if (hourBefore >= 1) {
        result = "" + parseInt(hourBefore) + "小时前";
    }
    else if (minBefore >= 1) {
        result = "" + parseInt(minBefore) + "分钟前";
    } else {
        result = "刚刚";
    }
    return result;
}

function moreReview(comments){
    var htmlRev = '';
    if(comments.length>0){
        $.each(comments,function(childIndex,childContent){
            if(comments.length > 1 && comments.length < 4){
                htmlRev += '<div class="reviews-children"><p class="child-title clearfix">' + (childIndex+1) +'.&ensp;'+ childContent.passport.nickname +  '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
            }else{
                if(childIndex == 0){
                    htmlRev += '<div class="reviews-children" ><p class="child-title">1.&ensp;'+ childContent.passport.nickname +  '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                }else if(childIndex > 0 && childIndex < comments.length-2){
                    htmlRev += '<div><div class="reviews-children center-more" style="display: none" ><p class="child-title clearfix">' + (childIndex+1) +'.&nbsp;'+ childContent.passport.nickname +  '</p><p class="child-content">' + childContent.content + '</p></div><a href="#" class="show-all-reviews"><p>显示全部评论</p></a></div>';
                } else if(childIndex == comments.length-2){
                    htmlRev += '<div class="reviews-children" ><p class="child-title clearfix">' + (comments.length-1) +'.&ensp;'+ childContent.passport.nickname + '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                }else if(childIndex == comments.length-1){
                    htmlRev += '<div class="reviews-children" ><p class="child-title clearfix">' + comments.length +'.&ensp;'+ childContent.passport.nickname +  '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                }

            }
        });
    }
}

function renderData(reviewsData){

    if (reviewsData) {
        htmlRev += '<div class="list"><h3>竞猜评论</h3><ul id="news_list">';
        htmlRev += '<section class="hot-reviews">';
        if(reviewsData.hots.length >= 5){
            $.each(reviewsData.hots, function (hotIdx, hotContent) {
                if(hotIdx<5){
                    htmlRev += '<div class="reviews-box">';
                    htmlRev += '<div class="reviews-header"><img src="' + hotContent.passport.img_url + '" alt=""/>' + '</div>';
                    htmlRev += '<div class="reviews-right">';
                    htmlRev += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                    htmlRev += '<span class="reviews-time">' + getDatediff(hotContent.create_time*1000) + '</span>';
                    moreReview(hotContent.comments);
                    htmlRev += '<p class="reviews-content">' + hotContent.content + '</p></div></div>';
                }
            });
        }else{
            if(reviewsData.hots.length == 0){
                $.each(reviewsData.comments, function (idx, content) {
                    if(idx<5){
                        htmlRev += '<div class="reviews-box">';
                        htmlRev += '<div class="reviews-header"><img src="' + content.passport.img_url + '" alt=""/>' + '</div>';
                        htmlRev += '<div class="reviews-right">';
                        htmlRev += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                        htmlRev += '<span class="reviews-time">' + getDatediff(content.create_time*1000) + '</span>';
                        moreReview(content.comments);
                        htmlRev += '<p class="reviews-content">' + content.content + '</p></div></div>';
                    }
                });
            }else if(reviewsData.hots.length > 0 &&reviewsData.hots.length<5 ){
                $.each(reviewsData.hots, function (hotIdx, hotContent) {
                        htmlRev += '<div class="reviews-box">';
                        htmlRev += '<div class="reviews-header"><img src="' + hotContent.passport.img_url + '" alt=""/>' + '</div>';
                        htmlRev += '<div class="reviews-right">';
                        htmlRev += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                        htmlRev += '<span class="reviews-time">' + getDatediff(hotContent.create_time*1000) + '</span>';
                        moreReview(hotContent.comments);
                        htmlRev += '<p class="reviews-content">' + hotContent.content + '</p></div></div>';
                });
                $.each(reviewsData.comments, function (idx, content) {
                    if(idx<5-reviewsData.hots.length){
                        htmlRev += '<div class="reviews-box">';
                        htmlRev += '<div class="reviews-header"><img src="' + content.passport.img_url + '" alt=""/>' + '</div>';
                        htmlRev += '<div class="reviews-right">';
                        htmlRev += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                        htmlRev += '<span class="reviews-time">' + getDatediff(content.create_time*1000) + '</span>';
                        moreReview(content.comments);
                        htmlRev += '<p class="reviews-content">' + content.content + '</p></div></div>';
                    }
                });
            }
        }
        //htmlRev += '</div></div>';

        htmlRev += '</section>';
    } else {
        htmlRev += '<div class="reviews-box"><img src="images/picture_2x.png>" alt=""></div>';
    }

    $('.reviews').html(htmlRev);
}

function renderData(data) {
    cacheData = data;
    var title = data.title ? data.title : '';
    var time = data.time ? data.time : '';
    var content = data.content ? data.content : '';

    var htmlStr = '<header><h1 class="title">' + title + '</h1>';
    htmlStr += '<div class="meta"><span class="date">' + time + '</span><span class="author color-blue ml5">';
    htmlStr += data.author + '</span></div></header>';

    htmlStr += '<div class="indent flat-content">' + content + '</div>';

    // 分享
    //try {
    //    var shareData = Jnapp.jn_getShare();
    //    if (typeof shareData == 'string') {
    //        shareData = $.parseJSON(shareData);
    //        htmlStr += '<div class="excerpt-share"><div class="video-excerpt"><div class="video-excerpt-tip"><img src="data:image/png;charset=utf-8;base64,'+ shareData.baseIcon+'" alt="loading..."/><p>' + shareData.title + '</p></div></div>';
    //    }
    //} catch (ex) {
    //
    //}
    htmlStr += '<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>'
    htmlStr += '<div class="maintext-share"><a href="#" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="#" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /></a><a href="#" class="maintext-share-qq"><img src="images/qq_zone.png" /></a><a href="#" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a></div></div>';
    //评论
    htmlStr += '<div class="reviews"></div>';
    Jnapp.jn_getComment("");


    var news_list = data.relate_news;
    if (news_list.length > 0) {
        htmlStr += '<div class="list"><h3>相关新闻</h3><ul id="news_list">';
        $.each(news_list, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="###" class="clearfix list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><div class="news-left"><p class="list-title">' + item.title + '</p>';

            if (item.tagColor && item.tagName) {
                htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-Color:' + item.tagColor + ';">' + item.tagName + '</span>';
            }
            if(item.comments){
                htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;' + item.comments + '</span>';
            }else{
                htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>';
            }


            if (item.updateTime) {
                htmlStr += '<span class="list-time">' + getDatediff(item.updateTime*1000) + '</span>';
            }
            //dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

            htmlStr += '</div><div class="news-right"><img class="fl" src="' + item.thumbnail + '"/></div></a></li>';
        });

        htmlStr += '</ul></div><section class="line"></section>';
    }
    $('#newsDetail').html(htmlStr);
    //$('.indent p strong').parent().css('margin','1.5rem 0 1.25rem 0');
    $('.indent p img').parent().css({'padding':'0','margin':'1.5rem 0'});
}

$(function () {
      //$.ajax({
      //   url: 'data/news.json',
      //   type: "GET",
      //   dataType: 'json',
      //   success: function (str) {
      //       renderData(str.data);
      //   },
      //   error: function (err) {
      //       //alert('失败:' + err);
      //   }
      //});

    // 相关新闻
    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (e) {

        }
    });

    // 图片查看大图
    $(document).on('click', '.flat-content img', function (e) {
        e.preventDefault();
        var title = $(this).attr('alt');
        title = title ? title : '';
        try {
            Jnapp.jn_image($(this).attr('src'), title, '');
        } catch (e) {

        }
    });

    // 微博
    $(document).on('click', '.maintext-share-weibo', function (e) {
        e.preventDefault();
        shareBegin(0);
    });

    // 微信
    $(document).on('click', '.maintext-share-weixin', function (e) {
        e.preventDefault();
        shareBegin(1);
    });

    // 朋友圈
    $(document).on('click', '.maintext-share-frident', function (e) {
        e.preventDefault();
        shareBegin(2);
    });

    //qq
    $(document).on('click', '.maintext-share-qq-space', function (e) {
        e.preventDefault();
        shareBegin(3);
    });

    //空间
    $(document).on('click', '.maintext-share-qq', function (e) {
        e.preventDefault();
        shareBegin(4);
    });

    function shareBegin(type) {
        try {
            var thumbnail = cacheData.thumbnail;
            var title = cacheData.title;
            var content = cacheData.excerpt;
            var url = cacheData.shareUrl;
            Jnapp.jn_share(type, thumbnail, title, content, url);
        } catch (e) {

        }
    }

});