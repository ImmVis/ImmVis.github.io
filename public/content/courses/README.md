# Courses
This collection contains a list of the courses that we are either teaching or are involved with in any capacity.  There should only be individual `.mdx` files in this directory with the name of the course code with the filename in lowercaps.


# Files
## Header
The following fields in the header are recognized:
 - `name` (string): The human-readable name for the course which should be the same as is writting the official LiU documentation
 - `course_code` (string): The course code or this specific course.  This should be the same as the filename
 - `contact` (array{string}): A list of LiU ids of the people in the group that are involved in the course
 - `link` (string): The link to the study plan webpage for the course.  OBS: This link should be updated every year to point to the current version of the course webpage

## Content
Following the header can be a short description of the course, which in many cases can be copy and pasted from the study handbook.  The text can optionally be enhanced to show why the course would be of specific interest to students interested in Immersive Visualization.


# Example
This example can be used to create a new course file:

```mdx
---
name: "The name of the course"
course_code: "Course code"
contact: [ "erier01", "maxmu02" ]
link: "https://studieinfo.liu.se/en/kurs/XXX/YYY"
---

Hello world!
```
