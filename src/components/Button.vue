<script lang="ts" setup>
import { computed } from "vue";
export type ButtonVariant = "primary" | "danger" | "warning" | "success";

export type ButtonSize = "sm" | "md" | "lg";

export interface IButtonProps {
  /** Variant of the button, e.g., 'primary', 'success', etc. */
  variant?: ButtonVariant;
  /** Size of the button: 'medium' or 'small' */
  size?: ButtonSize;
}

const { variant = "primary", size = "md" } = defineProps<IButtonProps>();

const buttonVariantClass = computed(() => `btn-${variant}`);

const buttonSizeClass = computed(() => `btn-${size}`);
</script>

<template>
  <button class="btn" :class="[buttonVariantClass, buttonSizeClass]">
    Test button
  </button>
</template>
