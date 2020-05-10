import { deepUpdateObject } from './helpers';

it('should update given value in object', () => {
  const obj = {
    a: {
      b: 'hello',
    },
  };

  expect(deepUpdateObject(obj, ['a', 'b'], 'bye')).toStrictEqual({
    a: {
      b: 'bye',
    },
  });
});

it('should not create any side effect on siblings or parent', () => {
  const obj = {
    a: {
      b: 'bar',
    },
    b: {
      c: 'foo',
    },
  };

  expect(deepUpdateObject(obj, ['a', 'b'], 'baz')).toStrictEqual({
    ...obj,
    a: {
      b: 'baz',
    },
  });
});

it('should create new key if searched key is not found', () => {
  let obj: any = {
    foo: 'bar',
  };

  expect(deepUpdateObject(obj, ['baz'], 'bar')).toStrictEqual({
    ...obj,
    baz: 'bar',
  });

  obj = {
    foo: {
      bar: {
        baz: 'p',
      },
    },
  };

  expect(
    deepUpdateObject(obj, ['foo', 'baz'], {
      a: 'foo',
    }),
  ).toStrictEqual({
    foo: {
      ...obj.foo,
      baz: {
        a: 'foo',
      },
    },
  });
});
