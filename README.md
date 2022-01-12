# Madness UI

## Current State
* Flask App is able to display the results from what is returned by the service.
* App uses Flexbox to display scores. Scores are currently a static file

## TODO (Awaiting functional API)
1. User Experience
   * User Creation/Sign In 
   * Create Game (any user can create game, generate picks and become owner of created game)
2. **Game Builder** (Medium) - In Progress
  * Generate/Build board json
   - [ ] Generate JSON representation of game to send to UI
	- [ ] Set Pick Owner as User ID when stored, and replace ID with name when sent to front end
   - [ ] Given Regions and Seeds, autofill game board  
3. **SuperAdmin and Admin (gameboard owner) Functionality Logic** (Heavy effort)
   [ ] Manage users (add, edit, remove users)
   [ ] Manage picks (add, edit, remove picks)
   [ ] SuperAdmin inherits Admin functionality
   *  [ ] Access all users (CRUD)
   *  [ ] Access all games (CRUD)
## Status Report 11/30/21
This app is in a pretty decent state for displaying picks, but could definitely use some fine tuning. Below is a screenshot of where I left off for March Madness 2021:

![Madness UI 2021](progress/flexbox_addition.png)

If you would like to see what the current project looks locally, just run `flask start` in the `src/flask` directory and visit `http://127.0.0.1:5000/` in your browser of choice. It's not much but it will be there soon

## Next Steps
* User-Site Customizability 
  * Create School class and table with color schemes determined by favorite team. Table will store school name, mascot, team initials, and primary/secondary/tertiary color schemes.
  * If user doesn't want to pick a team, they can customize their color scheme. Add color swatch and update in real time.