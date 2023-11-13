import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/reducers';
import { AppDispatch } from 'src/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
