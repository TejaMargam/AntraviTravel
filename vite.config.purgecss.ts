import { PurgeCSS } from 'purgecss'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'purgecss',
      async generateBundle(options, bundle) {
        const purgecss = await new PurgeCSS().purge({
          content: [
            './client/index.html',
            './client/src/**/*.{js,jsx,ts,tsx}',
          ],
          css: [
            './client/src/index.css',
          ],
          defaultExtractor: (content) => {
            // Capture all class names and IDs
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
            return [...broadMatches, ...innerMatches]
          },
          safelist: {
            // Keep these classes even if they appear unused
            standard: [
              /^sr-only/,
              /^skip-link/,
              /^loading/,
              /^loaded/,
              /^container-/,
              /^btn-/,
              /^nav-/,
              /^hero/,
              /^text-gradient-/,
              /^gradient-/,
              /^glass/,
              /^hover-/,
              /^animate-/,
              /^custom-/,
              // Tailwind utility classes that might be dynamically used
              /^bg-/,
              /^text-/,
              /^p-/,
              /^px-/,
              /^py-/,
              /^pt-/,
              /^pb-/,
              /^pl-/,
              /^pr-/,
              /^m-/,
              /^mx-/,
              /^my-/,
              /^mt-/,
              /^mb-/,
              /^ml-/,
              /^mr-/,
              /^w-/,
              /^h-/,
              /^min-/,
              /^max-/,
              /^flex/,
              /^grid/,
              /^block/,
              /^inline-/,
              /^hidden/,
              /^relative/,
              /^absolute/,
              /^fixed/,
              /^sticky/,
              /^top-/,
              /^bottom-/,
              /^left-/,
              /^right-/,
              /^z-/,
              /^border/,
              /^rounded/,
              /^shadow/,
              /^opacity/,
              /^transition/,
              /^transform/,
              /^scale/,
              /^rotate/,
              /^translate/,
              /^skew/,
              // Animation classes
              /^fade-/,
              /^slide-/,
              /^zoom-/,
              /^flip-/,
            ],
            // Keep deep selectors
            deep: [
              /^:hover/,
              /^:focus/,
              /^:active/,
              /^:visited/,
              /^:disabled/,
              /^:checked/,
              /^:required/,
              /^:valid/,
              /^:invalid/,
              /^:first-child/,
              /^:last-child/,
              /^:nth-child/,
              /^:before/,
              /^:after/,
              /^::before/,
              /^::after/,
              /^::placeholder/,
              /^::selection/,
            ],
          },
          variables: true, // Keep CSS variables
          keyframes: true, // Keep animations
          fontFace: true, // Keep font faces
          rejected: true, // Show rejected CSS in output
        })

        // Log the results
        console.log('PurgeCSS Results:')
        console.log(`Original CSS size: ${purgecss[0].css.length} characters`)
        console.log(`Purged CSS size: ${purgecss[0].purged.length} characters`)
        console.log(`Size reduction: ${((purgecss[0].css.length - purgecss[0].purged.length) / purgecss[0].css.length * 100).toFixed(2)}%`)
        
        if (purgecss[0].rejected && purgecss[0].rejected.length > 0) {
          console.log('Rejected CSS rules:', purgecss[0].rejected.length)
        }
      },
    },
  ],
  build: {
    // Enable tree shaking and dead code elimination
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      mangle: {
        safari10: true
      }
    },
    
    // Code splitting configuration
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['wouter'],
          ui: [
            '@radix-ui/react-dialog',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip'
          ],
          icons: ['react-icons/fa', 'lucide-react'],
          forms: ['react-hook-form', '@hookform/resolvers'],
          utils: ['clsx', 'tailwind-merge', 'date-fns']
        },
        // Optimize chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk'
          return `assets/[name]-[hash].js`
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(assetInfo.name || '')) {
            return `assets/media/[name]-[hash][extname]`
          }
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    
    // Optimize chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Generate source maps for debugging (optional, remove in production for smaller bundles)
    sourcemap: false,
    
    // CSS optimization
    cssCodeSplit: true,
    
    // Target modern browsers for better optimization
    target: ['es2020', 'chrome87', 'firefox78', 'safari14']
  },
  
  // Development server optimization
  server: {
    hmr: {
      overlay: false
    }
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'wouter',
      '@tanstack/react-query'
    ]
  },
  
  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, './client/src')
    }
  },
  
  // CSS configuration
  css: {
    devSourcemap: false,
    
    // PostCSS configuration for CSS optimization
    postcss: {
      plugins: [
        // Add any additional PostCSS plugins here
      ]
    }
  }
})
