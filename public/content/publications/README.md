# Publications
This collection contains a list of the publications that the group has been involved with as authors.  The files in this folder must follow a strict naming scheme: `{year}_{family name of the first author}_{family name of the second author}_{one word description of the title}`.  At least `{year}_{family name of the first author}_{family name of the second author}_{one word description of the title}.mdx` must exist that contains information about the publication, but that file should use an image whose filename must be `{year}_{family name of the first author}_{family name of the second author}_{one word description of the title}.png` or `{year}_{family name of the first author}_{family name of the second author}_{one word description of the title}.jpg`.

# Files
## Header
The following fields in the header are recognized:
 - `title` (string): The title of the paper
 - `authors` (string): The list of authors in a single string, which should be formatted like "A. Erikson, B. Berikson, C. Charlie, and D. Dauthor"
 - `liu_authors` (array{string}): The list of LiU IDs for authors from this group.  Providing this will result in the publication appearing on that person's public page
 - `projects` (array{string}): The list of projects that this publication is associated with
 - `venue` (string): The venue/journal/conference where this publication was published
 - `year` (number): The year in which the publication was published
 - `date` (string): The specific date in ISO 8601 format on which the publication was published
 - `doi` (string): The DOI of the publication
 - `pdf` (string): The URL where a reader can download a PDF copy of the publication.  Where possible this should be the open-access version of the publication; otherwise the last author copy of the PDF can be included in this folder and be locally hosted
 - `bib` (string): The URL to the Bibtex information for the publication. Generally, this can be hosted in the same folder as this `.mdx` file
 - `code` (string, optional): The URL where a reader can find the source code underlying the implementation of a publication where applicable
 - `video` (string, optional): The URL to a video hosting service where the contents of the publication are demonstrated.  This can either be a video specifically created for the submission or a recording of the talk, whichever fits the publication best
 - `thumbnail` (string): The URL to an image that exemplifies the publication and is used as the image in the list of publications
 - `tags` (array{string}, optional): A list of tags that fit this publication to tie different publications of the same field together on the webpage.  It is generally more useful to use these tags sparingly and only describe the more general techniques this way

## Content
There is no content for files of this type

# Example
This example can be used to create a new publication file:

```mdx
---
---
---
title: "Lorem Ipsum Generator for Fun and Profit"
authors: "A. Aaronson, and Z. Zachariah"
liu_authors: [ "aaaaa01" ]
projects: []
venue: "International Journal of Papers"
year: 2008
date: "2008-06-30"
doi: "10.1109/PacificVis.2013.6596133"
pdf: "https://example.org"
bib: "https://example.org"
code: "https://example.org"
video: "https://example.org"
thumbnail: "./2008_aaronson_lorem_ipsum.png"
tags: [ "AI", "Profit" ]
---

```
