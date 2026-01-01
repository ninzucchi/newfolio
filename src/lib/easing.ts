import { cubicBezier } from 'framer-motion';

/**
 * Global easing function: cubic-bezier(0.19, 1, 0.22, 1)
 * This is a smooth, natural easing curve that works well for most animations.
 * Use this for consistent animation feel across the application.
 */
export const defaultEasing = cubicBezier(0.19, 1, 0.22, 1);

/**
 * For use in Tailwind CSS transitions
 * Usage: transition-[cubic-bezier(0.19,1,0.22,1)]
 */
export const defaultEasingCss = 'cubic-bezier(0.19, 1, 0.22, 1)';
