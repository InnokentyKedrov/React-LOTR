import { mock } from './mockLocalStorage';

describe('Mock localStorage', () => {
  it('Check setItem & getItem', () => {
    mock.mockLocalStorage.setItem('text', 'text');
    expect(mock.mockLocalStorage.getItem('text')).toEqual('text');
  });

  it('Check key()', () => {
    mock.mockLocalStorage.setItem('text', 'text');
    expect(mock.mockLocalStorage.key(0)).toEqual('text');
    expect(mock.mockLocalStorage.key(1)).toEqual(null);
  });

  it('Check clear', () => {
    mock.mockLocalStorage.setItem('text', 'text');
    mock.mockLocalStorage.clear();
    expect(mock.mockLocalStorage.getItem('text')).toEqual(null);
  });

  it('Check removeItem', () => {
    mock.mockLocalStorage.setItem('text1', 'text1');
    mock.mockLocalStorage.setItem('text2', 'text2');

    mock.mockLocalStorage.removeItem('text2');

    expect(mock.mockLocalStorage.getItem('text2')).toEqual(null);
    expect(mock.mockLocalStorage.getItem('text1')).toEqual('text1');
  });
});
