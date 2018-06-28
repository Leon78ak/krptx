'use strict';

module.exports = function () {
  $.gulp.task('copy:image', function() {
    return $.gulp.src('source/img/**/*.*', {
      base: 'source'
    },
    {
      since: $.gulp.lastRun('copy:image')
    })
    .pipe($.gulp.dest('build'));
  });
};
