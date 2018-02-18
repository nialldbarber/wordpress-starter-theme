// Plugins
const gulp 			= require('gulp'),
	  install 		= require('gulp-install'),
	  sass 			= require('gulp-sass'),
	  autoprefixer 	= require('gulp-autoprefixer'),
      mqSass 		= require('mq-sass'),
      concat 		= require('gulp-concat'),
      uglify 		= require('gulp-uglify'),
      rename 		= require('gulp-rename'),
      imagemin 		= require('gulp-imagemin');

// Theme Directory
const themeDirectory = 'wp-content/themes/starter-theme/',
	  relativeThemeDirectory = './' + themeDirectory;

// Paths
const paths = {
	styles: {
	    src: 'src/styles/**/*.scss',
	    dist: 'dist/styles/'
  	},
  	scripts: {
	    src: 'src/scripts/**/*.js',
	    dist: 'dist/scripts/'
  	},
  	img: {
	    src: 'src/img/*',
	    dist: 'dist/img/'
  	}
};

// Install Composer and all dependencies
gulp.src(['./composer.json'])
  .pipe(install());

// Styles
gulp.task('styles', () => {
	return  gulp.src(relativeThemeDirectory + paths.styles.src)
			.pipe(sass({        	
				includePaths: ['node_modules/mq-sass/stylesheets'],
				outputStyle: 'compressed'
			}).on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: ['last 6 versions'],
				cascade: false
			}))
			.pipe(gulp.dest(relativeThemeDirectory + paths.styles.dist));
});

// Scripts
gulp.task('scripts', () => {
	return 	gulp.src(relativeThemeDirectory + paths.scripts.src)
			.pipe(concat('main.js'))
			.pipe(gulp.dest(relativeThemeDirectory + paths.scripts.dist))
			.pipe(rename( {
				basename: "main",
				suffix: '.min'
			}))
			.pipe(uglify())			
			.pipe(gulp.dest(relativeThemeDirectory + paths.scripts.dist));
});

// Images
gulp.task('images', () => {
    return gulp.src(relativeThemeDirectory + paths.img.src)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(relativeThemeDirectory + paths.img.dist));
});

// Watch Task
gulp.task('watch', () => {
	gulp.watch(relativeThemeDirectory + paths.styles.src, ['styles']);
	gulp.watch(relativeThemeDirectory + paths.scripts.src, ['scripts']);
	gulp.watch(relativeThemeDirectory + paths.img.src, ['images']);
});

gulp.task('default', ['watch']);