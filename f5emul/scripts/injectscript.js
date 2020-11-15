function initYAPF5simylator() {
    let updtInterval = setInterval(goUpdate, 5000);
    let postsCount = ($("table[id^='p_row_']")).length;
    let pages = $('.row3:first tr:last td:first a[href!="#"]').length;
    function goUpdate() {
        window.postMessage({ type: "loadUpdatePost", url: window.location.href }, "*");}
    setInterval("updte()", 5000);
    window.addEventListener("message", function(event) {
        $('.f5new').hover(
            function() {
                $("#peep1").removeClass("f5simylatorpost f5new");
                $("#peep2").removeClass("f5simylatorpost f5new");
                $("#peep3").removeClass("f5simylatorpost f5new");
                $("#peep4").removeClass("f5simylatorpost f5new");
                $("#peep5").removeClass("f5simylatorpost f5new");
                $("#peep6").removeClass("f5simylatorpost f5new");
                $("#peep7").removeClass("f5simylatorpost f5new");
                $("#peep8").removeClass("f5simylatorpost f5new");
                $("#peep9").removeClass("f5simylatorpost f5new");
                $("#peep10").removeClass("f5simylatorpost f5new");
                $("#peep11").removeClass("f5simylatorpost f5new");
                $("#peep12").removeClass("f5simylatorpost f5new");
                $("#peep13").removeClass("f5simylatorpost f5new");
                $("#peep14").removeClass("f5simylatorpost f5new");
                $("#peep15").removeClass("f5simylatorpost f5new");
                $("#peep16").removeClass("f5simylatorpost f5new");
                $("#peep17").removeClass("f5simylatorpost f5new");
                $("#peep18").removeClass("f5simylatorpost f5new");
                $("#peep19").removeClass("f5simylatorpost f5new");
                $("#peep20").removeClass("f5simylatorpost f5new");
                $("#peep21").removeClass("f5simylatorpost f5new");
                $("#peep22").removeClass("f5simylatorpost f5new");
                $("#peep23").removeClass("f5simylatorpost f5new");
                $("#peep24").removeClass("f5simylatorpost f5new");
                $("#peep25").removeClass("f5simylatorpost f5new");
                $("#peep26").removeClass("f5simylatorpost f5new");
            }
        )
        if (event.source !== window) { return; }
        if (event.data.type) {
            if (event.data.type === "showUpdatePost") {
                let _html = $(event.data.updtPost);
                let updtPosts = _html.find("table[id^='p_row_']");
                let updtPages =
                    _html.find('.row3:first tr:last td:first a[href!="#"]');
                if (updtPages.length > pages) 
                {
                          if(confirm('Доступна новая страница, перейти?')) {
                        window.location.href=updtPages.eq(updtPages.length-2).attr("href");
                    } else {
                        clearInterval(updtInterval);
                    }
                }
                if (updtPosts.length <= postsCount) { return; }
                for (let i = postsCount; i < updtPosts.length; i++) {
                    $('form[name="collect"]').append('<table width="100%" ' 
                                                     + 'border="0" cellspacing="1" cellpadding="3" id="peep'
                                                     + i
                                                     + '" class="f5simylatorpost f5new">' 
                                                     + updtPosts.eq(i).html() 
                                                     + '</table>' 
                                                     + '<div class="darkrow1" style="height:5px"></div>');}
                postsCount += (updtPosts.length - postsCount);
                $('link[rel="shortcut icon"]').attr("href", event.data.favicon);
                if (postsCount => 1) {alert('Новый пост');}
            }
        }
    });
}
