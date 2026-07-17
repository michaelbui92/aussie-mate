# Image Prompts — Reference Frames for Each Video Clip

Generate these images first, then use them as the starting frame reference for each video clip.

---

## Image 1 — Harbour Bridge (Start Frame for Clip 1)

**Use this image as the first frame of Clip 1, then the video flies forward through the arch.**

```
Low-poly 3D geometric illustration, night scene, view of the Sydney Harbour Bridge from mid-distance. The bridge arch dominates the upper frame — constructed from dark grey faceted polygons with warm amber edge lighting. The harbour below is a dark navy polygon mesh with scattered golden light reflections. Tiny warm city lights visible through the arch. The Opera House is a small geometric silhouette in the distance. Minimalist, atmospheric, moody. Color palette: deep navy (#0B1120), charcoal, amber (#D4A574, #E8722A). 4K, no text, no humans, stylized illustration.
```

---

## Image 2 — Opera House (Start Frame for Clip 2)

**This should visually match what the end of Clip 1 looks like — the Opera House in the distance, bridge behind. Use this as the first frame of Clip 2.**

```
Low-poly 3D geometric illustration, night scene, view of the Sydney Opera House from across the harbour. The Opera House is a faceted cream-white geometric polygon structure with warm amber rim lighting. The harbour water is a dark navy polygon mesh with golden reflections. The Harbour Bridge arch is visible behind and to the left, out of focus. Same minimalist low-poly style. Color palette: cream-white sails, deep navy (#0B1120), warm amber (#D4A574). 4K, no text, no humans.
```

---

## Image 3 — Beach Coastline (Start Frame for Clip 3)

**This should match the end of Clip 2 — close view of Opera House sails. Use this as the first frame of Clip 3.**

```
Low-poly 3D geometric illustration, close view of the Sydney Opera House geometric sails filling the frame. Faceted cream-white polygon shells with warm amber edge lighting. Dark navy harbour water visible below. Same minimalist low-poly style. Color palette: cream-white, deep navy (#0B1120), warm amber (#D4A574). 4K, no text, no humans.
```

---

## Image 4 — Sunrise Horizon (Start Frame for Clip 4)

**This should match the end of Clip 3 — aerial view of the beach. Use this as the first frame of Clip 4.**

```
Low-poly 3D geometric illustration, aerial view of a golden beach at golden hour. The beach is a faceted amber polygon shape meeting a dark teal geometric ocean with gentle wave patterns. Dark navy sky at the top with warm amber glow on the horizon. Minimalist low-poly style. Color palette: golden amber (#D4A574), dark teal, deep navy (#0B1120). 4K, no text, no humans.
```

---

## Workflow

1. Generate Image 1 → use as first frame of Clip 1
2. Generate Clip 1 video → grab its last frame
3. The last frame of Clip 1 becomes the reference for Image 2
4. Generate Image 2 → use as first frame of Clip 2
5. Generate Clip 2 video → grab its last frame
6. Repeat for Clip 3 and 4

**The key:** If the video generator struggles to match the exact last frame of the previous clip, just generate Image 2/3/4 from scratch and use it as the starting frame — the video generator will animate from that image. The visual style will be close enough because the same palette and style reference is used throughout.