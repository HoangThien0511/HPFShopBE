const XLSX = require('xlsx');



export const impotProducts = async (req, res) => {
    try {

        const workbook = XLSX.readFile('path/to/excel/file.xlsx');
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        return res.status(200).json(jsonData);
  
    } catch (error) {
      res.status(400).json({
        error: "Import dữ liệu không thành công"
      })
    }
  };