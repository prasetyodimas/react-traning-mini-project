## React + Vite Mini Traning Project ( MultiLanguage App )


### How To Running 


Installing Dependecy Of Project

```bash
    npm install / yarn install / pnpm install
    
````


```bash
    "scripts": {
        "start:dev": "vite --mode development", # Konfigurasi start aplikasi spefisik environtment development
        "start:stag": "vite --mode staging", # Konfigurasi start aplikasi spefisik environtment staging
        "start:prod": "vite --mode production", # Konfigurasi start aplikasi spefisik environtment production
        "build:dev": "vite build ---mode development", # Konfigurasi build aplikasi spefisik environtment development
        "build:stag": "vite build --mode staging", #  Konfigurasi build aplikasi spefisik environtment staging
        "build:prod": "vite build --mode production", #  Konfigurasi build aplikasi spefisik environtment production
        "lint": "eslint .", # Konfigurasi eslint untuk development
        "preview": "vite preview"  # Menjalankan server untuk preview build tersebut
    },
```    


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
