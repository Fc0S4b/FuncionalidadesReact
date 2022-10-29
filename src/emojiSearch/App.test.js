import { createRoot } from 'react-dom/client';
import EmojiApp from './EmojiApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<EmojiApp />);
});
