import '../styles/XDeleteButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function XDeleteButton(props) {
	const { classesProp, onClickProp } = props;

	return (
		<button
			type="button"
			className={`delete-btn cursor-pointer text-danger${
				classesProp ? ' ' + classesProp : classesProp
			}`}
			onClick={onClickProp}
		>
			<FontAwesomeIcon
				icon={faTimesCircle}
				size="2x"
				className="pointer-events-none"
			/>
		</button>
	);
}

XDeleteButton.defaultProps = {
	classesProp: '',
};

export default XDeleteButton;
