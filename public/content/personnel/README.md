# Personnel
This collection contains a list of the people in the group.  The files for each person must be contained in a folder that uses the LiU-id of the person as a folder name. Inside the folder must be an `.mdx` file with the name name that contains the contents for the persons homepage.  For people that do not have a LiU id, utilize the name naming format (first 3 letters for given name, first 2 letters of family name) but without the numbers afterwards.

# Files
## Header
The following fields in the header are recognized:
 - `id` (string): The LiU ID of the person or the first three letters of the given name and first two letters of the family name if the person does not have a LiU ID
 - `name` (string): The name of the person
 - `image` (string, optional): The image of the person which should be suitable for a group web page and at least contain the face of the person
 - `position` (array{string}): The position(s) that the person is inhabiting at LiU
 - `contact_info` (object optional)
  - `email` (string, optional): The LiU email address of the person
  - `phone` (string, optional): The phone number of the person
  - `address` (string, optional): The office number and information on how to physically reach the person
  - `orcid` (string, optional): The OrcID number for the person
- `personal_webpage` (string, optional): The link to the personal webpage of the person
- `social` (object, optional): This object can contain any of the following keys, where the value is the URL to that specific social media profile.  Providing any of these is obviously optional: `facebook`, `github`, `gitlab`, `git`, `instagram`, `linkedin`, `reddit`, `snapchat`, `steam`, `trello`, `tumblr`, `twitter`, `youtube`
 - `skills` (array{string}, optional): A list of self-professed skills the person possesses.  To prevent clutter on the webpage, this should be limited to only a few

## Content
The content can contain any information the person want to share about themselves, but frequently contains a short description, many be an employment/educatin background and then some example of previous works.

Following this content the webpage will automatically add the projects and publications that the person is affiliated with.  If either is empty, the subsection will be omitted

# Example
This example can be used to create a new personnel file:

```mdx
---
id: "erier01"
name: "Erik Erikson"
image: "https://liu.se/-/media/images/modules/foundation/contact/profile500x500.png"
position: [ "Test dummy" ]
contact_info: {
    email: "spam@liu.se",
    address: "Campus Norrköping, Kopparhammaren 6, Rum H001",
}
personal_webpage: "https://example.org"
social: {
    facebook: "https://example.org",
    github: "https://example.org",
    gitlab: "https://example.org",
    git: "https://example.org",
    instagram: "https://example.org",
    linkedin: "https://example.org",
    reddit: "https://example.org",
    snapchat: "https://example.org",
    steam: "https://example.org",
    trello: "https://example.org",
    tumblr: "https://example.org",
    twitter: "https://example.org",
    youtube: "https://example.org",
}
skills: [ "Designing", "Programming", "Adminstrating" ]
---

<img alt="Random picture" src="https://picsum.photos/id/543/2000/300" />

# Myself
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla ante, faucibus ac mollis a, maximus sed ipsum. Aenean sodales nunc a tortor dapibus, sit amet congue orci condimentum. Nullam tempor velit nibh, dignissim interdum sapien volutpat non. Cras aliquam, ipsum varius euismod lobortis, orci sem fermentum neque, et ornare magna nunc sed elit. Duis felis urna, sodales feugiat justo nec, ornare molestie enim. Vestibulum eleifend, mi a vehicula malesuada, ligula erat dictum nibh, ut sollicitudin ex mi sed leo. Sed dictum cursus lectus, ut sollicitudin mi auctor ut.

Suspendisse sit amet dui ut ligula ultrices mollis sit amet a dolor. Aenean aliquet gravida dui. Vestibulum vehicula metus quam, non posuere nisi lacinia lacinia. Mauris fermentum mauris orci, vel cursus urna rutrum eu. In at massa vitae orci pretium viverra vel sit amet augue. Etiam ac nisi lacus. In tempus massa metus, sed hendrerit diam volutpat eget. Donec lobortis ligula risus.

# Background
Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir grafinio dizaino pasaulyje jau nuo XVI a. pradžios. Lorem Ipsum tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas atsitiktine tvarka išdėliojo raides atspaudų prese ir tokiu būdu sukūrė raidžių egzempliorių. Šis tekstas išliko beveik nepasikeitęs ne tik penkis amžius, bet ir įžengė i kopiuterinio grafinio dizaino laikus. Jis išpopuliarėjo XX a. šeštajame dešimtmetyje, kai buvo išleisti Letraset lapai su Lorem Ipsum ištraukomis, o vėliau -leidybinė sistema AldusPageMaker, kurioje buvo ir Lorem Ipsum versija.

<img style={{float: "left", marginRight: "1rem"}} width="40%" alt="test" src="https://picsum.photos/id/543/2000/300" />

Velit enim sit nulla culpa adipisicing laborum. Nisi sit in consectetur nisi duis velit enim voluptate officia ullamco aute tempor id dolore. Veniam fugiat nulla commodo laborum aute anim commodo dolor pariatur consequat est do. Lorem laboris ut adipisicing reprehenderit. Elit non id ex labore occaecat incididunt adipisicing.

<img style={{float: "right", marginLeft: "1rem"}} width="50%" alt="Absolute image" src="https://picsum.photos/id/543/2000/300" />

## Wow
Pariatur ex excepteur nostrud aliqua nulla aute eu labore culpa ea laborum pariatur. Voluptate consequat dolore duis sit consequat magna laborum consequat fugiat nisi anim ex. Id eiusmod ipsum tempor non amet incididunt veniam culpa ullamco ipsum. Ipsum quis ex elit eu non Lorem laboris occaecat. Anim amet cillum nulla nulla. In reprehenderit veniam deserunt ad amet mollit nisi consectetur consectetur consectetur veniam. Pariatur est et Lorem laborum.

<img alt="Random picture" src="https://picsum.photos/id/545/2000/300" />
```
