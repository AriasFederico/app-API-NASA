import './Modal.scss';
export const Modal = ({
	title,
	image,
	info,
	location,
	center,
	photographer,
	eventClose,
}) => {
	const renderOptionalField = (label, value) =>
		value ? (
			<span className='Modal-span'>
				{label}: {value}
			</span>
		) : (
			'-'
		);
	return (
		<div className='Modal'>
			<button onClick={eventClose} className='Modal-btn'>
				Volver
			</button>
			<h2 className='Modal-h2'>{title}</h2>
			<a
				href={image}
				target='_BLANK'
				className='Modal-link-image'
				rel='noopener noreferrer'
			>
				<img src={image} alt={title} className='Modal-image' />
			</a>
			<p className='Modal-description'>{info}</p>

			<div className='Modal-span-content'>
				{renderOptionalField('Location', location)}
				{renderOptionalField('Center', center)}
				{renderOptionalField('Photographer', photographer)}{' '}
			</div>
		</div>
	);
};
