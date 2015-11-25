var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('latex', shell.task([
  'cd src && pdflatex -output-directory=../compiled/ haar'
]));

gulp.task('bibtex', shell.task([
  'cd compiled && bibtex haar'
]));

gulp.task('spellcheck', function(){
  return gulp.src('./**/*.tex', {read: false})
    .pipe(shell([
      'echo <%= file.path %>',
      'hunspell -l -t -i utf-8 -p hunspell.dic <%= file.path %>'
    ]))
});

gulp.task('count', shell.task([
	'cd src && latexpand --output=../compiled/expanded.tex haar.tex',
	'texcount compiled/expanded.tex'
]));

gulp.task('compile', ['latex', 'bibtex', 'latex']);

gulp.task('watch', function(){
  gulp.watch(['./**/*.tex', './**/*.bib'], ['compile']);
});

gulp.task('default', ['compile', 'watch']);