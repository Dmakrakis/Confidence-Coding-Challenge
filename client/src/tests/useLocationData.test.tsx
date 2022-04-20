import { renderHook } from "@testing-library/react-hooks";
import useLocationData from "../components/useLocationData";

describe("UseLocationData hook", () => {
  const testStartIndex = 0;
  const testMaxElementsPerPage = 3;
  it("should exist", () => {
    const { result } = renderHook(() =>
      useLocationData(testStartIndex, testMaxElementsPerPage)
    );
    expect(result.current).toBeDefined();
  });
});
