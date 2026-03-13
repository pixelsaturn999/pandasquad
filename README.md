# 🐼 Panda Squad

App di famiglia — Spesa, Film, Ristoranti, Viaggi, Memo & Ale.

---

## 📦 Struttura file

```
pandasquad/
├── index.html        ← App principale
├── manifest.json     ← PWA manifest (Web Share Target incluso)
├── sw.js             ← Service Worker (cache offline)
├── icon-192.png      ← Icona app 192×192
├── icon-512.png      ← Icona app 512×512
└── .github/
    └── workflows/
        └── deploy.yml ← Auto-deploy su GitHub Pages
```

---

## 🚀 Deploy su GitHub Pages (1 volta sola)

### 1. Crea il repository
1. Vai su [github.com/new](https://github.com/new)
2. Nome repo: `pandasquad` (o quello che vuoi)
3. Visibilità: **Public** (richiesto per GitHub Pages gratuito)
4. Crea il repository

### 2. Carica i file
```bash
# Opzione A — Da terminale
git init
git remote add origin https://github.com/TUO-USERNAME/pandasquad.git
git add .
git commit -m "🐼 Panda Squad initial deploy"
git push -u origin main
```
**Opzione B — Da browser:** trascina tutti i file nella pagina del repo su GitHub.

### 3. Abilita GitHub Pages
1. Nel repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Il workflow si avvia automaticamente → dopo ~1 minuto l'app è live su:
   `https://TUO-USERNAME.github.io/pandasquad/`

---

## 📱 Genera l'APK con PWABuilder

### 1. Apri PWABuilder
Vai su **[pwabuilder.com](https://www.pwabuilder.com)**

### 2. Inserisci l'URL
Incolla: `https://TUO-USERNAME.github.io/pandasquad/`
→ Clicca **Start**

### 3. Verifica i punteggi
PWABuilder analizza la PWA. Dovrai vedere:
- ✅ Manifest valido
- ✅ Service Worker
- ✅ HTTPS
- ✅ Web Share Target

### 4. Genera l'APK Android
1. Clicca **Package for stores** → **Android**
2. Scegli **"Android (APK)"** (non Google Play, quello richiede un account sviluppatore)
3. Lascia le impostazioni default — cambia solo:
   - **App name:** Panda Squad
   - **Package ID:** `com.pandasquad.app`
   - **Version:** 1.0
4. Clicca **Generate** → scarica lo ZIP
5. Dentro lo ZIP trovi `pandasquad.apk`

### 5. Installa l'APK su Android
1. Copia `pandasquad.apk` sul telefono (via cavo, Drive, email…)
2. Apri il file → Android chiede di abilitare "Installa da fonti sconosciute"
3. Abilita per il file manager → Installa

---

## 📤 Come funziona la condivisione da Google Maps

Una volta installata l'app come APK:

1. Apri **Google Maps** (o Google) → cerca un ristorante
2. Premi **Condividi** ⬆️ (share button)
3. Nel foglio di condivisione Android apparirà **Panda Squad** 🐼
4. Tocca Panda Squad → l'app si apre direttamente nella sezione **Ristoranti**
5. Il ristorante viene salvato automaticamente con nome e link Maps

> **Nota:** la condivisione funziona solo dopo che l'app è installata come APK o aggiunta alla schermata home come PWA.

---

## 🔄 Aggiornare l'app in futuro

Modifica `index.html`, poi:
```bash
git add index.html
git commit -m "update"
git push
```
GitHub Pages si aggiorna automaticamente in ~1 minuto.
