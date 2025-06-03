const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = withModuleFederationPlugin({

  name: 'Portfolio-Angular',

  remotes: {
    calculatorApp: "calculatorApp@http://localhost:4201/remoteEntry.js"
  },

      shared: {
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
      },
    }),
  ],
};
