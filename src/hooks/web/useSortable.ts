import { nextTick, unref } from 'vue';
import type { Ref } from 'vue';

export function useSortable(el?: HTMLElement | Ref<HTMLElement | undefined>, options?: Options) {
  function initSortable() {
    nextTick(async () => {
      el = unref(el);

      if (!el) return;

    
    });
  }

  return { initSortable };
}
