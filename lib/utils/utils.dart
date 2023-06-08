import 'package:url_launcher/url_launcher.dart';

class Utilty {
  static Future<void> openUrl(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    }
  }

  static Future<void> openMail() => openUrl("mailto:dadahtaufikp14@gmail");

  static Future<void> openMyLocation() =>
      openUrl("https://maps.app.goo.gl/DyqoCaRa2jdNgeUZ8");
  static Future<void> openMyPhoneNo() => openUrl("tel:+62-87871755934");
  static Future<void> openWhatsapp() => openUrl("https://wa.me/87871755934");
}
