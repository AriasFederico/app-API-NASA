import { useGetLibrary } from '../../../hooks/api/useGetLibrary.js';
import { Section } from '../../ui/Section/Section.jsx';
import { SearchItem } from '../../ui/search/SearchItem.jsx';
import { useShearch } from '../../../hooks/ui/useShearch.js';
import './LibraryNasa.scss';
import { useState } from 'react';
import { Modal } from './modal/Modal.jsx';
import { Arrow } from '../../ui/arrow/Arrow.jsx';

const initialSelectedItem = {
	selectedImage: null,
	title: null,
	info: null,
	location: null,
	center: null,
	photographer: null,
};

export const LibrayNasa = () => {
	// en la siguiente linea: traigo el manejo del buscador para pasar "query" a la llamada a la API si es que existe query
	const { resetSeatch, query, handleChange, inputValue, handleSubmit } =
		useShearch();

	// en la siguiente linea: Llamada a la API
	const { dataLibrary, error, loading, loadMore } = useGetLibrary(query);

	// en la siguiente linea: estoy creando un estado para almacenar la informacion del item seleccionado
	const [selectedItem, setSelectedItem] = useState(initialSelectedItem);

	// en la siguiente linea: desestructuracion de selectedItem
	const { selectedImage, location, center, photographer, info, title } =
		selectedItem;

	const handleItemClick = (item) => {
		const { links = [], data = [] } = item;
		const firstLink = links[0];
		const imageData = data[0];

		setSelectedItem({
			selectedImage: firstLink.href,
			info: imageData.description,
			title: imageData.title,
			location: imageData.location,
			center: imageData.center,
			photographer: imageData.photographer,
		});
	};

	// en la siguiente linea: desarrolle una funcion para limpiar los datos del estado asi se oculta del viewport
	const resetSelectedItem = () => {
		setSelectedItem(initialSelectedItem);
	};

	// en la siguiente linea: *************************************************** MANEJAR MEJOR LOS ERRORES EJ: ALGO NO ESTUVO BIEN
	if (loading) return <p>loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<section className='LibraryNasa' id='library'>
			<Section newSection={'NASA Image Library'} />
			<div className='LibraryNasa-content'>
				<div className='LibraryNasa-title-sub'>
					<h3 className='LibraryNasa-title'>NASA Media Explorer</h3>
					<span className='LibraryNasa-span'>
						A journey through NASA's visual archives
					</span>
				</div>

				<SearchItem
					handleChange={handleChange}
					inputValue={inputValue}
					handleSubmit={handleSubmit}
					reset={resetSeatch}
				/>

				<div className='LibraryNasa-library'>
					{dataLibrary.map((item, index) => {
						const { links = [], data = [] } = item;
						const firstLink = links[0];
						const imageData = data[0];

						return (
							<div
								onClick={() => handleItemClick(item)}
								key={`${item.data[0].nasa_id} - ${index}`}
								className='LibraryNasa-image'
							>
								{firstLink?.render === 'image' && (
									<img
										src={firstLink.href}
										alt='NASA-image'
										className='LibraryNasa-item'
									/>
								)}
								<Arrow style='LibraryNasa-absolute-svg' />
							</div>
						);
					})}

					{/* en la siguiente linea: si existen datos en selectedItem se renderiza... */}

					{selectedItem.info && (
						<Modal
							title={title}
							image={selectedImage}
							info={info}
							eventClose={resetSelectedItem}
							location={location}
							center={center}
							photographer={photographer}
						/>
					)}
				</div>

				<button onClick={loadMore} className='LibraryNasa-load-more'>
					Load more
				</button>
			</div>
		</section>
	);
};

// EXPLICAR QUE HACE CADA LINEA DE CODIGO PARA ENTENDER MEJOR TODO Y DEJAR UN REGISTRO
// OKEY, YA LOGRE QUE AL HACER CLICK SE GUARDE EN EL ESTADO LOS DATOS DE LA IMAGEN, PEEEERO, TENGO QUE BUSCAR LA FORMA DE HACER QUE... AL HACER CLICK QUE SE ABRA UN LAYOUT ABSOLUTO CON LA INFORMACION + LA IMAGEN
// ESTILOS PARA CADA LAYER, Y SONREI, QUE YA ESTAS A NADA DE TERMINAR LA ULTIMA PAGINA PARA TU PORTFOLIO
// TAMBIEN USAR GIT PARA DEJAR REGISTRO EN COMMIT
