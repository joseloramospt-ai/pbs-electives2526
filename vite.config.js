import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pbs-electives2526/',  // ← muda para o nome do teu repo
})
