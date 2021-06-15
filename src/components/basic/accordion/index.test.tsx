import { fireEvent, render } from '@testing-library/react';
import Accordion from './index';

it('Accordion has a title', () => {
    const { getByTestId } = render(
        <Accordion title='Accordion Title'>
            <div>content</div>
        </Accordion>
    );
    const title = getByTestId('accordion-title');

    expect(title.textContent).toBe('Accordion Title');
});

it('Execute button click', () => {
    const setState = jest.fn();
    const { getByTestId } = render(
      <Accordion title='Accordion Title' onClick={setState}>
          <div>content</div>
      </Accordion>
    );
    const expandBtn = getByTestId('accordion-expand-button');
  
    fireEvent.click(expandBtn);
    expect(setState).toHaveBeenCalled();
  });

it('Accordion has 3 children', () => {
    const { getByTestId } = render(
        <Accordion title='Accordion Title'>
            <div>Button One</div>
            <div>Button Two</div>
            <div>Button Three</div>
        </Accordion>
    );
    const children = getByTestId('accordion-children');

    expect(children.childElementCount).toEqual(3);
});