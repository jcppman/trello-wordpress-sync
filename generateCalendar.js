const babel = require('babel-core');
const util = require('util');
const vm = require('vm');

module.exports = function renderCalendar(data) {
  const transformed = babel.transformFileSync('calendar.jsx', {
    plugins: ['transform-react-jsx', 'babel-plugin-transform-es2015-modules-commonjs'],
  });

  const module = {};
  vm.runInNewContext(transformed.code, {
    require,
    module,
    data,
  });
  return module.exports;
}
