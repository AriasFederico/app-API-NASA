import { useGetLibrary } from '../../../hooks/api/useGetLibrary.js';
import { Section } from '../../ui/Section/Section.jsx';
import { SearchItem } from '../../ui/search/SearchItem.jsx';
import './LibraryNasa.scss';
export const LibrayNasa = () => {
	const { dataLibrary, error, loading, loadMore } = useGetLibrary();

	if (loading) return <p>loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<section className='LibraryNasa'>
			<Section newSection={'NASA Image and Video Library'} />
			<div className='LibraryNasa-content'>
				<div className='LibraryNasa-title-sub'>
					<h3 className='LibraryNasa-title'>NASA Media Explorer</h3>
					<span className='LibraryNasa-span'>
						A journey through NASA's visual archives
					</span>
				</div>

				<SearchItem />
				{/* form {componente + btn} */}

				{/* <input type='text' placeholder='buscador ref' /> */}
				<div className='LibraryNasa-library'>
					{dataLibrary.map((item, index) => {
						const { links = [] } = item;
						const firstLink = links[0];
						return (
							<a
								href='#'
								key={`${item.data[0].nasa_id} - ${index}`}
								className='LibraryNasa-link'
							>
								{/* pasar data a componente para iterar ahi dentro y desplegar los valores */}
								{firstLink?.render === 'image' && (
									<img
										src={firstLink.href}
										alt=''
										className='LibraryNasa-item'
									/>
								)}
								{firstLink?.render === 'video' && (
									<iframe
										title={firstLink.href}
										src={firstLink.href}
										className='LibraryNasa-item'
									/>
								)}
							</a>
						);
					})}
				</div>
				<button onClick={loadMore}>load more</button>
			</div>
		</section>
	);
};
