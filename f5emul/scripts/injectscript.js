function initYAPF5simylator() {

    const updtInterval = setInterval(goUpdate, 10000); //-- 30 ���
    let postsCount = $("table[id^='p_row_']").length;
    const pages = $('.row3:first tr:last td:first a[href!="#"]').length;

    function goUpdate() {
        window.postMessage({ type: "loadUpdatePost", url: window.location.href }, "*");
    }

    window.addEventListener("message", function(event) {
        if (event.source !== window) return;
        if (event.data.type && (event.data.type === "showUpdatePost")) {
            var _html = $(event.data.updtPost);
            var updtPosts = _html.find("table[id^='p_row_']");
            var updtPages = _html.find('.row3:first tr:last td:first a[href!="#"]');
            if (updtPages.length > pages) { //-- ���� ����� ��������
                if (confirm('���� ����� ��������, �������?')) {
                    window.location.href = updtPages.eq(updtPages.length - 2).attr("href");
                } else {
                    clearInterval(updtInterval); //-- ������ �� ��������� � ���������
                }
            }
            if (updtPosts.length <= postsCount) return;
            for (var i = postsCount; i < updtPosts.length; i++) {
                $('form[name="collect"]').append('<table width="100%" border="0" cellspacing="1" cellpadding="3" id="peep' + i + '" class="f5simylatorpost f5new">' + updtPosts.eq(i).html() + '</table>' + '<div class="darkrow1" style="height:5px"></div>');
            }
            postsCount += (updtPosts.length - postsCount);
            $('link[rel="shortcut icon"]').attr("href", event.data.favicon);

        }
    });

    $(".f5new").livequery("mouseover", function() {
        $(this).removeClass("f5new");
        if ($(".f5new").length === 0) $('link[rel="shortcut icon"]').attr("href", "/favicon.ico");
        return false;
    });

}