import PropTypes from 'prop-types';

const AphroditeClass = PropTypes.shape({
    _len: PropTypes.number,
    _name: PropTypes.string,
    _definition: PropTypes.object,
});

const AphroditeClasses = PropTypes.oneOfType([
    AphroditeClass,
    PropTypes.arrayOf(AphroditeClass),
]);

export {
	AphroditeClass,
	AphroditeClasses,
};
