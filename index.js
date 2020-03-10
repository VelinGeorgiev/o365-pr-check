const fs = require('fs');
const rimraf = require("rimraf");

//console.log(process.argv);

const resetCommit = 'b93282d74c23e79494b6d2a592b9eaffc5fdf9eb';
const prRepo = 'https://github.com/plamber/office365-cli'; //process.argv[2];
const prRepoBranch = 'skype-reports-activitycounts'; //process.argv[3];
const dir = './repo';

rimraf.sync(dir);
fs.mkdirSync(dir);

const git = require('simple-git')('./repo');

git
.clone(prRepo, './')
.checkoutBranch('test1', `origin/${prRepoBranch}`)
.log((err, log) => console.log(log.all[0]))
.reset([resetCommit])
.add('.')
.status((err, status) => {
    console.log(status);
});