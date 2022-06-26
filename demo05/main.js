const worldFn = () => 'world';
const helloFn = () => 'hello';
const worldPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('world'), 10000);
});
const temp = helloFn() + worldFn();

worldPromise.then((data) => {
  document.write('<h1>' + temp + data + '</h1>');
});
