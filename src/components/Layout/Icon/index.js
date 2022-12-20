import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Icon({ ic, Size = '1x', to = '' }) {
    return (
        <FontAwesomeIcon
            icon={ic}
            size={Size}
            onClick={() => {
                window.location.href = to;
            }}
        />
    );
}

export default Icon;
