# Initiatives
This collection contains a list of the strategic partnerships, innovation networks, and national infrastructures that the group is actively involved in or driving forward. Unlike localized research projects, initiatives are broader in scope—often acting as regional or national umbrellas that connect academia, small to medium-sized enterprises (SMEs), public sectors, and major industrial partners to foster regional growth, build shared technical platforms, or provide nationwide research support.

The files for each initiative must be contained inside a folder that uses a short descriptive name without any spaces. Inside that folder must be an .mdx file with the exact same filename as the folder itself.


# Files
## Header
The following fields in the header are recognized:
 - `id` (string): The short name of the initiative. This must match the folder name and the `.mdx` file name identically.
 - `name` (string): The full, formal name of the initiative or platform.
 - `start_date` (number): The year the initiative officially launched or was funded.
 - `description` (string): A crisp overview detailing the primary mission, network focus, or service offering of the initiative. To maintain consistency on index pages, this should be kept to a single paragraph.
 - `image` (string): A URL or relative file path to a representative graphic, logo, or high-quality image associated with the initiative.
 - `homepage` (string, optional): The URL to the external official web portal of the initiative.
 - `funding` (array{string}): A list of IDs representing the primary funding bodies, regional development funds, or national councils backing the initiative.
 - `hidden` (boolean, optional): Set to `true` if the initiative should be left out of the public listing page.

## Content
The content can contain as much or as little information as is necessary for each initiative, but should be enough such that a random visitor to the webpage can understand what the initiative is. This is also a place to share links for people to download projects or other links to get more information. It is also useful to embed more images in this section to give the reader a better understanding of the challenges and goals of the project.


# Example
This template can be used to draft a new initiative file:

```mdx
---
id: "nordic-visuals"
name: "Nordic Visual Innovation Cluster"
start_date: 2026
description: "A collaborative regional network designed to bridge academic breakthroughs in computer vision with industrial automation, supporting small-to-medium manufacturing businesses across the region."
image: "https://picsum.photos/id/888/2000/300"
homepage: "https://example.org/nordic-visuals"
funding: [ "organization" ]
---

# Overview
...

<Image
  src="image_in_same_folder.png"
  alt="Description of image"
/>
```