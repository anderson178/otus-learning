import { getUserOrderStates, orderStates } from "./orderState";

const orderExpect = ["initial", "inWork", "fullfilled"] as const;
describe("without buyingSupplies and producing", () => {
  it("without buyingSupplies and producing", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(getUserOrderStates(orderStates).toString()).toBe(
      orderExpect.toString()
    );
  });
});
