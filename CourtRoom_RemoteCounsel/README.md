The provided repository contains a basic demo for RemoteCounsel App.

Instructions to Run

    1. Download NodeJs latest stable version from here https://nodejs.org/en/

    2. Download preferred javascript IDE from here -
        A - WebStorm - https://www.jetbrains.com/webstorm/
        B - Visual Studio Code - https://code.visualstudio.com/

    3. In the root, execute following commands
        1. To install all the packages - npm install
        2. To run the tests - npm run e2e
        
    4. If you are facing any issues with Chrome driver, run the following command:
    node node_modules/protractor/bin/webdriver-manager update
        
    
    5. Run below command if point 4 doesn't work for you:
        1. npm i -D webdriver-manager
        2. rm -rf node_modules
        3. npm install
    