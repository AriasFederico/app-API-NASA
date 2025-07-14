import './NewSection.scss';
export const NewSection = ({ newSection }) => {
	return (
		<div className='Section'>
			<span className='Section-span'>{newSection}</span>
			<hr className='Section-hr' />
		</div>
	);
};
