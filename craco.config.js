//craco.onfig.js
module.export ={
    style:{
        postcss:{
            plugins:[
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    rules:[
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ]
}