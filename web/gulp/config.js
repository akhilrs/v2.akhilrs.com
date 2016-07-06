var dest = "./assets";
var src = "./src";
var bowerPath = "./static/components";

module.exports = {
    sass: {
        src: src + "/styles/**/*.{sass,scss}",
        dest: dest + "/styles",
        settings: {
            indentedSyntax: true, // Enable .sass syntax
            imagePath: dest + "/images" // Used by the image-url helper
        }
    },
    coffee: {
    	mainfile : src + "/javascripts/app.coffee",
        src: src + "/javascripts/**/*.coffee",
        dest: dest 
    },
    browserify:{
    	src : src + "/javascripts/app.js",
    	dest: dest
    },
    jslibs:{
    	jquery:{
    		path: bowerPath + "/jquery/dist/jquery.js",
    		exports: ['$', 'jQuery']
    	}
    },
    images: {
        src: src + "/images/**",
        dest: dest + "/images"
    },
    markup: {
        path: './**/*.php'
    },
    production: {
        cssSrc: dest + '/**/*.css',
        jsSrc: dest + '/*.js',
        dest: dest
    }
}