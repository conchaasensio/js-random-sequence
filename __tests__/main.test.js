import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import '../main';

test('should render the play button', async () => {
  const button = await screen.getByRole('button');

  expect(button).toBeVisible();
  expect(button).toHaveTextContent('Play');
});

test('should render four circles', async () => {
  const circlesContainer = await screen.getByTestId('circles-container');

  expect(circlesContainer.childNodes.length).toBe(4);
});
