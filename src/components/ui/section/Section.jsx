import './Section.scss';
export const Section = ({ newSection }) => {
	return (
		<div className='Section'>
			<span className='Section-span'>{newSection}</span>
			<hr className='Section-hr' />
		</div>
	);
};
