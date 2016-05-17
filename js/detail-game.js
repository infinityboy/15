'use strict';

window.Jn = {};
var cacheData = null;

Jn.setData = function (data) {
    if (data.key == 'gameInitDetail') {
        renderData(data.content);
    }
};

function renderData(data) {
    cacheData = data;
    var htmlStr = '<header><section class="header-scores">';
    htmlStr += '<img class="header-scores-logo1eft" src="' + data.teamA.logo + '"/>';
    htmlStr += '<div><span class="header-scores-left"><b>' + data.teamA.score + '</b></span>';
    htmlStr += '<span class="header-scores-midele"><b>:</b></span>';
    htmlStr += '<span class="header-scores-right"><b>' + data.teamB.score + '</b></span></div> ';
    htmlStr += '<img class="header-scores-logoright" src="' + data.teamB.logo + '"/> ';
    htmlStr += '</section> <section class="header-teams"> ';
    htmlStr += '<span class="header-teams-left">' + data.teamA.name + '</span> ';
    htmlStr += '<div class="header-teams-middle"><span>' + data.gameTime + '</span></div> ';
    htmlStr += '<span class="header-teams-right">' + data.teamB.name + '</span> </section> <section class="ProgressBar clearFix"> ';

    // 单元长度为15px
    var leftItemLength = data.teamA.score * 15;
    var rightItemLength = data.teamB.score * 15;

    htmlStr += '<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:' + leftItemLength + 'px"></div></div> <div class="ProgressBar-tag">';
    htmlStr += '<img src="images/matchdetail_image_redbule.png"/></div>';
    htmlStr += '<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:' + rightItemLength + '"></div></div> </section>';
    htmlStr += '<section class="supporters"> <img class="supporters-leftlogo" ';
    htmlStr += 'src="images/matchdetail_ic_support.png"/> ';
    htmlStr += '<p class="supporters-leftNumber supp"id="supporters-leftNumber">' + data.teamA.support_numbber + '</p>';
    htmlStr += '<p class="supporters-gameintro">' + data.title + '</p> ';
    htmlStr += '<p class="supporters-rightNumber supp"id="supporters-rightNumber">' + data.teamB.support_numbber + '</p> ';
    htmlStr += '<img class="supporters-rightlogo" src="images/matchdetail_ic_support.png"/> </section> ';
    htmlStr += '<section class="header-bottomline"></section> </header>';


    //图文直播
    if (data.relateArticle.length > 0) {
        htmlStr += '<section class="live-byword"> <h2>图文直播</h2> ';
        htmlStr += '<section class="live-byword-listbox"> <ul>';
        $.each(data.relateArticle, function (index, item) {
            htmlStr += '<li> <div class="innerbox"><div class="live-byword-list .clearFix"> ';
            htmlStr += '<a href="##" class="live-byword-listimg"><img src="' + item.avatar + '"/> </a>';
            htmlStr += '<div class="fl live-byword-list-games" > ';
            htmlStr += '<p class="live-byword-list-name">' + item.author + '</p> ';
            htmlStr += '<p class="live-byword-list-time">' + item.round + '<span>' + '&nbsp;' + '' + item.time + '</span></p></div></div> ';
            htmlStr += '<div class="live-byword-list-words"> ';
            htmlStr += '<p>' + item.content + '</p>';

            var itemImgs = data.relateArticle[index];
            if (itemImgs.images.length > 0) {
                htmlStr += '<div class="clearFix live-byword-list-words-images">';
                $.each(itemImgs.images, function (index, item) {
                    htmlStr += '<img class="fl" src="' + item + '"/>';
                });
                htmlStr += '</div> ';
            }
            htmlStr += '</div></div></li>';
        });
        htmlStr += '</ul> </section>';
        htmlStr += '</section> <section class="header-bottomline2"></section>';
    }

    //相关视频
    if (data.relateVideos.length > 0) {
        htmlStr += '<section class="gamelist"><h2>比赛视频</h2> <ul> ';

        $.each(data.relateVideos, function (index, item) {
            htmlStr += '<li class="clearFix video-recommend" data-type="' + item.articleType + '" data-id="' + item.extra + '"> <img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += '<p class="gamelist-into-title">' + item.title + '</p> ';
            htmlStr += '<p class="gamelist-into-text">' + item.excerpt + '</p>';
            htmlStr += '<a style="color:' + item.tagColor + ';border-color:' + item.tagColor + ';">' + item.tagName + '</a></li>';
        });

        htmlStr += '</ul></section><section class="header-bottomline2"></section>';
    } else {
        htmlStr += '<section class="header-bottomline2"></section><section class="gamevedio"> ';
        htmlStr += '<h2>比赛视频</h2><img src="images/gamevedio.png">';
        htmlStr += '<p>LOL春季赛常规赛RNG VS Snake 第三场直播</p></section> ';
        htmlStr += '</section><section class="header-bottomline2"></section>';
    }

    //推荐视频
    if (data.recomendVideos.length > 0) {
        htmlStr += '<section class="gamenews"> <h2>相关新闻</h2><ul>';
        $.each(data.recomendVideos, function (index, item) {
            htmlStr += '<li class="clearFix related-news" data-type="' + item.articleType + '" data-id="' + item.extra + '"><div class="relanews clearFix">';
            htmlStr += '<img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += '<p class="gamenews-into-title">' + item.title + '</p>';
            htmlStr += '<p class="gamenews-into-text">' + item.excerpt + '</p>';
            htmlStr += '<span class="tag" style="color:' + item.tagColor + ';border-color:' + item.tagColor + ';">' + item.tagName + '</span></li>';
            htmlStr += '</div></div> </li> ';
        });
        htmlStr += ' </ul></section>';
    }

    //比赛数据
    if (data.gameContent.length > 0) {
        htmlStr += '<section class="header-bottomline2"></section><section class="game-data clearFix">';
        htmlStr += '<h2>数据</h2>';
        htmlStr += '<div  class="clearFix" id="roundlist">';

        var len = data.gameContent.length;
        var screen = document.documentElement.clientWidth;
        var itemWidth = screen / len;

        $.each(data.gameContent, function (index, item) {
            if (index == 0) {
                htmlStr += '<a href="##" class="roundspan3 on" data-id="' + index + '" style="width:' + itemWidth + 'px" >' + item.title + '</a>';
            } else {
                htmlStr += '<a href="##" class="roundspan3" data-id="' + index + '" style="width:' + itemWidth + 'px" >' + item.title + '</a>';
            }
        });

        htmlStr += '</div>';


        htmlStr += '<div class="data-details">';

        $.each(data.gameContent, function (index, item) {
            if (index == 0) {
                htmlStr += '<div class="data-content-item">';
            } else {
                htmlStr += '<div class="data-content-item" style="display: none">';
            }
            htmlStr += '<section class="gamedata-teams"><img class="gamedata-teams-logo1eft" ' + 'src="' + data.teamA.logo + '"/> ' +
                '<p class="gamedata-teams-duration">' + data.gameContent[index].time + '</p> ' +
                '<img class="gamedata-teams-logoright" src="' + data.teamB.logo + '"/></section> ';

            var itemList = item.dataList.list;

            $.each(itemList, function (index, subItem) {
                if (subItem.listType == 0) {
                    htmlStr += '<section class="game-data-select">';

                    htmlStr += '<div class="img-left">';
                    var leftArr = subItem.fieldData[0];
                    $.each(leftArr, function (index, imgItem) {
                        htmlStr += '<img class="game-data-select-logo1eft" src="' + imgItem + '"/>';
                    });
                    htmlStr += '</div>';

                    htmlStr += '<p class="game-data-select-word">' + itemList[0].fieldName + '</p>';

                    var rightArr = subItem.fieldData[1];
                    htmlStr += '<div class="img-right">';
                    $.each(rightArr, function (index, imgItem) {
                        htmlStr += '<img class="game-data-select-logo1eft" src="' + imgItem + '"/>';
                    });
                    htmlStr += '</div>';
                    htmlStr += ' </section>';

                } else if (subItem.listType == 1) {
                    // 计算单元长度
                    var leftBarLength = parseInt(subItem.fieldData[0]);
                    var rightBarLength = parseInt(subItem.fieldData[1]);

                    var leftBarWidth, rightBarWidth;
                    if (leftBarLength + rightBarLength > 100) {
                        leftBarWidth = leftBarLength * 100 / (leftBarLength + rightBarLength);
                        rightBarWidth = rightBarLength * 100 / (leftBarLength + rightBarLength)
                    } else {
                        leftBarWidth = leftBarLength;
                        rightBarWidth = rightBarLength
                    }

                    htmlStr += '<section class="conpares clearFix">';
                    htmlStr += '<div class="compares-bardetails clearFix">'
                    htmlStr += '<div class="earnmoney">' + subItem.fieldName + '</div>';
                    htmlStr += '<div class="compares-barleft" style="width:' + leftBarWidth + 'px"><span class="compares-bardetails-leftnum">' + subItem.fieldData[0] + '</span> </div>';
                    htmlStr += '<div class="compares-barmiddle"><img src="images/matchdetail_image_redbule.png"/></div>';
                    htmlStr += '<div class="compares-barright" style="width:' + rightBarWidth + 'px"><span class="compares-bardetails-rightnum">' + subItem.fieldData[1] + '</span></div>';
                    htmlStr += '</div>';
                    htmlStr += '</section>'
                }
            });

            htmlStr += '</div>';

        });
        htmlStr += '</div></section>';
    }
    htmlStr += '<section class="header-bottomline2"></section> ';
    $('#box').html(htmlStr);

}

$(function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';

    $.get('data/game-detail.json', function (res) {
        if (res.code == 10000) {
            renderData(res.data);
        }
    });


    $(document).on('click', '.video-recommend, .related-news', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id'));
        } catch (e) {

        }
    });

    //left 点赞支持
    $(document).on('click', '.supporters-leftlogo, .supporters-leftNumber', function () {
        var elem = $('#supporters-leftNumber');
        var number = parseInt(elem.html());
        //if (getCookie("sp-" + cacheData.dataId)) {
        //    return;
        //}
        try {
            number++;
            elem.html(number);
            //setCookie("sp-" + cacheData.dataId, number, 365);
            //Jnapp.jn_agree(7, cacheData.dataId, cacheData.teamB.teamId);
            Jnapp.jn_agree(7, 1212, 12);
        } catch (e) {

        }
    });

    // right 点赞支持
    $(document).on('click', '.supporters-rightlogo, .supporters-rightNumber', function () {
        var elem = $('#supporters-rightNumber');
        var number = parseInt(elem.html());
        //if (getCookie("sp-" + cacheData.dataId)) {
        //    return;
        //}
        try {
            number++;
            elem.html(number);
            //setCookie("sp-" + cacheData.dataId, number, 365);
            Jnapp.jn_agree(7, cacheData.dataId, cacheData.teamB.teamId);
        } catch (e) {
            alert('')
        }
    });


    //图文直播
    $('.live-byword-listbox ul').on('click', 'li', function (e) {
        console.log($(this).index());
        e.preventDefault();

    });


    $(document).on('click', 'a.roundspan3', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('on')) {
            var index = $(this).data('id');
            $(this).addClass('on').siblings('a').removeClass('on');
            $('.data-details > .data-content-item').eq(index).show().siblings().hide();
        }
    });
});