import gulp from 'gulp';
import definePrototypeKitGulpTasks from '@ons/prototype-kit/defineGulpTasks.js';

definePrototypeKitGulpTasks(gulp);
  
/* You can define specific gulp tasks here. Further instructions are in the README file. */ 

/* Task to build static files */
// const staticFileExtensions = ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mpeg'];
//   gulp.task('prototype-kit:build-static-files', () => {
//   return gulp
//     .src(`./src/**/*.{${staticFileExtensions.join(',')}}`)
//     .pipe(gulp.dest('./build'));
// });

/* Task to build user-defined JS files */
//   gulp.task('prototype-kit:build-js', () => {
//   return gulp
//     .src('./src/**/*.js')
//     .pipe(gulp.dest('./build'));
// });
