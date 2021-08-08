const gulp        = require('gulp');
const browserSync = require('browser-sync');
const webpack = require("webpack-stream");
//const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
//const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const critical = require('critical');


const crPages = ['index', 'mating', 'ourdogs', 'puppies', 'contact', 'policy'];
const crList = {
	'.btn': ['display', 'font-size', 'height', 'line-height', 'padding', 'text-align', 'border']
}

function criticalCSS(done) {
	crPages.forEach(async page => {
		await critical.generate({
			base: 'dist/',
			src: `${page}.html`,
			css: ['./assets/css/main-min.css'],
			target: {
				css: `./assets/css/${page}-critical.css`,
				//uncritical: `css/${page}-async.css`
			},
			width: 1280,
			height: 480,
			include: [
				'.footer'
			],
			ignore: {
				atrule: ['@font-face'],
				rule: [
					/body/, /html/
				],
				decl(node, value) {
					let {
						selector
					} = node.parent;

					if (!(selector in crList)) {
						return false;
					}

					return !crList[selector].includes(node.prop);
				}
			}
		});
	});

	done();
}
gulp.task("critical", criticalCSS);

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task("build-js", () => {
	return gulp.src("./src/js/main.js")
		.pipe(webpack({
			mode: 'development',
			output: {
				filename: 'script.js'
			},
			watch: false,
			devtool: "source-map",
			module: {
				rules: [{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									debug: true,
									corejs: 3,
									useBuiltIns: "usage"
								}]
							]
						}
					}
				}]
			}
		}))
		.pipe(gulp.dest("dist/"))
		.on("end", browserSync.reload);
});

gulp.task("build-prod-js", () => {
	return gulp.src("./src/js/main.js")
		.pipe(webpack({
			mode: 'production',
			output: {
				filename: 'script.js'
			},
			module: {
				rules: [{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									corejs: 3,
									useBuiltIns: "usage"
								}]
							]
						}
					}
				}]
			}
		}))
		.pipe(gulp.dest("dist/"));
});


// gulp.task('styles', function() {
//     return gulp.src("src/assets/css/**/*.+(scss|sass)")
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(rename({suffix: '.min', prefix: ''}))
//         .pipe(autoprefixer())
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(gulp.dest("dist/css"))
//         .pipe(browserSync.stream());
// });

gulp.task('minify-css', () => {
	return gulp.src('./src/assets/css/main.css')
		.pipe(rename({suffix: '-min', prefix: ''}))
		.pipe(autoprefixer())
		// .pipe(rename({
		// 	basename: 'main',
		// 	suffix: '-min',
		// }))
		.pipe(cleanCSS({
				debug: true,
				compatibility: 'ie8',
				level: {
					1: {
						specialComments: 0,
					},
				},
			}))
		.pipe(gulp.dest("dist/assets/css/"))
		.pipe(browserSync.stream());
});

gulp.task('watch', function() {
    //gulp.watch("src/assets/**/*.+(scss|sass)", gulp.parallel('styles'));
	gulp.watch("src/assets/**/*.css", gulp.parallel('critical'));
	gulp.watch("src/assets/**/*.css", gulp.parallel('minify-css'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('build-js'));
    gulp.watch("src/assets/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/assets/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/assets/img/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

// gulp.task('scripts', function () {
//     return gulp.src("src/js/**/*.js")
//         .pipe(gulp.dest("dist/js"))
//         .pipe(browserSync.stream());
// });

gulp.task('fonts', function () {
    return gulp.src("src/assets/fonts/**/*")
        .pipe(gulp.dest("dist/assets/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("src/assets/icons/**/*")
        .pipe(gulp.dest("dist/assets/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/assets/img/**/*")
        /* .pipe(imagemin()) */
        .pipe(gulp.dest("dist/assets/img"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'critical', 'minify-css', 'build-js', 'fonts', 'icons', 'html', 'images'));