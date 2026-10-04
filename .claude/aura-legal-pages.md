# Aura GlowUp — Yasal Sayfa Rehberi

> Apple App Store'dan **reject yememek** için bu sayfaların ne içermesi gerektiğini açıklar.
> Her biri için şablon madde başlıkları ve dikkat edilmesi gereken Apple guideline notları verilmiştir.

---

## Genel Apple Gereksinimleri

| Şart | Açıklama |
|---|---|
| Privacy Policy zorunlu | Uygulama herhangi bir veri topluyorsa (fotoğraf, kullanıcı adı, analytics vb.) App Store Connect'e bir URL girilmesi **zorunludur**. |
| Erişilebilirlik | Politika, kullanıcı kayıt olmadan veya satın almadan önce **uygulama içinden** erişilebilir olmalı. Onboarding'deki checkbox veya Settings > Legal yeterlidir. |
| Dil | Türkçe kullanıcılara yönelik içerik için Türkçe versiyon da yayınlanmalı (KVKK gereği). |
| Güncellik | App Store Connect'teki URL, uygulamanın her güncel sürümüyle uyumlu olmalı. |
| Hosting | Sayfa, herhangi bir ücretli servis gerektirmez; GitHub Pages, Notion (public), Webflow veya kendi sunucunuz olabilir. |

---

## 1. Gizlilik Politikası (Privacy Policy)

**URL:** `https://auraglowup.app/privacy`

### Apple'ın Beklediği Minimum İçerik

```
1. Hangi verileri topluyoruz?
   - Fotoğraflar (selfie, before/after)
   - Cihaz bilgisi (model, OS)
   - Analytics (Firebase/Mixpanel varsa olay logları)
   - Abonelik durumu (RevenueCat, StoreKit)
   - Dil / bölge tercihi

2. Verileri neden topluyoruz?
   - Uygulama işlevselliği (AI analiz, kişisel plan)
   - Kullanıcı deneyimini iyileştirme
   - Teknik destek

3. Verileri kimlerle paylaşıyoruz?
   - Apple (App Store, StoreKit)
   - RevenueCat (abonelik yönetimi) — gizlilik politikası linki ver
   - Firebase / Google Analytics (varsa)
   - Anthropic / OpenAI API (AI analiz için fotoğraf gönderiliyorsa — MUTLAKA belirt)

4. Fotoğraflar nasıl işleniyor?
   - Fotoğraflar yalnızca analiz amacıyla kullanılır.
   - Sunucularda saklanmaz / üçüncü taraflarla paylaşılmaz (eğer durum buysa).
   - Cihazda yerel olarak saklanır.

5. Veri saklama süresi
   - Uygulama silindiğinde tüm yerel veri silinir.

6. Çocuklara yönelik mi?
   - 13 yaş altı kullanıcıları hedeflemiyorsak bunu açıkça yaz.
   - Aura GlowUp yaş onboarding soruyor → 18+ kontrolü yapılıyorsa belirt.

7. Kullanıcı hakları
   - Verileri silme hakkı: Ayarlar > Veriyi Temizle
   - Destek: support@auraglowup.app

8. Değişiklikler
   - Politika değişirse kullanıcıya bildirim yapılır.

9. İletişim
   - E-posta adresi, şirket adı, adres (App Store için şirket adresi zorunlu)
```

### Reject Riski Yaratan Durumlar
- **Fotoğraf bir AI API'sine gönderiliyorsa** (Anthropic, OpenAI) bunu gizlilik politikasında açıkça yazmak zorundasın. Yazmazsan → **Privacy rejection**.
- ATT (App Tracking Transparency) kullanılmıyorsa, "kullanıcıları takip etmiyoruz" satırı eklemeyi düşün.
- Politika URL'si erişilemez / 404 dönüyorsa → **metadata rejection**.

---

## 2. Kullanım Koşulları (Terms of Service / EULA)

**URL:** `https://auraglowup.app/terms`

### Seçenek A — Apple Standart EULA (Kolay yol)
App Store Connect > App Information > License Agreement bölümünde "Use Apple's standard EULA" seçeneği aktifleştirilebilir. Bu durumda ayrı bir sayfa yazmana gerek kalmaz, Apple'ın standart EULA'sı otomatik uygulanır.

> **Ne zaman yeterli?** Özel kısıtlamalar, abonelik iade politikası, içerik kuralları yoksa bu yeterli.

### Seçenek B — Özel EULA (Tavsiye edilen)

```
1. Taraflar
   - "Aura GlowUp" uygulaması ve kullanıcı

2. Lisans
   - Kullanıcıya kişisel, devredilemez, sınırlı lisans verilir.
   - Uygulamanın ticari amaçla kullanımı yasaktır.

3. Abonelik ve Ödemeler
   - Fiyatlandırma: [fiyatları listele]
   - Otomatik yenileme: App Store üzerinden yönetilir.
   - İptal: App Store abonelik yönetiminden yapılır.
   - İade: Apple'ın iade politikası geçerlidir.
   !! ÖNEMLI: "No refunds" yazamazsın — Apple bunu direkt reddeder.

4. Kullanıcı İçeriği
   - Fotoğraflar kullanıcıya aittir.
   - Bize lisans vermiyorlar (eğer sunucuda saklamıyorsak).

5. Yasaklı Kullanımlar
   - Uygulamayı tersine mühendislik ile çözmeye çalışmak
   - Başkasının verilerini kullanmak

6. Sağlık Uyarısı
   - Uygulama tıbbi tavsiye niteliği taşımaz (Apple bunu görmek ister).

7. Sorumluluk Sınırı

8. Değişiklikler
   - Koşullar değişirse kullanıcı bilgilendirilir.

9. Geçerli Hukuk
   - Türkiye Cumhuriyeti hukuku (şirket Türkiye'de kuruluysa)

10. İletişim
    - support@auraglowup.app
```

### Reject Riski Yaratan Durumlar
- **"İade yok" ifadesi** → Apple otomatik reddeder. Bunun yerine "Apple'ın iade politikası geçerlidir" yaz.
- **Abonelik fiyatı koşullarda yazılmış ama App Store Connect'tekiyle uyuşmuyorsa** → metadata rejection.
- **Tıbbi tavsiye veriyormuş izlenimi** → Health & Fitness kategorisinde çok sık karşılaşılan rejection sebebi.

---

## 3. KVKK Aydınlatma Metni

**URL:** `https://auraglowup.app/kvkk`

> KVKK (6698 sayılı Kişisel Verilerin Korunması Kanunu) Türkiye'deki kullanıcılar için zorunludur. Apple doğrudan bu metni istemez ama Türkiye'de uygulama işletiyorsan hukuki yükümlülük var.

### Zorunlu Başlıklar (KVKK Madde 10)

```
VERİ SORUMLUSU
   Şirket adı, adres, KEP adresi veya e-posta

KİŞİSEL VERİLERİN İŞLENME AMACI
   - Uygulama işlevselliği (kişisel bakım planı oluşturma)
   - Hizmet kalitesinin iyileştirilmesi
   - Yasal yükümlülüklerin yerine getirilmesi

İŞLENEN KİŞİSEL VERİ KATEGORİLERİ
   - Kimlik verisi: yok (hesap sistemi yoksa)
   - Görsel veri: selfie / fotoğraflar (yalnızca cihazda işlenir)
   - İşlem güvenliği verisi: cihaz kimliği
   - Pazarlama / analiz: uygulama kullanım istatistikleri

KİŞİSEL VERİLERİN AKTARILDIĞI TARAFLAR VE AKTARIM AMACI
   - Apple Inc. (App Store altyapısı)
   - RevenueCat (abonelik yönetimi — ABD'de işlenir)
   - [AI servisi varsa]: Anthropic / OpenAI (fotoğraf analizi — ABD'de işlenir)
   
   YURT DIŞI AKTARIM: Açık rıza alındığında veya KVKK Md. 9 kapsamında yapılır.

KİŞİSEL VERİLERİN TOPLANMA YÖNTEMİ VE HUKUKİ SEBEBİ
   - Kullanıcının uygulamayı kullanması ile otomatik olarak
   - Hukuki sebep: Sözleşmenin ifası (KVKK Md. 5/2-c) ve Meşru menfaat

VERİ SAHİBİNİN HAKLARI (KVKK Madde 11)
   a) Kişisel veri işlenip işlenmediğini öğrenme
   b) İşlenmişse bilgi talep etme
   c) Amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
   d) Yurt içi/dışı aktarım bilgisi
   e) Eksik/yanlış işlenmişse düzeltilmesini isteme
   f) Silinmesini veya yok edilmesini isteme
   g) İşlemin 3. kişilere bildirilmesini isteme
   h) Otomatik sistemlerle aleyhe sonuç çıkmasına itiraz etme
   ı) Kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme
   
   BAŞVURU: support@auraglowup.app adresine yazılı başvuru yapabilirsiniz.
   
   Başvurular 30 gün içinde yanıtlanır (KVKK Md. 13).
```

---

## Teknik Uygulama Planı

### Kısa Vade (Şimdi)
- [x] Settings'teki URL'ler null yapıldı, "Yakında" mesajı gösteriliyor
- [ ] `support@auraglowup.app` e-posta adresi aktif mi? Test et.

### Orta Vade (App Store'a göndermeden önce)
1. **Sayfa yayıncılığı** — en basit yol:
    - GitHub Pages üzerinde `auraglowup.app` domain'ine bağlı statik HTML sayfaları oluştur (`/privacy`, `/terms`, `/kvkk`)
    - Veya Notion public sayfası → custom domain yönlendirmesi
2. **App Store Connect** > App Information > Privacy Policy URL alanını doldur
3. **Onboarding**'de (s01_welcome_screen) Privacy Policy ve Terms linklerini göster — Apple, kullanıcının satın alma öncesi görebilmesini ister
4. **KVKK için** bir avukattan veya KVKK uyum hizmeti sunan bir firmadan inceleme al (cezalar yüksek)

### İçerik Üretimi
Bu rehberdeki madde başlıklarını kullanarak ChatGPT veya bir hukuk asistanıyla tam metin oluşturabilirsin. Şablonlar doğru yapıyı gösterir; ama nihai metni bir avukata onaylatman tavsiye edilir.

---

## Onboarding'de Gösterilmesi Gereken Linkler

Apple, özellikle **abonelik içeren uygulamalarda** paywall öncesinde veya onboarding'in ilk ekranında şu iki linkin görünür olmasını ister:

- Privacy Policy
- Terms of Service

Şu an `s12_paywall_screen.dart` ve `s01_welcome_screen.dart` bu linkleri içeriyor mu kontrol et. İçermiyorsa küçük bir footer text widget'ı eklemek yeterli:

```dart
// Örnek paywall alt footer
RichText(
  text: TextSpan(children: [
    TextSpan(text: 'By continuing you agree to our '),
    TextSpan(
      text: 'Terms',
      style: TextStyle(decoration: TextDecoration.underline),
      recognizer: TapGestureRecognizer()..onTap = () => launchUrl(...),
    ),
    TextSpan(text: ' and '),
    TextSpan(
      text: 'Privacy Policy',
      style: TextStyle(decoration: TextDecoration.underline),
      recognizer: TapGestureRecognizer()..onTap = () => launchUrl(...),
    ),
  ]),
)
```
