var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('latex', shell.task([
  'cd src && pdflatex -output-directory=../compiled/ haar'
]));

gulp.task('bibtex', shell.task([
  'cd compiled && bibtex haar'
]));

gulp.task('compile', ['latex', 'bibtex', 'latex']);

gulp.task('watch', function(){
  gulp.watch(['./**/*.tex', './**/*.bib'], ['compile']);
});

gulp.task('default', ['compile', 'watch']);