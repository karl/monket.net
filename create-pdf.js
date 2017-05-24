const markdownpdf = require('markdown-pdf');
const fs = require('fs');

const cssPath = './css/main.css';
const rawCV = fs.readFileSync('./contents/cv/index.md', 'utf8');
const cv = rawCV
  // remove preamble
  .replace(/---[\s\S]+---/, '')
  // remove links
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  // add phone number
  .replace('* CV as PDF', '* 07989200612')
  // add CV to title
  .replace("# Karl O'Keeffe", "#### Curriculum Vitae\n# Karl O'Keeffe");

// console.log(cv);

const options = { cssPath };

markdownpdf(options).from
  .string(cv)
  .to("./contents/cv/Karl O'Keeffe - CV.pdf", () => {
    console.log('PDF version of CV generated');
  });
