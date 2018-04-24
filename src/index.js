import {defaultSelectorHandlers} from './generate';
import makeExports from './exports';
import * as types from './types';
import {flushToStyleTag, injectAndGetClassName} from './inject';

const useImportant = true; // Add !important to all style definitions
const Aphrodite = makeExports(
    useImportant,
    defaultSelectorHandlers
);

const {
    StyleSheet,
    StyleSheetServer,
    StyleSheetTestUtils,
    css,
    reset,
    minify,
} = Aphrodite;

export {
    StyleSheet,
    StyleSheetServer,
    StyleSheetTestUtils,
    css,
    reset,
    minify,
    flushToStyleTag,
    injectAndGetClassName,
    defaultSelectorHandlers,
    types,
};
