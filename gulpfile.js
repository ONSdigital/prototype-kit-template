import gulp from 'gulp';
import definePrototypeKitGulpTasks from '@ons/prototype-kit/defineGulpTasks.js';

definePrototypeKitGulpTasks(gulp);
  
/* Define specific gulp tasks in this section. Refer to the README file for additional instructions. */ 
/* Below are examples of tasks you can define */

/* Example1: Task to build static files */
// const staticFileExtensions = ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mpeg'];
//   gulp.task('prototype-kit:build-static-files', () => {
//   return gulp
//     .src(`./src/**/*.{${staticFileExtensions.join(',')}}`)
//     .pipe(gulp.dest('./build'));
// });

/* Example2: Task to build user-defined JS files */
//   gulp.task('prototype-kit:build-js', () => {
//   return gulp
//     .src('./src/**/*.js')
//     .pipe(gulp.dest('./build'));
// });

/* Example3: Task to link the JSON file to the autosuggest component locally */
// gulp.task('copy-json-files', () => {
//   return gulp.src('./src/**/**/**/*.json').pipe(gulp.dest('./build'));
//   });
  
//   gulp.task('build-json', gulp.series('copy-json-files'));
