import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/reducers';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
