$.noConflict();
jQuery(document).ready(($) => {
    let count = 0;
    $('#burger, #cross, #opacity').on('click', () => {
        count++;
        if (count % 2 == 1) {
            $('#burger-wrap').css({ height: '110px' });
            $('#opacity').css({ visibility: 'visible', opacity: '1' });
        } else {
            $('#burger-wrap').css({ height: '0' });
            $('#opacity').css({ opacity: '0' });
            setTimeout(() => {
                $('#opacity').css({ visibility: 'hidden' });
            }, 500);
        }
    })

    $('.slider').slick({
        mobileFirst: true,
    })
    
});
