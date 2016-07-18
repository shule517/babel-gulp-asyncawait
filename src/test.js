import 'babel-polyfill';

const wait = (n) => {
  return new Promise((done) => setTimeout(() => done(n), n));
};

const main = async () => {
  await wait(1000);
  console.log('await done');
};

wait(2000).then((n) => console.log(`promise normaly done: ${n}`));

main();
