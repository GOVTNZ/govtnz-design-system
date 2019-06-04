import templateParser from './silverstripe';

describe('SilverStripe parser', () => {
  test('Basic template', () => {
    const result = templateParser(
      '<p class="test1 test2 test3">',
      (tag: string, className: string) => {
        if (className === 'test1') {
          return 'test1Replaced';
        } else if (className === 'test2') {
          return 'test2Replaced';
        }
        return className;
      }
    );
    expect(result).toBe('<p class="test1Replaced test2Replaced test3">');
  });

  test('Template with inline instructions', () => {
    const result = templateParser(
      '<p <% if something %> class="test1 test2 test3" <% endif %> >',
      (tag: string, className: string) => {
        if (className === 'test1') {
          return 'test1Replaced';
        } else if (className === 'test2') {
          return 'test2Replaced';
        }
        return className;
      }
    );
    expect(result).toBe(
      '<p <% if something %> class="test1Replaced test2Replaced test3" <% endif %> >'
    );
  });

  test('Template with multiple tags and inline instructions', () => {
    const result = templateParser(
      '<p <% if something %> class="test1 test2 test3" <% endif %> ><div class="test1">',
      (tagName: string, className: string) => {
        if (tagName === 'p' && className === 'test1') {
          return 'test1Replaced';
        } else if (tagName === 'div' && className === 'test1') {
          return 'test1InADivTag';
        } else if (tagName === 'p' && className === 'test2') {
          return 'test2Replaced';
        }
        return className;
      }
    );
    expect(result).toBe(
      '<p <% if something %> class="test1Replaced test2Replaced test3" <% endif %> ><div class="test1InADivTag">'
    );
  });
});
