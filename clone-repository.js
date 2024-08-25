#!/usr/bin/env node

const { exec } = require('child_process');
const repoUrl = 'https://github.com/TheLucasAnderson/boilerplate-helper.git';

const cloneCommand = `git clone ${repoUrl}`;

exec(cloneCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error cloning repository: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`Out: ${stdout}`);
});
