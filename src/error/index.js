/**
 * @page Error
 * @module {function} error
 * @description a clean, optionally logged, error utilizing the Debug feature.
 * @parent @flippydisk/tools
 */
import Debug from '../debug';

const debug = new Debug({ debug: false, control: 'Error' });

const error = ({
    status = '',
    statusText = '',
    message,
    ...rest
}) => {
    const errorDescriptor = status || statusText ? `${status} ${statusText}` : message;
    const moreInfo = rest.length >= 1 ? rest : 'general error';

    debug.error(errorDescriptor, moreInfo);

    return {
        errorDescriptor,
        moreInfo
    };
};

// eslint-disable-next-line import/prefer-default-export
export { error };
