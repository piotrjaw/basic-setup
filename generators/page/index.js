module.exports = {
  description: 'Page component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'Page name:',
  }],
  actions: [{
    type: 'add',
    path: '../src/pages/{{name}}/{{name}}.js',
    templateFile: 'page/page.hbs',
  }, {
    type: 'add',
    path: '../src/pages/{{name}}/{{name}}.scss',
    templateFile: 'component/style.hbs',
  }, {
    type: 'add',
    path: '../src/pages/{{name}}/package.json',
    templateFile: 'page/package.hbs',
  }],
};
