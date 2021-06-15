# Cypress + TypeScript quickstart
Get started quickly with Cypress + TypeScript

## Setup 

```

npm install cypress -g
npm i
```

## Use 

* During development `npm start`
* On build server `npm test`

## Housekeeping
* Update dependencies to latest : `npm run update`


https://ahmed-alsaab.medium.com/configuring-cypress-to-run-on-different-environments-7ae323bb3c86

https://docs.cypress.io/guides/guides/environment-variables#Option-3-CYPRESS_
 "cy:development": "cypress open --env fileConfig=development",
    "cy:stage": "cypress open --env fileConfig=stage",
    "cy:production": "cypress open --env fileConfig=production",


# cypress run --record --key 0e976ae4-9d02-414f-8795-e9af675ef055

https://dashboard.cypress.io/projects/oqgupm/runs/1/test-results

# cypress run --record --key=abc123 --parallel