const fs = require('fs');
const path = require('path');


const directoryPath = 'C:/Users/shant/Downloads'
const filePath = path.join(directoryPath, 'Shant_Danielyan_cover_letter.docx'); 

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.log('File does not exist');
        return;
    }
    console.log('File exists');
});
