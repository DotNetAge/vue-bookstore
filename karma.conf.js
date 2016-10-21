// Karma configuration
// Generated on Thu Oct 13 2016 16:51:27 GMT+0800 (CST)

module.exports = function(config) {

  config.set({
    
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      '"test/**/*spec.js"'
    ],
  
    preprocessors: {
            // add webpack as preprocessor
        'test/**/*spec.js': ['webpack', 'sourcemap']
    },

    webpack: {
        devtool: '#eval-source-map',
        module: {
            loaders: [
                {test: /\.vue$/, loader: "vue"},
                {test: /\.js/, loader: "babel"},
                {test: /\.html$/, loader: "vue-html"}
            ]
        }
    },

    reporters: ['spec'],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS']
  })
}
