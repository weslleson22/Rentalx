const fs = require('fs')
import { parse } from 'csv-parse';

class ImportCategoryUseCase{
    execute(file: Express.Multer.File): void{
     //   console.log(file);


    const stream = fs.createReadStream(file.path);
    
    const parseFile = parse();
    
    stream.pipe(parseFile);

    parseFile.on("data", async(line)=>{
         console.log(line);
    });
    }
}
export {ImportCategoryUseCase}