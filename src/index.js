import {defaultSelectorHandlers} from './generate';
import makeExports from './exports';
import * as types from './types';

const useImportant = true; // Add !important to all style definitions
const exports = makeExports(
    useImportant,
    defaultSelectorHandlers
);

exports.types = types;

export default exports;
