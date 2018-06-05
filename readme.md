# Example of MDX in Next.js
A really simple implementation of [MDX](https://github.com/mdx-js/mdx) inside [Next.js](https://github.com/zeit/next.js) with some cool features to show off the capability of MDX.

## Developing
### Step 1: Installing Dependencies
`npm install` or `yarn` (preferably npm due to the lockfile)

### (optional) Step 2: Running a Dev Server
Run `npm run dev` to start a local development server on `localhost:3000` so you can develop with awesome Next.js development features

### (optional) Step 2: Export Static Site
Next.js supports amazing static exports. To do this just run `npm run export`.
You'll then have a new directory, `out`. Inside this directory is your static site built from this repo!

### Step 3: Deploy with [Now](https://zeit.co/now)
Now you want to show off your brand new site with Next.js and MDX to everyone.
If you haven't got Now, go and install it for this step (There's a free plan to test!)
1. Preferably use the Static Export in the second step
2. Run `now out/`
That's it! Now will deploy your static Next.js app with MDX just like that. Amazing!
