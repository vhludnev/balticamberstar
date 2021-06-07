"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const htmlmin = require('gulp-htmlmin');
const webp = require('gulp-webp');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const critical = require('critical');
// const sourcemaps = require('gulp-sourcemaps');

const dist = "./dist/";

const crPages = ['index', 'mating', 'ourdogs', 'puppies', 'contact'];
const crList = {
	'.btn': ['display', 'font-size', 'height', 'line-height', 'padding', 'text-align', 'border']
}

// Setting the browser to support:
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

function criticalCSS(done) {
	crPages.forEach(async page => {
		await critical.generate({
			base: dist,
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


//Gulp task to clean output directory
gulp.task('cleaning', () => del(['dist/assets/css/**']));
//gulp.task('clean', () => del(['dist']));
//gulp.task('cleanCss', () => del(['dist/assets/css']));

//Gulp task to copy only assets folder
gulp.task('copy-assets-folder', () => {
	return gulp.src('./src/assets/**/*.*')
		.pipe(gulp.dest(dist + "assets"))
})

//Gulp task to convert image files to webp format
gulp.task('webp', () => {
	return gulp.src('./src/assets/img/*')
		.pipe(webp())
		.pipe(gulp.dest(dist + "assets/img"));
})

//Gulp task to minify CSS files
gulp.task('minify-css', () => {
	return gulp.src('./src/assets/css/main.css')
	  .pipe(cleanCSS({
		  debug: true,
		  compatibility: 'ie8',
		  level: {
			  1: {
				  specialComments: 0,
			  },
		  },
	  }))
	  .pipe(autoprefixer({
		  browsers: AUTOPREFIXER_BROWSERS
	  }))
	  .pipe(rename({
		  basename: 'main',
		  suffix: '-min',
	  }))
	  .pipe(gulp.dest(dist + "assets/css/"))
	
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
	//'copy-assets-folder',
	'cleaning',
	'pages',
	'build-prod-js',
	'critical',
	'minify-css'
	//'webp'
));