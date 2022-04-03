     //modal
     $(document).ready(function () {
     $('.navbar-text').on('click',function(){
        $('#loginModal').modal('show');
    } );
    
    $('#reservetable2').on('click',function(){
            $('#reservetable').modal('show');
    });
    $('.close').on('click',function(){
        $('#reservetable').modal('hide');
        $('#loginModal').modal('hide');
    });

        //corousel
        $('#mycarousel').carousel({ interval: 200 });
        $('#carouselButton').click(function () {
            if ($('#carouselButton').children('span').hasClass('fa-pause')) {
                $('#mycarousel').carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');
            } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
                $('#mycarousel').carousel('cycle');
                $('#carouselButtton').children('span').removeClass('fa-play');
                $('#carouselButton').children('span').addClass('fa-pause'); s
            }

        });

    });