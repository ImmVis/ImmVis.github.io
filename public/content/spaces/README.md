# Spaces
This collection contains a list of the physical or public exhibition spaces that the group manages or collaborates with. These environments typically display various interactive data visualization exhibitions, blending scientific research with public exploration.

The files for each space must be contained inside a folder that has a short descriptive name without any spaces. Inside that folder must be an `.mdx` file with the exact same filename as the folder itself.


# Files
## Header
The following fields in the header are recognized:
 - `id` (string): The short name of the space. This must be completely identical to the folder name and the `.mdx` file name.
 - `name` (string): The full, formal name of the exhibition space or laboratory.
 - `start_date` (number): The year the space was officially opened or established.
 - `description` (string): A brief overview summarizing the purpose of the space and what it showcases. To ensure clean layouts on listing pages, this should be limited to a single paragraph.
 - `image` (string): A URL or relative file path to a high-quality, representative image of the space.
 - `homepage` (string, optional): The URL to the external official website for the space, if applicable (e.g., if the main landing page is hosted elsewhere).
 - `funding` (array{string}): A list of IDs for the foundations, partners, or funding bodies that supported the creation or ongoing operation of the space.
 - `hidden` (boolean, optional): Set to `true` if the space should be omitted from the public listing page.

## Content
The content area should provide a deeper dive into the space's layout, target audience, specific technological setups (such as dome projection systems, multi-touch tables, or VR setups), and general operating hours or location data.

It is highly recommended to embed additional inline images or diagrams within the content body to give visitors a clear visual expectation of the environment's physical footprint.


# Example
This template can be copied and customized to register a new exhibition or lab space:

```mdx
---
id: "openlab"
name: "The Open Science Lab"
start_date: 2026
description: "A state-of-the-art interactive environment designed to let the general public engage directly with real-time global tracking data, climate models, and localized demographic changes."
image: "https://picsum.photos/id/123/2000/300"
homepage: "https://example.org/open-lab"
funding: [ "wallenberg-foundation", "liu-seed" ]
---

# About
...

<Image
  src="image_in_same_folder.png"
  alt="Description of image"
/>
```
