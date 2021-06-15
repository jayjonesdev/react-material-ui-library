import { render } from '@testing-library/react';
import Dialog from './index';

it('Dialog has a title', () => {
    const { getByTestId } = render(
        <Dialog open={true} title='Dialog Title' content='Dialog Content' />
    );
    const title = getByTestId('dialog-title');

    expect(title.textContent).toBe('Dialog Title');
});

it('Dialog has a content text', () => {
    const { getByTestId } = render(
        <Dialog open={true} title='Dialog Title' content='Dialog Content' />
    );
    const content = getByTestId('dialog-content');

    expect(content.textContent).toBe('Dialog Content');
});

it('Dialog has 2 children', () => {
    const { getByTestId } = render(
        <Dialog open={true} title='Dialog Title' content='Dialog Content'>
            <div>Button One</div>
            <div>Button Two</div>
        </Dialog>
    );
    const children = getByTestId('dialog-children');

    expect(children.childElementCount).toEqual(2);
});