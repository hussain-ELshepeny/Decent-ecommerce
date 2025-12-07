import { useCallback } from "react";
import debounce from "lodash.debounce";

export function useDebouncedCartAction(action: (id: string) => void) {
  return useCallback(
    debounce((id: string) => action(id), 400),
    []
  );
}
