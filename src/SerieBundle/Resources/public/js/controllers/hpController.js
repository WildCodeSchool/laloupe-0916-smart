function hpController() {


    this.show = false;
    this.tvShows = [{
        'id': '001',
        'img': 'bundles/serie/assets/img/2176.png'
    }, {
        'id': '002',
        'img': 'bundles/serie/assets/img/dexter.jpg'
    }, {
        'id': '003',
        'img': 'bundles/serie/assets/img/Breaking-Bad.jpg'
    }, {
        'id': '004',
        'img': 'bundles/serie/assets/img/hannibal.jpg'
    }, {
        'id': '005',
        'img': 'bundles/serie/assets/img/got.jpg'
    }, {
        'id': '006',
        'img': 'bundles/serie/assets/img/walking-dead-ddotomen.jpeg'
    }, {
        'id': '007',
        'img': 'bundles/serie/assets/img/bigbang.jpg'
    }];

      $(document).ready(setTimeout(function() {
          $('.multi-item-carousel1').carousel({interval: false});
          $('.multi-item-carousel1 .item').each(function() {
              var next = $(this).next();
              if (!next.length) {
                  next = $(this).siblings(':first');
              }
              next.children(':first-child').clone().appendTo($(this));

              if (next.next().length > 0) {
                  next.next().children(':first-child').clone().appendTo($(this));
              } else {
                  $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
              }
          });
      }),0);
}
