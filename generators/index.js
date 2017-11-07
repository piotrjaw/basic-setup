const componentGenerator = require('./component/index.js');
const pageGenerator = require('./page/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.addHelper('directory', comp => `src/components/${comp}`);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setPartial('componentContent', '{props.children}');
};
