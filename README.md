# ImmVis webpage
This is the source for the Immersive Visualization group webpage hosted [here](https://immvis.github.io).  The content of the page is found in the `/public` folder and its subfolders that each correspond to categories displayed on the webpage.  Each subfolder contains a README that explains the structure of the category, how to organize the files within, and which options are available for a page.  Here is a list of the available READMEs:
 - [Courses](public/content/courses/README.md)
 - [Exjobbs](public/content/exjobbs/README.md)
 - [Funding](public/content/fundings/README.md)
 - [Personnel](public/content/personnel/README.md)
 - [Publications](public/content/publications/README.md)

In order to edit the page, you checkout the Git repository locally, make the necessary changes, and then commit the changes back to this repository.  All files in the repository are written in [MDX](https://mdxjs.com/), which is an enhanced version of Markdown that can contain JavaScript and includes a header that specifies meta information about the page that is used to tie everything together.   As soon as anything is pushed to this repository, GitHub will build the webpage and serve it at https://immvis.github.io.  Making small changes to a category can be done by the page responsible person directly, but larger changes should be done using the Pull Requests system.  Additionally, it can be useful to test the changes locally following the instructions included in the rest of this file.

In case the are errors with the backend page generation or the content, create a new [Issue](https://github.com/ImmVis/ImmVis.github.io/issues/new) and provide a description on how to recreate or find the issue.

## Good to know
 - Files with the extension `.mdx` inside the public subfolders will result in published pages that won't change their URL for the forseeable future.  Files with other extensions will by default be ignored unless explicitly mentioned inside MDX files
 - To reference a file from an MDX file, you have to prepend the name by `./`.  For example if we have two files `example.mdx` and `example.png` and we want to use the image inside the mdx, we would provide `./example.png` as the path to the image.
 - Refrain from using non ASCII characters in file names and ID fields.  All other fields can contain UTF-8 encoded characters


# Local testing
Building the webpage locally can be very beneficial to ensure that no errors were introduced that would prevent the webpage from being deployed.  All of the commands should be run from the directory into which you cloned the folder:
1. `npm install`
1. Either run `npm run build` or `npm run dev`. The suggested way is to use the `dev` version during writing as it provides the ability to reload the webpage as the text is edited. Then running the `build` version once before committing to ensure that the whole webpage builds correctly
1. If running `build`, you also need to run `npm start` to host the builded page
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

Editing the files will autoupdate the webpage.


# Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
