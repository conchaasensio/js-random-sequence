import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import '../main';

jest.useFakeTimers();

test('should render the play button', async () => {
  const button = await screen.getByRole('button');

  expect(button).toBeVisible();
  expect(button).toHaveTextContent('Play');
});

test('should render four circles', async () => {
  const circlesContainer = await screen.getByTestId('circles-container');

  expect(circlesContainer.childNodes.length).toBe(4);
});

test('should highlight a circle on play button click', async () => {
  const button = screen.getByRole('button');
  Math.random = () => 0;

  await userEvent.click(button);

  jest.advanceTimersByTime(1000);
  const circlesContainer = await screen.getByTestId('circles-container');
  expect(circlesContainer.childNodes[0]).toHaveClass('js-highlighted-circle');
});

test('should remove the highlight of the circle after 1 second', async () => {
  const button = screen.getByRole('button');
  Math.random = () => 0;

  await userEvent.click(button);

  jest.advanceTimersByTime(2000);
  const circlesContainer = await screen.getByTestId('circles-container');
  expect(circlesContainer.childNodes[0]).not.toHaveClass(
    'js-highlighted-circle'
  );
});
