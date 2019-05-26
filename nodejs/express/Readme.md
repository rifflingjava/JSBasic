# Express
## Setup first express project
### Install the express-generator
1. ** npm install express-generator --save -g **
2. ** Generate project 'webstorage' **

 `express webstorage`
 
``` 
  webstorage\
     |---\public\
              |--javascripts\
              |--images\
              |--stylesheets\
              |--stylesheets\style.css
     |---\routes\
              |--\index.js
              |--\users.js
     |---\views\
              |--error.jade
              |--index.jade
              |--layout.jade
     |---\app.js
     |---\package.json
     |---\bin\
     |---\bin\www
```

3. ** Change directory **

 `cd webstorage`
4. ** install dependencies **

 `npm install`
 
 ======
 npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
npm WARN deprecated constantinople@3.0.2: Please update to at least constantinople 3.1.1
npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer

npm notice created a lockfile as package-lock.json. You should commit this file.
added 99 packages from 139 contributors and audited 194 packages in 16.851s
found 3 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
 
 
5. ** run the app: **

`  $ DEBUG=webstorage:* npm start `

6. ** express command **

```
  Usage: express [options] [dir]
  Options:
        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information

```

