import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Icon({ ic, Size = '1x' }) {
    return <FontAwesomeIcon icon={ic} size={Size} />;
}

export default Icon;
