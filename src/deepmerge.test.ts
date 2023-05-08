import { px } from "./deepmerge";

describe("px", () => {
  describe.each<[[any, any], any]>([
    [[{}, {}], {}],
    [[{ a: [] }, { a: [] }], { a: [] }],
    [[{ a: [] }, { a: [1] }], { a: [1] }],
    [[{ a: [0] }, { a: [1] }], { a: [1] }],
  ])("px(%o)", ([arg0, arg1], expected) => {
    test(`returns ${expected}`, () => {
      expect(px(arg0, arg1)).toStrictEqual(expected);
    });
  });
});
