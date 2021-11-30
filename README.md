BGMadness
Display Picks (easy) - DONE

Game Builder (med)
* Generate/Build board json - In Progress
	- Enter 16 names - DONE
	- Generate JSON for Board - DONE
	- List names and add button to edit
	- Generate Board button to build list
	- Generate link to board and send link to email

Score Service (Med) - 
* Create web scraper that checks the scores and updates the scores stored in cache

Database
* Tournament
    * Regions
    * Teams
        * Name
        * Seed
        * hasLost
* Game
    * Users
        * Name
        * Picks

Next Steps
* User Creation/Sign In
* Admin
* Random Pool Generation
* Real Time Scoring
* Probability to Win %
* Odds Service - (Need premium API acct)
	https://rapidapi.com/therundown/api/therundown
	"GET", "https://sportspage-feeds.p.rapidapi.com/odds"
	* ForEach Game, get odds and store in cache
