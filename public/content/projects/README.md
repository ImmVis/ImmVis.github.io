# Projects
This collection contains a list of the projects that the group is involved with.  The files for each project must be contained inside of a folder that has a short descriptive name that does not contain any spaces.  Inside that folder must be an `.mdx` file with the same filename as the folder itself.  If it is possible to bundle different projects together it is generally advised to do so, to reduce the clutter on the project page.  Refrain from using abbrevations as much as possible as even though their might make sense to you, they are normally not very informative to other people going through this list.


# Files
## Header
The following fields in the header are recognized:
 - `id` (string): The short name of the project that should be the same as the folder name and the name of this `.mdx` file.
 - `name` (string): The name of the project
 - `start_date` (number): The year the project started
 - `end_date` (number, optional): The year the project ended.  If the project is still ongoing, this field should be left empty
 - `description` (string): A short description of the project that should not be longer than one paragraph
 - `image` (string): The URL to a representative image of the project
 - `homepage` (string, optional): The URL to the project homepage, if this webpage is not the main webpage
 - `type` ("research", "exhibition", "software", or "other", optional): Specifies which type of project this is
 - `people` (array{string}): The list of LiU ids of the people from this group that are involved in the project.
 - `funding` (array{string}): The list of ids for the funders or partners that contributed to the project

## Content
The content can contain as much or as little information as is necessary for each project, but should be enough such that a random visitor to the webpage can understand what the project is.  This is also a place to share links for people to download projets or other links to get more information.  It is also useful to embed more images in this section to give the reader a better understanding of the challenges and goals of the project.


# Example
This example can be used to create a new project file:

```mdx
---
id: "fusion"
name: "Asian Fusion Visualization"
start_date: 2000
end_date: 2010
description: "Aliquip est tempor voluptate ut sunt deserunt. Aliquip nostrud fugiat ipsum aliquip nulla exercitation ea qui laborum. Commodo cupidatat nostrud tempor veniam."
image: "https://picsum.photos/id/543/2000/300"
homepage: "https://www.example.org/"
people: [ "erier01" ]
funding: [ "nobody" ]
---

# About
Aliquip est tempor voluptate ut sunt deserunt. Aliquip nostrud fugiat ipsum aliquip nulla exercitation ea qui laborum. Commodo cupidatat nostrud tempor veniam.
```
