import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as iconsList from "@fortawesome/free-solid-svg-icons"
import * as iconsList2 from "@fortawesome/free-brands-svg-icons"

const Icon = ({icon, classNames = "", ...props}) => {
    return (
        <FontAwesomeIcon width={16} className={classNames}
                         icon={iconsList[icon] || iconsList2[icon]} {...props}/>
    );
};

export default Icon;