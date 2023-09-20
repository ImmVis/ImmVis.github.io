# Exjobb
This collection contains a list of the exjobbs that we are currently offering or have offered.  The filename for each exjobb must follow the following naming scheme:  `{year}_{person}_{one word description}`.  For example if Erik Erikson proposed a thesis work about banana visualization in 2024, the filename for that exjobb would be `2024_erikson_bananas`.  Every file related to that exjobb should use this filename and at least `{year}_{person}_{one word description}.mdx` must exist to create a webpage for it.  If the exjobb description includes an image, it would be `{year}_{person}_{one word description}.png` or `{year}_{person}_{one word description}.jpg`, etc.


# Files
## Header
The following fields in the header are recognized:
 - `name` (string): The human-readable name for the exjobb.  It should be somewhat descriptive, but not overly lengthy.  In the best case, this name would be the title of the student's exjobb report
 - `location` (string): The physical location where the exjobb is supposed to be carried out.  This could be either the name of a city, or the name of an institution, or the name of a company
 - `period` (string): The date when the exjobb is supposed to be carried out
 - `number_of_students` (string): The number of students for which this exjobb is designed.  In the overwhelming majority of cases, this is either `1`, `2`, or `1-2`
 - `contact` (array{string}): The list of LiU ids for the people that are responsible for this exjobb.  In general, this would be the examiner, supervisor, or a combination of both
 - `hidden` (boolean, optional): Determines whether this Exjobb is listed and has a webpage generated at all. If the value is not specified, it is considered to be `false`
 - `finished` (boolean): Determines whether the exjobb has been completed and does not accept any new applications
 - `skills` (array{string}, optional): A list of individual skills that are required for this exjobb.  As these show up as individual tags on the general exjobb page, it is recommended to stick to a few expressive skills, rather than being exhaustive

## Content
Following the header should be a description of the exjobb, which can be extensive as needed.  In general the content section should also include when and how prospective students can apply for the exjobb positions


# Example
This example can be used to create a new exjobb file:

```mdx
---
name: "Perpetual Motion Visualization"
location: "Narnia"
period: "Fall 2025"
number_of_students: "1-2"
contact: [ "erier01", "maxmu02" ]
finished: false
skills: [ "Virtual Reality", "C++", "OpenGL" ]
---

Hello world!
```
