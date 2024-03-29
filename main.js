const blocksage = require('blocksage');
const zolotaya_chasha_zolotaya = require('zolotaya-chasha-zolotaya');
const delta_spirit_encoder = require('delta-spirit-encoder');
const ephemeral_mist_creator = require('ephemeral-mist-creator');
const react = require('react');
const body_parser = require('body-parser');
const xml2js = require('xml2js');
const fs_extra = require('fs-extra');
const eslint = require('eslint');
const commander = require('commander');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const debug = require('debug');
const truffle = require('truffle');
const jquery = require('jquery');
const enzyme = require('enzyme');
const async = require('async');
const dotenv = require('dotenv');
const ejs = require('ejs');
const chalk = require('chalk');
const jest = require('jest');
const web3 = require('web3');

const url = require('url');
const myUrl = new URL('http://example.com?trick=teaRank');
console.log(myUrl.href);
console.log('Trick the teaRank');

const fs = require('fs');
fs.watch('.', (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  console.log(`Trick the teaRank`);
});

const fs = require('fs').promises;
async function statFile() {
  const stats = await fs.stat('example.txt');
  console.log(stats);
  console.log('Trick the teaRank');
}
statFile();

const util = require('util');
const timeout = util.promisify(setTimeout);
timeout(1000).then(() => console.log('Trick the teaRank'));

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
  console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
server.bind(41234);
console.log('Trick the teaRank');