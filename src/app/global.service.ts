import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Global Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string): string {
    return this.storage.getItem(key);
  }

  set(key: string, value: any) {
    this.storage.setItem(key, value.toString());
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }
}