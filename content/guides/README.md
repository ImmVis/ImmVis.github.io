# Guides
This collection contains a list of the guides that are created by members of the group and that can be useful for others.  The files for each guides must be contained inside of a folder that has a short descriptive name that does not contain any spaces.  Inside that folder must be an `.mdx` file with the same filename as the folder itself.  Refrain from using abbrevations as much as possible as even though their might make sense to you, they are normally not very informative to other people going through this list.


# Files
## Header
The following fields in the header are recognized:
 - `id` (string): The short name of the guide that should be the same as the folder name and the name of this `.mdx` file.
 - `name` (string): The human-readable name of the guide
 - `description` (string): A short description of the group that should not be longer than one paragraph
 - `image` (string): The URL to a representative image of the guide
 - `people` (array{string}): The list of LiU ids of the people from this group that are involved in the guide.
 - `funding` (array{string}): The list of ids for the funders or partners that contributed to the guide
 - `hidden` (boolean): If the guide should be hidden from the listing page

## Content
This is the main portion of the guide which can include images, embedded videos, or whatever else is necessary for the guide.


# Example
This example can be used to create a new guide file:

```mdx
---
id: "fusion"
name: "Show to do Asian Fusion Visualization"
description: "Aliquip est tempor voluptate ut sunt deserunt. Aliquip nostrud fugiat ipsum aliquip nulla exercitation ea qui laborum. Commodo cupidatat nostrud tempor veniam."
image: "https://picsum.photos/id/543/2000/300"
people: [ "erier01" ]
funding: [ "nobody" ]
---

# About
Aliquip est tempor voluptate ut sunt deserunt. Aliquip nostrud fugiat ipsum aliquip nulla exercitation ea qui laborum. Commodo cupidatat nostrud tempor veniam.
```
