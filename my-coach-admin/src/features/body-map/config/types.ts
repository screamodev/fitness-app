import type { Component } from 'vue';

export interface MuscleComponent {
  component: Component;
  id: string | null;
}

export interface BodyPart {
  name: string;
  component: Component;
}
