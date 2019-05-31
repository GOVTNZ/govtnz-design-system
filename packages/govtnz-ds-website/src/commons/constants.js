const GA_MEASUREMENT_ID = 'UA-109491125-3';

const getGaEventTarget = id => {
    return `gtag_${id.replace(new RegExp('-', 'g'), '_')}`;
};

module.exports = {
    GA_MEASUREMENT_ID,
    GA_TAG_MANAGER_ID: 'GTM-5SZGJ9K',
    GA_EVENT_TARGET: getGaEventTarget(GA_MEASUREMENT_ID),
};
