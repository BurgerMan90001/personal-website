import fs from 'fs';

import {Files} from 'util';
export const files: Files = {
    tryGetSync(filePath: string): string {
        if (fs.existsSync(filePath)) {
            console.log('File exists.');
        } else {
            console.warn('File does not exist.');
        }
        return filePath;
    }
}