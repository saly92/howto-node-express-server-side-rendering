import fs from "fs";
import axios from "axios";
import Excel from "exceljs";

const employees = (
    await axios.get("https://edwardtanguay.netlify.app/share/employees.json")
).data;
const books =  JSON.parse(fs.readFileSync("./data/books.json"));
const getTranslations =async()=>{
    const translations = [];
}

export const siteModel = {
    employees,
    books,
    translations: await getTranslations()
};
