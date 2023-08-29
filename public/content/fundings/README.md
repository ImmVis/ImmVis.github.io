# Funding
This collection contains a list of the funding sources and partners that we are working with.  All files in this folder corresponding to the same funder should use the same short filename, for example: `X_kungen.mdx` and `X_kungen.png`.  The `X` in the front of the name is a number that is used to sort the list of funders.  Whenever you add a new funder, speak to [Alex Bock](alexander.bock@liu.se), [Erik Sundén](erik.sunden@liu.se), or [Peter Westerdahl](peter.westerdahl@liu.se) first to make sure they get sorted correctly.


# Files
## Header
The following fields in the header are recognized:
 - `id` (string): A short identifier without spaces that describes the funder.  This id should be the same as the filename.
 - `name` (string): The human-readable for the funding agency or the partner
 - `icon` (string): The path to the image that is used to represent the parter or funding agency
 - `grants` (array{string}, optional): The list of grant numbers that are provided or have been provided by the funder.  This field does in general not apply to collaboration partners
 - `link` (string): The link to the homepage of the funder or partner

## Content
No content is used in this type of file


# Example
This example can be used to create a new funders file:

```mdx
---
id: "kva"
name: "Royal Swedish Academy of Sciences"
icon: "./kva.png"
grants: [ "KVA-2023-0001", "KVA-1850-0001" ]
link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
---
```
