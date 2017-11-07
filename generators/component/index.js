module.exports = {
  description: 'Stateless functional component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'Component name:',
  }],
  actions: [{
    type: 'add',
    path: '../src/components/{{name}}/{{name}}.js',
    templateFile: 'component/component.hbs',
  }, {
    type: 'add',
    path: '../src/components/{{name}}/{{name}}.scss',
    templateFile: 'component/style.hbs',
  }, {
    type: 'add',
    path: '../src/components/{{name}}/package.json',
    templateFile: 'component/package.hbs',
  }],
};
