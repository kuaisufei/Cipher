var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');
var revAll = require('gulp-rev-all'); 


gulp.task('jsmin',function(){
    gulp.src(["js/crypto-js.js","js/pad-pkcs7.js","js/aes.js","js/jsencrypt.min.js","js/md5.js","js/index.js","js/index.js"])
        .pipe(concat("cipher.js"))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch',function(){
    gulp.watch('js/*.js',['jsmin']);
});

gulp.task('default' ,function(){  
    gulp.start('jsmin','watch');
});