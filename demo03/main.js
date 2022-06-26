const str = () => 'hello';
const html = `<h4>${str()} world!</h4>`;
str = '11111';

document.write(html);
