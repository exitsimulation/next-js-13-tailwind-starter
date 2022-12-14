## Next.js 13 with Tailwind

This is a template project utilizing Next.js 13 created with ``create next app`` set up for usage with Tailwind CSS, Typescript and Prettier.

Firstly install all packages by running:
```shell
npm install
```

The development server is set up to start on port 3001 by default, to start it type:
```shell
npm run dev
```

When deploying on Vercel make sure that tailwind.config.js and postcss.config.js are included in the first deployment, otherwise it might lead to CSS purging problems with Vercel's setup and Tailwind.