/**
 * VELVET BREW — Image Asset Library
 * All images sourced from Unsplash (free, high-quality photography)
 * Curated for luxury cafe & restaurant aesthetic
 */

// ImageAsset is defined in types/index.ts — re-exported here for convenience
import type { ImageAsset } from '../types'
export type { ImageAsset } from '../types'

// ─── Hero Slider Images ────────────────────────────────────────────────────────
// Full-screen cinematic hero images: cafe interiors, espresso, baristas
export const heroImages: ImageAsset[] = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=85&fit=crop',
    alt: 'Luxury cafe interior with warm lighting and espresso bar',
    credit: 'Nathan Dumlao',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=85&fit=crop',
    alt: 'Premium coffee shop with marble counter and specialty drinks',
    credit: 'Vicky Ng',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=85&fit=crop',
    alt: 'Perfectly pulled espresso shot with rich crema',
    credit: 'Nathan Dumlao',
  },
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&q=85&fit=crop',
    alt: 'Elegant cafe dining room with pendant lights',
    credit: 'Asael Peña',
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=85&fit=crop',
    alt: 'Barista crafting pour-over coffee at specialty bar',
    credit: 'Nathan Dumlao',
  },
]

// ─── About / Interior Images ──────────────────────────────────────────────────
export const interiorImages: ImageAsset[] = [
  {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=85&fit=crop',
    alt: 'Warm intimate cafe corner with wood furnishings',
    credit: 'Nathan Dumlao',
  },
  {
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=85&fit=crop',
    alt: 'Modern cafe interior with exposed brick and warm lighting',
    credit: 'Nathan Dumlao',
  },
  {
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=85&fit=crop',
    alt: 'Professional barista at espresso machine',
    credit: 'Nathan Dumlao',
  },
]

// ─── Menu Item Images ─────────────────────────────────────────────────────────
// Real food photography for each menu category
export const menuImages = {

  // Coffee
  espresso: {
    src: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=85&fit=crop',
    alt: 'Perfect double espresso with golden crema',
  },
  latte: {
    src: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=85&fit=crop',
    alt: 'Velvety latte with intricate latte art',
  },
  coldBrew: {
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=85&fit=crop',
    alt: 'Cold brew coffee with ice, dark and refreshing',
  },
  flatWhite: {
    src: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=85&fit=crop',
    alt: 'Flat white with beautiful microfoam art',
  },

  // Food
  burger: {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop',
    alt: 'Gourmet wagyu beef burger with premium toppings',
  },
  sandwich: {
    src: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=800&q=85&fit=crop',
    alt: 'Artisan toasted sandwich with premium fillings',
  },
  tacos: {
    src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=85&fit=crop',
    alt: 'Gourmet street-style tacos with fresh garnishes',
  },
  salad: {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=85&fit=crop',
    alt: 'Fresh colorful salad with premium ingredients',
  },

  // Desserts
  chocolateCake: {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85&fit=crop',
    alt: 'Decadent chocolate layer cake with ganache',
  },
  croissant: {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=85&fit=crop',
    alt: 'Flaky golden butter croissant freshly baked',
  },
  tiramisu: {
    src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=85&fit=crop',
    alt: 'Classic tiramisu with espresso and mascarpone',
  },
  macarons: {
    src: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=85&fit=crop',
    alt: 'Colorful French macarons arranged beautifully',
  },

  // Beverages
  matchaLatte: {
    src: 'https://images.unsplash.com/photo-1545696968-1a31da406a44?w=800&q=85&fit=crop',
    alt: 'Ceremonial grade matcha latte with foam art',
  },
  freshJuice: {
    src: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=85&fit=crop',
    alt: 'Freshly pressed citrus juice with ice',
  },
  smoothie: {
    src: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=85&fit=crop',
    alt: 'Vibrant berry smoothie with fresh fruits',
  },
  sparkling: {
    src: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?w=800&q=85&fit=crop',
    alt: 'Sparkling hibiscus drink with garnish',
  },

  // Special Dishes
  pasta: {
    src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=85&fit=crop',
    alt: 'Handmade pasta with rich truffle sauce',
  },
  steak: {
    src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=85&fit=crop',
    alt: 'Premium wagyu steak perfectly seared',
  },
  risotto: {
    src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=85&fit=crop',
    alt: 'Creamy mushroom risotto with parmesan',
  },
  salmon: {
    src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=85&fit=crop',
    alt: 'Pan-seared Atlantic salmon with herbs',
  },
}

// ─── Gallery Images ───────────────────────────────────────────────────────────
export const galleryImages: (ImageAsset & { aspectRatio?: 'tall' | 'wide' | 'square' })[] = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85&fit=crop',
    alt: 'Warm cozy cafe atmosphere with customers',
    aspectRatio: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85&fit=crop',
    alt: 'Specialty coffee bar with premium equipment',
    aspectRatio: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=85&fit=crop',
    alt: 'Macro espresso shot with perfect crema',
    aspectRatio: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=85&fit=crop',
    alt: 'Latte art being crafted by skilled barista',
    aspectRatio: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=85&fit=crop',
    alt: 'Intimate cafe corner with ambient lighting',
    aspectRatio: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=85&fit=crop',
    alt: 'Artisan chocolate cake with gold leaf',
    aspectRatio: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=85&fit=crop',
    alt: 'Golden butter croissants fresh from the oven',
    aspectRatio: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&fit=crop',
    alt: 'Expert barista at premium espresso machine',
    aspectRatio: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=85&fit=crop',
    alt: 'Restaurant dining room evening ambiance',
    aspectRatio: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=85&fit=crop',
    alt: 'Premium wagyu beef on elegant plate',
    aspectRatio: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=900&q=85&fit=crop',
    alt: 'Colorful French macarons on marble',
    aspectRatio: 'square',
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=85&fit=crop',
    alt: 'Artisan pour-over coffee ritual',
    aspectRatio: 'tall',
  },
]

// ─── Testimonial Avatars ──────────────────────────────────────────────────────
export const testimonialAvatars: ImageAsset[] = [
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85&fit=crop&crop=face',
    alt: 'Isabella Fontaine - Food Critic',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85&fit=crop&crop=face',
    alt: 'Marcus Chen - Restaurant Consultant',
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85&fit=crop&crop=face',
    alt: 'Sophia Laurent - Lifestyle Editor',
  },
  {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85&fit=crop&crop=face',
    alt: 'James Whitfield - Travel Blogger',
  },
]

// ─── Chef Special / Parallax Section ─────────────────────────────────────────
export const chefSpecialImages: ImageAsset[] = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=90&fit=crop',
    alt: 'Fine dining restaurant plating with elegant presentation',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=90&fit=crop',
    alt: 'Premium ingredients and artful food composition',
  },
]

// ─── Specials / Featured Dishes ───────────────────────────────────────────────
export const specialDishImages: ImageAsset[] = [
  {
    src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1200&q=85&fit=crop',
    alt: 'Black truffle mushroom risotto',
  },
  {
    src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=85&fit=crop',
    alt: 'A5 Wagyu beef tartare',
  },
  {
    src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&q=85&fit=crop',
    alt: 'Lobster bisque with cognac cream',
  },
  {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=85&fit=crop',
    alt: 'Valrhona chocolate journey dessert',
  },
]
