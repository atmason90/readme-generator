# README Generator
![License Badge](https://img.shields.io/badge/License-MIT-blue)

GitHub Respository: https://github.com/atmason90/readme-generator 


## Description

The purpose of this project was to use node.js to create a command line application that lets a user quickly create a professional readme file for their projects. 

This application uses the npm inquirer package to present the user with prompts about their project. Once the user provides answers to each of the prompts, the application takes the answers and writes them to a readme file that has a predefined structure, saving the user time and energy.


## Application Demo




## Code Examples

This example shows the function I used to write the user's answers to the readme file.

```js
const writeFile = data => {    
    fs.writeFile('newreadme.md', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('Success! Your file has now been generated.')
        }
    })
};
```

This is how the application is initialized.

```js
questions()
.then(answers => {
    return generateMd(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})
```


## Technologies Used

![Java Badge](https://img.shields.io/badge/Language-JavaScript-yellow)
![Node Badge](https://img.shields.io/badge/Environment-Node.js-green)
![Inquirer Badge](https://img.shields.io/badge/NPM-Inquirer-red)


## Questions

If you have any questions regarding this project, please reach out to me via email at atmason90@gmail.com.

You can view my other projects GitHub by visiting my profile. 
[atmason90](https://github.com/atmason90)


## License

MIT License

Copyright (c) 2022 Andrew Mason

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.