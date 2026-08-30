# JustPublisher.com — Landing Page Yapım Dökümanı v2

## ROL
Full-stack developer, UI designer ve motion designer olarak davran. Tasarım
kararlarını bana sormadan, aşağıdaki sisteme sadık kalarak sen ver. Hedef:
sayfaya bakan bir geliştiricinin "bunu bir stüdyo yapmış" demesi. Şablon
kokusu, jenerik SaaS dili, AI-üretimi hissi kabul edilmez.

## BAĞLAM
JustPublisher, bağımsız geliştiricilerin uygulamalarını satın alan, büyüten ve
yöneten bir **mobil uygulama yayıncısı**. Landing page'in tek işi var: bir
geliştiriciyi "Book a Call" adımına götürmek. Her bölüm bu tek eylemi
destekliyor.

Önceki tasarım denemesi (soğuk gri/mavi bento, sıfır dekorasyon) reddedildi.
Ondan hiçbir şey taşıma. Bu belge sıfır noktasıdır.

---

# 1 · TASARIM DİLİ

Yön: **sıcak, editoryal, fiziksel.** Bir teknoloji şirketinden çok, iyi
basılmış bir spor ceket etiketi ya da bağımsız bir yayınevinin katalogu gibi.
Krem kâğıt zemin, koyu orman yeşili mürekkep, cam gibi yüzen katmanlar.

### Renk Sistemi

| Token | Hex | Kullanım |
|---|---|---|
| `canvas` | `#FBF5DD` | Sayfa zemini. Her bölümde aynı. |
| `sand` | `#E7E1B1` | İkincil yüzey, ayraç, pasif durum, kart zebra |
| `forest` | `#306D29` | Birincil: butonlar, vurgu sayıları, aktif durum |
| `pine` | `#0D530E` | İkincil: koyu bölümler, hover derinleşmesi, footer |
| `ink` | `#1A1A12` | Ana metin — saf siyah değil, zeminle akraba |
| `muted` | `#6B6A55` | Etiket, açıklama, meta metin |
| `paper` | `#FFFDF4` | Cam kartların altındaki yüzey, kırık beyaz |

**Gradient kesinlikle yasak.** Derinlik yalnızca üç araçla üretilir: gölge,
`backdrop-filter: blur()`, ve düz renk alfa katmanları. Bir yüzeyin
"yumuşaması" gerekiyorsa `rgba(251,245,221,0.72)` gibi tek renkli alfa kullan,
iki renk arası geçiş asla.

### Cam & Gölge Sistemi

Üç tanımlı yükseklik kademesi. Ara değer üretme.

```css
/* Kademe 1 — sabit yüzeyler (nav, chip, tag) */
--glass-1: rgba(255,253,244,0.68);
--blur-1: blur(20px) saturate(140%);
--shadow-1: 0 1px 2px rgba(26,26,18,0.04),
            0 4px 12px rgba(26,26,18,0.05);

/* Kademe 2 — kartlar (app, FAQ, metrik) */
--shadow-2: 0 2px 4px rgba(26,26,18,0.04),
            0 12px 28px rgba(26,26,18,0.07);

/* Kademe 3 — hover / öne çıkan */
--shadow-3: 0 4px 8px rgba(26,26,18,0.05),
            0 24px 48px rgba(26,26,18,0.10);
```

Her cam yüzeyde `inset 0 1px 0 rgba(255,255,255,0.6)` — üst kenarda ince ışık
çizgisi. Bu detay liquid glass hissini veren şey; atlanırsa yüzey ölü görünür.
Kart kenarlığı: `1px solid rgba(26,26,18,0.06)`.

### Tipografi

`next/font` ile **Inter Variable**. Tek aile, ağırlık aralığı 400–800.
`font-feature-settings: "ss01","cv11","tnum"` — sayılar tabular olsun.

| Kademe | Boyut | Ağırlık | Tracking | Line-height |
|---|---|---|---|---|
| Display (hero) | `clamp(52px, 8.5vw, 132px)` | 800 | `-0.045em` | `0.90` |
| Section title | `clamp(38px, 5vw, 76px)` | 700 | `-0.035em` | `0.95` |
| Metrik sayı | `clamp(46px, 6.5vw, 104px)` | 800 | `-0.04em` | `0.90` |
| Kart başlığı | `22–26px` | 600 | `-0.02em` | `1.15` |
| Gövde | `17–19px` | 400 | `-0.005em` | `1.55` |
| Etiket / eyebrow | `12px` | 600 | `+0.12em` UPPERCASE | `1` |

**Optik hizalama kuralı:** Büyük başlıklarda ilk karakter sola taşırılır
(`margin-left: -0.04em`) — kenar boşluğu görsel olarak hizalanır. Bu tür ince
düzeltmeler tasarımı el yapımı gösteren şey.

### Boşluk ve Ritim

8px tabanlı skala: `8 · 16 · 24 · 40 · 64 · 96 · 144 · 200`.

- Konteyner: `max-width: 1280px`, yan boşluk `clamp(20px, 5vw, 48px)`
- Bölümler arası dikey: `clamp(96px, 14vh, 200px)`
- Kartlar arası gap: `20px` (mobil `16px`)
- Kart iç dolgu: `28px` mobil → `40px` desktop
- Köşe yarıçapı: `20px` küçük, `28px` kart, `36px` büyük panel, `999px` buton

### Tekrarlayan Motifler (imza detaylar)

Bunlar sayfayı "tasarlanmış" yapan şeyler; hepsi uygulanmalı:

1. **Eyebrow + kural çizgisi:** Her bölüm başlığının üstünde küçük uppercase
   etiket, yanında `1px` `sand` renkli, bölüm genişliğine uzanan yatay çizgi.
2. **Sayaç rozeti:** Bölüm etiketlerinin solunda `(01)`, `(02)` biçiminde
   monospace-benzeri tabular sayı. Editoryal katalog hissi.
3. **Ok davranışı:** `→` işareti bir linkin/butonun içinde hover'da 4px sağa
   kayar (`transform: translateX(4px)`). Her yerde aynı davranış.
4. **Noktalı bitiş:** Hero ve CTA başlıkları nokta ile biter. Beyan gibi okunur.

---

# 2 · SAYFA AKIŞI

## 2.0 Navbar

Sticky, sayfanın üstünde yüzen bir cam çubuk. Sayfa zeminine yapışık değil —
üstten `16px` boşlukla, konteyner genişliğinde, `999px` yarıçaplı bir kapsül.

- Sol: JustPublisher kelime markası, 600 ağırlık, `-0.03em` tracking
- Orta: `Apps` · `About` · `Contact` — 15px, 500 ağırlık
- Sağ: **Book a Call** butonu, `forest` dolgu, `paper` metin, `→` ile
- Cam: `--glass-1` + `--blur-1` + `--shadow-1` + üst iç ışık çizgisi
- Scroll davranışı: sayfa 24px kaydığında çubuk `4px` daralır, gölge
  `--shadow-1` → `--shadow-2`'ye geçer, `240ms ease-out`
- Link hover: alt çizgi soldan sağa `160ms` ile büyür (`scaleX(0)→(1)`,
  `transform-origin: left`), renk `ink` → `forest`
- **Mobil:** hamburger → tam ekran cam overlay. Menü açılırken linkler
  `40ms` gecikmeli sırayla alttan belirir. Body scroll kilitlenir, `Esc`
  kapatır, focus trap kurulur.

## 2.1 Hero

Sayfanın %85–92 yüksekliğinde. Ortalanmış metin **değil** — sola yaslı,
editoryal.

- Eyebrow: `(01) MOBILE APP PUBLISHER`
- Başlık: `JustPublisher.` — display kademesi, tek satır, dev
- Alt başlık: 2 satırı geçmeyen, 20–24px, `muted` renkte, maks. 620px genişlik.
  Yayıncılık teklifi net anlatılır: uygulamayı alır, büyütür, gelir üretir.
- Birincil CTA: **Book a Call →** (forest, kapsül, 56px yükseklik)
- Yanında ikincil metin-link: `See our apps` — kutu yok, sadece alt çizgi
- Sağ alt / arka planda: hafif eğik (`rotate(-4deg)`) duran, üst üste binmiş
  2–3 telefon mockup'ı, cam kart içinde, `--shadow-3` ile. Scroll'da çok hafif
  parallax (`translateY`, maks. 40px).
- Giriş animasyonu: eyebrow → başlık → alt başlık → CTA → mockup sırasıyla,
  her biri 80ms gecikmeli, `translateY(20px)` + `opacity 0→1`, `520ms`
  `cubic-bezier(0.22,1,0.36,1)`.
- Başlık kelimeleri ayrı span'lerde, ayrı gecikmelerle gelir (harf harf değil —
  harf animasyonu ucuz durur).

## 2.2 Trusted By — App İkon Şeridi

Hero'nun hemen altında, nefes almadan. Tam genişlikte, sonsuz yatay kayan
şerit. Logo değil, **yayınlanan uygulamaların ikonları** akar.

- İkonlar `56px`, `14px` yarıçap, `--shadow-1`
- Sol ve sağ kenarda `canvas` renkli sert maske (gradient değil — `mask-image`
  ile alfa maskesi kullan)
- Hız: 40s lineer sonsuz döngü, hover'da durur
- Üstünde tek satır: `TRUSTED BY 20+ STUDIOS` — eyebrow kademesi, ortalanmış
- `prefers-reduced-motion` aktifse animasyon durur, statik grid'e döner

## 2.3 Track Record

Üç metrik, tek sıra. Kart değil — zemine oturan, aralarında `1px` `sand`
dikey ayraç bulunan üç kolon. Sadelik burada gücü artırır.

| Sayı | Etiket |
|---|---|
| `+$1M` | Revenue Generated |
| `+10` | Apps Published |
| `+20` | Studios Supported |

- Sayılar `forest` renginde, metrik kademesi
- Etiketler altında, `muted`, eyebrow kademesi
- **Sayaç animasyonu:** Viewport'a girdiğinde 0'dan hedefe, `1400ms`
  ease-out. `$` ve `+` sabit kalır, sadece rakam sayar. `tnum` sayesinde
  genişlik zıplamaz — bu detay önemli.
- Mobilde alt alta, ayraçlar yataya döner

## 2.4 Apps

`(03) PORTFOLIO` eyebrow + bölüm başlığı.

Desktop 2 kolon, mobil 1 kolon kart grid. Her kart bir dikey kompozisyon:

**Kart anatomisi (yukarıdan aşağı):**
1. Üst satır: App ikonu `64px` (`16px` yarıçap, `--shadow-1`) — sağında
   app adı (kart başlığı kademesi) ve altında tek satır subtitle (`muted`)
2. Rating satırı: App Store ikonu + `4.8`, ayraç noktası, Play Store ikonu +
   `4.7`. Sayılar 600 ağırlık, ikonlar `18px`, hizalama optik olarak
   düzeltilmiş. Yanında küçük `muted` metin: `12.4K reviews`
3. Ekran görüntüsü: kartın alt yarısını kaplayan, alt kenardan taşan tek
   telefon screenshot'ı. `paper` yüzey üzerinde, `--shadow-2` ile, hafif
   `rotate(-2deg)`. Taşma kartın `overflow: hidden` sınırında kesilir.
4. Sağ üst köşede: **View App →** — kutu yok, metin link

**Kart yüzeyi:** `paper` + `--shadow-2` + `1px` kenarlık + üst iç ışık çizgisi

**Hover:** `translateY(-6px)`, gölge `--shadow-2` → `--shadow-3`, screenshot
`scale(1.03)` ve `rotate(-1deg)`'ye yaklaşır, ok 4px sağa kayar. Hepsi
`280ms cubic-bezier(0.22,1,0.36,1)`. Tüm kart tek bir tıklanabilir yüzey.

Kartlar viewport'a girerken sırayla `60ms` gecikmeli belirir.

## 2.5 FAQ

`(04) QUESTIONS` eyebrow. İki kolonlu düzen: solda sabit kalan bölüm başlığı
ve kısa bir destek satırı (`Still unsure? Book a call →`), sağda akordeon.

Sorular — kendinden emin, insani, savunmacı olmayan bir dille yaz. Kurumsal
boşluk cümlesi kurma:

1. What does a publisher actually do?
2. Do I lose ownership of my app?
3. How is revenue split?
4. What kind of apps are you looking for?
5. My app has almost no downloads. Is it too early?
6. How long does the process take?
7. What happens after we sign?

**Akordeon davranışı:**
- Kapalı: soru satırı + sağda `+` işareti
- Açık: `+` → `×` olarak `45deg` döner (`220ms`)
- Yükseklik geçişi: `grid-template-rows: 0fr → 1fr`, `320ms`
  `cubic-bezier(0.22,1,0.36,1)` — max-height hack'i kullanma
- Cevap metni açılırken 8px alttan gelir
- Aynı anda tek soru açık. İlk soru varsayılan açık.
- Satır arası `1px` `sand` ayraç. Hover'da satır zemini
  `rgba(48,109,41,0.04)`, `160ms`
- `<button>` + `aria-expanded` + `aria-controls` ile erişilebilir

## 2.6 CTA

Tam genişlikte, `pine` dolgulu, `36px` yarıçaplı büyük panel. Sayfanın tek
koyu bölgesi — bu yüzden güçlü.

- Başlık: `Have an app? Let's grow.` — section title kademesi, `canvas` renkte
- Altında tek satır destek metni, `rgba(251,245,221,0.7)`
- CTA: **Book a Call →** — `canvas` dolgu, `pine` metin, kapsül, 60px
- Panelin sağ tarafında dekoratif ama sessiz bir öğe: çok düşük opaklıkta,
  panel kenarından taşan büyük bir app ikonu kümesi (`opacity: 0.12`).
  Gradient değil, düz alfa.
- Buton hover: `scale(1.02)` + gölge derinleşir, `200ms`

## 2.7 Footer

Kompakt, iki katlı, `canvas` zemin, üstte `1px` `sand` ayraç.

- Üst satır: solda kelime markası, sağda `Apps · About · Contact`
- Alt satır: `EULA · Privacy · Terms · Cookies · KVKK` — 14px, `muted`,
  ortadaki ayraçlar `•`
- En altta: `© 2026 JustPublisher LLC. All rights reserved.` — 13px, `muted`
- Link hover: `forest` rengine `160ms` geçiş, alt çizgi belirir

---

# 3 · HUKUKİ SAYFALAR

Beş ayrı route: `/eula`, `/privacy`, `/terms`, `/cookies`, `/kvkk`.

Ortak bir `LegalLayout` bileşeni kur:
- Dar okuma kolonu (`max-width: 720px`), sola yaslı
- Aynı tipografi sistemi; başlık kademeleri `h1 → h2 → h3`
- Sol/üstte küçük `← Back` linki, üstte son güncelleme tarihi
- Uzun sayfalarda sağda sticky içindekiler (desktop, `≥1024px`)
- İçerik MDX veya tipli obje olarak `content/legal/` altında

**İçerik notları:**
- Şirket: JustPublisher LLC. Ürün: mobil uygulama yayıncılığı, App Store ve
  Google Play üzerinden dağıtım, geliştiricilerle gelir paylaşımı.
- **KVKK sayfası Türkçe** yazılır (6698 sayılı kanun; veri sorumlusu, işleme
  amaçları, aktarım, ilgili kişi hakları, başvuru yolu). Diğerleri İngilizce.
- Privacy: GDPR ve CCPA maddeleri, Apple/Google SDK veri toplama, analitik,
  saklama süresi, çocuk gizliliği.
- Cookies: kategori tablosu (zorunlu / analitik / pazarlama), tarayıcı
  kontrolü, üçüncü taraf listesi.
- Terms & EULA: lisans kapsamı, kabul edilebilir kullanım, fikri mülkiyet,
  sorumluluk sınırı, fesih, uygulanacak hukuk.
- Her sayfanın başına kısa bir "bu belge hukuki tavsiye niteliğinde nihai
  metin değildir, yayına almadan önce avukat onayı gerekir" notu bir yorum
  satırı olarak koda düşülsün (kullanıcıya görünmesin).

---

# 4 · MOTION SİSTEMİ

Tek bir easing sözlüğü, her yerde aynısı:

```
--ease-out:   cubic-bezier(0.22, 1, 0.36, 1)   /* giriş, hover */
--ease-inout: cubic-bezier(0.65, 0, 0.35, 1)   /* akordeon, menü */
--fast: 160ms · --base: 280ms · --slow: 520ms
```

**Makro (bölüm seviyesi):** IntersectionObserver, `threshold: 0.15`,
`translateY(24px)` + `opacity 0→1`, `--slow`. Bir kere tetiklenir, geri
sarmaz. Alt öğeler 60–80ms stagger ile.

**Mikro (öğe seviyesi):**
- Buton press: `scale(0.98)`, `100ms`
- Ok kayması: `translateX(4px)`, `--fast`
- Link alt çizgisi: `scaleX` soldan, `--fast`
- Kart yükselme: `translateY(-6px)` + gölge kademesi, `--base`
- Rating sayıları: kart hover'ında `forest`'a döner, `--fast`
- İmleç yakınlığı: CTA butonlarında imleç kartın üstündeyken çok hafif
  (`maks. 3px`) manyetik takip — abartma, fark edilmeyecek kadar ince olsun

**Kurallar:** Aynı anda ikiden fazla özellik animasyonlanmaz. Yalnızca
`transform` ve `opacity` animasyonlanır. `will-change` sadece hover'da
verilir. `prefers-reduced-motion: reduce` altında tüm hareket kapanır, sayaç
son değerini gösterir, şerit durur.

---

# 5 · TEKNİK

- Next.js App Router, TypeScript strict, Server Component varsayılan.
  `"use client"` yalnızca: navbar, akordeon, sayaç, şerit, observer hook'u.
- Tailwind: tüm renk/gölge/easing token'ları `tailwind.config.ts` içinde.
  JSX'te ham hex veya ham `cubic-bezier` yazılmaz.
- Yapı:
```
  app/(marketing)/page.tsx
  app/(legal)/{eula,privacy,terms,cookies,kvkk}/page.tsx
  components/sections/*.tsx
  components/ui/{Button,Card,Accordion,Marquee,Counter}.tsx
  components/icons/{AppStore,PlayStore}.tsx
  lib/content.ts
  hooks/useInView.ts
```
- Tüm metin ve app verisi `lib/content.ts` içinde tipli objede. JSX'e gömülü
  string yok.
- App Store / Play Store ikonları inline SVG bileşen olarak, `currentColor`
  ile. İkon kütüphanesi kurma.
- Görseller `next/image`, app ikonları `priority`, screenshot'lar lazy.
- Animasyon kütüphanesi yok — CSS transitions + IntersectionObserver yeterli.
- Erişilebilirlik: klavye ile tam gezinilebilir, görünür focus halkası
  (`2px forest` + `2px` offset), tüm metinlerde AA kontrast, `<main>`,
  `<nav>`, `<section aria-labelledby>` semantiği.
- SEO: her sayfada metadata, OG image, `sitemap.ts`, `robots.ts`,
  Organization JSON-LD.
- Hedef: Lighthouse 95+ (performans, erişilebilirlik, SEO), CLS < 0.05.

---

# 6 · YASAKLAR

Gradient (hiçbir yerde, hiçbir biçimde) · mor/mavi tech paleti · stok
illüstrasyon · emoji · animasyon kütüphanesi · ortalanmış uzun metin blokları ·
`font-weight < 400` · üç renk kademesinden fazlası · "Empower your journey"
türü içi boş kurumsal cümleler · sayfa açılışında sayfa çapında fade ·
2s üzeri animasyon · sekmeye giren ama görünür focus'u olmayan öğe.

---

# 7 · ÇALIŞMA SIRASI

1. Repoyu temizle (eski landing artıkları, kullanılmayan bağımlılıklar).
   Tailwind + Next.js kurulumuna dokunma. Kaldırdıklarını listele.
2. Token katmanını kur: `tailwind.config.ts`, `globals.css`, font.
3. UI primitive'leri: `Button`, `Card`, `Section`, `Eyebrow`, `useInView`.
4. Bölümleri sırayla: Navbar → Hero → Marquee → Track Record → Apps →
   FAQ → CTA → Footer.
5. Hukuki sayfalar + `LegalLayout`.
6. Responsive geçiş, reduced-motion, klavye testi.
7. `npm run build` + Lighthouse.

Her adımın sonunda build çalıştır ve ne yaptığını tek paragrafta özetle.