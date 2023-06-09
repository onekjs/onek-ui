import { createSite } from './create-site';

async function run() {
  await createSite();
  setTimeout(() => {
    process.exit(0);
  }, 1000);
}

run();
