$(document).ready(function() {

  /* Video Youtube
  ----------------------------------------------------------------------*/
  var shouldPlayVideo = $(window).width() > 450;

  if (shouldPlayVideo) {
    $('.bg-youtube-video .overlay').tubular({
      videoId: 'C5CSVSuUVxY',
      start: 3,
      mute: true
    });

  } else {
    $('.part-0').addClass('replacement-bg-youtube');
  }
});
