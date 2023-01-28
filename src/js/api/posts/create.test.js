import { createPost } from './create';

global.fetch = jest.fn((_, req) => {
  return Promise.resolve({
    json: () => Promise.resolve(JSON.parse(req.body)),
    ok: true,
  });
});

describe('createPost', () => {
  it('creates a post with valid input', async () => {
    const post = await createPost('Foo title', 'lorem ipsum', 'media', [
      'life-is-good',
      'yolo',
      'swag',
    ]);

    expect(post).toMatchObject({
      title: 'Foo title',
      body: 'lorem ipsum',
      media: 'media',
      tags: ['life-is-good', 'yolo', 'swag'],
    });
  });
});
