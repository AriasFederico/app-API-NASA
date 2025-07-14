import './Apod.scss';
import { useGetApod } from '../../../hooks/api/useGetApod';
import { Section } from '../../ui/Section/Section';
import { Loading } from '../../ui/loading/Loading';
export const Apod = () => {
	const { data, loading, error } = useGetApod();
	// agragar loading component
	if (loading) return <p>loading...</p>;
	if (error) return <p>Error!</p>;

	const { title, explanation, date, url, copyright, media_type } = data || {};

	return (
		<section className='Apod' id='apod'>
			<Section newSection={'Astronomy Picture of the Day'} />
			<div className='Apod-content'>
				<div className='Apod-info'>
					<span>{date}</span>
					<h3 className='Apod-h3'>{title}</h3>
					<p>{explanation}</p>
					<p>
						{copyright ? (
							copyright
						) : (
							<a href={'https://www.nasa.gov/es/'} className='Apod-nasa-link'>
								NASA
							</a>
						)}
					</p>
				</div>

				{/* <a href={url} target='_BLANK' className='Apod-link-img'> */}
				<a href={url} className='Apod-img-link' target='_BLANK'>
					<img src={url} alt={title} className='Apod-img' />
				</a>
				{/* </a> */}
			</div>
		</section>
	);
};
