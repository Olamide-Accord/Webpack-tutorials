# Webpack-tutorials

1. Prerequisites -
    Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from the official 		Node.js website.

2.	Initialize Project -
   	Create a new directory for your project and navigate to it in your terminal.

3. 	Initialize `package.json`
		Run the following command to initialize a package.json file and follow the prompts:

		 			npm init
   	
4. 	Install Dependencies
   	Install the required packages for Webpack, TypeScript, and loaders by running the following commands:

			npm install webpack webpack-cli typescript ts-loader css-loader style-loader sass-loader node-sass --save-dev

5.	Install Babel:
   	Also install Babel with the necessary plugins as dependencies

	 			npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript babel-loader

6. Configure TypeScript:
   	Create a tsconfig.json file in your project directory to configure TypeScript.

	 				{
					  "compilerOptions": {
					    "outDir": "dist",
					    "target": "ES6",
					    "strict": true,
					    "noEmit": true,
					    "esModuleInterop": true
					  },
					  "include": ["src/**/*"],
					  "exclude": ["node_modules"]
					}

7.	Install html-webpack-plugin

		 	npm i html-webpack-plugin

8.	Configure Webpack:
  	 create the webpack.config.ts file and configure Webpack.

			import path from 'path';
			import { Configuration } from 'webpack';
			import HtmlWebpackPlugin from 'html-webpack-plugin';
			
			const config: Configuration = {
			  entry: "./src/index.ts",
			  output: {
			    path: path.resolve(__dirname, "./dist"),
			    filename: "bundle.js",
			  },
			  devtool: 'source-map',
			  module: {
			    rules: [
			      {
			        test: /\.(ts|js)?$/,
			        exclude: /node_modules/,
			        use: {
			          loader: "babel-loader",
			          options: {
			            presets: ["@babel/preset-env", "@babel/preset-typescript"],
			          },
			        },
			      },
			      {
			        test: /\.scss$/,
			        use: [
			          'style-loader',
			          'css-loader',
			          'sass-loader',
			        ]
			      },
			      {
			        test: /\.(.png|svg|jpg|jpeg|gif)$/i,
			        type: 'asset/resource'
			      }
			    ],
			  },
			  resolve: {
			    extensions: [".ts", ".js"],
			  },
			  
			  plugins: [
			    new HtmlWebpackPlugin({
			      title: 'Webpack App',
			      filename: 'index.html', 
			      template: 'src/template.html',
			    }),
			  ]
			};
			
			export default config;

9.	Creating scripts to run Webpack
   		Add a scripts section to package.json with the following scripts:

		 		"scripts": {
				  "start": "webpack-dev-server --mode development",
				  "build": "webpack --mode production"
				},

10.	Run the following command in a Terminal window to start the app in development mode:

	 			npm run start

   
