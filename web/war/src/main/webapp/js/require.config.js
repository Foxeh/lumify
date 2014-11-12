
var require = {
    baseUrl: 'jsc',
    waitSeconds: 30,
    paths: {
        'arbor': '../libs/cytoscape.js/lib/arbor',
        'async' : '../libs/requirejs-plugins/src/async',
        'atmosphere': '../libs/atmosphere/atmosphere',
        'bootstrap': '../libs/bootstrap/docs/assets/js/bootstrap',
        'bootstrap-datepicker': '../libs/bootstrap-datepicker/js/bootstrap-datepicker',
        'bootstrap-timepicker': '../libs/bootstrap-timepicker/js/bootstrap-timepicker',
        'chrono': '../libs/chrono/chrono.min',
        'colorjs': '../libs/color-js/color',
        'cytoscape': '../libs/cytoscape.js/build/cytoscape',
        'd3': '../libs/d3/d3',
        'easing': '../libs/jquery.easing/js/jquery.easing',
        'ejs':  '../libs/ejs/ejs',
        'es5shim': '../libs/es5-shim/es5-shim',
        'es5sham': '../libs/es5-shim/es5-sham',
        'promise-polyfill': '../libs/promise-polyfill/polyfills/output/promise-6.0.0',
        'flight': '../libs/flight',
        'goog': '../libs/requirejs-plugins/src/goog',
        'gremlins': '../libs/gremlins.js/gremlins.min',
        'hbs': '../libs/require-handlebars-plugin/hbs',
        'handlebars': '../libs/require-handlebars-plugin/hbs/handlebars',
        'intercom': '../libs/intercom/intercom',
        'jstz': '../libs/jstz-detect/jstz.min',
        'jquery': '../libs/jquery/jquery',
        'jqueryui': '../libs/jquery-ui/ui/minified/jquery-ui.min',
        'jscache': '../libs/jscache/cache',
        'less': 'util/requirejs/less',
        'lessc': '../libs/require-less/lessc',
        'normalize': '../libs/require-less/normalize',
        'openlayers': '../libs/openlayers/OpenLayers.debug',
        'pathfinding': '../libs/PathFinding.js/lib/pathfinding-browser',
        //'promise': '../libs/requirejs-promise/requirejs-promise',
        'propertyParser': '../libs/requirejs-plugins/src/propertyParser',
        'rangy': '../libs/rangy-1.3/rangy-core',
        'rangy-text': '../libs/rangy-1.3/rangy-textrange',
        'rangy-highlighter': '../libs/rangy-1.3/rangy-highlighter',
        'rangy-cssclassapplier': '../libs/rangy-1.3/rangy-cssclassapplier',
        'rangy-serializer': '../libs/rangy-1.3/rangy-serializer',
        'scrollStop': '../libs/jquery-scrollstop/jquery.scrollstop',
        'sf': '../libs/sf/sf',
        'text': '../libs/requirejs-text/text',
        'three': '../libs/threejs/build/three',
        'timezone-js': '../libs/timezone-js/src/date',
        'tpl': '../libs/requirejs-ejs/rejs',
        'underscore': '../libs/underscore/underscore',
        'videojs': '../libs/video.js/dist/video-js/video',
    },
    shim: {
        'atmosphere': { init: function() { return $.atmosphere; }, deps:['jquery'] },
        'bootstrap': { exports:'window', deps:['jquery', 'jqueryui'] },
        'bootstrap-datepicker': { exports:'window', deps:['bootstrap'] },
        'bootstrap-timepicker': { exports:'window', deps:['bootstrap'] },
        'chrono': { exports: 'chrono' },
        'colorjs': { init: function() { return this.net.brehaut.Color; } },
        'cytoscape': { exports: 'cytoscape', deps:['arbor', 'easing'] },
        'd3': { exports: 'd3' },
        'easing': { init:function() { return $.easing; }, deps:['jquery', 'jqueryui'] },
        'ejs': { exports: 'ejs' },
        'hbs': { deps:['util/handlebars/helpers'] },
        'intercom': { exports:'Intercom' },
        'jquery': { exports:'jQuery' },
        'jqueryui': { init: function() { return $.ui; }, deps:['jquery'] },
        'jstz': { exports:'jstz' },
        'openlayers': { exports: 'OpenLayers' },
        'pathfinding': { exports: 'PF' },
        'rangy-text': { deps:['rangy']},
        'rangy-highlighter': { deps:['rangy', 'rangy-cssclassapplier', 'rangy-serializer']},
        'rangy-cssclassapplier': { deps:['rangy'] },
        'rangy-serializer': { deps:['rangy'] },
        'scrollStop': { exports: 'jQuery', deps:['jquery'] },
        'three': { exports: 'THREE' },
        'timezone-js': { deps:['jquery'] },
        'underscore': { exports: '_' },
        'videojs': { exports: 'videojs' }
    }
};


if (typeof window !== 'undefined') {
    if ('define' in window) {
        define([], function() {
            return require;
        });
    }
}
