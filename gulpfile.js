"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const htmlmin = require('gulp-htmlmin');
const less = require('gulp-less');
const webp = require('gulp-webp');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const critical = require('critical');
//const sourcemaps = require('gulp-sourcemaps');
//const sass = require('gulp-sass');

// Setting the browser to support:
// const AUTOPREFIXER_BROWSERS = [
//   'ie >= 10',
//   'ie_mob >= 10',
//   'ff >= 30',
//   'chrome >= 34',
//   'safari >= 7',
//   'opera >= 23',
//   'ios >= 7',
//   'android >= 4.4',
//   'bb >= 10'
// ];

const dist = "./dist/";

const crPages = ['index', 'mating', 'ourdogs', 'puppies', 'contact'];
const crList = {
	'.btn': ['display', 'font-size', 'height', 'line-height', 'padding', 'text-align', 'border']
}

function criticalCSS(done) {
	crPages.forEach(async page => {
		await critical.generate({
			base: dist,
			src: `${page}.html`,
			css: ['./assets/css/main.css'],
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

gulp.task("copy-html", () => {
	return gulp.src("./src/*.html")
		.pipe(gulp.dest(dist))
		.pipe(browsersync.stream());
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
		.pipe(gulp.dest(dist))
		.on("end", browsersync.reload);
});

gulp.task("copy-assets", () => {
	return gulp.src("./src/assets/**/*.*")
		.pipe(gulp.dest(dist + "/assets"))
		.on("end", browsersync.reload);
});

gulp.task("watch", () => {
	browsersync.init({
		server: {
			baseDir: "./dist/",
			serveStaticOptions: {
				extensions: ["html"]
			}
		},
		port: 4000,
		notify: true
	});

	gulp.watch("./src/*.html", gulp.parallel("copy-html"));
	gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
	gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js"));

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
		.pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));


// Gulp task to minify CSS files
// gulp.task('styles', () => {
//   return gulp.src('./src/assets/css/main.css')
//     // Auto-prefix css styles for cross browser compatibility
//     .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
//     // Minify the file
//     .pipe(csso())
//     // Output
//     .pipe(gulp.dest('./dist/assets/css'))
// });

//Gulp task to clean output directory
gulp.task('clean', () => del(['dist']));

gulp.task('cleaning', () => del(['dist/assets/css/**', 'dist/assets/less']));
gulp.task('cleanCss', () => del(['dist/assets/css']));
gulp.task('cleanLess', () => del(['dist/assets/less']));

//Gulp task to copy only assets folder
gulp.task('copy-assets-folder', () => {
	return gulp.src('./src/assets/**/*.*')
		.pipe(gulp.dest(dist + "/assets"))
})

//Gulp task to convert image files to webp format
gulp.task('webp', () => {
	return gulp.src('./src/assets/img/*')
		.pipe(webp())
		.pipe(gulp.dest('./dist/assets/img'));
})

//Gulp task to minify CSS files
gulp.task('minify-css', () => {
	return gulp.src('./dist/assets/css/main.css')
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest(dist + "/assets/css"));
});

gulp.task('css', () => {
	return gulp.src('./src/assets/css/main.less')
		.pipe(less())
		.pipe(gcmq())
		.pipe(gulp.dest(dist + "/assets/css"));
});

//Gulp task to minify HTML files
gulp.task('pages', () => {
	return gulp.src("./src/**/*.html")
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist'));
});


// Gulp task to minify all files
gulp.task('build-final', gulp.series(
	//'clean',
	//'copy-assets-folder',
	'cleaning',
	//'cleanLess',
	'pages',
	'build-prod-js',
	'css',
	'critical',
	'minify-css'
	//'webp'
));