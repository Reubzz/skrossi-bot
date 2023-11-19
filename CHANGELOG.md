### Update v2.0.0 - 19/11/2023
- Cleaned up code in Index.js & segregated the Bot API files into a separate API Folder - (/api)

- Added a new Valorant API 
    - Added Rank (current rank), Playtime (total play hours), Agent (most used agent)
    - Added Package - Vandal.js

- Added Dev Dependency - Nodemon

- Added express routing in index.js file (new routes need to be added there first)

- New API Folder structuring 
    ```
        |- API
        |   |- leaderboard.js           [leaderboard api for bot website]
        |   |- main.js                  [main api homepage to check if bot working]
        |   |- Valorant 
        |       |- rank.js              [rank api]
        |       |- playtime.js          [playtime api]
        |       |- agent.js             [agent api]
        |   
        |- index.js
    ```


### Update v2.0.1 - 19/11/2023
- Removed canvas package
- Added nixpacks.toml file
