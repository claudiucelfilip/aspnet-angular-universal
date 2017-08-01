# ASP.net Framework 4.5.1 Angular Universal
The project was created in Visual Studio 2013.

### Installation

The project [Node.js](https://nodejs.org/) v8+ to run.

1. Install NuGet packages.
2. Install the dependencies and devDependencies and start the server.

```sh
$ cd aspnet-angular-universal\AngularUniversal\Scripts\angular
$ npm install
$ npm run build
```
3. Build the solution (it sometimes fails when vs2013 looks through node_modules - in the angular folder -, just hide it and build again)
4. Have an IIS server pointing to the AngularUniversal folder

### Development
The project uses Webpack for fast developing and build is executed via npm.

You can run these commands.

Build client bundle:
```sh
$ npm run build-client
```
Watch client bundle:
```sh
$ npm run watch-client
```


Build server bundle:
```sh
$ npm run build-server
```
Watch server bundle:
```sh
$ npm run watch-server
```

[TBD] AOT Compilation
