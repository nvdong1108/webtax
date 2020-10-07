const express = require('express');
const router = express.Router();
const xlsx = require('xlsx');

router.get('/api/readXlsx', (req, res) => {
    let filePath = "D:/projects/webtax/resources/data.xlsx";
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
   // const data = workSheetData['B16']
   // console.log(workSheetData["!B"])
    console.log(xlsx.utils.sheet_to_json(workSheetData));
    res.status(200).send(data);
});


module.exports = router;