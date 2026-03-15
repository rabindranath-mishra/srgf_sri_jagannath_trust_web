import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()],
  base: '/srgf_sri_jagannath_trust_web/', // Must match your repo name exactly
})
