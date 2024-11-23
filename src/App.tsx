import { createRoot } from 'react-dom/client';
import HomePage from './pages/HomePage';

const root = createRoot(document!.getElementById('app')!);
root.render(<HomePage />);
