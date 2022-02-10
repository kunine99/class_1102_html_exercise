$(document).ready(function () {

    //fetchAll 很多個
    // const navLinkList = document.querySelectorAll('.navbar .nav-link');
    const navLinkList = $('.navbar .nav-link');
    console.log('navLinkList', navLinkList);

    // const navbar = document.getElementById('navbar')
    const navbar = $('#navbar');
    console.log('navbar', navbar);
    // console.log('navbar', navbar[0]);

    // const scrollReport = document.getElementById('scrollReport')
    const scrollReport = $('#scrollReport');
    console.log('scrollReport', scrollReport);

    //透過forEach 取出 navLinkList 所有的dom

    const navigationTable = {};

    //jquery 為jquery object 需使用each()
    //w3schools misc 裡面可以查詢使用方法
    navLinkList.each(function (key) {
        const sectionID = $(this).data('target');
        console.log(sectionID);
        navigationTable[sectionID] = {
            link: $(this),
            // section: $('#' + sectionID),
            section: $(`#${sectionID}`),
        };
    });
    console.log('navigationTable', navigationTable);


    window.addEventListener('scroll', function () {
        // console.log('window',window);
        const y = Math.round(window.scrollY + navbar.height());
        // console.log('navbar',navbar.height())
        // scrollReport.innerText = `目前所在的位置${y}`;
        scrollReport.text( `目前所在的位置${y}`);
        // console.log(`目前所在的位置${y}`);

        for (const key in navigationTable) {
            // console.log('navigationTable[key]',navigationTable[key]);
            const link = navigationTable[key].link;
            const section = navigationTable[key].section;
            // console.log('link',link);
            // console.log('section',section);

            //section top
            // const top = section.offset().top;
            //section bottom
            // const bottom = top + section.height();

            if (y > top && y < bottom) {
                link.addClass('text-warning');
                section.addClass('is-active');
            } else {
                link.removeClass('text-warning');
                section.removeClass('is-active');
            }
        }

    });

});