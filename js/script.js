document.addEventListener("DOMContentLoaded", function() {
    // فتح الروابط الخارجية في نافذة جديدة
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // التأكد من أن gtag جاهز قبل تسجيل النقرات
    if (typeof gtag !== 'undefined') {
        document.querySelectorAll("a").forEach(function(link) {
            link.addEventListener("click", function(event) {
                let clickedUrl = this.href; // الحصول على الرابط الذي تم النقر عليه
                console.log("تم النقر على الرابط:", clickedUrl); // عرض الرابط في Console للتأكد

                gtag('event', 'click', {
                    'event_category': 'روابط شخصية',
                    'event_label': clickedUrl // إرسال الرابط إلى Google Analytics
                });
            });
        });
    } else {
        console.warn("gtag غير محمل بعد، تأكد من تضمينه في <head>.");
    }
});
