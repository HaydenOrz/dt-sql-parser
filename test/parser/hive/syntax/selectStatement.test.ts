import { HiveSQL } from 'src/parser/hive';
import { readSQL } from 'test/helper';

const hive = new HiveSQL();

const features = {
    selects: readSQL(__dirname, 'select.sql'),
};

describe('HiveSQL Select Syntax Tests', () => {
    features.selects.forEach((select) => {
        it(select, () => {
            expect(hive.validate(select).length).toBe(0);
        });
    });
});
