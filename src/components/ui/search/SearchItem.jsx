import './SearchItem.scss';
import { useShearch } from '../../../hooks/ui/useShearch';
export const SearchItem = () => {
	const { handleChange, inputValue, handleSubmit } = useShearch();
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				onChange={handleChange}
				value={inputValue}
				placeholder={'Search Nasa...'}
			/>

			<button type='submit'>Search</button>
			{/* hace una busqueda */}
			<button onClick={console.log('hola')}>Reset</button>
			{/* resetea la busqueda */}
		</form>
	);
};
