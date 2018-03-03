# preact-cli embed PDF bug on Chromium

March 03, 2018

https://github.com/developit/preact-cli/issues/518

This repository was created with the command below.

```
preact create simple preact-pdf --git --yarn
```

`yarn run dev` works as expected. Clicking on buttons will replace the PDF...

`preact build --dest docs --production --prerender` was used to generate the webpage, and is hosted on Github pages.

Click on the buttons a few times. **`<embed>` is not replaced by render, but duplicated instead.**

Github Pages is serving the `/docs` folder.
