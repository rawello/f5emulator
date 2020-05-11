function initYAPF5simylator() {
    let updtInterval = setInterval(goUpdate, 5000); //-- 30 ���
    let postsCount = ($("table[id^='p_row_']")).length;
    let pages = $('.row3:first tr:last td:first a[href!="#"]').length;


    function goUpdate() {
        window.postMessage(
            { type: "loadUpdatePost", url: window.location.href }, "*");
    }
    // function updte() {
    //     $('class#row3').html('class#row3');
    // }
    setInterval("updte()", 5000);
    window.addEventListener("message", function(event) {
        $('.f5new').hover(
            function () {
                $("#peep").removeClass("f5simylatorpost f5new");
            }
        )
        if (event.source !== window) {return;}
        if (event.data.type) {
            if (event.data.type === "showUpdatePost") {
                let _html = $(event.data.updtPost);
                let updtPosts = _html.find("table[id^='p_row_']");
                if (updtPosts == null){alert('ahtung');}
                let updtPages =
                    _html.find('.row3:first tr:last td:first a[href!="#"]');
                if (updtPages.length > pages) {
                    // if (confirm(`Cледующая страница доступна, перейти?`)) {
                    //     window.location.href =
                    //         updtPages.eq(updtPages.length - 2).attr("href");
                    // } else {
                    //     clearInterval(updtInterval);
                    // }
                    alert('Новая страница');
                }
                if (updtPosts.length <= postsCount) {return;}
                for (let i = postsCount; i < updtPosts.length; i++) {
                    $('form[name="collect"]').append(
                        '<table width="100%" ' +
                        'border="0" cellspacing="1" cellpadding="3" id="peep' +
                        // i +
                        '" class="f5simylatorpost f5new">' +
                        updtPosts.eq(i).html() + '</table>' +
                        '<div class="darkrow1" style="height:5px"></div>');
                }
                postsCount += (updtPosts.length - postsCount);
                $('link[rel="shortcut icon"]').attr("href", event.data.favicon);
                if(postsCount => 1)
                {
                    alert('Новый пост');
                }
            }
        }
    });
    // $("f5simylatorpost f5new").mouseover(function() {
    //     alert('ahtung');
    // $(class{"f5simylatorpost f5new"}).css("background-color", "lightgray");
    //   (this).removeClass("f5simylatorpost f5new");
    // if ($(".f5new").length === 0)
    // $('link[rel="shortcut icon"]').attr("href", "/favicon.ico");
    // return false;
    // }
    // )
}

