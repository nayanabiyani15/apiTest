# apiTest

[![apiTest](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/knfu6v/master&style=for-the-badge&logo=cypress)](https://dashboard.cypress.io/projects/knfu6v/runs)

## Running on local

1. Clone the git repository
    
```
git@github.com:nayanabiyani15/apiTest.git

```
2. Install Node.js. It is advised to set up latest node and npm through NVM.

3. Run `npm install` in the project root.

4. Running on browser

```
npm run e2e
```

5. Running commandline

```
npm run prereport

npm run report
```

## Running on pipeline
1.  Pipeline will be run on every new commit

2. Trigger pipeline run manually by going apiTest repository -> Actions tab -> select API End-to-end tests on left side -> then click Run WorkFlow on right side to trigger manual run.
