// Not: Bu belge bir şablondur. Yayına almadan önce hukuki danışman onayı gerekir.
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni — JustPublisher",
  description:
    "6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
};

export default function KVKKPage() {
  return (
    <LegalLayout>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">
          Son güncellenme: 1 Ocak 2026
        </p>
        <h1
          className="text-ink"
          style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95 }}
        >
          KVKK Aydınlatma Metni
        </h1>
        <p className="text-muted mt-4" style={{ fontSize: 17, lineHeight: 1.55 }}>
          6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanmıştır.
        </p>
      </div>

      <LegalSection title="1. Veri Sorumlusu">
        <p>
          Veri sorumlusu: JustPublisher LLC. İletişim:{" "}
          <a href="mailto:kvkk@justpublisher.com" className="text-forest underline">
            kvkk@justpublisher.com
          </a>
        </p>
      </LegalSection>

      <LegalSection title="2. İşlenen Kişisel Veriler">
        <p>
          Uygulamamızı kullanmanız durumunda şu kişisel veriler işlenebilir: kimlik bilgileri
          (ad, e-posta), iletişim bilgileri, cihaz ve kullanım verileri (IP adresi, işletim
          sistemi, uygulama içi davranışlar), teknik log kayıtları.
        </p>
      </LegalSection>

      <LegalSection title="3. İşlenme Amaçları">
        <p>
          Toplanan veriler; hizmetin sunulması ve iyileştirilmesi, müşteri desteği, yasal
          yükümlülüklerin yerine getirilmesi ve güvenlik amaçlarıyla işlenmektedir.
        </p>
      </LegalSection>

      <LegalSection title="4. Hukuki Dayanak">
        <p>
          Kişisel verileriniz, KVKK&apos;nın 5. maddesi uyarınca açık rızanıza, sözleşme
          ifasına, meşru menfaatimize ve yasal yükümlülüklerimize dayalı olarak işlenmektedir.
        </p>
      </LegalSection>

      <LegalSection title="5. Kişisel Verilerin Aktarımı">
        <p>
          Verileriniz; hizmet sağlayıcılarımıza (bulut altyapısı, analitik araçlar) ve yasal
          zorunluluk durumlarında yetkili kamu kurumlarına aktarılabilir. Yurt dışına aktarım
          KVKK&apos;nın 9. maddesi kapsamında gerçekleştirilmektedir.
        </p>
      </LegalSection>

      <LegalSection title="6. İlgili Kişi Hakları">
        <p>
          KVKK&apos;nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini
          öğrenme, bilgi talep etme, amacını öğrenme, aktarıldığı üçüncü kişileri öğrenme,
          yanlış işlenmişse düzeltilmesini ve silinmesini isteme haklarına sahipsiniz.
        </p>
      </LegalSection>

      <LegalSection title="7. Başvuru Yolu">
        <p>
          Taleplerinizi{" "}
          <a href="mailto:kvkk@justpublisher.com" className="text-forest underline">
            kvkk@justpublisher.com
          </a>{" "}
          adresine e-posta göndererek iletebilirsiniz. Başvurularınız en geç 30 gün içinde
          yanıtlanacaktır.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
