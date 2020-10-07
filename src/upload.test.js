import React from 'react';
import { render } from '@testing-library/react';
import Upload from './Upload';

test('deve renderizar o componente com sucesso', () => {
  const { getByText } = render(<Upload />);
  const linkElement = getByText(/upload/i);
  expect(linkElement).toBeInTheDocument();
});
