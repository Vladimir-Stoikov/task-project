import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/reducers';
import { AppDispatch } from 'src/store';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;
