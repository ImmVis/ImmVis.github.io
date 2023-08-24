# ImmVis webpage
This is the source for the Immersive Visualization group webpage hosted [here](https://immvis.github.io).  The content of the page is found in the `/public` folder and its subfolders that each correspond to categories displayed on the webpage.  Each subfolder contains a README that explains the structure of the category, how to organize the files within, and which options are available for a page.  Here is a list of the available READMEs:
 - [Courses](public/content/courses/README.md)
 - [Exjobbs](public/content/exjobbs/README.md)
 - [Funding](public/content/fundings/README.md)
 - [Personnel](public/content/personnel/README.md)
 - [Publications](public/content/publications/README.md)

In order to edit the page, you checkout the Git repository locally, make the necessary changes, and then commit the changes back to this repository.  All files in the repository are written in [MDX](https://mdxjs.com/), which is an enhanced version of Markdown that can contain JavaScript and includes a header that specifies meta information in [YAML](https://en.wikipedia.org/wiki/YAML) about the page that is used to tie everything together.   As soon as anything is pushed to this repository, GitHub will build the webpage and serve it at https://immvis.github.io.  Making small changes to a category can be done by the page responsible person directly, but larger changes should be done using the Pull Requests system.  Additionally, it can be useful to test the changes locally following the instructions included in the rest of this file:


# Local testing
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  Editing the files will autoupdate the webpage


# Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
