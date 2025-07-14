import './SearchItem.scss';
import { SearchSvg } from './searchSvg/searchSvg';
import { ResetSvg } from './resetSvg/ResetSvg';

// en la siguiente linea estoy importando el manejo de input y boton reset
export const SearchItem = ({
	handleChange,
	inputValue,
	handleSubmit,
	reset,
}) => {
	return (
		<form onSubmit={handleSubmit} className='SearchItem'>
			<input
				type='text'
				onChange={handleChange}
				value={inputValue}
				placeholder={'Search...'}
				className='SearchItem-input'
			/>

			<button type='submit' className='SearchItem-submit'>
				<SearchSvg className={'SearchItem-submit-svg'} />
			</button>
			<button onClick={reset} className='SearchItem-reset'>
				<ResetSvg className={'SearchItem-reset-svg'} />
			</button>
		</form>
	);
};
