import { writable } from 'svelte/store';

export const selected = writable(false);

export const selectedId = writable('');
