// Not: Bu belge bir şablondur. Yayına almadan önce hukuki danışman onayı gerekir.
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni — Aura GlowUp",
  description:
    "6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında Aura GlowUp aydınlatma metni.",
};

export default function AuraKVKKPage() {
  return (
    <LegalLayout>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">
          Son güncellenme: 5 Ekim 2026
        </p>
        <h1
          className="text-ink"
          style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95 }}
        >
          KVKK Aydınlatma Metni
        </h1>
        <p className="text-muted mt-4" style={{ fontSize: 17, lineHeight: 1.55 }}>
          6698 Sayılı Kişisel Verilerin Korunması Kanunu&apos;nun 10. maddesi uyarınca Aura
          GlowUp uygulaması kapsamında hazırlanmıştır.
        </p>
      </div>

      <LegalSection title="1. Veri Sorumlusu">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-ink">ARD Group LLC</p>
          <p>FSM Mah. Poligon Cad. Buyaka Kule 3, 8C/1 Ümraniye, İstanbul, Türkiye</p>
          <p className="mt-2">
            E-posta:{" "}
            <a href="mailto:support@auraglowup.app" className="text-forest underline">
              support@auraglowup.app
            </a>
          </p>
        </div>
      </LegalSection>

      <LegalSection title="2. İşlenen Kişisel Veri Kategorileri">
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-ink mb-1">Görsel veri</p>
            <p>
              AI analiz özelliği kullandığınızda gönüllü olarak sağladığınız selfie veya
              fotoğraflar. Fotoğraflar yalnızca cihazınızda veya analiz sürecinde geçici olarak
              işlenir; sunucularda kalıcı olarak depolanmaz.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Cihaz ve teknik veri</p>
            <p>Cihaz modeli, işletim sistemi sürümü, uygulama sürümü.</p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Uygulama kullanım istatistikleri</p>
            <p>
              Anonim hale getirilmiş ekran görüntüleme ve özellik kullanım verileri; kimliğinizle
              ilişkilendirilmez.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Abonelik durumu</p>
            <p>
              Aktif abonelik bilgisi; Apple App Store (StoreKit) ve RevenueCat altyapısı
              üzerinden yönetilir. Ödeme kartı verisi tarafımızca işlenmez.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Dil ve bölge tercihi</p>
            <p>Yerelleştirilmiş içerik sunmak amacıyla cihaz dil ayarı.</p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="3. Kişisel Verilerin İşlenme Amacı">
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>Uygulamanın temel işlevselliğini sağlama (AI analiz, kişisel glow-up planı)</li>
          <li>Uygulama performansını ve kullanıcı deneyimini iyileştirme</li>
          <li>Abonelik yönetimi ve satın alma iadelerinin işlenmesi</li>
          <li>Teknik destek sağlama</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi">
        <p>
          Kişisel verileriniz, uygulamayı kullanmanız sırasında otomatik olarak veya sizi
          tarafından aktif biçimde (fotoğraf yükleme) toplanmaktadır.
        </p>
        <div className="flex flex-col gap-2 mt-3">
          <p>
            <span className="font-semibold text-ink">Sözleşmenin ifası (KVKK Md. 5/2-c):</span>{" "}
            Uygulama işlevlerinin yerine getirilebilmesi için zorunlu olan veriler bu kapsamda
            işlenmektedir.
          </p>
          <p>
            <span className="font-semibold text-ink">Meşru menfaat (KVKK Md. 5/2-f):</span>{" "}
            Anonim analitik verilerin uygulama geliştirme amacıyla işlenmesi.
          </p>
          <p>
            <span className="font-semibold text-ink">Açık rıza (KVKK Md. 5/1):</span> Fotoğrafın
            AI analiz API&apos;sine iletilmesinden önce açık onayınız alınmaktadır.
          </p>
        </div>
      </LegalSection>

      <LegalSection title="5. Kişisel Verilerin Aktarıldığı Taraflar ve Aktarım Amacı">
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-ink mb-1">Apple Inc. — ABD</p>
            <p>App Store altyapısı ve StoreKit ödeme işlemleri.</p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">RevenueCat — ABD</p>
            <p>Abonelik yönetimi ve hak tanıma. Veriler ABD&apos;de işlenmektedir.</p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Google LLC (Gemini API) — ABD</p>
            <p>
              Fotoğraf analizi için Google LLC tarafından işletilen Gemini API&apos;sine
              iletilmektedir. Aktarım yalnızca açık rızanız alındıktan sonra ve şifreli
              bağlantı üzerinden gerçekleştirilir. Google, görüntüyü model eğitimi amacıyla
              kullanmamaktadır.
            </p>
          </div>
        </div>
        <p className="mt-4 p-3 rounded-lg bg-surface text-ink" style={{ fontSize: 15 }}>
          <span className="font-semibold">Yurt dışı aktarım:</span> Yukarıda belirtilen
          aktarımlar, açık rızanıza dayalı olarak veya KVKK&apos;nın 9. maddesi kapsamında
          yeterli korumanın bulunduğu hallerde gerçekleştirilmektedir.
        </p>
      </LegalSection>

      <LegalSection title="6. Kişisel Verilerin Saklama Süresi">
        <p>
          Uygulamayı cihazınızdan sildiğinizde tüm yerel veriler silinir. Uygulama içinde
          Ayarlar &gt; Veriyi Temizle seçeneğiyle de verilerinizi silebilirsiniz. Fotoğraflar
          sunucularımızda saklanmamaktadır. Anonim analitik veriler en fazla 24 ay boyunca
          tutulmaktadır.
        </p>
      </LegalSection>

      <LegalSection title="7. Veri Sahibinin Hakları (KVKK Madde 11)">
        <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
        <ul className="flex flex-col gap-2 list-disc list-inside mt-3">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
          <li>KVKK&apos;nın 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme</li>
          <li>
            Düzeltme veya silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme
          </li>
          <li>
            İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi
            suretiyle aleyhte bir sonuç ortaya çıkmasına itiraz etme
          </li>
          <li>
            Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep
            etme
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Başvuru Yolu">
        <p>
          Yukarıdaki haklarınızı kullanmak için aşağıdaki adrese yazılı olarak başvurabilirsiniz.
          Başvurular KVKK&apos;nın 13. maddesi uyarınca en geç{" "}
          <span className="font-semibold text-ink">30 gün</span> içinde yanıtlanacaktır.
        </p>
        <div className="flex flex-col gap-1 mt-3">
          <p className="font-semibold text-ink">ARD Group LLC</p>
          <p>FSM Mah. Poligon Cad. Buyaka Kule 3, 8C/1 Ümraniye, İstanbul, Türkiye</p>
          <p>
            <a href="mailto:support@auraglowup.app" className="text-forest underline">
              support@auraglowup.app
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
