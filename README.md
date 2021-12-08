Webmap of Worcester Public Resources

By Ethan Manley, Alvaro Esparza, and Jacob Frankel

**Introduction  **
 
 The purpose of our project is to create an interactive webmap that shows the location of various organizations that offer free services to the public and displays information about them. The point is to allow people to be able to use this webmap as a tool when deciding if they want to reach out to these organizations to take advantage of their services. The webmap consists of a basemap that shows the city and the surrounding area, and each organization has a marker that will result in a popup displaying information about it when clicked. The user will be able to compare their proximity to different organizations and will be able to compare the services offered by said organizations, and will be able to make more informed decisions on where to go. Worcester is a fastly growing city, and many of its residents don’t know about organizations that operate in areas that they don’t normally spend time in. In addition, Worcester has a large population of people who have been continually underserved and neglected by municipal services, and need information on where to go for healthcare, food services, housing assistance, and youth services. This webmap hopes to give people a place to go to find all the information they need in one place.
 
**Data and Methodology  **

**What data did you acquire to complete your project? **

 The webmap has a basemap from leaflet.js.
 
**Data Sources (How did you obtain the data?) Collect it by yourself? Obtain it from agencies or other sources?  If so, identify the source. **
 
 The list of organizations was gathered from a book listing family organizations that Alvaro obtained, as well as prior knowledge of the team. The lat long coordinates of the locations of each organization was gathered from organizations websites and from Google Maps.
 
**What analyses did you undertake, if any? **

**What Web Mapping technology or software did you use?**

 We used leaflet.js to create and display the webmap. Alvaro and Ethan used ArcGIS online in order to create the Worcester GeoJson file and prepare it to go into the webmap.
 
**In this section, provide a conceptual framework (flow chart) if possible. **
**Make sure you know the difference between conceptual framework and workflow.**

**Give an overview of the project’s purpose and how a user would get benefit from your map.**

 The purpose of the map is to provide a one-stop shop for people in the beginning stages of looking for help with a youthcare, healthcare, housing, or hunger related issue. We
 want to make it as easy as possible for someone to see all the options they have. The web map shows information about the services offered by each organization, and shows their
 location, allowing people to figure out what services are closest to them. Hopefully this will greatly benefit working families and anyone else who is is need of assistance but
 lacks the time or resources to travel to other parts of the city at any given time. 
 
**Describe the preprocessing steps and tools you employed in preparing the data for web map use.**

**Demonstrate how the data is divided into base maps and thematic layers.**

 The basemap was created with leaflet.js, and it has two visual options. One can choose to see the grayscale option (gray and white, very simplified), or the streets version
 (created with Open Street Maps, colorful and informative). There are 5 thematic layers, but only 4 that you can toggle on and off. The first thematic layer is the Worcester   GeoJson, which is displayed as a blue outline of the city. It appears over the basemap automatically and the user cannot remove it. The other 4 thematic layers are the layers showing popup buttons for each of the organizations. As mentioned before, the 4 layers are Healthcare, Housing, Fridge, and Youth.

**Describe the approaches you took for exposing the data as web services and why you chose those approaches (e.g., dynamically drawn service using WMS, tiles designed with TileMill, tiles pulled from OpenStreetMap, GeoJSON layer drawn by the browser, etc.).**


**Demonstrate the interactive elements in your web map. **

 The user is able to toggle on and off the 4 organization popup layers. For instance, if someone is interested in viewing only housing-related organizations, then they could 
 specifically toggle only housing organizations. The user could look at any combination of different types if they wished to. There is also an About Us button, that leads to our
 about us page. Users can click the button and they will be brought to that page.

Follow the "story" of what a user would do when approaching your map. For example: "Suppose that you are working for _____ and you want to learn ____, so you come to this map and see that you can turn on layer ______ which tells you _______. You then see that ______ is clickable, so you click it and learn that _______ is ________. You now know _________, which helps you make a decision about _______." In short, sell your product to me!
Describe at least one tool or technique used to create your web map that was not covered in the course materials.

 John has lived in the Greendale Neighborhood in North Worcester for many years. He does not have health insurance and does not get a checkup as often as he should because payments can be very expensive. He is looking for an organization that he could go to to get a checkup that doesn't break the bank. Between work and his family, he does not have a ton of free time, so he would prefer to find an organization in his neighborhood. He hears about the Map of Worcester Services webmap from a friend, and goes on it to try and find an organization that fits his needs. He toggles the healthcare organizations button, and looks at the different healthcare options. He finds an organization called the Greenwood Street Free Medical Program, which operates in his neighborhood and offers free checkups. Now John is able to get more of the medical care that every human being deserves without losing large portions of his income and in his neighborhood. 

**Results **

**Compare the final stage to when we did the assessment and to the initial proposal, identifying parts that are covered or not completed.**
 
References 
 
**Appendix 
List the roles/responsibilities of each group member in completing this project.**

Ethan:
Alvaro:
Jacob: Provided the Healthcare and Fridge organization buttons, worked on CSS for About Us page and webmap.

