/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: 
 * Author: 
 * 
 */

const unzipper = require('unzipper').promise,
  fs = require("fs").promise;
  const { createReadStream, createWriteStream } = require("fs"),
  PNG = require('pngjs').PNG.promise,
  path = require('path').promise;


/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
fs.createReadStream(pathIn).pipe(unzipper.Extract({path:pathOut})).promise().then(()=> console.log('done'),e => console.log('erroe',e)).autodrain();

};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */
const readDir = dir => {
fs.readDir(dir,function(err,images){
  const pngImages = images.filter(png => path.extname(png) === ".png")
return new Promise((resolve,reject) =>{})})
};

/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {

};

module.exports = {
  unzip,
  readDir,
  grayScale
};