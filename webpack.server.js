const path  = require('path');
const webpackNodeExtenerals = require('webpack-node-externals');

module.exports = {
    target:'node',
    entry: './server.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'build'),
        publicPath: '/build'
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:path.resolve(__dirname,'node_modules'),
                options:{
                    presets:[  
                        'react',
                        'stage-0',
                        ['env',{
                            taget: {browsers:['last 2 versions']}
                        }]
                    ]
                }
            }
        ]
    },
    externals:[webpackNodeExtenerals()]
}