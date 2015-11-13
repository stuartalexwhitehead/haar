var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('latex', shell.task([
  'cd src && pdflatex -output-directory=../compiled/ haar'
]));

gulp.task('bibtex', shell.task([
  'cd compiled && bibtex haar'
]));

gulp.task('watch', function(){
  gulp.watch(['./**/*.tex', './**/*.bib'], ['latex', 'bibtex', 'latex']);
});

gulp.task('default', ['latex', 'watch']);