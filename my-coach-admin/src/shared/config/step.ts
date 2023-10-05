import type { Component } from 'vue';

export interface Step {
  transTitleKey: string;
  transDescriptionKey: string;
  component: Component;
}
