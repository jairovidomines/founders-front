# Data

## Data layer

- List of projects
  - ID
  - Name
  - Website url
  - Maker
  - Pricing
  - Platforms
  - Twitter account
  - Upload logo
  - Short description
  - Large description

## Data modification

- Load projects
- Create project
- Update a project
- Delete a project from the list of own projects
- Add a project to list of favourites projects -> nice to have
- Delete a project from list of favourites projects -> nice to have

# Components

## App

- Show Layout component

## Layout

- Show logo Founders
- Show Project list component
- Show Form component
- Show Navigation component

## Navigation

- Call dispatch to add new Project

## Project list

- Call a delete Project action
- Call a update Project action
- Receives list of Projects created
- Show a Project card component for every Project on the list of Projects created

## Project card

- Receives a delete Project action from button
- Receives the update Project action from button
- Show Project name inside a heading
- Show Project logo, short description, endurance and creartion date
- Show button component to delete a Project from the list of Projects created
- Show button component to modify Projects from the list of Projects created

- Send "🗑️" to button component to delete a Project from the list of Projects created
- Send "📝" to button component to update a Project from the list of Projects created

## Form

- Receives the create Project action

  - Shows an input for the Project's name with label "Name"
  - Shows an input for the Project's website with label "Website"
  - Shows an input for the Project's maker with label "Maker"
  - Shows an input for the Project's twitter account with label "Twitter"
  - Shows an input for the Project's pricing with label "Pricing"
  - Shows an input for the Project's platforms with label "Platforms"
  - Shows an input for the Project's upload logo with label "Upload logo"
  - Shows an input for the Project's short description with label "Short description"
  - Shows an input for the Project's description with label "Description"
  - Shows a button to create a Project with text "Create project"
  - On submit executes the received create Project action

- Receives the update Project action
  - Shows an input for the Project's name with label "Name"
  - Shows an input for the Project's website with label "Website"
  - Shows an input for the Project's maker with label "Maker"
  - Shows an input for the Project's twitter account with label "Twitter"
  - Shows an input for the Project's pricing with label "Pricing"
  - Shows an input for the Project's platforms with label "Platforms"
  - Shows an input for the Project's upload logo with label "Upload logo"
  - Shows an input for the Project's short description with label "Short description"
  - Shows an input for the Project's description with label "Description"
  - Shows a button to update a Project with text "Update project"
  - On submit executes the received update Project action

## Button

- Receives a function
- Call the received function on click
- Shows a text for the user action inside a button
